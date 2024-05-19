import { Avatar, AvatarGroup, Box, Button, Flex, Text, VStack} from '@chakra-ui/react'
import React from 'react'

const ProfileHeader = () => {

  return <Flex 
        gap={{base:4, sm:12}}
        mx={2}
        direction={{base:"column", sm:"row"}}
        >

            <AvatarGroup size={{base:"xl", md:"2xl"}} justifySelf={"center"} alignSelf={"flex-start"} mx={"auto"}>
                <Avatar src='img1.png' alt="User profile pic"/>
            </AvatarGroup>
        
            <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
                <Flex 
                gap={4} 
                direction={{base:'column', sm:"row"}}
                justifyContent={{base:"center", sm:"flex-start"}}
                alignItems={"center"}
                w={"full"}> 

                    <Text fontSize={{base:"sm", md:"lg"}}>
                        derick_pdzn
                    </Text>

                    <Flex gap={4} alignItems={"center"} justifyContent={"center"}>

                        <Button size={{base:"xs", md:"sm"}} bg={"gray.700"}>
                            Edit profile
                        </Button>
                        <Button size={{base:"xs", md:"sm"}} bg={"gray.700"}>
                            View archive
                        </Button>
                    
                    </Flex>

                </Flex>
                
        

                <Flex 
                gap={{base:2, sm:4, md:8}} 
                alignItems={"center"} 

                > 

                    <Text fontSize={{base:"xs", md:"sm"}}>
                        <Text  as="span" fontWeight={"bold"} mr={1}>12</Text>
                        posts
                    </Text>
                    <Text cursor={"pointer"} fontSize={{base:"xs", md:"sm"}}>
                        <Text  as="span" fontWeight={"bold"} mr={1}>134</Text>
                        followers
                    </Text>
                    <Text cursor={"pointer"} fontSize={{base:"xs", md:"sm"}}> 
                        <Text  as="span" fontWeight={"bold"} mr={1}>208</Text>
                        following
                    </Text>

                </Flex>


                <Box my={"12px"}>
                    <Flex flexDirection={"column"}>
                        <Text fontWeight={"bold"} fontSize={14}>
                            Derick Pederzini
                        </Text>
                        <Text fontSize={14} as={"span"} >
                            Sistemas de Informação - FIAP 
                        </Text>
                        <Text fontSize={14} as={"span"} >
                            Viver no mundo das ideias é o mesmo que ser invisível
                        </Text>
                    </Flex>
                </Box>

            </VStack>
            
        </Flex>
}

export default ProfileHeader
