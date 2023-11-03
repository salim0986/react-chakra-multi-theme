import { Box, Container, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";

const headingOptions = {
  pos: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  textTransform: "uppercase",
  p: "4",
  size: ["l", "2xl", "3xl"],
};
const Home = () => {
  return (
    <>
      <Box>
        <CarouselComponent />
      </Box>
      <Container maxWidth={"container.lg"} p={5} mt={24}>
        <Stack
          h={"full"}
          alignItems={"center"}
          direction={["column", "column", "row"]}
        >
          <Image src={img5} width={[200, 300]} filter={"hue-rotate(-130deg)"} />
          <Text
            textAlign={"center"}
            letterSpacing={"widest"}
            lineHeight={"190%"}
            p={["4", "16"]}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            modi numquam soluta perferendis aperiam consectetur, saepe
            temporibus error consequuntur quis optio repellendus! Voluptas
            minima voluptatibus eos itaque blanditiis? Quidem reprehenderit ea
            nesciunt, laborum id inventore molestiae excepturi voluptate
            blanditiis magnam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Provident repellat consequatur voluptatum,
            recusandae molestias animi odio commodi nesciunt ducimus ipsam!
          </Text>
        </Stack>
      </Container>
    </>
  );
};

export default Home;

function CarouselComponent() {
  return (
    <Box zIndex={-1}>
      <Carousel
        autoPlay
        centerMode
        centerSlidePercentage={100}
        infiniteLoop
        stopOnHover={false}
        useKeyboardArrows
        interval={1000}
        showArrows={false}
        showThumbs={false}
        showStatus={false}
      >
        <Box>
          <Image src={img1} height={["80vh","100vh"]} objectFit={"cover"} />
          <Heading
            bgColor={"blackAlpha.800"}
            color={"white"}
            {...headingOptions}
          >
            Watch The Future
          </Heading>
        </Box>
        <Box>
          <Image src={img2} height={["80vh","100vh"]} objectFit={"cover"} />
          <Heading
            bgColor={"white"}
            color={"blackAlpha.900"}
            {...headingOptions}
          >
            Future is gaming
          </Heading>
        </Box>
        <Box>
          <Image src={img3} height={["80vh","100vh"]} objectFit={"cover"} />
          <Heading
            bgColor={"blackAlpha.800"}
            color={"white"}
            {...headingOptions}
          >
            Gaming on console
          </Heading>
        </Box>
        <Box>
          <Image src={img4} height={["80vh","100vh"]} objectFit={"cover"} />
          <Heading
            bgColor={"white"}
            color={"blackAlpha.800"}
            {...headingOptions}
          >
            Night life is cool
          </Heading>
        </Box>
      </Carousel>
    </Box>
  );
}
