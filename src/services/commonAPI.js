import axios from "axios"


// Axios keys
//axios config creating steps
const commonAPI = async (httpMethod, url, reqBody) => {

    const reqConfig = {
        
        method: httpMethod,
        url,
        data: reqBody
    }

    try {

        const request = await axios(reqConfig)
        return request

    }
    catch (err) {
        throw err
    }
}

//Export commonAPI
export default commonAPI