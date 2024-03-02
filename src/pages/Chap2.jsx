import React from 'react'
import Code from '../components/Code'
import img1 from '../assets/chap1example.png'
import img2 from '../assets/chap1example2.png'

function Chap2() {
  return (
    <div className='p-6 overflow-y-auto h-screen' >
         <h1>Typographie</h1>
        <h2>1-Titles</h2>
        <p>Headers in HTML are represented using the &lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;, and &lt;h6&gt; elements, where &lt;h1&gt; is the most important and &lt;h6&gt; is the least important. </p>
        <Code code={`
 <!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Page Title</title>
 </head>
 <body>
     <h1>Hello codeck</h1>
     <h2>Hello codeck</h2>
     <h3>Hello codeck</h3>
     <h4>Hello codeck</h4>
     <h5>Hello codeck</h5>
     <h6>Hello codeck</h6>
 </body>
 </html>
 
 `} />

    <img src={img1} alt='...'/>

    <h2>2-Paragraph</h2>
    <p>in HTML &lt;p&gt; element used to define a paragraph or a bloc of text on your webpage</p>
    <Code code={`
 <body>
    <p>This is a paragraph of text. It can contain and other formatting.</p>
    <p>This is another paragraph. You can include links like <a href="https://example.com">Example</a>.</p>
 </body>
    `} />
    
    <img src={img2} alt='...'/>

    <h2>3-button</h2>
    <p>
    is used to create a clickable button on a webpage. Buttons are commonly used to trigger actions such as submitting a form, navigating to another page, or executing JavaScript functions.
    </p>
    
    <h2>4-Other</h2>
    <ul>
        <li><span className='text-main' >&lt;em&gt; element</span> to display an italic text</li>
        <li><span className='text-main' >&lt;b&gt; element</span> to display an bold text</li>
        <li><span className='text-main' >&lt;strong&gt; element</span> to display an strong text</li>
    </ul>
    <p>the differance between bold and strong is bold is just for styling and strong are used to mark an <strong>important text</strong> </p>
    

    </div>
  )
}

export default Chap2