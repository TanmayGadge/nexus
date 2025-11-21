import axios from "axios";

interface Database{
    name: string,
    url: string
}

async function sendData(data: Database) : Promise<Database>{
  try {
    const response = await axios.post('http://127.0.0.1:8000/database/connect', data);
    return response.data;
  } catch (error) {
    console.error("Error sending data to the database:", error);
    throw error;
  }
}

export default sendData