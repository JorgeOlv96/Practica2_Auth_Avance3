import { storageController } from "../api/Token"
import { tokenExpired } from "./tokenExpired"



export const authFetch = async (url, params) =>{
    const token = await storageController.getToken();

    const logout = () => {
        storageController.removeToken();
    };
    if(!token){
        logout();
    }else{
        //funcion para añadir el token a la cabezera de la peticion considera los parametros que se le pasan
        const paramsTemp ={
            ...params,
            headers:{
                //Se añade los parametros que se le pasan a la cabezera importante que Authorizan oara despues de los parametros que se le pasan
                ...params?.headers,
                Authorization: `Bearer ${token}`
            }
        }
        try{
            return await fetch(url,paramsTemp);
        }catch(error){
            console.log("src/utils/authFetch",error)
        }
    }
}