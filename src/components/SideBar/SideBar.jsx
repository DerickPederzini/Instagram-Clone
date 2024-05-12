import { Box, Flex, Link } from "@chakra-ui/react";

function SideBar() {
  return (
    <Box 
    height={"100vh"}
    borderRight={"1px solid"}
    borderColor={"whiteAlpha.300"}
    py={8}
    position={"sticky"}
    top={0}
    left={0}
    px={{base: 2, md:4 }}
    >
        <Flex 
        direction={"column"} 
        gap="10"
        w="full"
        height="full"
        >
            <Link to={"/"}>
            </Link>


        </Flex>


    </Box>
  )
}

export default SideBar
