import React,{useState} from 'react'

const Register = (props) => {
    const [email,setemail]=useState("");
    const [pass,setpass]=useState("");
    const [name,setname]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email);
    }
    const inputname=(e)=>{
        e.preventDefault();
        setname(e.target.value);
       }
    const inputemail=(e)=>{
     e.preventDefault();
     setemail(e.target.value);
    }
    const inputpassword=(e)=>{
        e.preventDefault();
        setpass(e.target.value);
    }
  return (
    <>
    <div className='container'>
    <center><h1>Register:</h1></center>
    <form onSubmit={handleSubmit}>
    <label for="name"><b>Name:</b></label>
    <input value={name} onChange={inputname} type="text" placeholder="your full name" id="name" name="name" className="form-control"></input><br/>
    <label for="email"><b>Email:</b></label>
    <input value={email} onChange={inputemail} type="email" placeholder="youremail@gmail.com" id="email" name="email" className="form-control"></input><br/>
    <label for="password"><b>Password:</b></label>
    <input value={pass}  onChange={inputpassword} type="password" placeholder="*******" id="password" name="password" className="form-control"></input><br/>
    <center><button type="submit" className='btn btn-primary'>Register</button></center>
    </form><br/>
    <center><button className='btn btn-success' onClick={()=>props.onformswitch("Login")} >Already have an account?Login</button></center>
    <br/></div>
    </>
  )
}

export default Register
