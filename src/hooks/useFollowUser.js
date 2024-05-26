import { useEffect, useState } from "react";
import useAuthStore from "../store/authStore";
import useUserProfileStore from "../store/userProfileStore";
import useShowToast from "./useShowToast";
import { firestore } from "../firebase/firebase";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { set } from "firebase/database";

//userId is the user being followed or unfollowed
const useFollowUser = (userId) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const authUser = useAuthStore((state) => state.user);
  const setAuthUser = useAuthStore((state) => state.setUser);
  const { userProfile, setUserProfile } = useUserProfileStore();
  const showToast = useShowToast();

  const handleFollow = async () => {
    setIsUpdating(true);

    try {
      const currentUserRef = doc(firestore, "users", authUser.uid);
      const followedUserRef = doc(firestore, "users", userId);

      //update fields without overiding the whole document
      //takes 2 parameters, a reference to the document, and the value to be updated
    await updateDoc(currentUserRef, {
        following : isFollowing ? arrayRemove(userId) : arrayUnion(userId)
        //arrayRemove and arrayUnion are both firebase functions
        //it might not sound like it, but array union does add to an array
    });

    //now, doing the same for the user that is being followed
    //except that we are going to be changing the array being used
    await updateDoc(followedUserRef, {
        followers : isFollowing ? arrayRemove(authUser.uid) : arrayUnion(authUser.uid),
    })

    if(isFollowing){
        //unfollow  
        setAuthUser({
            ...authUser, 
            following : authUser.following.filter(uid => uid !== userId )
        })
        setUserProfile({
            ...userProfile,
            followers: userProfile.followers.filter((uid) => uid !== authUser.uid),
        })
        localStorage.setItem('user-info', JSON.stringify({
            ...authUser, 
            following : authUser.following.filter(uid => uid !== userId )
        }))
        setIsFollowing(false);
    }else {
        //follow
       setAuthUser({
            ...authUser, 
            following : [...authUser.following, userId]
        })
        setUserProfile({
            ...userProfile,
            followers: [...userProfile.followers, authUser.uid]
        })
        localStorage.setItem('user-info', JSON.stringify({
            ...authUser, 
            following : [...authUser.following, userId]
        }))
        setIsFollowing(true);

    }

    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setIsUpdating(false);
    }
  };

  useEffect(() => {
    if (authUser) {
      const isFollowing = authUser.following.includes(userId);
      //checks if current authUser is folowwing the userId
      //includes is a firebase function
      setIsFollowing(isFollowing);
    }
  }, [authUser, userId]);

  return { isUpdating, isFollowing, handleFollow };
};

export default useFollowUser;
