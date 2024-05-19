import { Button, Modal, ModalBody, ModalContent, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { IoIosMore } from 'react-icons/io'

const ModalPosts = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
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
        </>
    )
}

export default ModalPosts
