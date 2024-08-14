import React, { useState, ChangeEvent, DragEvent } from "react";
import { Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Input, Text, Icon, Divider, Button } from "@chakra-ui/react";
import { FaCloudUploadAlt } from "react-icons/fa"; 

interface ImageUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onImageSelect: (image: string) => void; // Callback para manejar la imagen seleccionada
}

const ImageUploadModal: React.FC<ImageUploadModalProps> = ({ isOpen, onClose, onImageSelect }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      setSelectedImage(URL.createObjectURL(event.dataTransfer.files[0]));
    }
  };

  const handleAddImage = () => {
    if (selectedImage) {
      onImageSelect(selectedImage); // Llama al callback para manejar la imagen seleccionada
      onClose(); // Cierra el modal
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent bg="#faf1eb">
        <ModalHeader color="#fd6a01" textAlign="center">Agrega una fotografía</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box 
            border="2px dashed #fd6a01"
            borderRadius="md"
            p={10}
            textAlign="center"
            mb={4}
            cursor="pointer"
            _hover={{ bg: "#fde7d3" }}
            bg={isDragging ? "#fde7d3" : "transparent"}
            onClick={() => document.getElementById('fileInput')?.click()}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <Icon as={FaCloudUploadAlt} boxSize={16} color="#fd6a01" mb={4} />
            <Text fontSize="lg" color="#fd6a01">Arrastra y suelta una foto aquí o</Text>
            <Text fontSize="md" color="gray.600">Haz clic para seleccionarla desde el explorador directamente</Text>
            <Input 
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              display="none"
            />
          </Box>
          {selectedImage && (
            <Box mt={4} textAlign="center">
                <Divider my={4} bg={"black"} orientation="horizontal"/>
              <Text color="#fd6a01">Vista previa:</Text>
              <img src={selectedImage} alt="Preview" style={{ maxWidth: "100%", borderRadius: "8px" }} />
              <Button colorScheme="orange" bg="#fd6a01" borderRadius="full" my={4} onClick={handleAddImage}>
                Agregar
              </Button>
            </Box>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ImageUploadModal;
