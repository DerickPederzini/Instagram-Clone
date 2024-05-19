import { Box, Container, Flex, Grid, Image, Skeleton, SkeletonCircle, VStack, Wrap, WrapItem } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ProfilePost from './ProfilePost';

const ProfilePosts = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false)
        }, 2000)
    }, [])

    return (
        
        <Grid 
        templateColumns={{sm:"repeat(1, 1fr)", md:"repeat(3,1fr)"}}
        gap={1}
        columnGap={1}>
            {isLoading && [1,2,3,4,5,6].map((_,index) => (
          <VStack key={index} gap={4} alignItems={"flex-start"}>
            <Skeleton w={"full"}>
              <Box height={"300px"}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}

        {!isLoading && (
            <>
                                
                <ProfilePost image={'img1.png'} />
                     
                <ProfilePost image={'img2.png'}/>
                     
                <ProfilePost image={'img3.png'}/>
                     
                <ProfilePost image={'img4.png'}/>    
            </>
        )}
        
        </Grid>
    )
}

export default ProfilePosts
