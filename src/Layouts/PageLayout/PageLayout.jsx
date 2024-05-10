
import { Flex, Box, Image } from "@chakra-ui/react";

const PageLayout = () => {
  return (
    <Flex>

        <Box>
            <Image src="/public/img1.png" />
        </Box>
        <Box>
            <Text>
                Home
            </Text>
        </Box>

    </Flex>
  )
}

export default PageLayout
