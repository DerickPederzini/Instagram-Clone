import { Button, Input } from "@chakra-ui/react"
import { useState } from "react";

const Login = () => {

    const [isLogin, setIsLogin] = useState(true);

    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });

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

            <Button w={"full"} colorScheme={"blue"} fontSize={16} size={"sm"}>
                Log in
            </Button>
        </>
    )
}

export default Login
