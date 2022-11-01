import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { MoonIcon } from '@chakra-ui/icons'
import { parseISO, format } from 'date-fns'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faAmbulance,
    faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
    useColorMode,
    Heading,
    Text,
    Flex,
    Fade,
    Box,
    Stack,
    Avatar,
    Spinner,
    Button,
    ScaleFade
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

import Container from '../components/Container'
import createPagePath from './helper'

export default function BlogLayout({ children, frontMatter }, posts) {
    const { colorMode } = useColorMode()

    const textColor = {
        light: 'gray.700',
        dark: 'gray.400'
    }

    const faColor = {
        light: "#000000",
        dark: "#ffffff"
    }

    const popupText = {
        light: "#ffffff",
        dark: "#000000"
    }

    const [pagePath, setPagePath] = useState("");
    const [likeCount, setLikeCount] = useState(0);
    const [isLiked, setLiked] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:3000/api/mongodb/allPosts')
            .then((res) => res.json())
            .then((data) => {
                const mongoLikeCount = (data.filter(d => d.slug === frontMatter.slug))[0].likeCount;
                setLikeCount(mongoLikeCount);
                setLoading(false);
            })
    }, [])

    const likePost = async () => {
        setLiked(true);
        setTimeout(()=>{ setLiked(false) },4000)
        setLikeCount(likeCount + 1);
        console.log("likeCount: ", likeCount)
        let _obj = { // likeCount artması arkadan geldiği için obje içinde tekrar arttırıyorum
            "slug": frontMatter.slug,
            "likeCount": likeCount + 1
        }

        const res = await fetch('http://localhost:3000/api/mongodb/likePost', {
            method: 'post',
            body: JSON.stringify(_obj)
        })
    }

    useEffect(() => {
        let routeAsArray = router.asPath.split("/");
        let routeAsString = createPagePath(routeAsArray);
        setPagePath(routeAsString);
    })

    const slug = router.asPath.replace('/blog', '')
    return (
        <Container>
            <Head>
                <title>${slug} - Blog -  Burhan Dündar</title>
            </Head>
            <Stack
                as="article"
                spacing={8}
                justifyContent="center"
                alignItems="flex-start"
                m="0 auto 4rem auto"
                maxWidth="700px"
                w="100%"
                px={2}
            >
                <Flex
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    maxWidth="700px"
                    w="100%"
                >
                    <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
                        {frontMatter.title}
                    </Heading>
                    <Heading position={"fixed"} right={8} top={"20%"} letterSpacing="tight" mb={2} as="h3" size="xl">
                    {isLiked ? 
                    <ScaleFade in={isLiked} initialScale={0.7}>
                        <Box
                        bgGradient={[
                            'linear(to-tr, teal.300, yellow.400)',
                            'linear(to-t, blue.200, teal.500)',
                            'linear(to-b, orange.100, purple.300)',
                          ]}
                        px={8}
                        py={2}
                        borderRadius={8}
                        textColor = '#000000' // {popupText[colorMode]}
                    >Thanks for like 😄</Box> 
                    </ScaleFade>
                    : null}
                    </Heading>
                    <Heading position={"fixed"} right={10} top={"50%"} letterSpacing="tight" mb={2} as="h3" size="xl">
                        {isLoading ? (<p><Spinner /></p>) :
                            <p><Button mr={4} onClick={likePost}>
                                <FontAwesomeIcon
                                    icon={faHeart}
                                    style={{color: faColor[colorMode] }}
                                />
                            </Button>{likeCount}</p>}
                    </Heading>
                    <Heading letterSpacing="tight" mb={2} as="h5" size="sm" color="#6D8299">
                        {pagePath}
                    </Heading>
                    <Flex
                        justify="space-between"
                        align={['initial', 'center']}
                        direction={['column', 'row']}
                        mt={2}
                        w="100%"
                        mb={4}
                    >
                        <Flex align="center">
                            <Avatar
                                size="xs"
                                name={frontMatter.author}
                                src="../images/portrait.jpeg"
                                mr={2}
                            />
                            <Text fontSize="sm" color={textColor[colorMode]}>
                                {frontMatter.by}
                                {frontMatter.author + ' / '}
                                {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
                            </Text>
                        </Flex>
                        <Text fontSize="sm" color="gray.500" minWidth="100px" mt={[2, 0]}>
                            {frontMatter.readingTime.text}
                        </Text>
                    </Flex>

                </Flex>
                {children}
            </Stack>
        </Container>
    )
}