import { useLocation } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import { Flex, Box } from "@chakra-ui/react";

//Instead of adding the sidebarcomponent for every page, I just added it once to the page layout component and wraped its children with it.
//That way, it is possible to have a sidebar component for every page since Page Layout is reutilizable

const PageLayout = ({children}) => {

  const {pathname} = useLocation();

  return (
    <Flex>

        {/* Side bar on the left */}

        {pathname !== '/auth' ? (
        <Box w={{base:"70px", md:"240px"}}>
          <SideBar />
        </Box>) : null}

        {/* The page content on the right */}

        <Box flex={1} w={{base:'calc(100% - 70px)', md:'calc(100% - 240px)'}}>
            {children}
        </Box>
        
    </Flex>
  )
}

export default PageLayout
