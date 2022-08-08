export async function getDataFromApi(endpoint, method = "GET", body){
    const response = await fetch(`/${endpoint}`);

    return await response.json()
}

