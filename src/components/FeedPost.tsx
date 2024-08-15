import { Box, HStack, Avatar, Text, IconButton, Image, Flex, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faTrashAlt, faThumbtack } from "@fortawesome/free-solid-svg-icons"; // Agrega los íconos que necesitas

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
    onDelete?: () => void; // Callback para eliminar el post
    onPin?: () => void; // Callback para fijar el post
}
  
const FeedPost = ({ user, time, content, image, videoUrl, onDelete, onPin }: FeedPostProps) => {
  return (
    <Box
      bg="#faf1eb"
      borderRadius="md"
      p={6}
      borderWidth="1px"
      borderColor="#fd6a01"
      color="black"
      mb={4}
      maxW="full"
      minH="300px"
    >
      <HStack justifyContent="space-between" alignItems="center" alignContent="center"> 
        <HStack spacing={3} alignItems="center"> 
          <Avatar size="md" name={user.name} src={user.avatar} />
          <Flex direction="column">
            <Text fontWeight="bold">
              {user.name}
            </Text>
            <Text fontSize="sm" color="gray.700">
              {time}
            </Text>
          </Flex>
        </HStack>
        {/* Menú desplegable con opciones de eliminar y fijar */}
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
          <MenuList >
            <MenuItem icon={<FontAwesomeIcon icon={faTrashAlt} />} onClick={onDelete} color="#fd6a01" _hover={{bg: "#ffb987", color:"#000" }}>
              Eliminar
            </MenuItem>
            <MenuItem icon={<FontAwesomeIcon icon={faThumbtack} />} onClick={onPin} _hover={{bg: "#ffb987" }}>
              Fijar
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
      <Box mt={4}>
        <Text mb={2}>
          {content}
        </Text>
        {image && <Image src={image} alt="Post image" borderRadius="md" />}
        {videoUrl && (
          <Box mt={4}>
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${new URL(videoUrl).searchParams.get("v")}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default FeedPost;
