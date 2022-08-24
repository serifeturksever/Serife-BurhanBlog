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
import BurhanInfo from '../components/BurhanInfo'
import SerifeInfo from '../components/SerifeInfo'

export default function Index() {

  const { colorMode } = useColorMode()
  const [activeDeveloper, setActiveDeveloper] = useState("ŞerifeTürksever");
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }

  const boxBackground = {
    light: 'blackAlpha.200',
    dark: 'blackAlpha.700'
  }

  const chooseDeveloper = (developerName) => {
    if (developerName == "ŞT") {
      setActiveDeveloper("ŞerifeTürksever")
    } else if (developerName == "BD") {
      setActiveDeveloper("BurhanDündar")
    }
  }

  return (
    <Container>
      <Stack
        w={{ base: "100%", sm: "750px" }}
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Flex>
            <Button
              bg={boxBackground[colorMode]}
              m={{ base: 2, sm: 8 }}
              onClick={() => chooseDeveloper("ŞT")}
            >
              Şerife Türksever
            </Button>
            <Button
              bg={boxBackground[colorMode]}
              m={{ base: 2, sm: 8 }}
              onClick={() => chooseDeveloper("BD")}
            >
              Burhan Dündar
            </Button>
          </Flex>

          <Flex
            padding={8}
            m={4}
            justifyContent="center"
            bg={boxBackground[colorMode]}
            borderRadius={12}
          >            
            {activeDeveloper == "ŞerifeTürksever" ? <SerifeInfo /> : <BurhanInfo />}
          </Flex>
        </Flex>
      </Stack>
    </Container>
  )
}