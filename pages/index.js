import React, { useState } from 'react'
import Head from 'next/head'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Button,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Container from '../components/Container'

export default function Index() {

  const boxBackground = {
    light: 'blackAlpha.200',
    dark: 'whiteAlpha.200'
  }

  return (
    <Container>
      <Stack>
        <Flex>Welcome To Our Blog Page</Flex>
        <Flex>2</Flex>
      </Stack>
    </Container>
  )
}