import React, { useState } from 'react';

export default function TextForm(props) {
  //fuction to convert text to uppercase
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!","success")
  };

  //fuction to convert text to lowercase
  const handleLoClick = () => {
    console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!!","success")
  };

  //fuction to clear text
  const handlecleartextClick = () => {
    console.log("Text Cleared");
    let newText =" ";
    setText(newText);
    props.showAlert("Text Cleared!","success")
  };
  //function to copy text
  const handlecopy=()=>
  {
    var cptext=document.getElementById("mybox");
    cptext.select();
    navigator.clipboard.writeText(cptext.value);
    props.showAlert("Copied to Clipboard.","success")
  }

  //function to remove extra spaces
  const handleremoveextraspaces=()=>
  {
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "))
    props.showAlert("Successfully removed Extra Spaces","success")
  }


  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState('Enter text here');

  return (
    <>

    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handlecleartextClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handlecopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleremoveextraspaces}>Remove Extra Spaces</button>
    </div>

    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>
        Your text summary
      </h2>
      <p> {text.length>0 ? text.split(" ").length:0} Words and {text.length>0 ?text.length:0} characters</p>
      <p> {0.008* text.split(" ").length} Minutes Read</p>
    <h2>Preview</h2>
    <p>
      {text.length>0? text:"Enter Something in the textbox to preview it here!"}
    </p>
    </div>
    </>
  );
}
