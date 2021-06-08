import React from 'react';
import '../styles/LogForm.css'

function LogForm() {
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
    };

    return (
        <form className={classes.root} onSubmit={handleSubmit}>

        </form>
    );
}

export default LogForm;