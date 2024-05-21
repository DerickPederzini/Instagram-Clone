
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {
    auth,
    firestore,
} from '../firebase/firebase';
import useShowToast from './useShowToast';
import useAuthStore from '../store/authStore';
import { doc, getDoc, getDocs } from 'firebase/firestore';


const useLogin = () => {    

    const [signInWithEmailAndPassword, , loading, error,] = useSignInWithEmailAndPassword(auth);

      const showToast = useShowToast();
      const loginUser = useAuthStore(state => state.login);

      const login = async (inputs) => {
        
        if(!inputs.email || !inputs.password){
            showToast("Error", "Please fill all the fields", "error");
            return;
        }

        try {

          const userCredencial = await signInWithEmailAndPassword(inputs.email, inputs.password)

          if(userCredencial){
            const userRef = doc(firestore, "users", userCredencial.user.uid);
            const userSnapshot = await getDoc(userRef);
            localStorage.setItem("user-info", JSON.stringify(userSnapshot.data()));
            loginUser(userSnapshot.data())
          }

        } catch (error) {
          showToast("Error", error.message, "error");
        }

      }


      return {
        loading,
        error,
        login
    };
   
}

export default useLogin;