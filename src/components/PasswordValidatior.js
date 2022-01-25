import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function PasswordValidator({ label, backgroundColor, onClick }) {
    const [messages, setMessages] = useState([]);
    const [pass, setPass] = useState('');
    /**
     * 8 charecters
     * 1 upper case
     * not null
     * 1 lower case
     * 1 number
     */
    const handleChange = (event) => {
        let hasNumber = false;
        let hasUppercase = false;
        let hasLowercase = false;
        let isNull = true;
        let matchesLength = false;
        let errorMessage = [];
        const password = event.target.value;
        setPass(password);
        if(password){
            isNull = password.trim() === '';
            matchesLength = password.trim().length >= 8;
            hasLowercase = password.match(/[a-z]{1}/g) && password.match(/[a-z]{1}/g).length > 0;
            hasUppercase = password.match(/[A-Z]{1}/g) && password.match(/[A-Z]{1}/g).length > 0;
            hasNumber = password.match(/[0-9]{1}/g) && password.match(/[0-9]{1}/g).length > 0;

            if(isNull){
                errorMessage.push('Password is empty');
                return;
            }

            if(!matchesLength){
                errorMessage.push('Password should have atleast 8 charecters');
            }

            if(!hasUppercase){
                errorMessage.push('Password should have atleast 1 Upper Case Charecter');
            }

            if(!hasLowercase){
                errorMessage.push('Password should have atleast 1 Lower Case Charecter');
            }

            if(!hasNumber){
                errorMessage.push('Password should have atleast 1 Numeric Charecter');
            }

        } else {
            errorMessage.push('enter a valid password')
        }
        setMessages(errorMessage);
    }

    const showMessages = () => {
        return messages.map( msg => (
            <div id="error">
                {msg}
            </div>
        ))
    }
    return (
        <div className='password-validator'>
            <div className='password-input-container'>
                <input id="password" onChange={handleChange} className='password-input'>
                </input>
            </div>
            {
                messages.length > 0 &&
                <div className='error-message'>
                    <div>{showMessages()}</div>
                </div>
            }
        </div>
    );
}

PasswordValidator.propTypes = {
    backgroundColor: PropTypes.string,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

PasswordValidator.defaultProps = {
    backgroundColor: null,
    onClick: undefined,
};