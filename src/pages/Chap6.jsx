import React from "react";
import Code from "../components/Code";

function Chap6() {
  return (
    <div className="p-6 overflow-y-auto h-screen">
      <h1>List</h1>
      <p>
        In HTML, you can create two types of lists: ordered lists (&lt;ol&gt;)
        and unordered lists (&lt;ul&gt;). Within these list elements, you define
        individual list items using the &lt;li&gt; tag.
      </p>
      <h2>1-unordered list</h2>
      <Code
        code={`
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
      `}
      />
      <h2>2-ordered list</h2>
      <Code
        code={`
  <ol>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ol>
      `}
      />
      <h2>attributes</h2>
      <ul>
        <li>
          <span className="text-main">reversed</span>rverse the order of the
          list
        </li>
        <li>
          <span className="text-main">start</span>the value of the firdt item of
          the list
        </li>
        <li>
          <span className="text-main">type</span>the type of order
        </li>
      </ul>
      <h2>3- description list</h2>
      <Code code={`
  <dl>
    <dt>Term 1</dt>
    <dd>Description of Term 1</dd>

    <dt>Term 2</dt>
    <dd>Description of Term 2</dd>

    <dt>Term 3</dt>
    <dd>Description of Term 3</dd>
  </dl>
      `} />
      
    </div>
  );
}

export default Chap6;
