import { Avatar, Box, Button, Flex, Text} from '@chakra-ui/react'
import React from 'react'

const ProfileHeader = () => {

  return <Flex flex={"column"} mx={"50px"}>

            <Avatar src='img1.png' size={'2xl'} alt="User profile pic"/>
        
            <Flex direction={"column"}>
                <Flex mx={"50px"} gap={3}> 
                    <Text fontSize={"20px"}>
                        derick_pdzn
                    </Text>
                    
                    <Button size={"sm"} bg={"gray.700"}>
                        Edit profile
                    </Button>
                    <Button size={"sm"} bg={"gray.700"}>
                        View archive
                    </Button>
                    
                </Flex>
                
                <Flex mx={"50px"} my={"12px"} gap={3} justifyContent={"space-between"}>
                    <Text>
                        12 posts
                    </Text>
                    <Text cursor={"pointer"}>
                        134 followers
                    </Text>
                    <Text cursor={"pointer"}>
                        208 following
                    </Text>
                </Flex>

                <Box mx={"50px"} my={"12px"} gap={3}>
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

            </Flex>
            
        </Flex>
}

export default ProfileHeader
