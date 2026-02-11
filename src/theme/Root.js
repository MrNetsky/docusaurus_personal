import React, { useEffect } from 'react';

export default function Root({ children }) {
  useEffect(() => {
    if (document.getElementById('facebook-jssdk')) return;

    const js = document.createElement('script');
    js.id = 'facebook-jssdk';
    js.src =
      'https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v18.0';
    js.async = true;
    document.body.appendChild(js);
  }, []);

  return <>{children}</>;
}
