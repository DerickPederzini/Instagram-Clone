import { Avatar, Box, Button, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const SuggestedUser = ({name, followers, avatar},) => {

    const [isFollowed, setIsFollowed] = useState(false);
    const [follower, setFollowers] = useState(followers);

    function handleFollow(){

        isFollowed ? setIsFollowed(false) : setIsFollowed(true);

        isFollowed ? setFollowers(follower - 1) : setFollowers(follower + 1);
    }

    return (
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}> 
            <Flex alignItems={"center"} gap={2}>
                <Avatar name='Derick' size={"md"} src={avatar} />
                <Box>
                    <Text fontSize={12} fontWeight={"bold"}>
                        {name}
                    </Text>
                    <Text fontSize={12} fontWeight={"bold"} color={'gray.500'}>
                        {follower} followers
                    </Text>

                </Box>
            </Flex>

            <Text
            bg={"transparent"}
            onClick={handleFollow}
            _hover={{color:"white"}}
            fontSize={13}
            fontWeight={"medium"}
            color={"blue.400"}
            cursor={"pointer"}
            >
                {!isFollowed ? "Follow" : "Unfollow" }
            </Text>
        </Flex>
    )
}

export default SuggestedUser
