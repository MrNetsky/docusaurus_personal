import React, { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';

export default function FacebookComments() {
  const location = useLocation();
  const url =
    typeof window !== 'undefined'
      ? window.location.origin + location.pathname
      : '';

  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, [url]);

  return (
    <div
      className="fb-comments"
      data-href={url}
      data-width="100%"
      data-numposts="5"
    />
  );
}
