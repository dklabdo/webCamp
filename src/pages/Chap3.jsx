import React from "react";
import Code from "../components/Code";
function Chap3() {
  return (
    <div className="p-6 overflow-y-auto h-screen">
      <h1>Attributes</h1>
      <p>
        Attribute provides additional information about an element and is placed
        within the opening tag of that element. Attributes consist of a name and
        a value, separated by an equals sign (=) and enclosed in quotation
        marks.{" "}
      </p>
      <h2>Class and id</h2>
      <p>
        classes and IDs are used to target and style or change the behavor of
        specific elements on a webpage. While both serve similar purposes, they
        have distinct differences in their usage and conventions.
      </p>
      <h2>1-class :</h2>
      <p>
        Classes are used to apply styles to multiple elements <br />
        Classes are defined using the class attribute within HTML elements.
        Multiple classes can be assigned to a single element, separated by
        spaces.
      </p>
      <Code
        code={`
<div class="container">
  <p class="red">This paragraph has a red color style.</p>
</div>
  
      `}
      />
      <h2>2- id</h2>
      <p>
        IDs are used to uniquely identify a single element on a webpage. <br />
        IDs are defined using the id attribute within HTML elements. Each ID
        must be unique within the entire HTML document.
      </p>
      <Code
        code={`
<div id="header">
  <h1>Welcome to our website</h1>
</div>
      `}
      />
      <h2>Differance</h2>
      <ul>
        <li>
          IDs must be unique within the HTML document, while classes can be
          applied to multiple elements.
        </li>
        <li>
          IDs are more specific than classes. If both are used to style the same
          element, the styles applied through the ID will typically take
          precedence over those applied through a class.
        </li>
      </ul>
      <p>
        <strong className="text-main">Conclusion</strong> class used for styling
        , id used for Identification{" "}
      </p>
      <h2>3-acceskey</h2>
      <p>
        In HTML, the accesskey attribute is used to define a keyboard shortcut
        for accessing and navigating to an element on a webpage. When a user
        presses the defined key
      </p>
      <Code
        code={`
<button accesskey="s">Save</button>  
  `}
      />
      <p>
        Using accesskeys is difficult because they may conflict with other key
        standards in the browser. To avoid this problem, most browsers will use
        accesskeys only if pressed together with the Alt key.
      </p>
      <h2>4-title</h2>
      <p>Specifies extra information about an element on hovering</p>
      <Code code={`
<button title="Alt + r"  accesskey="r" >Refresh</button>
      `} />
      <h2>5-translate</h2>
      <p>
      Specifies whether the content of an element should be translated or not
      </p>
      <h2>6-draggable</h2>
      <p>Specifies whether an element is draggable or not</p>
      <h2>7-style</h2>
      <p>to add styling to the element</p>
      <h2>8- dir</h2>
      <p>Set the direction of your text <br/>
      ltr : left to right <br/>
      rtl : right to left </p>
      <h2>9-lang</h2>
      <p>specify the language of the element</p>
    </div>
  );
}

export default Chap3;
