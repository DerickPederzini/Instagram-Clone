import { useLocation } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import { Flex, Box, Spinner } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import Navbar from "../../components/Navbar/Navbar";

//Instead of adding the sidebarcomponent for every page, I just added it once to the page layout component and wraped its children with it.
//That way, it is possible to have a sidebar component for every page since Page Layout is reutilizable

const PageLayout = ({children}) => {

  const {pathname} = useLocation();

  const [user, loading] = useAuthState(auth); 
	const canRenderSidebar = pathname !== "/auth" && user;
	const canRenderNavbar = !user && !loading && pathname !== "/auth";

  const checkingUserIsAuth = !user && loading;

  if(checkingUserIsAuth){
    <PageLayoutSpinner />
  }

  return (
    <Flex direction={canRenderNavbar ? "column" : "row" }>

      {canRenderSidebar ? (
				<Box w={{ base: "70px", md: "240px" }}>
					<SideBar />
				</Box>
			  ) : null}
			  {/* Navbar */}
        {canRenderNavbar ? <Navbar /> : null}
        {/* the page content on the right */}
        <Box flex={1} w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }} mx={"auto"}>
          {children}
			  </Box>
        
    </Flex>
  )
}

export default PageLayout

const PageLayoutSpinner = () => {
  return (
    <Flex flexDir={"column"} h={"100vh"} alignItems={"center"} justifyContent={"center"}>
        <Spinner size={"xl"}/>
    </Flex>
  )
}