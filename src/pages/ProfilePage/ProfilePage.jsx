import { Box, Container, Flex, Text } from "@chakra-ui/react"
import ProfileHeader from "../../components/UserProfile/ProfileHeader"
import ProfilePosts from "../../components/UserProfile/ProfilePosts"
import ProfileTabs from "../../components/UserProfile/ProfileTabs"

const ProfilePage = () => {
  return (
    <>
        <Container maxW={"container.lg"}
        py={5}>

            <Flex 
            py={10}
            px={4}
            pl={{base:4, md:10}}
            maxW={"full"}
            mx={"auto"}
            direction={"column"}>   

                    <ProfileHeader />
                    
            </Flex>

            <Flex
            px={{base:2, sm:4}}
            maxW={"full"}
            mx={"auto"}
            borderTop={'1px solid'}
            borderColor={"whiteAlpha.300"}
            direction={"column"}
            >
                <ProfileTabs />
                <ProfilePosts />
                
            </Flex>
           

        </Container>
      
    </>
  )
}

export default ProfilePage
