import React, { useState } from 'react';
import styled from 'styled-components'
import Button from '../../UI/Button/Button';

import './CourseInput.css';


const FormControl = styled.div`
.form-control {
  margin: 0.5rem 0;
}

& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

& input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}


&.invalid input{
 background: rgb(245, 141, 141);
 border-color: red;
}

&.invalid label{
 color:red
 }


`

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');

 const [isValid,setIsValid]= useState(true)

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    setIsValid(true)
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0){
      setIsValid(false)
      return;
    }

    props.onAddGoal(enteredValue);
  };

  return (
    <FormControl onSubmit={formSubmitHandler}>
      <FormControl className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label style={{color:!isValid ?'red' : 'black'}}>Course Goal</label>
        <input style={{borderColor: !isValid ?'red' : 'black',
                      background: !isValid ?'salmon' : 'transparent'
      
      }} type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </FormControl>
  );
};

export default CourseInput;
