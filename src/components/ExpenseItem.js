import './ExpenseItem.css'
import Expensedate from './ExpenseDate';

function ExpenseItem(props){
    
    return (
        <div className='expense-item'>
            <Expensedate date={props.date}/>
            <div className='expense-description'>
                <h2>{props.title}</h2>
                <div className='expense-price'>${props.price}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;