import React from 'react'
import { Button, ChakraProvider, Flex, Heading } from '@chakra-ui/react'

export function Header(){
    return <Flex height="100vh" >
      <Flex height="50%" backgroundPosition="center" margin="0" backgroundImage="url('https://estaticos-cdn.sport.es/clip/9319193e-63d9-432c-874d-ebeefdd11284_media-libre-aspect-ratio_default_0.jpg')" width="100vw" bgSize="100%" justifyContent="center" alignItems="center">
        <div>
          <Heading fontSize="40px" color="white">Domina el Terreno</Heading>
          <Button bgColor="lightgreen">VER DETALLES</Button>
          <Button bgColor="lightblue">VER VIDEO 📽️</Button>
        </div>
      </Flex>
    </Flex>
}