import React from "react";
import { connect } from "react-redux";
import { loginSuccess } from "../../Redux/Actions/loginActions";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

const Login = ({ loginSuccess }) => {
  const handleLogin = () => {
    const user = { id: 1, username: "exampleUser" };
    loginSuccess(user);
    alert("Login");
    console.log(user);
  };

  return (
    // <div>
    //   <h2>Login Page</h2>
    //   <button onClick={handleLogin}>Login</button>
    // </div>
    <>
      <Box
        maxW="400px"
        m="auto"
        p="6"
        // border="1px solid red"
        mt="5rem"
        textAlign="center"
        borderRadius="10px"
        bg="gray.50"
        boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
      >
        <Heading as="h4" size="xl" mb="6" fontFamily='"Arial, sans-serif"'>
          Login Page
        </Heading>

        <FormControl id="email" mb="4" isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter your Email" bg="white" />
        </FormControl>

        <FormControl id="password" mb="4" isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Enter your password" bg="white" />
        </FormControl>

        <Button
          colorScheme="blue"
          onClick={handleLogin}
          width="50%"
          borderRadius="30px"
        >
          Login
        </Button>
      </Box>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginSuccess: (user) => dispatch(loginSuccess(user)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
