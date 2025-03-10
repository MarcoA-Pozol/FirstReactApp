import React, { useState, useEffect } from "react";

const ImagesGallery = () => {
    const [images, setImagenes] = useState([
        { src: 'images/landscape1.jpg', alt: 'landscape1', caption: 'Sunset Flowers Field' },
        { src: 'images/landscape2.jpg', alt: 'landscape2', caption: 'Cold River in Valley' },
        { src: 'images/landscape3.jpg', alt: 'landscape3', caption: 'River In The Canyon' },
        { src: 'images/landscape4.jpg', alt: 'landscape4', caption: 'Mountain Down Cascade' }
    ]);
    const [url, setUrl] = useState('');
    const [caption, setCaption] = useState('');
      
    useEffect(() => {
    });
    
    const addImage = () => {
        if (url && caption) {
        setImagenes([...images, { src: url, alt: `Imagen ${images.length + 1}`, caption }]);
        setUrl('');
        setCaption('');
        } else {
        alert('Insert image url and caption please.');
        }
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Galería de imágenes</h1>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="URL de la imagen" />
                <input type="text" value={caption} onChange={(e) => setCaption(e.target.value)} placeholder="Pie de foto" />
                <button onClick={addImage}>Agregar Imagen</button>
            </div>
            <div className="galeria" style={{ display: 'flex', gap: '10px', justifyContent: 'center', margin: '0 auto', maxWidth: '80%' }}>
                {images.map((img, index) => (
                <div key={index}>
                    <img src={img.src} alt={img.alt} width="300" height="250" />
                    <p>{img.caption}</p>
                </div>
                ))}
            </div>
        </div>
    );
};

export default ImagesGallery;