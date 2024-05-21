import { Avatar, Box, Button, Flex, Text } from '@chakra-ui/react';
import useLogOut from '../../hooks/useLogOut';
import useAuthStore from '../../store/authStore';
import {Link} from 'react-router-dom'

const SuggestedHeader = () => {

    const { handleLogout, isLoggingOut } = useLogOut()
    const authUser = useAuthStore(state => state.user);

    return (
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
            <Flex alignItems={"center"} gap={2}>

                <Link to={`${authUser.username}`}>
                    <Avatar size={"md"} src={authUser.profilePicURL} />
                </Link>

                <Link to={`${authUser.username}`}>
                    <Box>
                        <Text fontSize={12} fontWeight={"bold"}>
                            {authUser.username}
                        </Text>
                        <Text fontSize={12} fontWeight={"bold"} color={'gray.500'}>
                            {authUser.fullname}
                        </Text>

                    </Box>
                </Link>

            </Flex>

            <Button
                variant={"ghost"}
                background={"transparent"}
                _hover={{ background: "transparent" }}
                size={"xs"}
                fontSize={14}
                fontWeight={"medium"}
                color={"blue.400"}
                cursor={"pointer"}
                isLoading={isLoggingOut}
                onClick={handleLogout}>
                Log Out
            </Button>
        </Flex>
    )
}

export default SuggestedHeader
