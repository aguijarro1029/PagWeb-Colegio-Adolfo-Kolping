import { Container, SimpleGrid } from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import { Post } from '../Models/Post';
import { deletePost } from '../lib/controller';
import { Usuario } from "../Models/Usuario";

interface FeedPostsProps {
  posts: Post[];
  user: Usuario | null; 
}

const FeedPosts: React.FC<FeedPostsProps> = ({ posts, user }) => {
  const handleDeletePost = async (postId: string) => {
    try {
      await deletePost(postId);
      console.log(`Post con id: ${postId} eliminado`);
      // Aquí puedes agregar la lógica para actualizar la lista de posts en la UI después de eliminar
    } catch (error) {
      console.error('Error eliminando el post:', error);
    }
  };

  const handlePinPost = (postId: string) => {
    console.log("Pin post with id:", postId);
    // Aquí puedes manejar la lógica de fijar el post
  };

  return (
    <Container maxW={"container.xl"} py={10} px={2}>
      <SimpleGrid columns={[1, 2]} spacing={6}>
        {posts.map((post) => (
          <FeedPost
            key={post.id} // Usa `id` como la clave
            postId={post.id} // Pasa el `id` para manejar acciones
            user={{
              name: post.AUTOR, 
              avatar: "https://www.example.com/avatar.png",
            }}
            time={new Date(post.FECHA).toLocaleString()} 
            content={post.CONTENIDO}
            image={post.URL} 
            videoUrl={post.URL.includes("youtube.com") ? post.URL : undefined}
            onDelete={() => handleDeletePost(post.id)}
            onPin={() => handlePinPost(post.id)}
            showMenu={user?.ROL === "Administrador"} 
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default FeedPosts;
