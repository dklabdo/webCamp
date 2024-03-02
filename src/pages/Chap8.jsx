import React from "react";
import Code from "../components/Code";

function Chap8() {
  return (
    <div className="p-6 overflow-y-auto h-screen">
      <h1>Media</h1>
      <h2>1- image</h2>
      <p>
        To insert an image into an HTML document, you use the &lt;img&gt; tag.
        Here's the basic syntax:
      </p>
      <Code
        code={`
 <body>
    <img src="image.jpg" alt="Description of the image">
 </body>
        `}
      />
      <ul>
        <li>
          <span className="text-main">src</span> This attribute specifies the
          URL (source) of the image. It can be a relative or absolute path to
          the image file.
        </li>
        <li>
          <span className="text-main">alt</span> This attribute provides
          alternative text for the image. It's crucial for accessibility
          purposes and is displayed if the image fails to load or if the user is
          using a screen reader.
        </li>
      </ul>
      <h2>2- Audio and video</h2>
      <p>
        To include video and audio files in HTML, you can use the &lt;video&gt;
        and &lt;audio&gt; elements, respectively. Here's how you can use them:
      </p>
      <Code
        code={`
 <video width="320" height="240" controls>
    <source src="video.mp4" type="video/mp4">
    Your browser does not support the video tag.
 </video>
      `}
      />
      <Code
        code={`
 <audio controls>
    <source src="audio.mp3" type="audio/mp3">
    Your browser does not support the audio tag.
 </audio>
      `}
      />
    </div>
  );
}

export default Chap8;
