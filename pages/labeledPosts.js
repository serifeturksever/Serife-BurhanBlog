import React from 'react'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import Container from '../components/Container'
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
    Box
} from '@chakra-ui/react'

function LabeledPosts() {
    const router = useRouter();
    const data = router.query;
    let filteredBlogPosts;
    let _data;
    if (data._posts) {
        _data = JSON.parse(data._posts);

        filteredBlogPosts = _data
            .filter((frontMatter) =>
                frontMatter.label.includes(data.label));
    }

    const { colorMode } = useColorMode()

    const backgroundColor = {
        light: "blackAlpha.200",
        dark: "whiteAlpha.200"
    }

    const noPostBackground = {
        light:"#FDF6C1" ,
        dark: "#E3B04B"
    }

    return (
        <Container>
            <Flex
                width={"60%"}
                alignItems="center"
                justifyContent="space-between"
            >
                <Heading size="md" as="h3" mb={1} fontWeight="medium">
                    {data.label}
                </Heading>
                {(filteredBlogPosts) ? <p>{_data.length} articles</p> : <p>Here is no article</p> }
            </Flex>

            {filteredBlogPosts ? 
            <Grid
            width={{base: "90%",sm: "fit-content",md: "fit-content"}}
            textAlign="center"
            gridTemplateColumns={{base: "auto",sm: "auto auto", md: "auto auto" }}
            mt={8}
            mb={16}
            gap={10}
        >
            {filteredBlogPosts.map(p => (
                <NextLink href={`/blog/${p.slug}`} passHref scroll={false}>
                    <GridItem
                        backgroundColor="whiteAlpha.200"
                        textAlign="left"
                        p={8}
                        borderRadius="16px"
                        width={{base: "100%",sm: "300px",md: "500px"}}
                        height="300px"
                        cursor="pointer"
                        background={backgroundColor[colorMode]}
                        boxShadow={colorMode == "light" ? "10px 10px 25px #F0EDEB" : undefined}
                        display="flex"
                        flexDirection={"column"}
                        justifyContent="space-between"
                    >
                        <Heading>
                            {p.title}
                        </Heading>
                        <article style={{marginTop: 16, marginBottom: 16}}>
                            {p.summary}
                        </article>
                        <NextLink href={`/blog/${p.slug}`}>
                            Devamını Oku &rarr;
                        </NextLink>
                    </GridItem>
                </NextLink>
            ))}
        </Grid>
        :
        <Box
        mt={32}
        background={noPostBackground[colorMode]}
        px={12}
        py={4}
        borderRadius={12}
        >{data.label} hakkında bir post bulunmuyor :(</Box>
        }
        </Container>
    )
}

export default LabeledPosts