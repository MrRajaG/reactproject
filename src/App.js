import Expenses from "./components/Expenses";

function App(){
    let expenses = [
        {
            id: 'e1',
            title: 'School Fee',
            price: 300,
            date: new Date(2023, 6, 26)
        },
        {
            id: 'e2',
            title: 'Car Insurance',
            price: 500,
            date: new Date(2023, 6, 22)
        },
        {
            id: 'e3',
            title: 'Food',
            price: 100,
            date: new Date(2023, 6, 25)
        },
        {
            id: 'e4',
            title: 'Health',
            price: 200,
            date: new Date(2023, 6, 23)
        }
    ]

    return(
        <div>
            <h2>Expenses</h2>
            <Expenses irem={expenses}/>
        </div>
    );
}
export default App;