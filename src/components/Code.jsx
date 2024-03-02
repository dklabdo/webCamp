import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';


const Code = (props) => {
  
  return (
    
        <SyntaxHighlighter language="javascript" style={prism} >
            {props.code}
        </SyntaxHighlighter>
    
    
  );
};


export default Code;