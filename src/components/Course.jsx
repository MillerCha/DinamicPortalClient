import { useState } from "react";

export default function Course ({ item}) {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <div
        style={{
          width: '300px',
          height: '400px',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '10px',
          margin: '20px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          color:item.color
        }}
      >
        <img
          src={item.image}
          alt={item.title}
          style={{
            width: '100%',
            height: '50%',
            objectFit: 'cover',
            transition: 'filter 0.3s',
            filter: isHovered ? 'brightness(70%)' : 'brightness(100%)',
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
        <div
          style={{
            backgroundColor: '#f4f4f4',
            padding: '10px',
            height: '50%',
          }}
        >
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      </div>
    );
  }