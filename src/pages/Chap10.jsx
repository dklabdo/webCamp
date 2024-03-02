import React from "react";

function Chap10() {
  return (
    <div className="p-6 overflow-y-auto h-screen">
      <h1>Optmization,SEO,Accesebility</h1>
      <h2>1-Optmization</h2>
      <p>
        Improving the loading speed of web pages is crucial for retaining
        visitors and improving search engine rankings. This involves optimizing
        images, minimizing HTTP requests, leveraging browser caching, and using
        content delivery networks (CDNs) to deliver content faster.
      </p>
      <h2>2-SEO</h2>
      <p>
        {" "}
        SEO involves optimizing a website to rank higher in search engine
        results pages (SERPs) for relevant keywords. This includes on-page
        optimization (e.g., optimizing meta tags, headings, and content) and
        off-page optimization (e.g., building backlinks and improving website
        authority).
      </p>
      <h2>3-Accessibility Optimization</h2>
      <p>
        {" "}
        Making websites accessible to users with disabilities is important for
        ensuring inclusivity and compliance with accessibility standards. This
        includes providing alternative text for images, ensuring keyboard
        navigation, and using semantic HTML markup.
      </p>
    </div>
  );
}

export default Chap10;
