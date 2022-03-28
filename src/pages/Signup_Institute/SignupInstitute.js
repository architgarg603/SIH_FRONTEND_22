import React, { useState } from 'react';
import style from './Signup.module.scss'
import { Link, useNavigate } from 'react-router-dom';
import { instituteSignup } from '../../Services/AuthServices';
function SignupInstitute() {

    const [details, setDetails] = useState({});
    const navigate = useNavigate();
    const onSubmitHandler = async () => {
        try {
            await instituteSignup(details);
            navigate('/login/institute')
        } catch (err) {
            console.log(err)
        }
    }

    return <div className={style.wrapper}>
        <div className={style.right}>
            <div>
                <div className={style.head}>Register your account</div>

                <div className={style.subHead} >Email</div>
                <input type="text" placeholder='Enter Email' onChange={(e) => { setDetails({ ...details, email: e.target.value }) }} />

                <div className={style.subHead}>Password</div>
                <input type="password" placeholder='Enter Password' onChange={(e) => { setDetails({ ...details, password: e.target.value }) }} />

                <div className={style.subHead} >Address</div>
                <input type="text" placeholder='Enter Address' onChange={(e) => { setDetails({ ...details, address: e.target.value }) }} />

                <div className={style.subHead} style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }} >
                    <input type="checkbox" style={{ width: '15px', height: '15px', margin: '0', marginRight: '10px' }} onChange={(e) => { setDetails({ ...details, isParent: e.target.checked }) }} />
                    Institute is a Parent Institute
                </div>
                <div className={style.subHead} style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }} >
                    <input type="checkbox" style={{ width: '15px', height: '15px', margin: '0', marginRight: '10px' }} onChange={(e) => { setDetails({ ...details, isResource: e.target.checked }) }} />
                    Institute has resources ?
                </div>

                <div className={style.btn} onClick={onSubmitHandler}>Sign Up</div>
            </div>
            <div className={style.signup} >Already have an account?
                <Link to="/login/institute"> <span>Log In</span></Link>
            </div>
        </div>
    </div>;
}

export default SignupInstitute;