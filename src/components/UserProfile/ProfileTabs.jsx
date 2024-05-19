import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { BsBookmark, BsGrid3X3 } from 'react-icons/bs'
import { ImFilm } from "react-icons/im";
import { IoPersonCircleOutline } from 'react-icons/io5'

const ProfileTabs = () => {
  return (
    <Flex
    w={"full"}
    justifyContent={"center"}
    gap={{base:4, sm:10}}
    textTransform={"uppercase"}
    fontWeight={"bold"}
    >
        <Flex borderTop={"1px solid white"} alignItems={"center"} p={3} gap={1} cursor={"pointer"}>
            <Box fontSize={13}>
                <BsGrid3X3 />
            </Box>
            <Text fontSize={12} display={{base:"none", sm:"block"}}>Posts</Text>
        </Flex>

        <Flex alignItems={"center"} p={3} gap={1} cursor={"pointer"}>
            <Box fontSize={13}>
                <ImFilm />
            </Box>
            <Text fontSize={12} display={{base:"none", sm:"block"}}>Reels</Text>
        </Flex>

        <Flex alignItems={"center"} p={3} gap={1} cursor={"pointer"}>
            <Box fontSize={13}>
                <BsBookmark />
            </Box>
            <Text fontSize={12} display={{base:"none", sm:"block"}}>Saved</Text>
        </Flex>

        <Flex alignItems={"center"} p={3} gap={1} cursor={"pointer"}>
            <Box fontSize={13}>
                <IoPersonCircleOutline />
            </Box>
            <Text fontSize={12} display={{base:"none", sm:"block"}}>Tagged</Text>
        </Flex>

    </Flex>
  )
}

export default ProfileTabs
