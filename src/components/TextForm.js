import React, {useState} from 'react'
// eslint-disable-next-line react-hooks/rules-of-hooks



export default function TextForm(props) {
    // eslint-disable-next-line no-unused-vars
    const [text, setText] = useState("");
    const handleUpClick =()=>{
        console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success");
    } 
     const handleLowClick =()=>{
        console.log("Lowercase was clicked");
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "success");

    } 
     const handleboldClick = () => {
       console.log("Lowercase was clicked");
       let newText = text.toBoldCase();
       setText(newText);
     }; 
    // eslint-disable-next-line no-unused-vars
    const handleOnChange =(event)=>{
        console.log("On changed");
        setText(event.target.value);
    }

    const handleCopy=()=>{
      console.log("I am a copy");
var text=document.getElementById("myBox");
text.select();
text.setSelectionRange(0,9999);
navigator.clipboard.writeText(text.value);
        props.showAlert("Text is Copied", "success");

    }
    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(""))
      props.showAlert("Extra Spaces removed", "success");

    }
    const handleClearText=()=>{
      let newText='';
      setText(newText)
     props.showAlert("Text is cleared ", "success");

    }
//text="new text" Wrong way to change the state
//setText("new text"); RIGHT WAY TO CHANGE THE STATE
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="9"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          {" "}
          Convert To UpperCase{" "}
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          {" "}
          Convert To LowerCase{" "}
        </button>
        <button className="btn btn-primary mx-1" onClick={handleboldClick}>
          {" "}
          Convert To BoldCase{" "}
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          {" "}
          Copy Text{" "}
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          {" "}
          Remove Extra Spaces{" "}
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearText}>
          {" "}
          Clear Text {" "}
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text Summary</h2>
        <p>
          {" "}
          e{text.split("  ").length} words and {text.length}characters
        </p>
        <p>{0.008 * text.split("  ").length}Minutes read </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above  to preview it here"}
            
        </p>
      </div>
    </>
  );
}

