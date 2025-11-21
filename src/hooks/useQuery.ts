// Send Query to FastAPI
import axios, {AxiosError} from "axios";

interface Query{
    query: string
}

async function useQuery(data: Query){

    try {
        let response = await axios.post('http://127.0.0.1:8000/query/', data);

        let result = response.data.result;
        console.log(result);
        return result;

        
    } catch (error) {
        if(axios.isAxiosError(error)){
            if(error.response && error.response.status === 503){
                console.error("Database not connected (Error 503: Service Unavailable).");
            }
        }
    }


}

export default useQuery;