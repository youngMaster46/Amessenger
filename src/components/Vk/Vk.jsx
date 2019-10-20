import React from 'react';
import * as axios from 'axios';

const Vk = (props) => {
    const onLogin = () => {
        axios.get(`https://oauth.vk.com/authorize?
        client_id=7177067&display=page&
        redirect_uri=https://oauth.vk.com/blank.html&scope=4098&response_type=token&v=5.52`)
        .then(response => console.log(response))
    }
    return <div>
        <h1>vk.com</h1>
        <button onClick={onLogin}  >submit</button>
    </div>
}

export default Vk;