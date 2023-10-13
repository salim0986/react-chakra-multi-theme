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
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Signup = () => {
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
          textAlign={"center"}
          fontSize={"5xl"}
        >
          Video Hub
        </FormLabel>
        <VStack gap={8} alignItems={"center"}>
          <BsFillPersonFill size={"8rem"} />
          <Input color={"purple"} type={"text"} placeholder="Name" p={6} />
          <Input color={"purple"} type={"email"} placeholder="Email" p={6} />
          <Input
            color={"purple"}
            type={"password"}
            placeholder="Password"
            p={6}
          />
          <Button w="full" colorScheme={"purple"}>
            Submit
          </Button>
        </VStack>
        <HStack mt={6} w={"full"} justifyContent={"flex-end"}>
          <Text>Already Signed Up?</Text>
          <Button variant={"link"} colorScheme={"purple"}>
            <Link to="/login">Login</Link>
          </Button>
        </HStack>
      </FormControl>
    </Stack>
  );
};
export default Signup;
