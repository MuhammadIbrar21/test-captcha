import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Secure = () => {
    const [check, setCheck] = useState(false)

    const navigate = useNavigate()

    if (check) {
        navigate('/captcha')
    }

    return (
        <div className='secure'>
            <div id='check'>
                <input type='checkbox' onChange={() => setCheck(!check)} />
                <label>I'm not a robot</label>
            </div>
        </div>
    )
}

export default Secure
