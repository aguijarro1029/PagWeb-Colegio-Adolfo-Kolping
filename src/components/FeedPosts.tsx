import { Container, SimpleGrid } from "@chakra-ui/react";
import FeedPost from "./FeedPost";

const FeedPosts = () => {
  const handleDeletePost = (postId: number) => {
    console.log("Delete post with id:", postId);
    // Aquí puedes manejar la lógica de eliminación del post, como llamar a una API para eliminarlo
  };
  const handlePinPost = (postId: number) => {
    console.log("Pin post with id:", postId);
    // Aquí puedes manejar la lógica de fijar el post
  };
  return (
    <Container maxW={"container.xl"} py={10} px={2}>
      <SimpleGrid columns={[1, 2]} spacing={6}>
        <FeedPost
          user={{
            name: "Administrador",
            avatar: "https://www.example.com/avatar.png",
          }}
          time="1h"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem optio nam ducimus corrupti corporis et saepe odio. Vel iure optio dignissimos esse, suscipit mollitia! Eligendi debitis totam doloribus laudantium atque?"
          image="http://adolfo-kolping.de/wordpress/wp-content/gallery/rundgang/aufstellung01.jpg"
          onDelete={() => handleDeletePost(1)}
          onPin={() => handlePinPost(1)}
        />
        <FeedPost
          user={{
            name: "Administrador",
            avatar: "https://www.example.com/avatar2.png",
          }}
          time="2024/08/07"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem optio nam ducimus corrupti corporis et saepe odio. Vel iure optio dignissimos esse, suscipit mollitia! Eligendi debitis totam doloribus laudantium atque?"
          image="http://adolfo-kolping.de/wordpress/wp-content/gallery/rundgang/grundstufe01.jpg"
          onDelete={() => handleDeletePost(1)}
          onPin={() => handlePinPost(1)}
        />
        <FeedPost
          user={{
            name: "Administrador",
            avatar: "https://www.example.com/avatar3.png",
          }}
          time="2024/08/05"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem optio nam ducimus corrupti corporis et saepe odio. Vel iure optio dignissimos esse, suscipit mollitia! Eligendi debitis totam doloribus laudantium atque?"
          videoUrl="https://www.youtube.com/watch?v=dcw5exHf5aE"
          onDelete={() => handleDeletePost(1)}
          onPin={() => handlePinPost(1)}
        />
      </SimpleGrid>
    </Container>
  );
};

export default FeedPosts;
