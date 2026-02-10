import React, { useEffect } from "react";
import { useLocation } from "@docusaurus/router";

export default function FacebookComments() {
  const { pathname } = useLocation();
  const url = typeof window !== "undefined" ? window.location.origin + pathname : "";

  useEffect(() => {
    if (window.FB && window.FB.XFBML) {
      window.FB.XFBML.parse(); // <–– esto es lo que faltaba
    }
  }, [pathname]);

  return (
    <div
      className="fb-comments"
      data-href={url}
      data-width="100%"
      data-numposts="5"
    ></div>
  );
}
