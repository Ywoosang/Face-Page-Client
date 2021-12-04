import getAuthInfo from '../api/auth';
export default {
    async isAuthenticated(context){
        try{
            await getAuthInfo();
            context.commit('setAuth',true);
        } catch(error) {
            context.commit('setAuth',false);
        }
    }
}