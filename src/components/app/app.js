import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'
import './app.css'

function App() {

    const data = [
        {name: 'Piter Parker', salary: 800, id: 1},
        {name: 'Anna Piterson', salary: 1800, id: 2},
        {name: 'Will Smith', salary: 2000, id: 3},
    ]

    return (
        <div className="app">
            <AppInfo/>

            <div className='search-panel'>
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    )
}

export default App