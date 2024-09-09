import React, { useState, useEffect } from "react";
import { Avatar, Box, Button, Container, Heading, HStack, IconButton, Text, Textarea, useDisclosure, Image, useOutsideClick, useToast } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faImage, faLaughSquint, faVideo } from "@fortawesome/free-solid-svg-icons";
import FeedPosts from "../components/FeedPosts";
import ImageUploadModal from "../components/ImageUploadModal";
import VideoLinkModal from "../components/VideoLinkModal";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import { Usuario } from '../Models/Usuario';
import { Post } from '../Models/Post';
import { createPost, postsCollection } from '../lib/controller';
import { onSnapshot } from "firebase/firestore";
import { uploadImage } from '../lib/controller';


const Novedades: React.FC = () => {
  const [user, setUser] = useState<Usuario | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const toast = useToast(); // Inicializar useToast

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    // Escuchar cambios en tiempo real en la colección de publicaciones
    const unsubscribe = onSnapshot(postsCollection, (snapshot) => {
      const updatedPosts: Post[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        AUTOR: doc.data().AUTOR,
        CONTENIDO: doc.data().CONTENIDO,
        DOCUMENTO: doc.data().DOCUMENTO,
        FECHA: doc.data().FECHA.toDate(),
        URL: doc.data().URL,
        ISPINNED: doc.data().ISPINNED
      }));
      setPosts(updatedPosts);
    });

    // Limpieza del listener cuando el componente se desmonte
    return () => unsubscribe();
  }, []);

  const { isOpen: isImageModalOpen, onOpen: onImageModalOpen, onClose: onImageModalClose } = useDisclosure();
  const { isOpen: isVideoModalOpen, onOpen: onVideoModalOpen, onClose: onVideoModalClose } = useDisclosure();
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const pickerRef = React.useRef(null);

  const [image, setImage] = useState<string | null>(null);
  const [videoLink, setVideoLink] = useState<string | null>(null);
  const [postContent, setPostContent] = useState<string>("");

  useOutsideClick({
    ref: pickerRef,
    handler: () => setIsPickerVisible(false),
  });

  const handleImageSelect = async (file: File) => {
    try {
      const imageUrl = await uploadImage(file);
      setImage(imageUrl);  // Guarda la URL en el estado local
    } catch (error) {
      // Verifica si el error es una instancia de Error
      const errorMessage = error instanceof Error ? error.message : "Error desconocido al subir la imagen";
      toast({
        title: "Error al subir imagen",
        description: errorMessage,
        status: "error",
        duration: 5000,
        isClosable: true
      });
    }
  };
  const handleVideoLinkSubmit = (link: string) => {
    setVideoLink(link);
  };

  const handleImageRemove = () => {
    setImage(null);
  };

  const handleVideoRemove = () => {
    setVideoLink(null);
  };

  const handleEmojiSelect = (emojiData: EmojiClickData) => {
    setPostContent((prevContent) => prevContent + emojiData.emoji);
  };

  const handlePublish = async () => {
    if (user && postContent.trim()) {
      try {
        const newPost: Post = {
          id: "",  // `id` se genera automáticamente por Firestore
          AUTOR: user.NOMBRE,
          CONTENIDO: postContent,
          DOCUMENTO: image || "",
          FECHA: new Date(),
          URL: videoLink || "",  // Usa la URL de la imagen almacenada en el estado
          ISPINNED: false,
        };
        await createPost(newPost);
        setPostContent('');
        setImage(null);
        setVideoLink(null);
        toast({
          title: "Publicación exitosa",
          description: "Tu publicación ha sido creada exitosamente.",
          status: "success",
          duration: 5000,
          isClosable: true
        });
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Error desconocido al publicar";
        toast({
          title: "Error al publicar",
          description: errorMessage,
          status: "error",
          duration: 5000,
          isClosable: true
        });
      }
    }
  };
  
  const sortedPosts = [...posts].sort((a, b) => {
    // Si 'b' está fijado y 'a' no está fijado, 'b' debería aparecer primero
    // Si ambos tienen el mismo estado de fijado, no hay cambio de orden
    return (b.ISPINNED === a.ISPINNED) ? 0 : (b.ISPINNED ? 1 : -1);
  });
  return (
    <Container maxW={"container.2xl"}>
      <Heading as="h1" size="xl" textAlign="center" color="#fd6a01" mt={5}>
        Novedades
      </Heading>
      <Container maxW="container.md" p={4} mt={5}>
        {user && user.ROL === "Administrador" && (
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
              <Box w="full" position="relative">
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
                  value={postContent}
                  onChange={(e) => {
                    e.target.style.height = "auto";
                    e.target.style.height = e.target.scrollHeight + "px";
                    setPostContent(e.target.value); 
                  }}
                />
                {image && (
                  <Box position="relative" mt={4} display="inline-block">
                    <Image src={image} alt="Imagen seleccionada" borderRadius="md" maxHeight="200px" />
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
                {isPickerVisible && (
                   <Box
                    ref={pickerRef}
                    position="absolute"
                    zIndex="popover"
                    mt={2}
                    bg="#faf1eb"
                    borderRadius="md"
                    boxShadow="md"
                    p={3} 
                 >
                   <EmojiPicker
                     onEmojiClick={handleEmojiSelect} width={"100%"} 
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
                  onClick={onImageModalOpen}
                />
                <IconButton
                  icon={<FontAwesomeIcon icon={faLaughSquint} />}
                  aria-label="Añadir emoji"
                  variant="ghost"
                  color="#fd6a01" 
                  _hover={{ bg: "#ffb987", color: "#000"}} 
                  onClick={()=>setIsPickerVisible(!isPickerVisible)}
                />
                <IconButton
                  icon={<FontAwesomeIcon icon={faVideo} />}
                  aria-label="Añadir video"
                  variant="ghost"
                  color="#fd6a01"
                  _hover={{ bg: "#ffb987", color: "#000"}} 
                  onClick={onVideoModalOpen}
                />
              </HStack>
              <Button 
              colorScheme="orange" 
              bg="#fd6a01" 
              borderRadius="full" 
              onClick={handlePublish}
              isDisabled={!postContent.trim()}
              _disabled={{ 
                bg: "orange.200", 
                cursor: "not-allowed", 
                color: "orange.400" 
              }}
              _hover={postContent.trim() ? { bg: "#ffb987", color: "#000" } : {}}
              >
                Publicar
              </Button>
            </HStack>
          </Box>
        )}
      </Container>
      <Text fontSize="2xl" color="#fd6a01" textAlign={"center"} mt={5} mb={2}>
        Publicaciones recientes
      </Text>
      
      {sortedPosts.length > 0 ? (
      <FeedPosts posts={sortedPosts} user={user} />
    ) : (
      <Box
        bg="orange.100"
        borderRadius="md"
        p={4}
        textAlign="center"
        mt={5}
        borderWidth="1px"
        borderColor="orange.300"
      >
        <Text fontSize="lg" color="orange.500">
          Aún no hay publicaciones.
        </Text>
      </Box>
    )}
      <ImageUploadModal isOpen={isImageModalOpen} onClose={onImageModalClose} onImageSelect={handleImageSelect} />

      <VideoLinkModal isOpen={isVideoModalOpen} onClose={onVideoModalClose} onVideoLinkSubmit={handleVideoLinkSubmit} />
    </Container>
  );
};

export default Novedades;
