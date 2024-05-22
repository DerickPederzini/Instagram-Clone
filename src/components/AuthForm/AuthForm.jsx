import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react"
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import GoogleAuth from "./GoogleAuth";


const AuthForm = () => {    

    const [isLogin, setIsLogin] = useState(true);

    return (
        <>
            <Box border={"1px solid"} color={"pink.500"} borderRadius={4} padding={5}>

                {/* The difference between stack and flex is that a stack will not 
                occupy the entire width of the container, it will change its size depending
                on what is inside of it*/}
                <VStack spacing={4}>

                    <Image src="/logo.png" h={32} cursor={"pointer"} alt="Instagram Logo" />

                    

                    {isLogin ? <Login /> : <Signup />}

                    {/* ------------------ OR ---------------- TEXT */}
                    <Flex alignItems={"center"} justifyContent={"center"} gap={1} w={"full"} my={4}>
                        <Box flex={2} h={0.5} bg={"pink.500"}/>
                            <Text mx={1} color={"gray.400"} className="text-OR">OR</Text>
                        <Box flex={2} h={0.5} bg={"pink.500"}/>
                    </Flex>

                    <GoogleAuth prefix={isLogin ? "Log in" : "Sign up" } />

                </VStack>
            </Box>

            {/* ---------- Switch between login and signup --------------------*/}

            <Box border={"1px solid gray"} borderRadius={4} padding={5}> 
                <Flex alignItems={'center'} justifyContent={'center'}>
                    <Box mx={2} fontSize={14} className="css-input">
                        {isLogin ? "Don't Have an Account" : "Already Have an Account"}
                    </Box>
                    <Box onClick={() => setIsLogin(!isLogin)} color={"blue.500"}>
                        {isLogin ? "Sign Up" : "Log in"}
                    </Box>
                </Flex>
            </Box>
        </>
    )
}

export default AuthForm
