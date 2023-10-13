import {
  Button,
  Center,
  FormControl,
  HStack,
  Input,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { BiUpload } from "react-icons/bi";

const Upload = () => {
  return (
    <Stack
      w={"100vw"}
      h={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <VStack>
        <BiUpload color="#6B46C1" size={"10rem"} />
        <Stack direction={["column", "column", "row"]}>
          <FormControl>
            <Input
              required
              border={"1px solid #6b46c1"}
              type={"file"}
              css={{
                "&::file-selector-button": {
                  width: "calc(100% + 36px)",
                  height: "100%",
                  cursor: "pointer",
                  border: "none",
                  marginLeft: "-16px",
                  backgroundColor: "white",
                  color: "purple",
                },
              }}
            />
          </FormControl>
          <Button colorScheme={"purple"} type={"submit"}>
            Submit
          </Button>
        </Stack>
      </VStack>
    </Stack>
  );
};

export default Upload;
