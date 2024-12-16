import React, { useEffect, useState } from 'react'
import Editor from './components/Editor'

const App = () => {
    const [html, setHtml] = useState("");
    const [css,setCss] = useState("");
    const [js,setJs]= useState("");
    const [srcdoc, setSrcdoc] = useState("");

    useEffect(() => {
        const timeout = setTimeout(()=>{
            setSrcdoc(`
                <html>
                <body>${html}</body>
                <style>${css}</style>
                <script>${js}</script>
                </ html>`);
            },250);
            return()=>{
                clearTimeout(timeout);
            }
      

    }, [html, css, js])
  return (
    <>
    <div className='top_panel'>
        <Editor title="HTML" language="xml" value={html} onChange={setHtml} />
        <Editor title="CSS" language="css"  value={css} onChange={setCss} />
        <Editor title="JS" language="javascript"  value={js} onChange={setJs} />
    </div>
    <div className='panel'></div>
    <iframe srcDoc={srcdoc} title="output" sandbox='allow-scripts' width="100%" height="100%"></iframe>
    </>
  )
}

export default App