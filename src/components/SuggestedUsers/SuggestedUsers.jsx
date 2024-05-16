import { Box, Flex, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from './SuggestedUser'

const SuggestedUsers = () => {

    let random = 1;

    return (
        <VStack py={8} px={6} gap={4}>
            
            <SuggestedHeader />

            <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
                <Text fontSize={14} fontWeight={"medium"} color={"gray.500"}>
                    Suggested for you
                </Text>

                <Text fontSize={12} fontWeight={"bold"} _hover={{color:"gray.500"}} cursor={"pointer"}>
                    See all
                </Text>
                
            </Flex>

            <SuggestedUser name="Daniela Ab" followers={parseInt(random*Math.random()*100000)} avatar='img1.png' />
            <SuggestedUser name="Jason Cb" followers={parseInt(random*Math.random()*10000)} avatar='img2.png' />
            <SuggestedUser name="Ilya Ef" followers={parseInt(random*Math.random()*10000000)} avatar='img3.png' />
            
            <Box fontSize={12} color={"gray.500"} mt={5} alignSelf  ={"start"}>
                @ 2024 Build by {" "}
                <Link
                href='https://github.com/DerickPederzini'
                target='_blank'
                color={"blue.500"}
                fontSize={14}
                > Derick Pederzini</Link>
            </Box>

        </VStack>
    )
}

export default SuggestedUsers
