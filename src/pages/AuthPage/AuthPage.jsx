import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react"
import AuthForm from "../../components/AuthForm/AuthForm"
import { createContext } from "react";
import { useState } from "react";
import "./AuthPage.css"
import { Switch } from "@chakra-ui/react";

export const themeContext = createContext(null);

const AuthPage = () => {

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
  
      setTheme((curr) => (curr === "light" ? "dark": "light"));
  
    }

    return(
        <themeContext.Provider value={{theme, toggleTheme}}>
            <div className="app" id={theme}>
                <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
                    <Container maxW={"container.md"} padding={0}>
                        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>

                            {/* Left Hand Side */}
                            <Box display={{base:"none", md:"block"}}>
                                <Image src="/auth.png" h={650} alt="Phone Image" />
                            </Box>
                
                            {/* Right Hand Side */}
                            <VStack spacing={4} align={"stretch"}>

                                <div className="background-button-color">
                                    <Switch size='lg' onChange={toggleTheme} checked={theme === "light"} colorScheme="cyan"/>
                                </div>

                                <AuthForm />

                                <Box textAlign={"center"} className="GetApp-text">
                                    Get the App
                                </Box>

                                <Flex gap={5} justifyContent={"center"}>

                                    <Image src="/playstore.png" h={10} alt="PlayStore Logo"/>
                                    <Image src="/microsoft.png" h={10} alt="Microsoft Logo"/>

                                </Flex>
                                
                            </VStack>

                        </Flex>
                        
                    </Container>
                </Flex>
            </div>
        </themeContext.Provider>
    )
}

export default AuthPage