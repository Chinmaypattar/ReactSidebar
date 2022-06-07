import React, { Component } from 'react';
import './Input.scss';

const Input = (props) => {
    const { name, type, placeholder, handleChange, label,error } = props;
    
    return (
        <div class="form-group">
            <label class="inputLabel" for="formGroupInput">{label}</label>
            <input name={name} type={type} class="form-control formInput" id="formGroupInput" placeholder={placeholder} onChange={(e)=>handleChange(e)} />
            {error?(<span className="error">{error}</span>):''}
        </div>
    );
}

export default Input;