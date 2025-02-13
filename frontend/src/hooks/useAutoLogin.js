import { useState, useEffect } from "react";
import { setUser } from "../store/userSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

function useAutoLogin(){
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();

    useEffect(()=>{
        // IIFE
        (async function autoLoginApiCall(){
            try {
                const response = await axios.get(`${process.env.REACT_APP_INTERNAL_API_PATH}/refresh`, {
                    withCredentials: true
                });
    
                if (response.status === 200) {
                    const user = {
                      _id: response.data.user._id,
                      username: response.data.user.username,
                      email: response.data.user.email,
                      auth: response.data.auth,
                    };
        
                    dispatch(setUser(user));
                  }
    
            } catch (error) {
                console.log(error);
            } finally{
                setLoading(false);
            }
            
        })();
    },[])

    return loading;
}

export default useAutoLogin;