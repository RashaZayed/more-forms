import React, {useState} from 'react'


const Results = props => {
    const {firstName ,lastName, email , password, confirmPassword} =props.data;

    
    return (
        <div>
            <h1>Your Form Information Details:</h1>
            <div>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>confirm password: {confirmPassword}</p>

                
            </div>
        </div>

    )
}
export default Results;