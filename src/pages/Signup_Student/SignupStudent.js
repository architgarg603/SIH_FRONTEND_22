import React, { useState } from 'react';
import style from './Signup.module.scss'
import { Link, useNavigate } from 'react-router-dom';
import { studentSignup } from '../../Services/AuthServices';
function SignupStudent() {
    const navigate = useNavigate();
    const [details, setDetails] = useState({})

    const onSubmitHandler = async ()=>{
        try{
            await studentSignup(details);
            navigate('/login/student');
        }catch(err){
            console.log(err)
        }

    }

    return <div className={style.wrapper}>
        <div className={style.right}>
            <div>
                <div className={style.head}>Register your account</div>

                <div className={style.subHead}>Full Name</div>
                <input type="text" placeholder='Enter Name' onChange={(e)=>setDetails({...details,name:e.target.value})} />

                <div className={style.subHead} >Email</div>
                <input type="text" placeholder='Enter Email' onChange={(e)=>setDetails({...details,email:e.target.value})} />

                <div className={style.subHead}>Password</div>
                <input type="password" placeholder='Enter Password' onChange={(e)=>setDetails({...details,password:e.target.value})}/>

                <div className={style.subHead}>Institute Id</div>
                <input type="text" placeholder='Enter Institute Id'  onChange={(e)=>setDetails({...details,id:e.target.value})}/>

                <div className={style.btn} onClick={onSubmitHandler}>Sign Up</div>
            </div>
            <div className={style.signup}>Already have an account?
                <Link to="/login/student"> <span>Log In</span></Link>
            </div>
        </div>
    </div>;
}

export default SignupStudent;