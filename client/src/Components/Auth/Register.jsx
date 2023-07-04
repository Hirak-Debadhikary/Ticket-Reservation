import React, { useState } from "react";
import { connect } from "react-redux";
import { signup } from "../../Redux/Actions/signupActions";

import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

const Register = ({ signup, error }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(formData);
  };

  return (
    <Box
      maxW="400px"
      m="auto"
      p="6"
      mt="5rem"
      textAlign="center"
      borderRadius="10px"
      bg="gray.50"
      boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
    >
      <Heading as="h4" size="xl" mb="6" fontFamily='"Arial, sans-serif"'>
        Signup Page
      </Heading>

      <form onSubmit={handleSubmit}>
        <FormControl id="name" mb="4" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            placeholder="Enter your name"
            bg="white"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl id="email" mb="4" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="Enter your Email"
            bg="white"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl id="password" mb="4" isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="Enter your password"
            bg="white"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </FormControl>

        <Button
          type="submit"
          colorScheme="blue"
          width="50%"
          borderRadius="30px"
        >
          Signup
        </Button>
      </form>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  error: state.auth.error,
});

export default connect(mapStateToProps, { signup })(Register);
