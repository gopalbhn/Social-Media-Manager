import { selector } from "recoil";
import { userState } from "../atoms/user.atom";

export const userEmail = selector({
    key:'userEmail',
    get:({get})=>{
        const state = get(userState)
        const user = state.user;
  
        if(user){
            return user.email
        }
        return null
   
    }
})