/**
 * Strapi Fetch API
 * @param {String} path 
 * @param {Object} urlParamsObject 
 * @param {*} options 
 */
export async function fetchAPI(path, urlParamsObject = {}, options = {}) {
  const mergedOptions = {
    headers: { 
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    },
    ...options,
  }

  const url = `${process.env.STRAPI_API_URL}/api${path}`

  const { data, error } = await fetch(url, mergedOptions).then((res) => res.json());

  if (error) {
    console.error(error);
    throw new Error(`Strapi ${error.name}: ${error.message}`);
  }

  return data;
}
