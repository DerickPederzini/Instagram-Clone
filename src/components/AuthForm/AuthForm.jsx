import { Box, Button, Flex, Image, Input, Text, VStack } from "@chakra-ui/react"
import { useState } from "react";


const AuthForm = () => {    

    const [isLogin, setIsLogin] = useState(true);

    return (
        <>
            <Box border={"1px solid"} color={"pink.500"} borderRadius={4} padding={5}>
                <VStack spacing={4}>

                    <Image src="/logo.png" h={32} cursor={"pointer"} alt="Instagram Logo" />

                    <Input placeholder="Digit your email" fontSize={16} type="email" className="css-text"/>
                    <Input placeholder="Digite your password" fontSize={16}type="password" className="css-text"/>

                    {!isLogin ? (<Input 
                    placeholder="Confirm your password" 
                    fontSize={16}
                    type="password"
                    />): null}

                    <Button w={"full"} colorScheme={"blue"} fontSize={16}>

                        {/* {onclick} */}
                        {isLogin? "Login" : "Sign Up"}
                    </Button>

                    {/* ------------------ OR ---------------- TEXT */}
                    <Flex alignItems={"center"} justifyContent={"center"} gap={1} w={"full"} my={4}>

                        <Box flex={2} h={0.5} bg={"pink.500"}/>
                            <Text mx={1} color={"gray.400"} className="text-OR">OR</Text>
                        <Box flex={2} h={0.5} bg={"pink.500"}/>

                    </Flex>

                </VStack>
            </Box>
        </>
    )
}

export default AuthForm
