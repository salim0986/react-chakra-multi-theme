import {
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiOutlineSend } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <Stack
        direction={["column", "column", "row"]}
        px={10}
        py={55}
        w={"full"}
        bgColor={"blackAlpha.900"}
        justifyContent={"space-evenly"}
      >
        <VStack
          justifyContent={"center"}
          py={4}
          px={8}
          borderRight={["none", "none", "1px solid white"]}
        >
          <Heading
            textTransform={"capitalize"}
            color={"white"}
            fontSize={"3xl"}
          >
            Subscribe to get updates
          </Heading>
          <HStack borderBottom={"3px solid white"}>
            <Input
              type="email"
              placeholder="Enter Email Here.."
              p={5}
              border={"none"}
              outline={"none"}
              borderRadius={0}
              _placeholder={{
                color: "purpleAlpha.400",
              }}
            />
            <Button variant={"ghost"} colorScheme={"purple"} size={"sm"}>
              <AiOutlineSend size={"90%"} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          py={4}
          pl={4}
          pr={8}
          borderRight={["none", "none", "1px solid white"]}
          justifyContent={"center"}
        >
          <Heading
            textTransform={"capitalize"}
            color={"white"}
            fontSize={"4xl"}
          >
            video hub
          </Heading>
          <Text color={"white"}>&copy;All rights reserved</Text>
        </VStack>
        <VStack py={4} px={8} alignItems={"center"} justifyContent={"center"}>
          <Heading
            textTransform={"capitalize"}
            color={"white"}
            fontSize={"3xl"}
          >
            Social Media
          </Heading>
          <Button variant={"link"}>
            <Link to="https://instagram.com">Instagram</Link>
          </Button>
          <Button variant={"link"}>
            <Link to="https://youtube.com">Youtube</Link>
          </Button>
          <Button variant={"link"}>
            <Link to="https://github.com/salim0986">Instagram</Link>
          </Button>
        </VStack>
      </Stack>
    </footer>
  );
};
export default Footer;
