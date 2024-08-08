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
    videoUrl?:string;
  }
const FeedPost = ({ user, time, content, image, videoUrl  }:FeedPostProps) => {
  return (
    <Box
      bg="#faf1eb" 
      borderRadius="md"
      p={7}
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
