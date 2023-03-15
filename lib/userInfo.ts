import {useQuery} from "react-query";
import axios from "axios";

let param;


const getUserInfo = async (userId) => {
    const {data} = await axios.post(
        'http://localhost:4000/myPage/getUserInfo',{
            params : {user_id : userId}}
    )
    return data[0];
}

export default (userId) => {

    const res = useQuery('userInfo', ()=> getUserInfo(userId));

    const {status, data, error} = res;
    return {status, data, error};
}