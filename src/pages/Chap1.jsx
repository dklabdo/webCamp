import React from "react";
import Code from "../components/Code";
function Chap1() {
  return (
    <div className="p-6 overflow-y-auto h-screen">
      <h1>HTML</h1>
      <a href="../web-camp.pdf" download="webCamp" className="text-lg underline text-main" >Dowload the presentation</a>
      <p>
        HTML stands for HyperText Markup Language. It is the standard markup
        language used to create and design web pages. HTML is the backbone of
        the web, providing the structure and semantics for content on the
        internet.
      </p>
      <h2>1-head</h2>
      <p>
        In HTML, the &lt;head&gt; element represents introductory content or a
        group of introductory or navigational aids. It typically contains
        headings, logos, navigation menus, search forms, and other introductory
        or navigational elements.
      </p>
      <Code
        code={`
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Header Example</title>
  </head>
      `}
      />
      <h2>2-Doctype</h2>
      <p>
        specify the type of your document (html)
      </p>
      <h2>3-lang</h2>
      <p>
        In HTML, the lang attribute is used to specify the language of the
        content within an element or the entire document. This attribute is
        crucial for accessibility and search engine optimization{" "}
      </p>
      <h2>4-UTF-8</h2>
      <p>
        UTF-8 is a variable-width encoding that can represent every character in
        the Unicode character set. Unicode includes characters from most of the
        world's writing systems, including Latin, Cyrillic, Greek, Arabic,
        Hebrew, Chinese, Japanese, Korean, and many others.
      </p>
      <h2>5-meta</h2>
      <p>
      In HTML, the &lt;meta&gt; element is used to provide metadata about the HTML document. Metadata is data about the HTML document itself, such as its character encoding, author, description, keywords, and more. Metadata is not displayed on the webpage itself but is used by browsers, search engines, and other web services.
      </p>
      <ul>
        <li><span className="text-main" >Viewport config</span> For responsive web design, the viewport meta tag is crucial. It controls the layout and scaling of the webpage on different devices. Here's an example </li>
        <li><span className="text-main" >Description and Keywords</span> Meta tags like description and keywords provide information for search engines to understand the content of the webpage.</li>
        <li><span className="text-main" >Author and Publisher</span>Meta tags can include information about the author and publisher of the webpage, which can be useful for indexing and attributing content. For instance </li>
      </ul>
      <Code code={`
<meta name="description" content="Description for your webpage">
<meta name="keywords" content="keyword1, keyword2, keyword3">
      
      `} />
      <br/> 
      <Code code={`
<meta name="author" content="Dev Name">
<meta name="publisher" content="Company Name">
      
      `} />
        

    </div>
  );
}

export default Chap1;
