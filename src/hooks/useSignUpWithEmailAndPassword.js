import {
    useCreateUserWithEmailAndPassword
} from 'react-firebase-hooks/auth';
import {
    auth,
    firestore
} from '../firebase/firebase';
import {
    doc,
    setDoc
} from "firebase/firestore";
import useShowToast from './useShowToast';
import { useStore } from 'zustand';
import useAuthStore from '../store/authStore';


const UseSignUpWithEmailAndPassword = () => {
    const [
        createUserWithEmailAndPassword,
        ,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const showToast = useShowToast();

    const loginUser = useAuthStore(state => state.login);

    const signup = async (inputs) => {

        if (!inputs.email || !inputs.password || !inputs.username || !inputs.fullname) {
            showToast("Error", "Please Fill All the Fields", "error")
            return;
        }

        try {
            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password)

            if (!newUser && error) {
                showToast("Error", error.message, "error")
                return;
            }
            if (newUser) {
                const userDocument = {
                    uid: newUser.user.uid,
                    email: inputs.email,
                    username: inputs.username,
                    fullname: inputs.fullname,
                    bio: "",
                    profilePicURL: "",
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
    };

    return {
        loading,
        error,
        signup
    };
}

export default UseSignUpWithEmailAndPassword