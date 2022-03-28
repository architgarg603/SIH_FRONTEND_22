import React, { useState } from 'react';
import style from './Login.module.scss'
import { Link, useNavigate } from 'react-router-dom';
import { studentLogin } from '../../Services/AuthServices'
function LoginStudent() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const onSubmitHandler = async () => {
        try {
            const data = await studentLogin({ email, password })
            let token = data.token_type + " " + data.access_token;
            localStorage.setItem("token", token)
            localStorage.setItem("type", "student")
            navigate("/")
        } catch (err) {
            console.log(err)
        }
    }

    return <div className={style.container}>

        <div className={style.rightContainer}>
            <div>
                <div className={style.heading}>Login To Your Account</div>

                <div className={style.email} >Email</div>
                <input type="text" placeholder='Enter Email' onChange={(e) => { setEmail(e.target.value) }} />

                <div className={style.password}>Password</div>
                <input type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />

                <div className={style.btn} onClick={onSubmitHandler} >Login</div>
            </div>
            <div className={style.login}>Dont have an account?
                <Link to="/signup/student"> <span>Signup</span></Link>
            </div>
        </div>
    </div>;
}

export default LoginStudent;