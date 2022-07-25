import * as React from "react"
import {
  ChakraProvider,
  Box,
  theme,
} from "@chakra-ui/react"
import { Seletores } from "./components/Seletores"
export const App = () => (
  <ChakraProvider theme={theme}>
    <Box>
      <Seletores />
    </Box>
  </ChakraProvider>
)
