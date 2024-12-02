'use client';
import Image from 'next/image';
const GameObject = ({ position, onClick, imageUrl }) => (
  <Image
    src={imageUrl}
    width={150}
    height={150}
    style={{
      position: 'absolute',
      left: `${position.x}px`,
      top: `${position.y}px`,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    }}
    onClick={onClick}
    alt="Game Object"
  />
);
export default GameObject;