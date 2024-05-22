import { Flex, Image, Text } from "@chakra-ui/react"
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth, firestore } from "../../firebase/firebase";
import useShowToast from "../../hooks/useShowToast";
import useAuthStore from "../../store/authStore";
import { doc, getDoc, setDoc } from "firebase/firestore";

const GoogleAuth = ({ prefix }  ) => {

    const [signInWithGoogle, , , error] = useSignInWithGoogle(auth);
    const showToast = useShowToast();
    const userLogin = useAuthStore((state) => state.login);

    const handleGoogleAuth = async () => {

        try {

            const newUser = await signInWithGoogle()

            if(!newUser && error){
                showToast("Error", error.message, "error")
                return;
            }

            const userReference = doc(firestore, "users", newUser.user.uid);
            const userSnapshot = await getDoc(docReference);

            if (userSnapshot.exists) {
                //login
                const userDocument = userSnapshot.data();
                localStorage.setItem("user-info", JSON.stringify(userDocument))
                userLogin(userDocument);
            }else{
                const userDocument = {
                    //sign up
                    uid: newUser.user.uid,
                    email: newUser.user.email,
                    username: newUser.user.email.split("@")[0],
                    fullname: newUser.user.displayName,
                    bio: "",
                    profilePicURL: newUser.user.photoURL,
                    followers: [],
                    following: [],
                    posts: [],
                    createdAt: Date.now(),
                };

                await setDoc(doc(firestore, "users", newUser.user.uid), userDocument);
                localStorage.setItem("user-info", JSON.stringify(userDocument));

                loginUser(userDocument);
            }

            
        } catch (error) {
            showToast("Error", error.message, "error")
        }
    }

    return (
        <>
            <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"} onClick={handleGoogleAuth}>
                <Image src="/google.png" w={5} alt="google logo" />
                <Text mx={'2'} color={"blue.500"}>
                    {prefix} with Google
                </Text>
            </Flex>

        </>
    )
}

export default GoogleAuth
