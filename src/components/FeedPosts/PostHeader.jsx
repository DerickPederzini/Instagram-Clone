import { Avatar, Box, Flex } from '@chakra-ui/react'
import { SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import ModalPosts from './ModalPosts';


const PostHeader = ({username, avatar}) => {

    let weekDay = parseInt(Math.random() * 100) + 1;
    let weekOrYear = weekDay < 52 ? "w" : "y"

    return (
        <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            w={"full"}
            my={2}>

            <Flex alignItems={"center"} gap={2}>

                <SkeletonCircle isLoaded>
                    <Avatar src={avatar} alt={"User profile pic"} size={"sm"} />
                </SkeletonCircle>

                <SkeletonText isLoaded> 

                <Flex fontSize={12} fontWeight={"bold"} gap={"2"}>
                    {username}
                    <Box color={"gray.500"}>
                        • {weekDay > 52 ? parseInt(weekDay / 10) : weekDay} {weekOrYear}
                    </Box>
                </Flex>
                </SkeletonText>
            </Flex>

            <Box>
                <ModalPosts />
            </Box>



        </Flex>

    )
}

export default PostHeader
