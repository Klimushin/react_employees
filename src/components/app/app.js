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
            ],
            term: '',
            filter: 'all'
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
    
    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }   

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    filterBlock = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.favorite)
            case 'moreThan1000':
                return items.filter(item => item.salary > 1000)
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }
        
    render() {
        const {data, term, filter} = this.state
        const employees = this.state.data.length
        const increased = this.state.data.filter(item => item.increase).length
        const visibleData = this.filterBlock(this.searchEmp(data, term), filter)
        return (            
            <div className="app">
                <AppInfo employees={employees} increased={increased}/>
    
                <div className='search-panel'>
                    
                    <SearchPanel 
                    onUpdateSearch={this.onUpdateSearch}
                    />

                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>

                </div>
                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        )
    }    
}

export default App