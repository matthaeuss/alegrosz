export async function handleDataFromAPI(endpoint, method = "GET", body) {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (body !== undefined) {
    options["body"] = JSON.stringify(body);
  }

  const response = await fetch(`/${endpoint}`, options);

  if (response.status === 401) {
    throw new Error("User is not logged in.");
  }

  if (response.status !== 200) {
    return [];
  }

  return await response.json();
}

export async function getAllProductData(id) {
  const data = await handleDataFromAPI(`v1/products/${id}`);

  const [comments, opinions, category, subcategory] = await Promise.all([
    handleDataFromAPI(
      `v1/comments?${data.comments.map((comment) => "id=" + comment).join("&")}`
    ),
    handleDataFromAPI(
      `v1/opinions?${data.opinions.map((opinion) => "id=" + opinion).join("&")}`
    ),
    handleDataFromAPI(`v1/categories/${data.category}`),
    handleDataFromAPI(`v1/subcategories/${data.subcategory}`),
  ]);

  return {
    ...data,
    comments,
    opinions,
    category: category.name,
    subcategory: subcategory.name,
  };
}
