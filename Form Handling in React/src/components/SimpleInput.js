import React, {useState, useRef} from 'react'
const SimpleInput = (props) => {


  const [enteredName, setEnteredName] = useState('');
 const inputValue= useRef()


 const  nameInputChangeHandler = event =>{
  setEnteredName(event.target.value)
 }
  
 const formSubmissionHandler = event =>{

  console.log(">>>>>>>>>>>>", inputValue)
  console.log(event)
  event.preventDefault();
  console.log(enteredName)
  
 
 }
  return (
    <form  onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input ref='inputValue' type='text' id='name' onChange={nameInputChangeHandler}/>
      </div>
      <div className="form-actions">
        <button>Submit Form</button>
      </div>
    </form>
  );
};

export default SimpleInput;
 