import { Box, Image } from "@chakra-ui/react"
import PostFooter from "./PostFooter"
import PostHeader from "./PostHeader"

const FeedPost = ({img, username, avatar}) => {
  return (
    <>
      <PostHeader username={username} avatar={avatar}/>

      <Box  borderRadius={6} overflow={"hidden"}>
        <Image src={img} alt="user profile pic"/>
      </Box>

      <PostFooter username={username} isProfilePage={false}/>
    
    </>
  )
}

export default FeedPost
