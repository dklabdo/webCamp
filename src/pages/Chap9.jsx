import React from "react";
import Code from "../components/Code";

function Chap9() {
  return (
    <div className="p-6 overflow-y-auto h-screen">
      <h1>Forms</h1>
      <h2>form</h2>
      <p>
        Forms are created using the &lt;form&gt; element. This element acts as a
        container for the input fields, buttons, and other elements that make up
        the form. It has several attributes that control its behavior, such as
        action, method, and enctype.
      </p>
      <ul>
        <li>
          <span className="text-main">method :</span>Specifies the HTTP method
          to be used when submitting the form. Common methods are GET and POST.
        </li>
        <li>
          <span className="text-main">action :</span>Specifies the URL where the
          form data should be submitted.
        </li>
        <li>
          <span className="text-main">enctype :</span>Specifies how form data
          should be encoded before sending it to the server. This is typically
          used when forms include file uploads.
        </li>
      </ul>
      <Code
        code={`
  <form action="/submit-form" method="post" enctype="multipart/form-data">
    <!-- Form elements go here -->
  </form>

      `}
      />
      <h2>input</h2>
      <p>
        Input fields are used to collect different types of user input, such as
        text, numbers, checkboxes, radio buttons, etc. Each input field is
        represented by an &lt;input&gt; element.
      </p>
      <Code
        code={`
  <input type="text" name="username" placeholder="Enter your username"><br>
  <input type="password" name="password" placeholder="Enter your password"><br>
  <input type="submit" value="Submit">
  
      `}
      />
      <h2>label</h2>
      <p>
        Labels provide a descriptive name for an input field. They improve
        accessibility and usability by associating text labels with input
        fields.
      </p>
      <Code
        code={`
  <label for="username">Username:</label>
  <input type="text" id="username" name="username">
  
      `}
      />
      <h2>Button</h2>
      <p>Buttons are used to submit the form or trigger other actions.</p>
      <Code
        code={`
  <input type="submit" value="Submit">
  <input type="reset" value="Reset">
  
      `}
      />
      <h2>Textarea</h2>
      <p>
        Textareas are used for multiline text input. They allow users to enter
        larger amounts of text, such as comments or messages.
      </p>
      <Code
        code={`
  <textarea name="message" rows="4" cols="50">Enter your message here...</textarea>
      `}
      />
      <h2>Select</h2>
      <p>
        {" "}
        Select dropdowns (also known as &lt;select&gt; elements) allow users to
        choose from a list of predefined options. Each option is defined by an
        &lt;option&gt; element nested within the &lt;select&gt; element.
      </p>
      <Code
        code={`
  <select name="country">
    <option value="usa">United States</option>
    <option value="uk">United Kingdom</option>
    <option value="canada">Canada</option>
  </select>

      `}
      />
      <h2>Validation</h2>
      <p>
        {" "}
        HTML5 introduced native form validation features, allowing developers to
        specify validation rules for input fields using attributes like
        required, min, max, pattern, etc. Modern browsers provide built-in
        validation feedback to users based on these rules.
      </p>
      <a
        className="text-main text-lg underline my-4"
        href="https://www.w3schools.com/html/html_form_input_types.asp"
        target="_blank"
      >
        input type
      </a>
    </div>
  );
}

export default Chap9;
