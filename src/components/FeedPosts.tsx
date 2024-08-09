import { Container } from "@chakra-ui/react";
import FeedPost from "./FeedPost";

const FeedPosts = () => {
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      <FeedPost
        user={{
          name: "Administrador",
          avatar: "https://www.example.com/avatar.png",
        }}
        time="1h"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem optio nam ducimus corrupti corporis et saepe odio. Vel iure optio dignissimos esse, suscipit mollitia! Eligendi debitis totam doloribus laudantium atque?"
        image="http://adolfo-kolping.de/wordpress/wp-content/gallery/rundgang/aufstellung01.jpg"
      />
      <FeedPost
        user={{
          name: "Administrador",
          avatar: "https://www.example.com/avatar2.png",
        }}
        time="2024/08/07"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem optio nam ducimus corrupti corporis et saepe odio. Vel iure optio dignissimos esse, suscipit mollitia! Eligendi debitis totam doloribus laudantium atque?"
        image="http://adolfo-kolping.de/wordpress/wp-content/gallery/rundgang/grundstufe01.jpg"
      />
      <FeedPost
        user={{
          name: "Administrador",
          avatar: "https://www.example.com/avatar3.png",
        }}
        time="2024/08/05"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem optio nam ducimus corrupti corporis et saepe odio. Vel iure optio dignissimos esse, suscipit mollitia! Eligendi debitis totam doloribus laudantium atque?"
        
      />
    </Container>
  );
};

export default FeedPosts;
