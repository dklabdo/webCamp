import React from "react";

function Chap4() {
  return (
    <div className="p-6 overflow-y-auto h-screen">
      <h1>Anchor</h1>
      <p>
        The &lt;a&gt; tag in HTML is used to create hyperlinks, also known as
        anchor links, which allow users to navigate to another webpage or
        resource.{" "}
      </p>
      <h2>1-href</h2>
      <p>
        {" "}
        This is the most important attribute of the anchor tag. It specifies the
        URL of the webpage or resource to which the link leads. If the href
        attribute is omitted, or if it is set to #, the link will typically
        point to the current page itself or the top of the current page.
      </p>
      <h2>2-target</h2>
      <p>This attribute specifies where to open the linked document : </p>
      <ul>
        <li>
          <span className="text-main">_blank</span>Opens the linked document in
          a new tab or window.
        </li>
        <li>
          <span className="text-main">_self</span> Opens the linked document in
          the same frame or tab as the link.
        </li>
        <li>
          <span className="text-main">_parent</span>Opens the linked document in
          the parent frame.
        </li>
        <li>
          <span className="text-main">_top</span>Opens the linked document in
          the full body of the window.
        </li>
      </ul>
      <h2>3-dowload</h2>
      <p>
        {" "}
        When present, this attribute suggests that the linked resource should be
        downloaded by the browser rather than navigating to it. The attribute's
        value specifies the name of the file to be downloaded.
      </p>
      <h2>4-rel</h2>
      <p>
        This attribute specifies the relationship between the current document
        and the linked document. Common values include
      </p>
      <ul>
        <li>
          <span className="text-main">nofollow</span> Instructs search engines
          not to follow the link.
        </li>
        <li>
          <span className="text-main">noopener</span> Prevents the new page from
          accessing the window.opener property.
        </li>
        <li>
          <span className="text-main">noreferrer</span> Prevents the browser
          from sending a referrer header when following the link.
        </li>
        <li>
          <span className="text-main">next</span> the link is your next page
        </li>
        <li>
          <span className="text-main">prev</span> the link is your previous page
        </li>

      </ul>
    </div>
  );
}

export default Chap4;
