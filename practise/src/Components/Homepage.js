import React,{useState} from 'react';
import { RiShoppingCartFill } from "react-icons/ri";
import './Homepage.css';

   const Homepage=()=>
   {
    const initialState=
    {
        userName:" ",
        email:" ",
        userPassword:" ",
    };
    const [formState,setFormState]=useState(initialState);
    const [newErrors,setnewErrors]=useState({
        userName:" ",
        email:'',
        userPassword:'',
    });

    const onHandleChange=(e)=>
    {
        const {id,value}=e.target;
        setFormState({...formState,[id]:value});
    };

    const onHandleRegister=(e)=>
    {
        e.preventDefault();
        console.log("Register button clicked");
    }

    const onHandleLogin=(e)=>
    {
        e.preventDefault();
        console.log("Login button clicked");
    }

    const [responsive,setResponsive]=useState(false);
    const onHandleMenu=()=>
    {
            setResponsive((prevState)=>!prevState);    
    }

    const onHandleSubmit=(e)=>{
        e.preventDefault();
        if(validationForm()){
        console.log("Form Data submitted successfully...",formState);}
        else{
            console.log("Form has some errors. Provide proper details");
        }
        setFormState(initialState);
    };
    const validationForm=()=>
    {
        let valid=true;
        const Errors={...newErrors};
        if(!formState.userName.trim())
        {
            alert("Provide correct userName");
            valid=false;
        }
        else
        {
            newErrors.userName=' ';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formState.email.trim() || !emailRegex.test(formState.email)) {
          newErrors.email = 'Valid email is required';
          valid = false;
        } else {
          newErrors.email = '';
        }

        if(!formState.userPassword.trim()|| formState.userPassword.length>6)
        {
            newErrors.userPassword="Provide a password more than 6 characters";
            valid=false;
        }
        else
        {
            newErrors.userPassword=' ';
        }
        setnewErrors(Errors);
        return valid;
   }
    return(
        <div className='HomePage'>
        <div className='wrapper'>
            <nav className={`nav-menu ${responsive ? 'responsive' : ''}`} onClick={onHandleMenu}>
            <div className='nav-logo'>
                <center><p><RiShoppingCartFill color='Red' size={30}/>OneZ</p></center>
            </div>
            <div className="nav-menu" id="nav-menu">
            {/* <nav className={`nav-menu ${isResponsive ? 'responsive' : ''}`}> */}
                <ul>
                    <li><a href="#" className="link active">Home</a></li>
                    <li><a href="#" className="link">Login</a></li>
                    <li><a href="#" className='link'>Register</a></li>
                    <li><a href="#" className='link'>About Us</a></li>
                </ul>
            </div>
        
            <div className='nav-button'>
            <button
                    className={formState? 'btn white-btn' : 'btn'}
                    id="loginBtn"
                    onClick={onHandleLogin}>Login</button>
            <button className={formState?'btn':'btn white-btn'} id="registerBtn" onClick={onHandleRegister}>Register</button>
            </div>
            <div class="nav-menu-btn">
            <i class="bx bx-menu" onClick={onHandleMenu}></i>
            </div>
            </nav>
        </div>
            <div className='form-box' onSubmit={onHandleSubmit}>
            {/* <!-----Login form----> */}
             
            <div  className='Login-container' id='login'> 
            <div className="top">
                <span>Don't have an account? <a href="#" onClick={onHandleRegister}>Sign Up</a>
                </span>
                <header>Login</header>
             </div>
            <div className="input-box">
                <label htmlFor='username'>UserName:</label>
                <input type="text" className="input-field" value={formState.userName} onChange={onHandleChange} placeholder="Username" />
                <i className="bx bx-user"></i></div>
            <div className="input-box">
                <label htmlFor='email'>Email:</label>
                <input type='text' className='input-field' value={formState.email} onChange={onHandleChange} placeholder='Email'/>
            </div>
            <div className="input-box">
                <label htmlFor='Password'>Password:</label>
                <input type="password" className="input-field"  value={formState.userPassword} onChange={onHandleChange} placeholder="Password" />
                 <i className="bx bx-lock-alt"></i>
             </div>
            <div className="input-box">
                <input type="submit" className="submit" value="Sign In" onClick={onHandleSubmit} />
                </div>
            <div className="two-col">
            <div className="one">
                 <input type="checkbox" id="login-check" />
                 <label htmlFor="login-check"> Remember Me</label>
            </div>
            <div className="two">
                <label><a href="#">Forgot password?</a></label>
            </div>
        </div>
    <div className="Register-Container" id='register'>
        <div className="top">
        <span>Have an account? <a href="#" onClick={onHandleRegister}>Login</a></span>
        <header>Sign Up</header>
      </div>
      <div className="two-forms">
        <div className="input-box">
          <input type="text" className="input-field" value={formState.userName} onChange={onHandleChange} placeholder="Username" />
          <i className="bx bx-user"></i>
        </div>
      </div>
      <div className="input-box">
        <input type="text" className="input-field" value={formState.email} onChange={onHandleChange} placeholder="Email" />
        <i className="bx bx-envelope"></i>
      </div>
      <div className="input-box">
        <input type="password" className="input-field" value={formState.userPassword} onChange={onHandleChange} placeholder="Password" />
        <i className="bx bx-lock-alt"></i>
      </div>
      <div className="input-box">
        <input type="submit" className="submit" value={onHandleSubmit} />
      </div>
      <div className="two-col">
        <div className="one">
          <input type="checkbox" id="register-check" />
          <label htmlFor="register-check"> Remember Me</label>
        </div>
        <div className="two">
          <label><a href="#">Terms & conditions</a></label>
        </div>
    </div>
    </div>
    </div>
      </div>
      </div>
    );
   }


export default Homepage;