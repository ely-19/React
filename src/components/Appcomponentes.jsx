import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

// Componente Tags
const Tags = ({ color, texto }) => {
  return (
    <Stack direction="vertical" gap={2}>
      <Badge bg={color}>{texto}</Badge>
    </Stack>
  );
};

// Componente Header
const Header = ({ titulo }) => {
  return (
    <h1>{titulo}</h1>
  );
};

// Componente Footer
const Footer = () => {
  return (
    <h6>¡Explora en nuestra galería de imágenes la magia de la adopción felina y transforma tu vida con la llegada de un compañero peludo!</h6>
  );
};

export { Tags, Header, Footer };
