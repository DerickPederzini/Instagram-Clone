import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Alert, AlertIcon, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useState } from "react";
import UseSignUpWithEmailAndPassword from "../../hooks/useSignUpWithEmailAndPassword";

const Signup = () => {
    const [inputs, setInputs] = useState({
        fullname: "",
        username: "",
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const {loading, error, signup} = UseSignUpWithEmailAndPassword();

    return (
        <>
            <Input
                placeholder="Digit your email"
                fontSize={16}
                type="email"
                className="css-input"
                value={inputs.email}
                size={"sm"}
                onChange={(e) => setInputs({ ...inputs, email: e.target.value })} />

            <Input
                placeholder="Digit your username"
                fontSize={16}
                type="text"
                className="css-input"
                value={inputs.username}
                size={"sm"}
                onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />

            <Input
                placeholder="Digit your Full Name"
                fontSize={16}
                type="text"
                className="css-input"
                values={inputs.fullname}
                size={"sm"}
                onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })} />

            <InputGroup>
                <Input
                    placeholder="Digite your password"
                    fontSize={16}
                    type={showPassword ? "text" : "password"}
                    className="css-input"
                    value={inputs.password}
                    size={"sm"}
                    onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />

                <InputRightElement height={"full"}>

                    <Button variant={"ghost"} size={"sm"} onClick={() => {
                        { !showPassword ? setShowPassword(true) : setShowPassword(false) }
                    }}>

                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}

                    </Button>

                </InputRightElement>
            </InputGroup>

            {error && (
                <Alert status="error" fontSize={13} p={2} borderRadius={4}>
                    <AlertIcon fontSize={13}/>
                    {error.message}
                </Alert>
            )}

            <Button w={"full"} colorScheme={"blue"} fontSize={16} size={"sm"} 
            isLoading={loading}
            onClick={() => signup(inputs)}>
                Sign up
            </Button>


        </>
    )
}

export default Signup
