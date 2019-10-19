import React from 'react';
import * as axios from 'axios';

const Vk = (props) => {
    const onSubmit = () => {
        axios.get('')
    }
    return <div>
        <h1>vk.com</h1>
        <button onClick={onSubmit}  >submit</button>
    </div>
}

export default Vk;