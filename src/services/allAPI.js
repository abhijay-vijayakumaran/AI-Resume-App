import commonAPI from "./commonAPI"
import { server_url } from "./server_url"


//Add ResumeAPI
export const addResumeAPI = async (resumeData) => {
    return await commonAPI('POST', `${server_url}/resumes`, resumeData)
}


//Get ResumeAPI
export const getResumeAPI = async (id) => {
    return await commonAPI('GET', `${server_url}/resumes/${id}`, {})
}


//Edit ResumeAPI
export const editResumeAPI = async (id,resumeData) => {
    return await commonAPI('PUT', `${server_url}/resumes/${id}`, resumeData)
}


//Add downloadHistoryAPI
export const addDownloadHistoryAPI = async (resumeData) => {
    return await commonAPI('POST', `${server_url}/downloads/`, resumeData)
}


//getDownloadsAPI
export const getDownloadsAPI = async () => {
    return await commonAPI('GET', `${server_url}/downloads`, {})
}

//deleteDownloadsAPI
export const deleteDownloadsAPI = async (id) => {
    return await commonAPI('DELETE', `${server_url}/downloads/${id}`, {})
}