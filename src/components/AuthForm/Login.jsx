import { Alert, AlertIcon, Button, Input } from "@chakra-ui/react"
import { useState } from "react";
import useLogin from "../../hooks/useLogin";

const Login = () => {

    const [isLogin, setIsLogin] = useState(true);

    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });

    const {loading, error, login} = useLogin();

    return (
        <>
            <Input
                placeholder="Digit your email"
                fontSize={16}
                type="email"
                className="css-input"
                size={"sm"}
                onChange={(e) => setInputs({ ...inputs, email: e.target.value })} />

            <Input
                placeholder="Digite your password"
                fontSize={16}
                type="password"
                className="css-input"
                size={"sm"}
                onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />

            {error && (
                <Alert status="error" fontSize={13} p={2} borderRadius={4}>
                    <AlertIcon fontSize={13}/>
                    {error.message}
                </Alert>
            )}

            <Button w={"full"} colorScheme={"blue"} fontSize={16} size={"sm"} isLoading={loading} onClick={() => {login(inputs)}} >
                Log in
            </Button>
        </>
    )
}

export default Login
