import { Avatar, Box, Button, Container, Heading, HStack, IconButton, Text, Textarea } from "@chakra-ui/react"
import FeedPosts from "../components/FeedPosts"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faLaughSquint, faVideo } from "@fortawesome/free-solid-svg-icons";
const Novedades = () => {
    
  return (
    <Container maxW={"container.lg"}>
        <Heading as="h1" size="xl" textAlign="center" color="#fd6a01" mt={5}>
            Novedades
        </Heading>
        <Container maxW="container.md" p={4} mt={5}>
            <Box
            bg="#faf1eb" 
            borderRadius="md"
            p={4}
            borderWidth="1px"
            borderColor="#fd6a01" 
            color="gray.700" 
            >
            <HStack spacing={4} mb={4}>
                <Avatar size="md" name="Usuario" src="https://icons.veryicon.com/png/o/miscellaneous/icon-icon-of-ai-intelligent-dispensing/login-user-name-1.png" />
                <Textarea
                    placeholder="Redacta una nueva publicación"
                    variant="unstyled"
                    resize="none"
                    color="black" 
                    _placeholder={{ color: "gray.600" }} 
                    _focus={{ color: "black", caretColor: "black" }} 
                />
            </HStack>
            <HStack justifyContent="space-between">
                <HStack spacing={2}>
                <IconButton
                    icon={<FontAwesomeIcon icon={faImage} />}
                    aria-label="Añadir imagen"
                    variant="ghost"
                    color="#fd6a01" 
                />
                <IconButton
                    icon={<FontAwesomeIcon icon={faLaughSquint} />}
                    aria-label="Añadir emoji"
                    variant="ghost"
                    color="#fd6a01" 
                />
                <IconButton
                    icon={<FontAwesomeIcon icon={faVideo} />}
                    aria-label="Añadir video"
                    variant="ghost"
                    color="#fd6a01"
                />
                </HStack>
                <Button colorScheme="orange" bg="#fd6a01" borderRadius="full">
                Publicar
                </Button>
            </HStack>
            </Box>
        </Container>
        <Text fontSize="2xl" color="#fd6a01" textAlign={"center"} mt={5} mb={2}>
            Publicaciones recientes
        </Text>
        <FeedPosts/>
    </Container>
  )
}

export default Novedades