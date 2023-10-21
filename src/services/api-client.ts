import axios from "axios";

 export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: '3d470ec382bc4bbfa1e881344938d5ee'
    }
})