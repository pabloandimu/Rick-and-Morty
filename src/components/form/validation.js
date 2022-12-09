
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const regexPassword = /^(?=.*?[a-z])(?=.*?[0-9]).{6,18}$/i;

export function validation(userData) {
    let errors = {};

    if (userData.username === "") errors.username = "Usuario requerido";
    else if (!regexEmail.test(userData.username))
        errors.username = "Ingrese un email válido como Username";
    else if (userData.username.length > 35)
        errors.username =
            "El nombre de usuario debe tener menos de 35 caracteres";
    else if (!regexPassword.test(userData.password))
        errors.password = "Debe contener entre 6 y 18 caracteres y al menos un Número";

    return errors;
}



// // const regexEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,34})+$/; 
// // const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

// // export function validation(userData){
// //   let errors = {};
// //   if(!userData.username.length) errors.username ="El nombre de usuario es requerido";
// //   else if(userData.username.length > 35) errors.username = "El nombre es demasiado largo"
// //   else if(regexEmail.test(userData.username)) errors.usermame = "Debe ser un email";

// //   return errors;
// // }

// // const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
// const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

// // const regexPassword = /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/;
// const regexPassword = /^(?=.[a-z])(?=.[A-Z])(?=.*[0-9])(?=.{6,10})/;

// export function validation(userData) {
//   let errors = {};

//   if(!regexEmail.test(userData.username)) errors.usermame = "Debe ser un email";
//   // if(userData.username.length < 35 ) errors.username = "El nombre de usuario es requerido";
//   // if(userData.username.length > 35) errors.username = "El nombre de usuario es demasiado largo";
//   // else 

//   //&& (!regexEmail.test(userData.username))) errors.usermame 

//   // if (!userData.username.length < 7) errors.usermame = "El username debe ser un email";
//   // else if (regexEmail.test(userData.username)) errors.usermame = "Debe ser un email";
//   // else if (userData.username.length >= 35) errors.usermame = "Debe tener menos de 35 caracteres";

//   // if (!regexEmail.test(userData.username))
//   //   errors.usermame = "Debe ser un email";
//   // if (userData.username.length < 3)  
//   //   errors.username = "El correo debe tener más de 3 caracteres";
//   //   if (userData.username.length < 5) errors.password = "deber ser mayor";    

//   // if (!userData.username) errors.usermame = "Se requiere un nombre";

// if (userData.password.length > 10 && userData.password.length < 6)
//   errors.password = "La contraseña debe tener entre 6 y 10 caracteres.";

// if (!regexPassword.test(userData.password))
//   errors.password = "La contraseña debe tener al menos un número.";

//   return errors;
// }

// // // if (!userData.username) {errors.usermame = "Se requiere un nombre";}
// // // else if (!regexEmail.test(userData.username)) {errors.usermame = "Debe ser un email";}
// // // else if( userData.username.length > 35) {errors.usermame = "El username no puede tener más de 35 caracteres";}

// // // if (userData.password.length > 10 && userData.password.length < 6)
// // //   errors.password = "La contraseña debe tener entre 6 y 10 caracteres.";
// // // else if (!regexPassword.test(userData.password))
// // //   errors.password = "La contraseña debe tener al menos un número.";



// // // const regexEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
// // const regexEmail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;


// // const regexPassword = /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/;
