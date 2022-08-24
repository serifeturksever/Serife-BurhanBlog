import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Button,
  Box,
  chakra,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalOverlay
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const themeColor = {
  light: "#7F5BD5",
  dark: "#FCD28D",
}

const btnTxtColor = {
  light: "#ffffff",
  dark: "#000000"
}

const modalTxtColor = {
  light: "#000000",
  dark: "#ffffff"
}

function SerifeInfo() {
  
  const { colorMode } = useColorMode()

  const ThanksForWondermYCV = () => (
    <ModalOverlay
      bg='blackAlpha.800'
      backdropFilter='blur(50px) hue-rotate(45deg)'
    />
  )
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<ThanksForWondermYCV />)

  return (

    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      mb={6}
    >
      <Flex flexDirection="column">
        <Box display={{ base: 'flex', sm: 'flex' }} mt={[2, 4]} mb={[2, 4]} flexDirection={{ base: "column", sm: "row" }} alignItems={{ base: "center" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Şerife Türksever
            </Heading>
            <p>Full Stack Web / Swift Developer</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src="/images/Seri.jpeg"
                alt="Profile image"
                borderRadius="full"
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
        </Box>

        <Box
          w="100%"
          fontWeight={400}
          mt={[4, 6]}
          mb={[4, 6]}
        >
          Herkese merhaba 🖐, ben Şerife Türksever. Ege Üniversitesi bilgisayar mühendisliği dördüncü sınıftayım.
          2020 Ocaktan beri Günenç teknolojide full stack developer olarak çalışmaktayım.İş dışında swift öğreniyorum
          ve kendim bağımsız projeler yapıyorum.
        </Box>
        <Heading size="md" as="h3" mb={1} fontWeight="medium" textDecoration={"underline"} cursor="pointer" _hover={{ color: themeColor[colorMode] }}>
          Hobilerim
        </Heading>
        <Box mb={4}>Gezmek,gitar çalmak,voleybol oynamak</Box>

        <Heading size="md" as="h3" mb={1} fontWeight="medium" textDecoration={"underline"} cursor="pointer" _hover={{ color: themeColor[colorMode] }}>
          Tecrübelerim
        </Heading>
        <Box mb={4}>Bulunduğum Şirkette 2 yıl boyunca html,css ve javascript temelli uygulamalar yaptık.Mobil uygulamalarımızda
          cordova'yı kullandık. Uygulamalarımızın tamamında <b>microservice</b> mimarisini kullandık.
          Bunlar dışında android ile <em>Friender</em> ismini verdiğimiz chat uygulaması oluşturduk ve dışarıdan aldığımız işler oldu.
        </Box>

        <Box align="center" my={4}>
          <NextLink href="/" passHref scroll={false}>
            <Button 
            onClick={() => {
              setOverlay(<ThanksForWondermYCV />)
              onOpen()
            }}
            rightIcon={<ChevronRightIcon />} style={{ color: btnTxtColor[colorMode], backgroundColor: themeColor[colorMode] }}>
              Cv'mi inceleyin
            </Button>
          </NextLink>
        </Box>

      </Flex>


      {/* CV MODAL CONTENT */}
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent color={modalTxtColor[colorMode]}>
          <ModalHeader>Çok Yakında Sizinle 😄</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>CV'mi merak ettiğin için çok teşekkürler 🐶🥹🖐💙 En yakın zamanda CV'mizi sizinle paylaşacağız.</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Kapat</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </motion.div>


  )
}

export default SerifeInfo
