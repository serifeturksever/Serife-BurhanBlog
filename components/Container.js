import React,{useState,useEffect} from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'
import {
    useColorMode,
    Button,
    Flex,
    Box,
    Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  Link
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
        padding: 8px
        `

    return (
        <>
            <StickyNavContainer>
            <StickyNav
                flexDirection={{base: "column", md: "row"}}
                display={{base: "none",md: "flex"}}
                justifyContent="space-between"
                alignItems="center"
                maxWidth="800px"
                minWidth="356px"
                width="60%"
                as="nav"
                mx="auto"
            >
                <Box 
                width={"80%"}
                >
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
                <Box
                mt={4}
                mb={4}
                display={"flex"}
                width={"20%"}
                justifyContent={"center"}
                alignItems={"center"}
                >
                    <DarkModeSwitch/>
                </Box>
            </StickyNav >

            {/* Mobile Nav */}
            <Box flex={1} align="right" display={{ base: 'inline-block', md: 'none' }}>
          <DarkModeSwitch />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>Home</MenuItem>
                </NextLink>
                <NextLink href="/blog" passHref>
                  <MenuItem as={Link}>Blog</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>

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
            </Flex>
        </>
    )
}

export default Container