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
                {(filteredBlogPosts) ? <p>{_data.length} articles</p> : <p>0 article</p> }
            </Flex>

            {filteredBlogPosts ? 
            <Grid
            width="75%"
            textAlign="center"
            gridTemplateColumns="auto auto"
            mt={8}
            mb={16}
            gap={10}
        >
            {filteredBlogPosts.map(p => (
                <NextLink href="/" passHref scroll={false}>
                    <GridItem
                        backgroundColor="whiteAlpha.200"
                        textAlign="center"
                        p={1}
                        color="blackAlpha.700"
                        borderRadius="16px"
                        width="100%"
                        height="400px"
                        cursor="pointer"
                        background={"blackAlpha.200"}
                        boxShadow={"10px 10px 25px #F0EDEB"}
                    >
                        sadasd
                    </GridItem>
                </NextLink>
            ))}
        </Grid>
        :
        <Box
        mt={32}
        background="#FDF6E3"
        px={12}
        py={4}
        borderRadius={12}
        >{data.label} hakkında bir post bulunmuyor :(</Box>
        }
        </Container>
    )
}

export default LabeledPosts