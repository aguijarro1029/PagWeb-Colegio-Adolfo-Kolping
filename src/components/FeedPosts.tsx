import { Container, SimpleGrid, useToast } from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import { Post } from '../Models/Post';
import { deletePost, pinPost } from '../lib/controller';
import { Usuario } from "../Models/Usuario";
import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";


interface FeedPostsProps {
  posts: Post[];
  user: Usuario | null; 
}

const FeedPosts: React.FC<FeedPostsProps> = ({ posts, user }) => {
  const toast = useToast(); 
  const handleDeletePost = async (postId: string) => {
    try {
      await deletePost(postId);
      console.log(`Post con id: ${postId} eliminado`);
      toast({
        title: "Post eliminado con éxito.",
        description: "Tu publicación ha sido eliminada exitosamente.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position:"top"
      });
    } catch (error) {
      console.error('Error eliminando el post:', error);
      toast({
        title: "Error",
        description: "Hubo un problema al intentar eliminar el post.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position:"top"
      });
    }
  };

  const handlePinPost = async (postId: string, isPinned: boolean) => {
    try {
      const newPinStatus = !isPinned; // Cambia el estado a lo opuesto
      await pinPost(postId, newPinStatus); // Llama a la función para fijar o desfijar el post
      console.log(`Post ${newPinStatus ? 'fijado' : 'desfijado'} con éxito`);
      toast({
        title: `Post ${newPinStatus ? 'fijado' : 'desfijado'} con éxito.`,
        description: `Tu publicación ha sido ${newPinStatus ? 'fijada' : 'desfijada'} exitosamente.`,
        status: "success",
        duration: 5000,
        isClosable: true,
        position:"top"
      });
      // Aquí puedes agregar la lógica para actualizar la lista de posts en la UI después de fijar o desfijar
    } catch (error) {
      console.error('Error fijando o desfijando el post:', error);
      toast({
        title: "Error",
        description: "Hubo un problema al intentar fijar o desfijar el post.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position:"top"
      });
    }
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
            time={formatDistanceToNow(new Date(post.FECHA), { addSuffix: true, locale: es })} // Usa `formatDistanceToNow` para una fecha amigable
            content={post.CONTENIDO}
            image={post.DOCUMENTO} 
            videoUrl={post.URL.includes("youtube.com") ? post.URL : undefined}
            onDelete={() => handleDeletePost(post.id)}
            onPin={() => handlePinPost(post.id, post.ISPINNED)} // Pasa el estado actual de fijación
            showMenu={user?.ROL === "Administrador"} 
            isPinned= {post.ISPINNED}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default FeedPosts;
