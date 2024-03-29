import React,{useState} from 'react'
import '../Styles/Login.css'
import axios from 'axios'
import BackgrdImage from '../Images/Photoback.png';

function Login() {
    const initialState={
        userName:"",
        email:"",
        userPassword:""
    }
    const[formState,setFormState]=useState(initialState);
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

    // const onHandleLogin= async () => {
    //         try {
    //           const response = await axios.post('http://localhost:3001/login', {
    //             email: 'user@example.com',
    //             password: 'password123',
    //           });
          
    //           console.log(response.data); // Handle response from the server
    //         } catch (error) {
    //           console.error('Error logging in:', error);
    //         }
    //       };
        // e.preventDefault();
        // console.log("Login button clicked");


    const onHandleRegister=(e)=>
    {
        e.preventDefault();
        console.log("Register button clicked");
    }

    const [responsive,setResponsive]=useState(false);
    //  const navigate = useHistory(); // Use history for redirection
    const onHandleMenu=()=>
    {
            setResponsive((responsive)=>!responsive);    
    }
    const onHandleSubmit = (e) => {
        e.preventDefault();
        if (validationForm()) {
          // Make a POST request to the server
        axios.post("http://localhost:3001/Login", {
            email: formState.email,
            userPassword: formState.userPassword,
          })
          .then((response) => {
            console.log("Server response:", response.data);
           
            console.log(formState.email,formState.userPassword);
            if (response.data==="Login Sucesss!!") {
              console.log("User logged in successfully");
              // Redirect or perform any other action after successful login
              window.location.href = "/MenuCart";
              setFormState(initialState);
            } else {
              console.log("Login failed. Provide proper details");
              // Handle login failure
            }
          })
          .catch((error) => {
            console.error("Error logging in:", error);
          });
        } else {
          console.log("Form has some errors. Provide proper details");
        }
      };
      

    // const onHandleSubmit=(e)=>{
    //     e.preventDefault();
    //     axios.post("http://localhost:3001/Login",{email:formState.email,userPassword:formState.userPassword})
    //     .then(res=>console.log(res))
    //     .catch(err=>console.log(err))
    //     if(validationForm()){
    //     console.log("Form Data submitted successfully...",formState);
    //     window.location.href="/MenuCart";
    //     setFormState(initialState);
    // }
    //     else{
    //         console.log("Form has some errors. Provide proper details");
    //     }
    // };
    const validationForm=()=>
    {
        let valid=true;
        const Errors={...newErrors};
        if(!formState.userName.trim())
        {
            Errors.email="Provide correct Username";
            valid=false;
        }
        else
        {
            Errors.userName=' ';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formState.email.trim() || !emailRegex.test(formState.email)) {
          Errors.email = 'Valid email is required';
          valid = false;
        } else {
          Errors.email = '';
        }

        if (!formState.userPassword.trim() || formState.userPassword.length < 5) {
            Errors.userPassword = 'Provide a password of at least 6 characters';
            valid = false;
          } else {
            Errors.userPassword = '';
          }
        setnewErrors(Errors);
        return valid;
   }


  return (
    <div className='Login' style={{backgroundImage:`url(${BackgrdImage})`}}>
        <div className='Header-Container' onClick={onHandleMenu}>        
      <div className='form-box'>
        <form onSubmit={onHandleSubmit}>
            {/* <!-----Login form----> */}
             
            <div className='Login-container' id='login' > 
            <div className="top">
                {/* <span>Don't have an account? <Link to="/Register" >
                    <button onClick={onHandleRegister}>Sign Up</button></Link>
                </span> */}
                <header><b>Login</b></header>
             </div>
            <div className="input-box">
                <label htmlFor='username'>UserName:</label>
                <input type="text" className="input-field" id="userName" value={formState.userName} onChange={onHandleChange} placeholder="Username" />
                <i className="bx bx-user"></i></div><br/>
                <span className="error">{newErrors.userName}</span>
            <div className="input-box">
                <label htmlFor='email'>Email:</label>
                <input type='text' className='input-field' id="email" value={formState.email} onChange={onHandleChange} placeholder='Email'/>
                <span className="error">{newErrors.email}</span>
            </div><br/>
            <div className="input-box">
                <label htmlFor='Password'>Password:</label>
                <input type="password" className="input-field" id="userPassword" value={formState.userPassword} onChange={onHandleChange} placeholder="Password" />
                 <i className="bx bx-lock-alt"></i>
                 <span className="error">{newErrors.userPassword}</span>
             </div><br/>
            <div className="input-box">
            <input type="submit" className="submit" value="Sign In" />
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
  )
}

export default Login
