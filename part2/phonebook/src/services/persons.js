import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl)
        .then(response => response.data)
}

const create = newObject => {
    return axios.post(baseUrl, newObject)
        .then(response => response.data)
}

const remove = object => {
    return axios.delete(`${baseUrl}/${object.id}`, object)
        .then(response => {
            console.log(response.data)
            // return response.data
        })
}

// const update = (id, newObject) => {
//   return axios.put(`${baseUrl}/${id}`, newObject)
// }

// export default {
//     getAll: getAll,
//     create: create, 
//     update: update 
// }
export default { getAll, create, remove }