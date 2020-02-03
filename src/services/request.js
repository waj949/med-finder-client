import axios from 'axios'; 

export default  {
    example: async () => {
        console.log("here")
        let res = await axios.get(`/api/pharmacy`);
        console.log(res)
        return res.data || [];
    }
};