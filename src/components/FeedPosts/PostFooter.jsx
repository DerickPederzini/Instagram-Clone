import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text} from '@chakra-ui/react'
import React, { useState } from 'react'
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../assets/constants';

const PostFooter = ({username, isProfilePage}) => {

  let randomLikes = parseInt(Math.random()*5000 + 1);

  const [liked, setLiked] = useState(false);
  const [likes, setLikesCount] = useState(randomLikes);

  const handleLike = () => {

    if(liked){
      setLiked(false);
      setLikesCount(likes - 1);
    }else{
      setLiked(true);
      setLikesCount(likes + 1);
    }

  }

  return (
    <Box my={6} marginTop={"auto"}>

      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={3}>

        <Box 
        onClick={handleLike}
        cursor={"pointer"}
        fontSize={18}>
          {!liked ? (<NotificationsLogo/>) : (<UnlikeLogo/>)}
        </Box>

        <Box cursor={"pointer"} fontSize={18}>
          {<CommentLogo  />}
        </Box>

      </Flex>

      <Text fontSize={"sm"} fontWeight={600}>
        {likes} likes
      </Text>

      {!isProfilePage && (
        <>
          <Text fontSize={"sm"} fontWeight={700}>
          {username}{" "} 
          <Text as={"span"} fontWeight={400}> 
            Feeling good
          </Text> 
        </Text>
  
        <Text 
        color={"gray.500"} 
        cursor={"pointer"}> View all 1000 comments</Text>
        </>
      )}

      <Flex alignItems={"center"} gap={2} justify={"space-between"} w={"full"}>

        <InputGroup>

        <Input placeholder='Add a comment...' variant={"flushed"} fontSize={14}/>

        <InputRightElement>
        
          <Button fontSize={14} color={"blue.500"} fontWeight={600} cursor={"pointer"} _hover={"white"} background={"transparent"}>Post</Button>

        </InputRightElement>

        </InputGroup>

      </Flex>

    </Box>
  )
}

export default PostFooter
