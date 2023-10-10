export class performApi {
    static sendData = async ( path: string, method: string, body?: object) => {
        const response = await fetch(`http://10.107.144.19:3000/${path}`, {
            method: method,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })
        const data = await response.json()
        return data
    }

    static getData = async (path: string, token: string | null) => {
        const response = await fetch(`http://10.107.144.19:3000/${path}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        const data = await response.json()
        return data
    }

    static deleteData = async (path: string | number, token: string | null) => {
        const response = await fetch(`http://10.107.144.19:3000/${path}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        const data = await response.json()
        return data
    }
    
}