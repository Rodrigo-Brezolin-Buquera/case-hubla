import { login } from "@/api";
import { useUnprotectedPage } from "@/hooks/useProtectedPage";
import {
  Box,
  Button,
  CircularProgress,
  Input,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";

const LoginPage = () => {
  useUnprotectedPage();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.value && setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.value && setPassword(event.target.value);
  };

  const sendRequest = async () => {
    setLoading(true);
    await login({email, password})
      .then(async () => {
       await router.push("/home");
      })
      .catch((err) => console.log(err.message))
      .finally(() => setLoading(false));
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      paddingBottom={"10em"}
      justifyContent={"center"}
      minH={"100vh"}
    >
      <>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          p={"1em"}
          mt={"1em"}
          backgroundColor={"green.300"}
          borderRadius={"25px"}
          w={"300px"}
          gap={"1em"}
        >
          <Text fontSize={"xl"}> Desafio Hubla!</Text>
              <Input
                id="email"
                placeholder="Email"
                variant="filled"
                borderRadius={"10px"}
                value={email}
                onChange={handleEmail}
              />

              <Input
                id="password"
                placeholder="Password"
                variant="filled"
                type="password"
                borderRadius={"10px"}
                value={password}
                onChange={handlePassword}
              />

              <Button backgroundColor={"green.100"} onClick={sendRequest}>
                {loading ? (
                  <CircularProgress
                    isIndeterminate
                    color={"green.500"}
                    size="30px"
                  />
                ) : (
                  <Text>Login</Text>
                )}
              </Button>
            </Box>
      </>
    </Box>
  );
};

export default LoginPage;
