
const Validation = (data)=>{

const errors = {}

if(!data.email){errors.e1 = "Ingrese un Email"}
else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)){errors.e2 = "El email debe ser válido."}   
else if (data.email.length>35) {errors.e3 = "El nombre de usuario es muy largo"}

if(!data.password){errors.p1="Ingrese una contraseña"}
else if (!/\d/.test(data.password)) {errors.p2 = "La contraseña debe contener al menos un número."}
else if(data.password.length<6 || data.password.length>10) {errors.p3 = "La contraseña debe tener entre 6 y 10 caracteres"}

return errors;
}


export default Validation