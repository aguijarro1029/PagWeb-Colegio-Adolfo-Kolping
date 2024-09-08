import React, { useState, useEffect } from "react";
import { Box, Button, Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from "@chakra-ui/react";

interface VideoLinkModalProps {
  isOpen: boolean;
  onClose: () => void;
  onVideoLinkSubmit: (link: string) => void; // Callback para manejar el enlace del video
}

const VideoLinkModal: React.FC<VideoLinkModalProps> = ({
  isOpen,
  onClose,
  onVideoLinkSubmit,
}) => {
  const [videoLink, setVideoLink] = useState<string>("");

  // Limpia el input cuando el modal se cierra
  useEffect(() => {
    if (!isOpen) {
      setVideoLink("");
    }
  }, [isOpen]);

  const handleLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVideoLink(event.target.value);
  };

  const handleSubmit = () => {
    if (videoLink) {
      onVideoLinkSubmit(videoLink); // Llama al callback para manejar el enlace
      onClose(); // Cierra el modal
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent maxW={"container.sm"}>
        <ModalHeader>Ingresa el enlace del video de YouTube</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            <Input
              placeholder="https://www.youtube.com/watch?v=example"
              value={videoLink}
              onChange={handleLinkChange}
              mb={4}
            />
            <Button colorScheme="orange" bg="#fd6a01" onClick={handleSubmit}>
              Aceptar
            </Button>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default VideoLinkModal;