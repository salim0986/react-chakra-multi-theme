import React from "react";
import {
  Button,
  VStack,
  Icon,
  useColorMode,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
} from "@chakra-ui/react";
import { MoonIcon } from "@chakra-ui/icons";
import { BiMenuAltLeft } from "react-icons/bi";
import { Link } from "react-router-dom";

const Header = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Box>
      <Button
        zIndex={50}
        size="sm"
        onClick={toggleColorMode}
        colorScheme={"purple"}
        pos={"fixed"}
        top={"4"}
        right={"4"}
      >
        <MoonIcon />
      </Button>
      <DrawerComponent />
    </Box>
  );
};

function DrawerComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        zIndex={50}
        ref={btnRef}
        colorScheme="purple"
        onClick={onOpen}
        size={"sm"}
        pos={"fixed"}
        left={"4"}
        top={"4"}
      >
        <Icon as={BiMenuAltLeft} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Video Hub</DrawerHeader>

          <DrawerBody>
            <VStack alignItems={"flex-start"}>
              <Button variant={"ghost"} colorScheme="purple" onClick={onClose}>
                <Link to="/">Home</Link>
              </Button>
              <Button variant={"ghost"} colorScheme="purple" onClick={onClose}>
                <Link to="/videos">Videos</Link>
              </Button>
              <Button variant={"ghost"} colorScheme="purple" onClick={onClose}>
                <Link to="/videos?category=free">Free Videos</Link>
              </Button>
              <Button variant={"ghost"} colorScheme="purple" onClick={onClose}>
                <Link to="/upload">Upload Video</Link>
              </Button>
            </VStack>
          </DrawerBody>

          <DrawerFooter display={"flex"} justifyContent={"center"} gap={3}>
            <Button colorScheme="purple" onClick={onClose}>
              <Link to="/login">Login</Link>
            </Button>
            <Button onClick={onClose} variant={"outline"} colorScheme="purple">
              <Link to="/register">Signup</Link>
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Header;
