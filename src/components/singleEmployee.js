import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { faCancel } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import '../css/table.css'
export default class SingleEmployee extends Component {
    constructor(props) {
        super(props)
        this.state = {           
            id_changable: 0,          
            emp_id: '',
            name: '',
            email: '',
            post: '',
            address: '',
            dob: ''
        }
        this.handleUpdateInput = this.handleUpdateInput.bind(this);
    }
    

    handleChangeRow = (emp) => {
        this.setState({
            id_changable: emp.emp_id,   
            emp_id: emp.emp_id,
            name: emp.name,
            email:emp.email,
            post: emp.post,
            address:emp.address,
            dob: emp.dob                
        })
    }

    handleCancelChange = () => {
        this.setState({
            id_changable: 0           
        })
    }

    handleUpdateInput = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        console.log({ [event.target.name]: event.target.value });

    }

    handleUpdate = async () => {
        const json_obj={
            "emp_id": this.state.emp_id,
            "name": this.state.name,
            "email": this.state.email,
            "post": this.state.post,
            "address": this.state.address,
            "dob": this.state.dob
        }

        console.log(json_obj);
        alert(json_obj);
        await axios.put('http://localhost:4000/api/emp/updateemployee', json_obj)
        .then(response => {
            if (response.data === 'Not Found') {
                alert('error')
            }
            else {
                console.log(response);
                window.location.reload(false);
            }
        })
    }
    render() {
        const allEmployees = this.props.allEmployees;
        return (
            allEmployees.map((emp) => {
                const { emp_id, name, email, post, address, dob } = emp;
                if (this.state.id_changable === emp_id) {                    
                    return (
                        <tr>
                            <td>{emp_id}</td>
                            <td><input type="text" onChange={this.handleUpdateInput} name='name' defaultValue={name} /> </td>
                            <td><input type="text" onChange={this.handleUpdateInput} name='email' defaultValue={email} /> </td>
                            <td><input type="text" onChange={this.handleUpdateInput} name='post' defaultValue={post} /> </td>
                            <td><input type="text" onChange={this.handleUpdateInput} name='address' defaultValue={address} /></td>
                            <td><input type="text" onChange={this.handleUpdateInput} name='dob' defaultValue={dob} /> </td>
                            <td>
                                <button onClick={this.handleUpdate}><FontAwesomeIcon icon={faSave} size='1.5x' /></button>
                                <button onClick={this.handleCancelChange.bind(this)}><FontAwesomeIcon icon={faCancel} size='1.5x' /></button>
                            </td>
                        </tr>)
                }
                else {
                    return (<tr>
                        <td>{emp_id} </td>
                        <td>{name}</td>
                        <td>{email} </td>
                        <td>{post}</td>
                        <td>{address} </td>
                        <td>{dob}</td>
                        <td>
                            <button onClick={this.handleChangeRow.bind(this, emp)}><FontAwesomeIcon icon={faEdit} size='1.5x' /></button>
                            <button onClick={this.props.delete.bind(this, emp_id)}><FontAwesomeIcon icon={faTrash} size='1.5x' /></button>
                        </td>
                    </tr>)
                }
            })
        )
    }
}
