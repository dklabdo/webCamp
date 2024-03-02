import React from "react";
import Code from "../components/Code";
function Chap7() {
  return (
    <div className="p-6 overflow-y-auto h-screen">
      <h1>Table</h1>
      <p>
        In HTML, a table is a structured way to display data in rows and
        columns. It allows you to organize information into a grid-like format,
        making it easier for users to understand and interpret the data. Tables
        are widely used for presenting various types of data, such as financial
        data, product listings, schedules, and more.
      </p>
      <Code
        code={`
  <table border="1">
    <thead>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
      </tr>
  </thead>
    <tbody>
      <tr>
        <td>Row 1, Cell 1</td>
        <td>Row 1, Cell 2</td>
      </tr>
    <tr>
      <td>Row 2, Cell 1</td>
      <td>Row 2, Cell 2</td>
    </tr>
  </tbody>
</table>
      `}
      />
      <ul>
        <li>table : defines the table.</li>
        <li>thead : defines the header section of the table.</li>
        <li>tr : defines a row within the table.</li>
        <li>th : defines a header cell within a row.</li>
        <li>tbody : defines the body section of the table.</li>
        <li>td : defines a standard cell within a row.</li>
      </ul>
    </div>
  );
}

export default Chap7;
