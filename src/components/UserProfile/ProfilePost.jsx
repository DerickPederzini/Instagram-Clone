import { Avatar, Box, Divider, Flex, GridItem, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, VStack, useDisclosure } from '@chakra-ui/react'
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md';
import Comment from '../Comment/Comment';
import PostFooter from '../FeedPosts/PostFooter';

const ProfilePost = ({image}) => {

    const { isOpen, onOpen, onClose} = useDisclosure();


  return (
    <>
        <GridItem
        cursor={"pointer"}
        borderRadius={4}
        overflow={"hidden"}
        border={"1 px solid"}
        borderColor={"whiteAlpha.300"}
        position={"relative"}
        aspectRatio={1/1}
        onClick={onOpen}
        >
            <Flex opacity={0} 
            _hover={{opacity:1}} 
            position={"absolute"}
            top={0}
            left={0}
            right={0} 
            bottom={0} 
            bg={"blackAlpha.700"} 
            transition={"all 0.3s ease"}
            zIndex={1} 
            justifyContent={"center"}
            alignItems={"center"}>

                <Flex alignContent={"center"} justifyContent={"center"} gap={50}>
                    <Flex >
                        <AiFillHeart size={20}/>
                        <Text fontWeight={"bold"} ml={2}>
                            {parseInt(Math.random()*70 + 1)}
                        </Text>
                    </Flex>

                    <Flex>
                        <FaComment size={20}/>
                        <Text fontWeight={"bold"} ml={2}>
                            {parseInt(Math.random()*20 + 1)}
                        </Text>

                    </Flex>

                </Flex>


            </Flex>

            <Image src={image} alt='profile post' w={"100%"} height={"100%"} objectFit={"cover"}/>

        </GridItem>

        <Modal isOpen={isOpen} onClose={onClose}
            isCentered={true}
            size={{base:"3xl", md:"5xl", }}
        >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bg={"black"} >
            <Flex gap={4} w={{base:"90%", sm:"70%", md:"full"}} mx={"auto"}>

                <Box
                borderRadius={4}
                overflow={"hidden"}
                border={"1px solid"}
                borderColor={"whiteAlpha.300"}
                flex={1.5}>

                    <Image src={image} alt='profile post' />

                </Box>

                <Flex flex={1} flexDir={"column"} px={10} display={{base:"none", md:"flex"}}>
                    <Flex alignItems={"center"} justifyContent={"space-between"}>
                        <Flex alignItems={"center"} gap={4}>

                            <Avatar src='/profilepic.png' size={"sm"} name='Derick Pederzini Silva'/>

                            <Text fontWeight={"bold"} fontSize={12}>
                                Derick Pederzini Silva
                            </Text>
                        </Flex>

                        <Box _hover={{bg:"whiteAlpha.300", color:"red.600"}} borderRadius={4} p={1}>
                            <MdDelete size={20} cursor={"pointer"}/>
                        </Box>
                    </Flex> 

                    <Divider my={4} bg={"gray.500"} />

                    <VStack
                    w={"full"}
                    alignItems={"start"}
                    maxH={"350px"}
                    overflowY={"auto"}
                    >
                        <Comment
                            createdAt='1 day ago'
                            username="derick_pdzn"
                            profilePic='/img1.png'
                            text="Dummy images from unsplash"
                        />
                        <Comment
                            createdAt='1 day ago'
                            username="thatguy"
                            profilePic='/img2.png'
                            text="Good pic"
                        />
                        <Comment
                            createdAt='1 day ago'
                            username="thatgirl"
                            profilePic='/img3.png'
                            text="Noice Clone"
                        />


                    </VStack>

                    <Divider my={4} bg={"gray.800"} />

                    <PostFooter isProfilePage={true} />

                </Flex>

            </Flex>

          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ProfilePost
