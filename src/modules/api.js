const url = "https://itunes.apple.com/"

export const getSwapi = async (endpoint) => {
    try {
        const data = await getApi(endpoint);//'endpoint'
        return data
    } catch (err) {
        alert(err)
    }
}
const getApi = async (endpoint) => {
    const timeoutId = new Promise((resolve) => setTimeout(() => resolve(false), 20000))
    return new Promise(async (resolve, reject) => {
        fetch(url + endpoint).then((response) => response.json())
            .then((responseJson) => resolve(responseJson))
            .catch(() => reject('El servicio no responde'))
        const timer = await timeoutId;
        if (!timer) {
            reject('El tiempo de respuesta del servicio es demasiado alto, intentelo más tarde');
        }
    })
}