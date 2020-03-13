import React, { useState } from 'react';
import './Accounts.css'
const Accounts = (props) => {
    const totalPaidAmount = props.accounts.reduce((acc,curr) => {
        return acc + parseInt(curr.salary);
    },0)
    const companyRevenue = 100000;

    return (
        <div className="accounts">
            <h3>Company Accounts</h3>
            <hr/>
            <p style={{color: "green"}}>Company Revenue :$ {companyRevenue} </p>
            <p style={{color: "red"}}>Paid Employee:$ {props.accounts.length}</p>
            <p style={{color: "red"}}>Total Paid Amount:$ {totalPaidAmount}</p>
            <hr/>
            <p style={{color: "green"}}>Current Balance :$ {companyRevenue - totalPaidAmount}</p>
        </div>
    );
};

export default Accounts;