import React from 'react';

function Alert(props) {
    const capitalize =(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    // Check if props.alert is null or undefined, and provide a default value if it is
    const { type, msg } = props.alert || { type: '', msg: '' };

    return (
        <div style={{height:'50px'}}>
        <div>
           <div className={`alert alert-${type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(type)}</strong>{msg}
            </div>
        </div>
        </div>
    )
}

export default Alert;
