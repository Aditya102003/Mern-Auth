import styles from './styles.module.css';
import { Link,useNavigate} from react-router-dom
import {useState} from 'react' 
import e from 'cors';
import axios from 'axios'
const Signup = () =>{


    const [data,setData] = useState({
        FirstName:"",
        LastName:"",
        Email:"",
        Password:""   
    })
    const [error,setError] = useState("")
    const navigate = useNavigate();


    const handleChange =({currentTarget:input}) =>{
        setData({...data,[input.name]:input.value});
    }

    const handleSubmit  = async(e) =>{
e.preventDefault();
try {
    const url = 'http://localhost:8080/api/users'
    const {data:res} = await axios.post(url,data);
    navigate("./login")
 console.log(res.message);   
}catch(error){
    if(error.response && error.response.status>=400 && 
        res.response.status<=500
    ) {
        setError(error.resonse.data.message);

    } 
}


    }
    return (
        <div className={styles.signup_container}>
            <div  className = {styles.signup_form_container}>
<div className={styles.left}>
    <h1>WELCOME BACK</h1>
    <Link to ="/login">
    <button type ='button'  className={styles.white.btn} >
SIGN IN
    </button>
    
    
    </Link>
</div>
<div className={styles.right}>
<form  clasName ={styles.form_container} >
<h1>CREATE ACCOUNT</h1>
<input 
type = "text"
placeholder = "FIRST NAME" 
name ='FirstName'
onChange={handleChange}
value = {data.FirstName}
required
className = {styles.input}

/>

<input 
type = "text"
placeholder = "LAST NAME" 
name ='LastName'
onChange={handleChange}
value = {data.LastName}
required
className = {styles.input}

/>
<input 
type = "email"
placeholder = "Email" 
name ='FirstName'
onChange={handleChange}
value = {data.Email}
required
className = {styles.input}

/>

<input 
type = "password"
placeholder = "PASSWORD" 
name ='Password'
onChange={handleChange}
value = {data.Password}
required
className = {styles.input}

/>

{error && <div className ={styles.error.msg}>ERROR</div>}
<button 
type = "submit"
className={styles.green_btn}
onSubmit={handleSubmit}
>
    SIGN UP 
</button>


</form>


</div>
            </div>

        </div>
    )
};


export default Signup;
