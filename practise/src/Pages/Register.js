import React,{useState} from 'react'
import BackgrdImage from '../Images/Photoback.png';
import '../Styles/Register.css'
import axios from 'axios'
function Register() {
    const initialState={
        Name:" ",
        email:" ",
        Password:" ",
    }
    const[formState,setFormState]=useState(initialState);
    const [newErrors,setnewErrors]=useState({
        Name:" ",
        email:'',
        Password:'',
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

    const [responsive,setResponsive]=useState(false);
    const onHandleMenu=()=>
    {
            setResponsive((responsive)=>!responsive);    
    }

    const onHandleSubmit = (e) => {
        e.preventDefault();
        if (validationForm()) {
          // Make a POST request to the server for registration
          axios.post('http://localhost:3001/register', {
            userName: formState.Name,
            email: formState.email,
            userPassword: formState.Password,
          })
          .then((response) => {
            console.log('Server response:', response.data);
            // Handle the response according to your application logic
            if (response.data ==='User registered successfully') {
              console.log('User registered successfully');
              window.location.href="/Login";
            } else {
              console.log('Registration failed. Provide proper details');
              // Handle registration failure
            }
          })
          .catch((error) => {
            console.error('Error registering user:', error);
          });
        } else {
          console.log('Form has some errors. Provide proper details');
        }
        setFormState(initialState);
      };
    const validationForm=()=>
    {
        let valid=true;
        const Errors={...newErrors};
        if(!formState.Name.trim())
        {
            alert("Provide correct userName");
            valid=false;
        }
        else
        {
            newErrors.Name=' ';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formState.email.trim() || !emailRegex.test(formState.email)) {
          newErrors.email = 'Valid email is required';
          valid = false;
        } else {
          newErrors.email = '';
        }

        if(!formState.Password.trim()|| formState.Password.length>6)
        {
            newErrors.Password="Provide a password more than 6 characters";
            valid=false;
        }
        else
        {
            newErrors.Password=' ';
        }
        setnewErrors(Errors);
        return valid;
   }

  return (
    <div>
       <div className='Register' style={{backgroundImage:`url(${BackgrdImage})`}}>
        <div className='Header-Container' onClick={onHandleMenu}>        
      <div className='form-box'>
        <form onSubmit={onHandleSubmit}>
            {/* <!-----Login form----> */}
             
            <div className='Register-container' id='register'> 
            <div className="top">
                {/* <span>Don't have an account? <Link to="/Register" >
                    <button onClick={onHandleRegister}>Sign Up</button></Link>
                </span> */}
                <header><b>Register</b></header>
             </div>
            <div className="input-box">
                <label htmlFor='username'>Name:</label>
                <input type="text" className="input-field" id="Name" value={formState.Name} onChange={onHandleChange} placeholder="Username" />
                <i className="bx bx-user"></i></div><br/>
            <div className="input-box">
                <label htmlFor='email'>Email:</label>
                <input type='text' className='input-field' id="email" value={formState.email} onChange={onHandleChange} placeholder='Email'/>
            </div><br/>
            <div className="input-box">
                <label htmlFor='Password'>Password:</label>
                <input type="password" className="input-field" id="Password" value={formState.Password} onChange={onHandleChange} placeholder="Password" />
                 <i className="bx bx-lock-alt"></i>
             </div><br/>
            <div className="input-box">
                <input type="submit" className="submit" value="Register" />
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
        </div>
        </form>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Register
