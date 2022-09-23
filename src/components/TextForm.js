import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
       // console.log("Uppercse was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }

    const handleLoClick = ()=>{
        // console.log("Uppercse was clicked"+ text);
         let newText = text.toLowerCase();
         setText(newText);
         props.showAlert("Converted to lowercase","success");
     }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied","success");
    } 

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces","success");
    }

    const handleClearClick = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Cleared","success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter text here");
    return (
        <>
            <div className='container' style={{color: props.mode === 'dark'? 'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'light'? 'white':'#18202b', color: props.mode === 'dark'? 'white':'black'}} onChange={handleOnChange} id="myBox" rows="10"></textarea>
                </div>
                <button className={`btn btn-${props.mode === 'light'? 'dark':'light'} mx-2`} onClick={handleUpClick}>Convert to Uppercase</button>
                <button className={`btn btn-${props.mode === 'light'? 'dark':'light'} mx-2`} onClick={handleLoClick}>Convert to Lowercase</button>
                <button className={`btn btn-${props.mode === 'light'? 'dark':'light'} mx-2`} onClick={handleCopy}>Copy Text</button>
                <button className={`btn btn-${props.mode === 'light'? 'dark':'light'} mx-2`} onClick={handleExtraSpaces}>Remove extra spaces</button>
                <button className={`btn btn-${props.mode === 'light'? 'dark':'light'} mx-2`} onClick={handleClearClick}>Clear Text</button>
                
            </div>
            <div className='container my-3' style={{backgroundColor: props.mode === 'light'? 'white':'#18202b', color: props.mode === 'dark'? 'white':'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008*text.split(" ").length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
  )
}
