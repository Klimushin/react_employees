import { Component } from 'react'

import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import './app.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.maxId = 4
        this.state = {
            data: [
                {name: 'Piter Parker', salary: 800, increase: false, favorite: false, id: 1},
                {name: 'Anna Pitson', salary: 1500, increase: false, favorite: false, id: 2},
                {name: 'Will Smith', salary: 2000, increase: false, favorite: false, id: 3},
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {            
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            favorite: false, 
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newData = [...data, newItem]
            return {
                data: newData
            }
        })
    }

    onToggleIncrease = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(el => el.id === id)

            const old = data[index]
            const newItem = {...old, increase: !old.increase}
            const newData = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
            return {
                data: newData
            }
        })
    }
    // ЭТО РАВНОЦЕННЫЕ МЕТОДЫ РАБОТЫ
    onToggleRise = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, favorite: !item.favorite}
                }
                return item
            })
        }))
    }
    
        
    
        
    render() {
        const employees = this.state.data.length
        const increased = this.state.data.filter(item => item.increase).length
        return (            
            <div className="app">
                <AppInfo employees={employees} increased={increased}/>
    
                <div className='search-panel'>
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        )
    }    
}

export default App