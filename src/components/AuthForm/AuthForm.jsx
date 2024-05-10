import { Box, Button, Flex, Image, Input, Text, VStack } from "@chakra-ui/react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const AuthForm = () => {    

    const [isLogin, setIsLogin] = useState(true);

    const [inputs, setInputs] = useState({
        email:"",
        password:"",
        confirmPassword:"",
    });

    const navigate = useNavigate();

    const handleAuth = () => {
        if(!inputs.email || !inputs.password){
            alert("Please fill all fields");
            return;
        }

        navigate("/")
    };

    return (
        <>
            <Box border={"1px solid"} color={"pink.500"} borderRadius={4} padding={5}>
                <VStack spacing={4}>

                    <Image src="/logo.png" h={32} cursor={"pointer"} alt="Instagram Logo" />

                    <Input 
                    placeholder="Digit your email" 
                    fontSize={16} 
                    type="email" 
                    className="css-input" 
                    onChange={(e) => setInputs({...inputs, email: e.target.value})}/>

                    <Input 
                    placeholder="Digite your password" 
                    fontSize={16}
                    type="password" 
                    className="css-input"
                    onChange={(e) => setInputs({...inputs, password: e.target.value})}/>

                    {!isLogin ? (<Input 
                    placeholder="Confirm your password" 
                    fontSize={16}
                    type="password"
                    className="css-input"
                    onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
                    />): null}

                    <Button w={"full"} colorScheme={"blue"} fontSize={16} size={"sm"} onClick={handleAuth}>
                        {/* {onclick} */}
                        {isLogin? "Log in" : "Sign Up"}
                    </Button>

                    {/* ------------------ OR ---------------- TEXT */}
                    <Flex alignItems={"center"} justifyContent={"center"} gap={1} w={"full"} my={4}>
                        <Box flex={2} h={0.5} bg={"pink.500"}/>
                            <Text mx={1} color={"gray.400"} className="text-OR">OR</Text>
                        <Box flex={2} h={0.5} bg={"pink.500"}/>
                    </Flex>

                    <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>
                        <Image src="/public/google.png" w={5} alt="google logo"/>
                        <Text mx={'2'} color={"blue.500"}>
                            Log in with Google
                        </Text>
                    </Flex>

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
