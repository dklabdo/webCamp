import React from "react";
import Code from "../components/Code";
import img from "../assets/semantic.png";
function Chap5() {
  return (
    <div className="p-6 overflow-y-auto h-screen">
      <h1>Containers</h1>
      <p>
        In HTML, containers are elements used to group and structure content
        within a web page. They are essential for organizing content and
        applying styles effectively. Some common container elements in HTML
        include &lt;div&gt;, &lt;span&gt;, &lt;section&gt;, &lt;article&gt;,
        &lt;header&gt;, &lt;footer&gt;, &lt;nav&gt;, and &lt;aside&gt;. These
        elements can be styled using CSS to control their appearance and layout
        on the page.
      </p>
      <h2>1-div</h2>
      <p>
        div: This is a generic container element used to group content together.
        It is very versatile and commonly used for layout purposes.
      </p>
      <Code
        code={`
  <div>
      <!-- Content goes here -->
  </div>
   
      `}
      />
      <h2>2-span</h2>
      <p>
        span: Similar to div, but inline by default. It's often used to apply
        styles to inline elements or small pieces of text.
      </p>
      <Code
        code={`
  <p>This is a <span>highlighted</span> word.</p>
      `}
      />
      <h2>3-section</h2>
      <p>
        section: Represents a thematic grouping of content, typically with a
        heading.
      </p>
      <Code
        code={`
  <section>
      <h2>Section Heading</h2>
      <!-- Content goes here -->
  </section>
      `}
      />
      <h2>4- article</h2>
      <p>
        article: Represents an independent piece of content that can stand
        alone, such as a blog post or a news article.
      </p>
      <Code
        code={`
  <article>
    <h2>Article Title</h2>
    <!-- Content goes here -->
  </article>

      `}
      />
      <h2>Semantic html</h2>
      <Code
        code={`
<header>
  <!-- Header content goes here -->
</header>

<footer>
  <!-- Footer content goes here -->
</footer>

<nav>
  <!-- Navigation links go here -->
</nav>

<aside>
  <!-- Sidebar content goes here -->
</aside>

    `}
      />
      <p>
        These container elements help in structuring the HTML document, making
        it more semantically meaningful and easier to style with CSS.
      </p>
      <img className="w-[70%]" src={img} alt="..." />
    </div>
  );
}

export default Chap5;
