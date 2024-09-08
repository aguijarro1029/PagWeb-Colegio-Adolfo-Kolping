import { collection, getDocs, query, where, getFirestore, addDoc, Timestamp, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { app } from './firebase'; // Importa la app inicializada
import { Usuario } from '../Models/Usuario';
import { Post } from '../Models/Post';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";




// Inicializa Firestore
const firestore = getFirestore(app);
const storage = getStorage(app);

// Referencias a las colecciones
export const usuarios = collection(firestore, 'Adolfo Kolping', 'Usuario', '1');
export const postsCollection = collection(firestore, 'Adolfo Kolping', 'Posts', '1');

// Obtener un usuario específico
export const getUser = async (email: string, password: string): Promise<Usuario | null> => {
  try {
    const q = query(usuarios, where('MAIL', '==', email), where('CONTRASENA', '==', password));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      const userData = userDoc.data() as Usuario;
      console.log('Usuario encontrado:', userData);
      return userData;
    } else {
      console.log('Usuario no encontrado o credenciales incorrectas.');
      return null;
    }
  } catch (error) {
    console.error('Error obteniendo el usuario:', error);
    throw new Error('Error obteniendo el usuario');
  }
};
export const createPost = async (post: Post): Promise<void> => {
  try {
    await addDoc(postsCollection, {
      AUTOR: post.AUTOR,
      CONTENIDO: post.CONTENIDO,
      DOCUMENTO: post.DOCUMENTO,
      FECHA: Timestamp.fromDate(post.FECHA), // Convertimos la fecha a Timestamp de Firestore
      URL: post.URL,
      ISPINNED: post.ISPINNED
    });
    console.log('Publicación creada con éxito');
  } catch (error) {
    console.error('Error creando la publicación:', error);
    throw new Error('Error creando la publicación');
  }
};

// Obtener todas las publicaciones desde la base de datos
export const getPosts = async (): Promise<Post[]> => {
  try {
    const querySnapshot = await getDocs(postsCollection);
    const posts: Post[] = [];
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      posts.push({
        id: doc.id, // Aquí añadimos el id del documento
        AUTOR: data.AUTOR,
        CONTENIDO: data.CONTENIDO,
        DOCUMENTO: data.DOCUMENTO,
        FECHA: data.FECHA.toDate(), // Convertimos el Timestamp de Firestore a Date
        URL: data.URL,
        ISPINNED: data.ISPINNED
      });
    });

    return posts;
  } catch (error) {
    console.error('Error obteniendo las publicaciones:', error);
    throw new Error('Error obteniendo las publicaciones');
  }
};

export const deletePost = async (postId: string): Promise<void> => {
  try {
    const postRef = doc(firestore, 'Adolfo Kolping', 'Posts', '1', postId);
    await deleteDoc(postRef);
    console.log('Post eliminado con éxito');
  } catch (error) {
    console.error('Error eliminando el post:', error);
    throw new Error('Error eliminando el post');
  }
};
export const pinPost = async (postId: string, isPinned: boolean): Promise<void> => {
  try {
    const postRef = doc(firestore, 'Adolfo Kolping', 'Posts', '1', postId); // Referencia al documento del post en Firestore

    // Actualizar el campo ISPINNED en el documento
    await updateDoc(postRef, {
      ISPINNED: isPinned,
    });

    console.log(`Post con id ${postId} ha sido ${isPinned ? 'fijado' : 'desfijado'} con éxito.`);
  } catch (error) {
    console.error('Error actualizando el estado de fijado del post:', error);
    throw new Error('Error actualizando el estado de fijado del post');
  }
};
// Función para subir una imagen a Firebase Storage y obtener la URL
export const uploadImage = async (file: File): Promise<string> => {
  if (!file) throw new Error("Archivo no proporcionado");

  const storageRef = ref(storage, `images/${file.name}`);
  const uploadTaskSnapshot = await uploadBytesResumable(storageRef, file);
  const downloadUrl = await getDownloadURL(uploadTaskSnapshot.ref);
  console.log('Imagen subida y disponible en:', downloadUrl);
  return downloadUrl;
};

