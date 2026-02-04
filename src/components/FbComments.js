import React, { useEffect } from 'react';

export default function FbComments() {
  useEffect(() => {
    // Como el script ya está en el head, solo pedimos que escanee la página
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div style={{ marginTop: '2rem', borderTop: '1px solid #eee', padding: '1rem' }}>
      <h3 style={{ color: '#444' }}>Comentarios de la comunidad</h3>
      <div 
        className="fb-comments" 
        data-href={typeof window !== 'undefined' ? window.location.href : ''} 
        data-width="100%" 
        data-numposts="5">
      </div>
    </div>
  );
}
