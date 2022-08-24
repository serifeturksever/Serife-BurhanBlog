import React from 'react'
import {
    useColorMode,
    Button,
    Flex,
    Box
} from '@chakra-ui/react'
import NextLink from 'next/link'
import styled from '@emotion/styled'

import DarkModeSwitch from '../components/DarkModeSwitch'
import Footer from './Footer'

const Container = ({ children }) => {
    const { colorMode } = useColorMode()
    const bgColor = {
        light: 'white',
        dark: '#171717'
    }

    const color = {
        light: 'black',
        dark: 'white'
    }

    const navHoverBg = {
        light: 'gray.600',
        dark: 'gray.300',
    }

    const StickyNav = styled(Flex)`
        
        `

        const StickyNavContainer = styled(Flex)`
        position: sticky;
        z-index: 10;
        top: 0;
        backdrop-filter: saturate(180%) blur(20px);
        transition: height .5s, line-height .5s;
        width: 100%;
        border-bottom:1px solid lightGray;
        `

    return (
        <>
            <StickyNavContainer>
            <StickyNav
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                maxWidth="800px"
                minWidth="356px"
                width="60%"
                as="nav"
                mx="auto"
            >
                <Box>
                    <NextLink href="/" passHref>
                        <Button as="a" variant="ghost" m={4} p={[1, 2, 4]} _hover={{color:"#ffffff" , backgroundColor: navHoverBg[colorMode] }}>
                            Home
                        </Button>
                    </NextLink>
                    <NextLink href="/blog" passHref>
                        <Button as="a" variant="ghost" m={4} p={[1, 2, 4]} _hover={{color:"#ffffff", backgroundColor: navHoverBg[colorMode] }}>
                            Blog
                        </Button>
                    </NextLink>
                </Box>
                <DarkModeSwitch />
            </StickyNav >
            </StickyNavContainer>
            <Flex
                as="main"
                justifyContent="center"
                flexDirection="column"
                bg={bgColor[colorMode]}
                color={color[colorMode]}
                px={[0, 4, 4]}
                mt={[4, 8, 8]}
                alignItems="center"
            >
                {children}
                {/* <Footer /> */}
            </Flex>
        </>
    )
}

export default Container