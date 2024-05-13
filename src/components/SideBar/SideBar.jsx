import { Avatar, Box, Flex, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';
import { CreatePostLogo, InstagramLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo } from "../../assets/constants";
import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { TbMessageCircleBolt } from "react-icons/tb";

function SideBar() {

  //Creates a list of icons imported from react

  const sideBarItems = [
    {
      icon: <AiFillHome size={25}/>,
      text: "Home",
      link: "/"
    },
    {
      icon: <SearchLogo/>,
      text: "Search",
    },
    {
      icon: <NotificationsLogo/>,
      text: "Notifications",
    },
    {
      icon: <TbMessageCircleBolt size={25}/>,
      text: "Messages",
    },
    {
      icon: <CreatePostLogo/>,
      text: "Create",
    },
    {
      icon: <Avatar size={"sm"} name="Derick" src=" /profilepic.png"/>,
      text: "Profile",
      link: "/asaprogrammer",
    },

  ];

  //Sidebar component that will be used in almost every page

  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      position={"sticky"}//sticky will behave like a relatively-positioned element until it reaches a specified point 
      //and then starts behaving like a statically-positioned element.
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}//base = mobile, md = medium screen (upwards)
    >
      <Flex //this is the main flex, used for the whole side bar
        direction={"column"}
        gap="10"
        w="full"
        height="full"
      >

        <Link to={"/"} as={RouterLink} pl={2} display={{ base: "none", md: "block" }} cursor={"pointer"}>
          <InstagramLogo />
        </Link>

        <Link to={"/"} as={RouterLink} pl={2} display={{ base: "block", md: "none" }} cursor={"pointer"}
          borderRadius={6}
          _hover={{
            bg: "whiteAplha.200",
          }}
          w={10}>
          <InstagramMobileLogo />
        </Link>

          {/* Showing the icons from the side bar items array */}
          <Flex direction={"column"} gap={5} cursor={"pointer"}>

            {sideBarItems.map((item, index) => (
              <Tooltip 
              key={index}//just so react does not give an error when mapping (null pointer)
              hasArrow 
              label={item.text} 
              placement="right"
              ml={1}
              openDelay={400}//delay when putting mouse above it
              display={{base:"block", md:"none"}}
              >
                  <Link 
                  display={"flex"}
                  to={item.link || null} // you can use conditions inside variable props!
                  as={RouterLink}
                  alignItems={"center"}
                  gap={4}
                  _hover={{bg:"whiteAlpha.400"}}
                  borderRadius={6}
                  p={2}
                  w={{base:10, md:"full"}}//display will only happen if the width covers the entirity of the icon
                  justifyContent={{base:"center", md:"flex-start"}}//flex-start so it goes to the beginning
                  >
                    {/* actual display of both icon and text */}
                    {item.icon}
                    <Box display={{base:"none", md:"block"}}>
                        {item.text}
                    </Box>

                  </Link>              

              </Tooltip>
            ))}

        </Flex>

        {/* The log out icon does not need flex, since it is only one element */}
        <Tooltip 
              hasArrow 
              label={"Log Out"} 
              placement="right"
              ml={1}
              openDelay={400}
              display={{base:"block", md:"none"}}
              >
                  <Link 
                  display={"flex"}
                  to={"/auth"}
                  as={RouterLink}
                  alignItems={"center"}
                  gap={4}
                  _hover={{bg:"whiteAlpha.400"}}
                  borderRadius={6}
                  p={2}
                  w={{base:10, md:"full"}}
                  justifyContent={{base:"center", md:"flex-start"}}
                  marginTop={"auto"}
                  >
                    <BiLogOut size={25} />
                    <Box display={{base:"none", md:"block"}}>
                        Log Out
                    </Box>

                  </Link>              

              </Tooltip>

      </Flex>

    </Box>
  )
}

export default SideBar
