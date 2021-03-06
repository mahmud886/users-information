import React,{useState} from 'react';
import './Employee.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faUserMinus } from '@fortawesome/free-solid-svg-icons'
const Employee = (props) => {
    const {name,photo,username,designation,salary,email,address} = props.employee;
    const [isPaid, setIsPaid] = useState(false);
    let paymentButton = <button onClick={() => {props.addToAccounts(props.employee); setIsPaid(true)} } className="pay-btn"><FontAwesomeIcon icon={faUserPlus} /> ADD SALARY</button>
    ;
    if(isPaid){
        paymentButton = <button  className="paid" ><FontAwesomeIcon icon={faUserMinus}/> SALARY PAID</button>;
    }
    return (
        <div className="single-employee">
            <img src={photo} alt=""/>
            <h3>{name}</h3> 
            <p>user-name: {username}</p>
            <p>{designation}</p>
            <p>Email: {email}</p>
            <p>Address: {address.city}</p>
            <p>Salary :$ {salary} </p>
            {paymentButton}

        </div>
    );
};

export default Employee;