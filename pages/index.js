import React, { useState } from 'react'
import NextLink from 'next/link'
import Head from 'next/head'
import {
    Heading,
    Flex,
    Stack,
    Input,
    Text,
    InputGroup,
    InputRightElement,
    Grid,
    GridItem,
    useColorMode,
    color,
} from '@chakra-ui/react'
import Container from '../components/Container'
import { getAllFilesFrontMatter } from '../lib/mdx'
import BlogPost from '../components/BlogPost'
import { motion } from 'framer-motion';


import { SearchIcon } from '@chakra-ui/icons'

export default function Blog({ posts, topFivePosts }) {

    const { colorMode } = useColorMode()

    const topCtgBtnColor = {
        light: "hsl(205, 47%, 87%)",
        dark: "hsl(205, 47%, 30%)" 
    }

    const topCtgBtnHoverColor = {
        light: "hsl(205, 47%, 75%)",
        dark: "hsl(205, 47%, 34%)" 
    }
    
    const topCtgBtnTxtColor = {
        light: "#000000",
        dark: "#ffffff"
    }

    const popularContentsTxtColor = {
        light: "#000000",
        dark: "#ffffff"
    }

    const [searchValue, setSearchValue] = useState('')

    const filteredBlogPosts = posts
        .sort(
            (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
        )
        .filter((frontMatter) =>
            frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()))

    return (
        <>
            <Head>
                <title>Blog - Şerife & Burhan</title>
            </Head>
            <Container>
                <Stack
                    as="main"
                    spacing={8}
                    justifyContent="center"
                    alignItems="flex-start"
                    m="0 auto 4rem auto"
                    width={{base:"100%",sm:"80%"}}
                >
                    <Flex
                        flexDirection="row"
                        width="100%"
                        justify-content="center"
                    >
                        <Flex
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                            width={{base:"100%",sm:"70%"}}
                            px={4}
                            mr={{base: 0,sm: 8,md: 8,xl: 8}}
                            m={{base: 0}}
                        >
                            <Heading letterSpacing="tight" mb={4} as="h1" size="2xl" w="100%">
                                {/* Blog ({posts.length} posts) */}
                                Tüm Postlar
                            </Heading>
                            <InputGroup mb={4} mr={4} w="100%">
                                <Input
                                    aria-label="Search by title"
                                    placeholder="Search by title"
                                    onChange={(e) => setSearchValue(e.target.value)}
                                />
                                <InputRightElement>
                                    <SearchIcon color="gray.300" />
                                </InputRightElement>
                            </InputGroup>
                            {!filteredBlogPosts.length && 'No posts found :('}
                            {filteredBlogPosts.map((frontMatter) => <BlogPost key={frontMatter.title} {...frontMatter} />)}
                        </Flex>
                        <Flex
                            flexDirection="column"
                            justifyContent="flex-start"
                            display={{base:"none",sm:"block",md:"block",xl: "block"}}
                        >
                            <Heading letterSpacing="tight" mb={2} as="h3" size="xl" color="#D02D66">
                                Top Kategoriler
                            </Heading>

                            <Grid
                                width="100%"
                                textAlign="center"
                                gridTemplateColumns="auto auto auto auto"
                                mt={8}
                                mb={16}
                                gap={2}
                            >
                                <NextLink href={{pathname: "/labeledPosts",query:{label: "Algoritmalar",_posts: JSON.stringify(filteredBlogPosts)}}} passHref scroll={false}>
                                <motion.button
                                    whileHover={{
                                        scale: 1.1
                                    }}
                                >
                                    <GridItem
                                        backgroundColor={topCtgBtnColor[colorMode]}
                                        textAlign="center"
                                        p={1}
                                        color={topCtgBtnTxtColor[colorMode]}
                                        borderRadius="8px"
                                        width="fit-content"
                                        height={10}
                                        fontWeight={500}
                                        cursor="pointer"
                                        _hover={{
                                            backgroundColor: topCtgBtnHoverColor[colorMode],
                                        }}
                                    >
                                        Algoritmalar
                                        </GridItem>
                                </motion.button>
                                </NextLink>

                                <NextLink href={{pathname: "/labeledPosts",query:{label: "css"}}} passHref scroll={false}>
                                <motion.button
                                    whileHover={{
                                        scale: 1.1
                                    }}
                                >
                                    <GridItem
                                        backgroundColor={topCtgBtnColor[colorMode]}
                                        textAlign="center"
                                        p={1}
                                        color={topCtgBtnTxtColor[colorMode]}
                                        borderRadius="8px"
                                        width="fit-content"
                                        height={10}
                                        fontWeight={500}
                                        cursor="pointer"
                                        _hover={{
                                            backgroundColor: topCtgBtnHoverColor[colorMode],
                                        }}
                                    >
                                        css
                                        </GridItem>
                                </motion.button>
                                </NextLink>
                                <NextLink href={{pathname: "/labeledPosts",query:{label: "Javascript"}}} passHref scroll={false}>
                                <motion.button
                                    whileHover={{
                                        scale: 1.1
                                    }}
                                >
                                    <GridItem
                                        backgroundColor={topCtgBtnColor[colorMode]}
                                        textAlign="center"
                                        p={1}
                                        color={topCtgBtnTxtColor[colorMode]}
                                        borderRadius="8px"
                                        width="fit-content"
                                        height={10}
                                        fontWeight={500}
                                        cursor="pointer"
                                        _hover={{
                                            backgroundColor: topCtgBtnHoverColor[colorMode],
                                        }}
                                    >
                                        Javascript
                                        </GridItem>
                                </motion.button>
                                </NextLink>
                                <NextLink href={{pathname: "/labeledPosts",query:{label: "React"}}} passHref scroll={false}>
                                <motion.button
                                    whileHover={{
                                        scale: 1.1
                                    }}
                                >
                                    <GridItem
                                        backgroundColor={topCtgBtnColor[colorMode]}
                                        textAlign="center"
                                        p={1}
                                        color={topCtgBtnTxtColor[colorMode]}
                                        borderRadius="8px"
                                        width="fit-content"
                                        height={10}
                                        fontWeight={500}
                                        cursor="pointer"
                                        _hover={{
                                            backgroundColor: topCtgBtnHoverColor[colorMode],
                                        }}
                                    >
                                        React
                                        </GridItem>
                                </motion.button>
                                </NextLink>
                            </Grid>



                            <Heading letterSpacing="tight" mb={2} as="h3" size="xl" color="#D02D66">
                                Popüler İçerikler
                            </Heading>
                            <Flex
                                flexDirection="column"
                                width="100%"
                                mt={8}
                            >
                                {topFivePosts.map((post) => {
                                    return (
                                        <NextLink href={`blog/${post.slug}`} passHref>
                                            <motion.div
                                            key={post.slug}
                                            style={{
                                                marginBottom: '8px',
                                                fontWeight: 500,
                                                cursor: 'pointer',
                                                color: popularContentsTxtColor[colorMode]
                                            }}
                                        whileHover={{
                                            // color: 'red', // Yazının kendi rengini etkiliyor bu şekilde
                                            scale: 1.1,
                                            x:20
                                        }}
                                        >
                                            &rarr; {post.title} - {post.likeCount} {/* yanına like count da yazılabilir */}
                                        </motion.div>
                                        </NextLink>
                                    )
                                })}
                            </Flex>

                        </Flex>
                    </Flex>
                </Stack>
            </Container>
        </>
    )
}

export async function getStaticProps() {
    const posts = await getAllFilesFrontMatter('blog')
    const res = await fetch("http://localhost:3000/api/mongodb/topFivePosts")
    const json = await res.json()
    return { props: { 
        posts: posts,
        topFivePosts: json
     } }
}

// Blog.getInitialProps = async ({ req }) => {
//     const res = await fetch("http://localhost:3000/api/mongodb/topFivePosts")
//     const json = await res.json()
//     return { topFivePosts: json }
//   }