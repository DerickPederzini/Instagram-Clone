import { Avatar, Box, Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import { IoIosMore } from "react-icons/io";
import HeaderModel from '../Modals/PostHeaderModal/HeaderModel';
import { useState } from 'react';


const PostHeader = () => {

    let weekDay = parseInt(Math.random() * 100) + 1;
    let weekOrYear = weekDay < 52 ? "w" : "y"

    const { isOpen, onOpen, onClose } = useDisclosure()



    return (
        <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            w={"full"}
            my={2}>

            <Flex alignItems={"center"} gap={2}>
                <Avatar src='/img1.png' alt={"User profile pic"} size={"sm"} />
                <Flex fontSize={12} fontWeight={"bold"} gap={"2"}>
                    Woman
                    <Box color={"gray.500"}>
                        • {weekDay > 52 ? parseInt(weekDay / 10) : weekDay} {weekOrYear}
                    </Box>
                </Flex>
            </Flex>

            <Box>
                <Button bg={"transparent"} onClick={onOpen}>
                    <IoIosMore size={25} cursor={"pointer"} />
                </Button>

                    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} isCentered>
                        <ModalOverlay />
                        <ModalContent bg={"white"} flex={1}>
                            <ModalBody fontSize={14} textColor={"black"} textAlign={"center"} w={"full"}>
                                
                                <Text textColor={"red"} fontWeight={"bold"} borderBottom={"2px solid"} 
                                borderColor={"gray.300"} padding={"12px 0px 12px"} cursor={"pointer"}>Report</Text>

                                <Text textColor={"red"} fontWeight={"bold"} borderBottom={"2px solid"} 
                                borderColor={"gray.300"} padding={"12px 0px 12px"} cursor={"pointer"}>Unfollow</Text>

                                <Text borderBottom={"2px solid"} borderColor={"gray.300"} 
                                padding={"12px 0px 12px"} cursor={"pointer"}>Add to favourites</Text>

                                <Text borderBottom={"2px solid"} borderColor={"gray.300"} 
                                padding={"12px 0px 12px"} cursor={"pointer"}>Go to Post</Text>

                                <Text borderBottom={"2px solid"} borderColor={"gray.300"} 
                                padding={"12px 0px 12px"} cursor={"pointer"}>Share To...</Text>

                                <Text borderBottom={"2px solid"} borderColor={"gray.300"}
                                padding={"12px 0px 12px"} cursor={"pointer"}>Copy Link</Text>

                                <Text borderBottom={"2px solid"} borderColor={"gray.300"} 
                                padding={"12px 0px 12px"} cursor={"pointer"}>Embed</Text>

                                <Text borderBottom={"2px solid"} borderColor={"gray.300"} 
                                padding={"12px 0px 12px"} cursor={"pointer"}>About this Account</Text>

                                <Text borderBottom={"2px solid"} borderColor={"gray.300"} 
                                padding={"12px 0px 12px"} cursor={"pointer"}>Close</Text>

                            </ModalBody>
                        </ModalContent>
                    </Modal>
            </Box>



        </Flex>

    )
}

export default PostHeader
