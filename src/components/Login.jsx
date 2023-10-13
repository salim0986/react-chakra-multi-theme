import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      minH={"100vh"}
      w={"100vw"}
    >
      <FormControl w={["60%", "50%", "30%"]}>
        <FormLabel
          textTransform={"capitalize"}
          fontSize={["3xl", "3xl", "5xl"]}
        >
          Welcome Back
        </FormLabel>
        <VStack gap={8} alignItems={"center"}>
          <Input color={"purple"} type={"email"} placeholder="Email" p={6} />
          <Input
            color={"purple"}
            type={"password"}
            placeholder="Password"
            p={6}
          />
          <Button alignSelf={"flex-end"} variant={"link"} colorScheme="purple">
            <Link to="/forgotPassword">Forgot Password?</Link>
          </Button>
          <Button w="full" colorScheme={"purple"}>
            Submit
          </Button>
        </VStack>
        <HStack mt={6} w={"full"} justifyContent={"flex-end"}>
          <Text>Not registerd?</Text>
          <Button variant={"link"} colorScheme={"purple"}>
            <Link to="/signup">Login</Link>
          </Button>
        </HStack>
      </FormControl>
    </Stack>
  );
};
export default Login;
