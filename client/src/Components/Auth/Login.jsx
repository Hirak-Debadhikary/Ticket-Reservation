// import React from "react";
// import { connect } from "react-redux";
// import { loginSuccess } from "../../Redux/Actions/loginActions";
// import {
//   Box,
//   Heading,
//   FormControl,
//   FormLabel,
//   Input,
//   Button,
// } from "@chakra-ui/react";

// const Login = ({ loginSuccess }) => {
//   const handleLogin = () => {
//     const user = { id: 1, username: "exampleUser" };
//     loginSuccess(user);
//     alert("Login");
//     console.log(user);
//   };

//   return (
//     <>
//       <Box
//         maxW="400px"
//         m="auto"
//         p="6"
//         // border="1px solid red"
//         mt="5rem"
//         textAlign="center"
//         borderRadius="10px"
//         bg="gray.50"
//         boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
//       >
//         <Heading as="h4" size="xl" mb="6" fontFamily='"Arial, sans-serif"'>
//           Login Page
//         </Heading>

//         <FormControl id="email" mb="4" isRequired>
//           <FormLabel>Email</FormLabel>
//           <Input type="email" placeholder="Enter your Email" bg="white" />
//         </FormControl>

//         <FormControl id="password" mb="4" isRequired>
//           <FormLabel>Password</FormLabel>
//           <Input type="password" placeholder="Enter your password" bg="white" />
//         </FormControl>

//         <Button
//           colorScheme="blue"
//           onClick={handleLogin}
//           width="50%"
//           borderRadius="30px"
//         >
//           Login
//         </Button>
//       </Box>
//     </>
//   );
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     loginSuccess: (user) => dispatch(loginSuccess(user)),
//   };
// };

// export default connect(null, mapDispatchToProps)(Login);

import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../Redux/Actions/loginActions";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

const Login = ({ login, error }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
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
        Login Page
      </Heading>
      {/* {error && <p>{error}</p>} */}
      <form onSubmit={handleSubmit}>
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
            placeholder="Enter your Password"
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
          Login
        </Button>
      </form>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  error: state.auth.error,
});

export default connect(mapStateToProps, { login })(Login);
