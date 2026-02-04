import React, { useEffect } from 'react';

export default function FbComments() {
  useEffect(() => {
    // Definimos la función de carga
    const loadFB = () => {
      if (window.FB) {
        window.FB.XFBML.parse();
      } else {
        const script = document.createElement('script');
        script.id = 'facebook-jssdk';
        // Agregamos el parámetro &xfbml=1 para que escanee la página
        script.src = "https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v18.0&appId=1555483722403051";
        script.async = true;
        script.defer = true;
        script.crossOrigin = 'anonymous';
        document.body.appendChild(script);
      }
    };

    loadFB();
  }, []);

  return (
    <div style={{ marginTop: '2rem', borderTop: '1px solid #eee', padding: '1rem' }}>
      <h3 style={{ color: '#444' }}>Comentarios de la comunidad</h3>
      {/* Forzamos una URL fija de prueba para ver si el problema es window.location */}
      <div 
        className="fb-comments" 
        data-href="https://mrnetsky.github.io/docusaurus_personal/" 
        data-width="100%" 
        data-numposts="5">
      </div>
    </div>
  );
}
