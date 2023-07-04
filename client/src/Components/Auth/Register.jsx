// // import React from "react";

// // const Register = () => {
// //   return (
// //     <div>
// //       <h1>Register</h1>
// //     </div>
// //   );
// // };

// // export default Register;

// import React from "react";
// import { connect } from "react-redux";
// import { signupSuccess } from "../../Redux/Actions/signupActions";

// const Register = ({ signupSuccess }) => {
//   const handleSignup = () => {
//     const user = { id: 1, username: "exampleUser" };
//     signupSuccess(user);
//     alert("Signup");
//     console.log(user);
//   };

//   return (
//     <>
//       <h2>Signup Page</h2>
//       <button onClick={handleSignup}>Signup</button>
//     </>
//   );
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     signupSuccess: (user) => dispatch(signupSuccess(user)),
//   };
// };

// export default connect(null, mapDispatchToProps)(Register);

import React from "react";
import { connect } from "react-redux";
import { signupSuccess } from "../../Redux/Actions/signupActions";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

const Register = ({ signupSuccess }) => {
  const handleSignup = () => {
    const user = { id: 1, username: "exampleUser" };
    signupSuccess(user);
    alert("Signup");
    console.log(user);
  };

  return (
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
        Signup Page
      </Heading>

      <FormControl id="name" mb="4" isRequired>
        <FormLabel>Name</FormLabel>
        <Input type="text" placeholder="Enter your name" bg="white" />
      </FormControl>

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
        onClick={handleSignup}
        width="50%"
        borderRadius="30px"
      >
        Signup
      </Button>
    </Box>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signupSuccess: (user) => dispatch(signupSuccess(user)),
  };
};

export default connect(null, mapDispatchToProps)(Register);
