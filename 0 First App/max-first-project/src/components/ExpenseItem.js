import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const clickHandler= ()=>{
    console.log("Clicked")
    alert("Clicked")
}
function ExpenseItem(props) {

  return (
    <div className="expense-item">
      <div>
    
       <ExpenseDate date={props.date}></ExpenseDate>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>

      <button onClick={clickHandler}>Change Title</button>
    </div>
  );
}

export default ExpenseItem;
