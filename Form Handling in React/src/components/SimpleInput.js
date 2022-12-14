import React, { useState, useRef } from "react";
const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  //  const inputValue= useRef()

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    // console.log(">>>>>>>>>>>>", inputValue)
    console.log(event);
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    console.log(enteredName);

    setEnteredName("");
  };
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          ref={nameInputRef}
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit Form</button>
      </div>
    </form>
  );
};

export default SimpleInput;
