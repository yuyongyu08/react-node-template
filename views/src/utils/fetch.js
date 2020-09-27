
export default function (url = '', params = {}, option = {}) {
    return fetch(url, Object.assign({
    //     headers: {
    //         'content-type': 'application/json'
    //     },
        // credentials: 'include'
    }, option))
    .then(response => response.json())
    .catch((error) => {
        console.log(error)
    })
}