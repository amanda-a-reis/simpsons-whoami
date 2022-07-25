import { Box, Button, Image, Select, Text } from "@chakra-ui/react"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { personagensSimpsons, personagens } from "../data"; 
import { calculateDistance } from "../functions/functions";


export const Seletores = () => {

    const [img, setImg] = useState()
    const [nome, setNome] = useState()

    const { register, handleSubmit } = useForm();

    const onSubmit = (dataCombinacao) => {
      const x = Number(dataCombinacao.qualidade)
      const y = Number(dataCombinacao.defeito)
      const combinacao = [x, y]
      const personagem = calculateDistance(personagens, combinacao)
      const person = personagensSimpsons[personagem]
      setImg(person.img)
      setNome(person.nome)
    }

    return (
    <Box display="flex" flexDirection='column' alignItems='center' pt={5} bg="yellow.400" >
        <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Box display='flex' bg="white" padding={10} borderRadius={12}>
            <Select {...register("qualidade")} placeholder="Qualidade">
                <option value={10}>Força</option>
                <option value={9}>Esperteza</option>
                <option value={8}>Bondade</option>
                <option value={7}>Inteligência</option>
                <option value={6}>Lealdade</option>
                <option value={5}>Diversão</option>
                <option value={4}>Responsabilidade</option>
                <option value={3}>Coragem</option>
                <option value={2}>Dedicação</option>
                <option value={0}>Inocência</option>
            </Select>
            <Select {...register("defeito")} placeholder="Defeito">
                <option value={10}>Irresponsabilidade</option>
                <option value={7}>Adicção</option>
                <option value={0}>Perfeccinismo</option>
                <option value={9}>Descuido</option>
                <option value={1}>Rigor</option>
                <option value={4}>Corrupção</option>
                <option value={5}>Maldade</option>
                <option value={8}>Ilusão</option>
                <option value={2}>Burocracia</option>
                <option value={6}>Estress</option>
                <option value={3}>Contradição</option>
            </Select>
            <Button type="submit" w={500} bg="yellow.200" _hover={{backgroundColor: "yellow.400"}} ml={10}>Enviar</Button>
            </Box>
            </form>
        </Box> 
        {
           nome ? (
            <Box display='flex' flexDirection='column' alignItems='center' marginTop={10} objectFit='contain' bg="white" w={950} borderRadius={12}>
                <Text fontSize={20} bg={nome ? "yellow.400" : "white"} padding={5} borderRadius={12} mt={10} w={500} textAlign="center">{nome}</Text>
                <Image src={img} h={600} mt={50}/>
            </Box>
            ) : (
          <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' marginTop={10} objectFit='contain' bg="white" w={1000} borderRadius={12}>
            <Text fontSize={25} padding={10} textAlign="center">Escolha uma qualidade e um defeito que melhor te representam e descubra qual personagem dos Simpsons você seria!</Text>
            <Image src="simpsons.jpeg" h={600} w={1000} />
          </Box>
        )}
    </Box>
    )
}