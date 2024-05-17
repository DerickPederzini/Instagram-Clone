import { Box, Container, Flex } from "@chakra-ui/react"
import ProfileHeader from "../../components/UserProfile/ProfileHeader"

const ProfilePage = () => {
  return (
    <>
        <Container maxW={"container.lg"}>

            <Flex 
            gap={20} 
            direction={"column"}>

                <Box flex={2} py={10} borderBottom={"2px solid"} borderColor={"gray.700"}>
                    <ProfileHeader />
                </Box>
            
                <Box flex={2} py={10}>
                    a
                </Box>
            </Flex>

        </Container>
      
    </>
  )
}

export default ProfilePage
