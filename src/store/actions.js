import { getAuthInfo } from '../api/auth';
export default {
    async isAuthenticated(context){
        try{
            await getAuthInfo();
            context.commit('setAuth',true);
        } catch(error) {
            if (error.response.status === 401) {
                context.commit('setAuth',false);
                //place your reentry code
               }
        }
    }
}