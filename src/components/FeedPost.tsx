import { Box, HStack, Avatar, Text, IconButton, Image, Flex } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

interface User {
    name: string;
    avatar: string;
  }
  
  interface FeedPostProps {
    user: User;
    time: string;
    content: string;
    image?: string; // `image` es opcional
  }
const FeedPost = ({ user, time, content, image }:FeedPostProps) => {
  return (
    <Box
      bg="#faf1eb" 
      borderRadius="md"
      p={4}
      borderWidth="1px"
      borderColor="#fd6a01" 
      color="black" 
      mb={4}
    >
      <HStack justifyContent="space-between">
        <HStack spacing={4}>
          <Avatar size="md" name={user.name} src={user.avatar} />
          <Flex align="start" gap={2} alignContent={"center"} textAlign={"center"} alignItems={"center"}>
            <Text fontWeight="bold">{user.name}</Text>
            <Text fontSize="sm" color="gray.700">{time}</Text>
          </Flex>
        </HStack>
        <IconButton
          icon={<FontAwesomeIcon icon={faEllipsisH} />}
          aria-label="Más opciones"
          variant="ghost"
          color="black"
        />
      </HStack>
      <Box mt={4}>
        <Text mb={2}>{content}</Text>
        {image && <Image src={image} alt="Post image" borderRadius="md" />}
      </Box>
    </Box>
  );
};

export default FeedPost;
