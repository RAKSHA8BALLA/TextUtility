import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert(": Converted to Uppercase!", "success")

    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert(": Converted to Lowercase!", "success")

    }
    const handleClear = () => {
        let newText = '';
        setText(newText)
        props.showAlert(": Text cleared!", "success")

    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(text.value);
        props.showAlert(": Copied to Clipboard!", "success")

    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert(": Extra spaces removed!", "success")

    }

    const [text, setText] = useState('');
    return (
        <>

            <div className="container" style={{ color: props.mode === 'light' ? '#373c45' : 'white' }}>
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ border: '1px solid black' }} id="myBox" rows="10" cols="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear text</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy text</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? '#373c45' : 'white' }}>
                <h2>Your text summary</h2>
                <div className="d-flex justify-content-start mx-3 my-3" style={{color:'white',backgroundColor:'#4453db', padding:'10px', borderRadius: '5px'}}>
                    <h4>Word count: </h4>
                    <h4> {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</h4>
                </div>
                <div className="d-flex justify-content-start mx-3 my-3" style={{color:'white',backgroundColor:'#4453db', padding:'10px', borderRadius: '5px'}}>
                    <h4>Minutes to read: </h4>
                    <h4>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</h4>
                </div>
                <div className="d-flex justify-content-start mx-3 my-3" style={{color:'white',backgroundColor:'#4453db', padding:'10px', borderRadius: '5px'}}>
                    <h4>Preview:              </h4>
                    <h4>{text.length > 0 ? text : "Enter text to preview it"}</h4>
                </div>
            </div>
        </>
    )
}
