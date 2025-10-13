import axios from 'axios'

interface User{
    id: number,
    name: string,
    email: string
}

async function getUser(userId: number): Promise<User>{
    try {
        let result = await axios.get(`http://127.0.0.1:8000/users/${userId}`);
        return result.data;
    } catch (error) {
        if(axios.isAxiosError(error)){
            console.error('Axios Error: ', (error as Error).message)
        }
        else{
            console.error('Unexpecte Error: ', (error as Error).message)
        }
        throw error;
    }
}

export default getUser