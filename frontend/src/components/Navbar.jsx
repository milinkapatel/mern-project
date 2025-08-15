import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { CiSquarePlus } from "react-icons/ci";
import { FaMoon  } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex h={16} alignItems={"center"} justify="space-between">
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          <Link to={"/"}>Products</Link>
        </Text>
        <HStack spacing={2} alignItems={"center"}>
            <Link to={"/create"}>
            <Button>
                <CiSquarePlus />
            </Button>
            </Link>
            <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <FaMoon /> : <MdOutlineWbSunny /> }
            </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
