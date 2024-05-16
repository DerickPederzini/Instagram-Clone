import { Avatar, Box, Flex, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink} from "react-router-dom"

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}> 
        <Flex alignItems={"center"} gap={2}>
            <Avatar name='Derick' size={"md"} src='/profilepic.png' />
            <Box>
                <Text fontSize={12} fontWeight={"bold"}>
                    derick_pdzn
                </Text>
                <Text fontSize={12} fontWeight={"bold"} color={'gray.500'}>
                    derick
                </Text>

            </Box>
        </Flex>

        <Link as={RouterLink}
        to={'/auth'}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        style={{textDecoration:"none"}}
        cursor={"pointer"}
        >
            Log Out
        </Link>
    </Flex>
  )
}

export default SuggestedHeader
