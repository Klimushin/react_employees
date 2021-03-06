// import { Component } from 'react'
// import './employees-add-form.css'

// class EmployeesAddForm extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             name: '',
//             salary: 0
//         }
//     }

//     onValueChange = (e) => {
//         this.setState({
//             [e.target.name] : e.target.value
//         })
//     }

//     onSubmit = (e) => {
//         const name = this.state.name,
//               salary = this.state.salary

//         e.preventDefault();
        
//         if (name && name.length >= 3 && salary ) {
//             this.props.onAdd(name, salary);
//             this.setState({
//                 name: '',
//                 salary: ''
//             })
//         } else {
//             alert("Неверные данные")
//         }      
//     }

//     render() {
//         const {name, salary} = this.state
//         return (
//             <div className="app-add-form">
//                 <h3>Добавьте нового сотрудника</h3>
//                 <form
//                     className="add-form d-flex"
//                     onSubmit = {this.onSubmit}>
//                     <input type="text"
//                         className="form-control new-post-label"
//                         placeholder="Как его зовут?"
//                         name='name'
//                         value={name}
//                         onChange={this.onValueChange}/>
//                     <input type="number"
//                         className="form-control new-post-label"
//                         placeholder="З/П в $?"
//                         name='salary'
//                         value={salary}
//                         onChange={this.onValueChange}/>
    
//                     <button type="submit"
//                             className="btn btn-outline-light">Добавить</button>
//                 </form>
//             </div>
//         )
//     }    
// }

// export default EmployeesAddForm


import './employees-add-form.css'

const EmployeesAddForm  = (props) => {   
    
    let newEmployeer = {
        name: '',
        salary: ''
    }

    function onValueChange (e)  {
        newEmployeer[e.target.name] = e.target.value
    }
   
    function onSubmit (e) {       
        const {name, salary} = newEmployeer       
        
        e.preventDefault();
        
        if (name && name.length >= 3 && salary ) {
            props.onAdd(name, salary);            
        } else {
            alert("Неверные данные")
        }      
    }  

    

    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex"
                onSubmit = {onSubmit}>
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Как его зовут?"
                    name='name'                  
                    onInput={onValueChange}/>
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в $?"
                    name='salary'
                    onInput={onValueChange}/>

                <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
    )
}    


export default EmployeesAddForm;