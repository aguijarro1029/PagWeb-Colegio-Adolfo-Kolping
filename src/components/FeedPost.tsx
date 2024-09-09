import { Box, HStack, Avatar, Text, IconButton, Image, Flex, Menu, MenuButton, MenuList, MenuItem, useDisclosure, Modal, ModalOverlay, ModalContent, ModalBody, CloseButton } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faTrashAlt, faThumbtack, faUnlink } from "@fortawesome/free-solid-svg-icons";

interface User {
    name: string;
    avatar: string;
}

interface FeedPostProps {
    user: User;
    time: string;
    content: string;
    image?: string;
    videoUrl?: string;
    isPinned: boolean; // Indica si el post está fijado
    onDelete?: () => void;
    onPin?: () => void;
    showMenu?: boolean; // Controla la visibilidad del menú
    postId: string; // ID del post para manejar acciones como eliminar o fijar
}

const FeedPost: React.FC<FeedPostProps> = ({ user, time, content, image, videoUrl, onDelete, onPin, showMenu, isPinned}) => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Chakra UI modal control

  return (
    <Box
      bg={isPinned ? "#fff3e3" : "#faf1eb"} 
      borderRadius="md"
      p={6}
      borderWidth="1px"
      borderColor={isPinned ? "#ff9a3b" : "#fd6a01"} 
      color="black"
      mb={4}
      maxW="full"
      minH="300px"
      boxShadow={isPinned ? "0px 4px 12px rgba(0, 0, 0, 0.1)" : "none"} 
    >
      <HStack justifyContent="space-between" alignItems="center" alignContent="center"> 
        <HStack spacing={3} alignItems="center"> 
          <Avatar size="md" name={user.name} src={user.avatar} />
          <Flex direction="column">
          <Flex alignItems="center">
        <Text fontWeight="bold">{user.name}</Text>
        {isPinned && (
          <Flex alignItems="center" ml={1}>
            <Text
              fontSize="sm"
              color="gray.700"
              style={{
                lineHeight: '1.5' // Ajusta la altura de línea para centrar verticalmente
              }}
            >
              <FontAwesomeIcon
              icon={faThumbtack}
              style={{
                color: '#000',
                fontSize: '14px',
                marginRight: '4px'
              }}
            />
              Importante
              
            </Text>
          </Flex>
        )}
      </Flex>
            <Text fontSize="sm" color="gray.700">
              {time}
            </Text>
          </Flex>
        </HStack>
        {showMenu && ( // Solo muestra el menú si showMenu es true
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<FontAwesomeIcon icon={faEllipsisH} />}
              aria-label="Más opciones"
              variant="ghost"
              color="black"
              size="sm"
              _hover={{ bg: "#ffb987" }}
            />
            <MenuList>
              <MenuItem icon={<FontAwesomeIcon icon={faTrashAlt} />} onClick={onDelete} color="#fd6a01" _hover={{bg: "#ffb987", color:"#000" }}>
                Eliminar
              </MenuItem>
              <MenuItem
                icon={<FontAwesomeIcon icon={isPinned ? faUnlink : faThumbtack} />} // Cambia el ícono dependiendo del estado de fijación
                onClick={onPin}
                _hover={{ bg: "#ffb987" }}
              >                
              {isPinned ? "Desfijar" : "Fijar"} {/* Cambia el texto dependiendo del estado de fijación */}
              </MenuItem>
            </MenuList>
          </Menu>
        )}
      </HStack>
      <Box mt={4}>
        <Text mb={4}>
          {content}
        </Text>
        {image && (
          <>
            <Image
              src={image}
              alt="Post image"
              borderRadius="md"
              mb={videoUrl ? 4 : 0} // Añade espacio inferior solo si también hay video
              maxH="500px" // Estilo más común en redes sociales
              objectFit="cover" // Asegura que la imagen ocupe bien su espacio
              w="100%"
              cursor="pointer" // Indica que la imagen es clickeable
              onClick={onOpen} // Abre el modal al hacer clic en la imagen
            />
            <Modal isOpen={isOpen} onClose={onClose} size="full" closeOnOverlayClick={true}>
              <ModalOverlay />
              <ModalContent bg="transparent" boxShadow="none">
                {/* Botón para cerrar el modal */}
                <CloseButton
                  position="absolute"
                  top="10px"
                  right="10px"
                  color="white"
                  size="lg"
                  onClick={onClose}
                />
                <ModalBody p={0} display="flex" justifyContent="center" alignItems="center">
                  <Image src={image} alt="Post image enlarged" maxH="90vh" objectFit="contain" />
                </ModalBody>
              </ModalContent>
            </Modal>
          </>
        )}
        {videoUrl && (
          <Box mt={image ? 4 : 0} w="100%">
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${new URL(videoUrl).searchParams.get("v")}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                borderRadius: '8px', // Bordes redondeados para armonizar con el diseño
              }}
            ></iframe>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default FeedPost;
