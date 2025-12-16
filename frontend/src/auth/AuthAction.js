export const Loginstart = (userData)=>({
    type: "LOGIN_START",
    });
    export const Loginsuccess = (user)=>({
    type: "LOGIN_SUCCESS",
    payloard: user,
    });
    export const Loginfail = (error)=>({
    type: "LOGIN_FAILED",
    payloard: error,
    });
    export const Logout = ()=>({
    type: "LOGOUT",
    payloard: error,
    });