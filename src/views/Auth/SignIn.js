import React, { useEffect, useState } from "react";
// Chakra imports
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Switch,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import signInImage from "../../assets/img/signInImage.png";
import { NavLink } from "react-router-dom";
import axios from "axios";

function SignIn() {
  // Chakra color mode
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.400", "white");
  //sign in
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmitSignIn = (event) => {
    event.preventDefault();
    const formData = { username, password };
    console.log("username", username);
    console.log("password", password);

    axios
      .post(`${process.env.REACT_APP_BACKEND_API}/api/users/sign-in`, formData)
      .then((response) => {
        const data = response.data;
        if (data.status === 1) {
          // lưu item token vào localstorage để dùng
          localStorage.setItem("token", data.token.accessToken);
          localStorage.setItem("username", username);

          setSuccess(true);
        } else {
          alert(response.data.message);
        }
      })
      .catch((error) => {
        console.error(error);
        // alert("An error occurred while signing in");
      });
  };
  if (success) {
    window.location.href = "/";
  }
  return (
    <Flex position="relative" mb="40px">
      <Flex
        h={{ sm: "initial", md: "75vh", lg: "85vh" }}
        w="100%"
        maxW="1044px"
        mx="auto"
        justifyContent="space-between"
        mb="30px"
        pt={{ sm: "100px", md: "0px" }}
      >
        <Flex
          alignItems="center"
          justifyContent="start"
          style={{ userSelect: "none" }}
          w={{ base: "100%", md: "50%", lg: "42%" }}
        >
          <Flex
            direction="column"
            w="100%"
            background="transparent"
            p="48px"
            mt={{ md: "150px", lg: "80px" }}
          >
            <Heading color={titleColor} fontSize="32px" mb="10px">
              Chào mừng trở lại
            </Heading>
            <Text
              mb="36px"
              ms="4px"
              color={textColor}
              fontWeight="bold"
              fontSize="14px"
            >
              Vui lòng nhập tài khoản và mật khẩu để đăng nhập
            </Text>
            <FormControl>
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Tên đăng nhập
              </FormLabel>
              <Input
                borderRadius="15px"
                mb="24px"
                fontSize="sm"
                type="text"
                placeholder="Vui lòng điền tên đăng nhập!"
                size="lg"
                onChange={(e) => setUsername(e.target.value)}
              />
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Mật khẩu
              </FormLabel>
              <Input
                borderRadius="15px"
                mb="36px"
                fontSize="sm"
                type="password"
                placeholder="Vui lòng điền mật khẩu!"
                size="lg"
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormControl display="flex" alignItems="center">
                <Switch id="remember-login" colorscheme="teal" me="10px" />
                <FormLabel
                  htmlFor="remember-login"
                  mb="0"
                  ms="1"
                  fontWeight="normal"
                >
                  Ghi nhớ tài khoản
                </FormLabel>
              </FormControl>
              <Button
                fontSize="10px"
                type="submit"
                bg="teal.300"
                w="100%"
                h="45"
                mb="20px"
                color="white"
                mt="20px"
                _hover={{
                  bg: "teal.200",
                }}
                _active={{
                  bg: "teal.400",
                }}
                onClick={handleSubmitSignIn}
              >
                ĐĂNG NHẬP
              </Button>
            </FormControl>
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              maxW="100%"
              mt="0px"
            >
              <Text color={textColor} fontWeight="medium">
                Chưa có tài khoản?
                {/* <Link
                  to="/auth/signup"
                  color={titleColor}
                  as="span"
                  ms="5px"
                  fontWeight="bold"
                >
                  Đăng ký
                </Link> */}
                <NavLink
                  to="/auth/signup"
                  activeClassName="my-active-link"
                  style={{
                    // color: titleColor,
                    color: "gray",
                    marginLeft: "5px",
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}
                >
                  Đăng ký
                </NavLink>
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Box
          display={{ base: "none", md: "block" }}
          overflowX="hidden"
          h="100%"
          w="40vw"
          position="absolute"
          right="0px"
        >
          <Box
            bgImage={signInImage}
            w="100%"
            h="100%"
            bgSize="cover"
            bgPosition="50%"
            position="absolute"
            borderBottomLeftRadius="20px"
          ></Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export default SignIn;
