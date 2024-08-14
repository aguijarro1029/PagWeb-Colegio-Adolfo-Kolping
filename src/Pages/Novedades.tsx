import React, { useState } from "react";
import { Avatar, Box, Button, Container, Heading, HStack, IconButton, Text, Textarea, useDisclosure, Image } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faImage, faLaughSquint, faVideo } from "@fortawesome/free-solid-svg-icons";
import FeedPosts from "../components/FeedPosts";
import ImageUploadModal from "../components/ImageUploadModal"; // Importa el modal de subida de imagen
import VideoLinkModal from "../components/VideoLinkModal"; // Importa el modal de enlace de video

const Novedades: React.FC = () => {
  const { isOpen: isImageModalOpen, onOpen: onImageModalOpen, onClose: onImageModalClose } = useDisclosure();
  const { isOpen: isVideoModalOpen, onOpen: onVideoModalOpen, onClose: onVideoModalClose } = useDisclosure();
  
  const [image, setImage] = useState<string | null>(null); // Estado para la imagen seleccionada
  const [videoLink, setVideoLink] = useState<string | null>(null); // Estado para el enlace del video
  
  // Maneja la imagen seleccionada desde el modal
  const handleImageSelect = (selectedImage: string) => {
    setImage(selectedImage);
  };

  // Maneja el enlace del video desde el modal
  const handleVideoLinkSubmit = (link: string) => {
    setVideoLink(link);
  };

  // Elimina la imagen seleccionada
  const handleImageRemove = () => {
    setImage(null);
  };

  // Elimina el video seleccionado
  const handleVideoRemove = () => {
    setVideoLink(null);
  };

  return (
    <Container maxW={"container.2xl"}>
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
            <Avatar size="md" name="Usuario" src="https://www.example.com/avatar2.png" />
            <Box w="full">
              <Textarea
                placeholder="Redacta una nueva publicación"
                variant="unstyled"
                resize="none"
                color="black"
                minHeight="40px"
                height="auto"
                overflow="hidden"
                _placeholder={{ color: "gray.600" }} 
                _focus={{ color: "black", caretColor: "black" }}
                onChange={(e) => {
                  e.target.style.height = "auto";
                  e.target.style.height = e.target.scrollHeight + "px";
                }}
              />
              {/* Mostrar la imagen seleccionada */}
              {image && (
                <Box position="relative" mt={4} display="inline-block">
                  <Image src={image} alt="Imagen seleccionada" borderRadius="md" maxHeight="200px" />
                  {/* Botón para eliminar la imagen */}
                  <IconButton 
                    icon={<FontAwesomeIcon icon={faClose} />}
                    position="absolute" 
                    top="4px" 
                    right="4px" 
                    bg="#ec7f33" 
                    color="white" 
                    size="sm" 
                    borderRadius="full"
                    onClick={handleImageRemove}
                    aria-label="Eliminar imagen"
                    _hover={{ bg: "#ffb987", color: "#000"}} 
                  />
                </Box>
              )}
              {/* Mostrar un símbolo si se agregó un video */}
              {videoLink && (
                <Box position="relative" mt={4} bg="#fde7d3" p={4} borderRadius="md">
                  <Text color="gray.450">Video agregado: {videoLink}</Text>
                  <IconButton 
                    icon={<FontAwesomeIcon icon={faClose} />}
                    position="absolute" 
                    top="4px" 
                    right="4px" 
                    bg="#ec7f33" 
                    color="white" 
                    size="sm" 
                    borderRadius="full"
                    onClick={handleVideoRemove}
                    aria-label="Eliminar video"
                    _hover={{ bg: "#ffb987", color: "#000"}} 
                    />
                </Box>
              )}
            </Box>
          </HStack>
          <HStack justifyContent="space-between">
            <HStack spacing={2}>
              <IconButton
                icon={<FontAwesomeIcon icon={faImage} />}
                aria-label="Añadir imagen"
                variant="ghost"
                color="#fd6a01"
                _hover={{ bg: "#ffb987", color: "#000"}} 
                onClick={onImageModalOpen} // Abre el modal al hacer clic
              />
              <IconButton
                icon={<FontAwesomeIcon icon={faLaughSquint} />}
                aria-label="Añadir emoji"
                variant="ghost"
                color="#fd6a01" 
                _hover={{ bg: "#ffb987", color: "#000"}} 
              />
              <IconButton
                icon={<FontAwesomeIcon icon={faVideo} />}
                aria-label="Añadir video"
                variant="ghost"
                color="#fd6a01"
                _hover={{ bg: "#ffb987", color: "#000"}} 
                onClick={onVideoModalOpen} // Abre el modal para ingresar el enlace de video
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

      {/* Modal para subir imágenes */}
      <ImageUploadModal isOpen={isImageModalOpen} onClose={onImageModalClose} onImageSelect={handleImageSelect} />

      {/* Modal para ingresar el enlace del video */}
      <VideoLinkModal isOpen={isVideoModalOpen} onClose={onVideoModalClose} onVideoLinkSubmit={handleVideoLinkSubmit} />
    </Container>
  );
};

export default Novedades;
