import jwtDecode from "jwt-decode";

export const tokenExpired = (token) => {

    const tokenDecode = jwtDecode(token);

    const expiro = tokenDecode.exp * 1000;
    const time = new Date().getTime();
    if(time > expiro){
        return true;
    }
    return false;
}