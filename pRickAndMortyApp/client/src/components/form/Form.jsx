import { useState } from "react"; 
import Validation from "../validation/Validation";
import styles from './Form.module.css'


const Form=(props)=>{

 //CUIDADO CON ESTO A LA HORA DEL EXAMEN
const login = props.login

const [userData, setUserData] = useState({
    email: "",
    password: ""
})

const [errors, setErrors] = useState({});


const handleChange = (event)=>{
    setUserData({
        ...userData,
        [event.target.name]: event.target.value
    });
       //ESTA PARTE ES PARA TOMAR EL ESTADO ACTUAL
        const validationErrors = Validation({
        ...userData,
        [event.target.name]: event.target.value
    });

    setErrors(validationErrors);
       //
};

const handleSubmit=(event)=>{
    event.preventDefault();
    login(userData);
    setUserData({
        email: "",
        password: "" 
    })

}
const handleClickInvitado=(event)=>{
    event.preventDefault();
    login({
         email: "rickandmorty@hotmail.com",
        password: "1234567" });   
}



    return(
        <div>

          <form onSubmit={handleSubmit}className={styles.Formulario}>
          <label>Email: </label>
          <input
           type="text"
           name="email"
           value={userData.email} 
           onChange={handleChange}/>
           {errors.e1? <p>{errors.e1}</p>: null}
           {errors.e2? <p>{errors.e2}</p>: null}
           {errors.e3? <p>{errors.e3}</p>: null}
           

           <label>Password: </label>
           <input 
           type="password"
           name="password"
           value={userData.password} 
           onChange={handleChange} />
           {errors.p1? <p>{errors.p1}</p>: null}
           {errors.p2? <p>{errors.p2}</p>: null}
           {errors.p3? <p>{errors.p3}</p>: null}
            
            
     {/* puedo utilizar disable para esconder o deshabilitar el boton submit hasta que este todo en condiciones */}
     {/* el handleSubmit en vez de pasarselo al button se lo estoy pasando al form por recomendaciones del profe */}
           <button type="submit" className={styles.iniciar}>Iniciar sesion</button>  
            <button onClick={handleClickInvitado} className={styles.invitado}>Ingresar como invitado</button>
             
          </form>
        </div>
        
    )
}

export default Form;