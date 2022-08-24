import { useColorMode, IconButton, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { AnimatePresence, motion } from 'framer-motion'

const DarkModeSwitch = () => {
  const { toggleColorMode } = useColorMode()
  const iconColor = {
    light: 'black',
    dark: 'white'
  }
  return (
    // <IconButton
    //     aria-label="Toggle dark mode"
    //     icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
    //     onClick={toggleColorMode}
    //     color={iconColor[colorMode]}
    // />
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label="Toggle theme"
          colorScheme={useColorModeValue('purple', 'orange')}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  )
}

export default DarkModeSwitch