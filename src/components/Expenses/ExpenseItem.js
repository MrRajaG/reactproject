import React from "react";
import './ExpenseItem.css'
import Expensedate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props){
    
    return (
        <Card className='expense-item'>
            <Expensedate date={props.date}/>
            <div className='expense-description'>
                <h2>{props.title}</h2>
                <div className='expense-price'>${props.price}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;