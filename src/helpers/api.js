export async function getDataFromApi(endpoint, method = "GET", body){
    const response = await fetch(`/${endpoint}`);

    return await response.json()
}

export async function getAllProductData(id){
    let data = await getDataFromApi(`v1/products/${id}`);

    const [comments, opinions, category, subcategory] = await Promise.all([
        getDataFromApi(`v1/comments?${data.comments.map((comment) => "id=" + comment).join("&")}`),
        getDataFromApi(`v1/opinions?${data.opinions.map((opinion) => "id=" + opinion).join("&")}`),
        getDataFromApi(`v1/categories?${data.category}`),
        getDataFromApi(`v1/subcategories?${data.subcategory}`),
    ]);

    return {...data, comments, opinions, category: category.name, subcategory: subcategory.name}
}