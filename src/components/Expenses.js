import './Expenses.css'

import ExpenseItem from './ExpenseItem'

function Expenses(props){
    return(
        <div>
            <ExpenseItem
                date={props.item[0].date} 
                title={props.item[0].title} 
                price={props.item[0].price}>
            </ExpenseItem>
            <ExpenseItem
                date={props.item[1].date} 
                title={props.item[1].title} 
                price={props.item[1].price}>
            </ExpenseItem>
            <ExpenseItem
                date={props.item[2].date} 
                title={props.item[2].title} 
                price={props.item[2].price}>
            </ExpenseItem>
            <ExpenseItem
                date={props.item[3].date} 
                title={props.item[3].title} 
                price={props.item[3].price}>
            </ExpenseItem>
        </div>
    );
}

export default Expenses;