import React, { useEffect } from 'react';

export default function FbComments() {
  useEffect(() => {
    // Esto inicializa el SDK de Facebook cada vez que entras a un post
    if (window.FB) {
      window.FB.XFBML.parse();
    } else {
      const script = document.createElement('script');
      script.id = 'facebook-jssdk';
      script.src = "https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v18.0&appId=1555483722403051";
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div style={{ marginTop: '2rem', borderTop: '1px solid #eee', paddingWrapper: '1rem' }}>
      <h3>Comentarios de la comunidad</h3>
      <div 
        className="fb-comments" 
        data-href={typeof window !== 'undefined' ? window.location.href : ''} 
        data-width="100%" 
        data-numposts="5">
      </div>
    </div>
  );
}
