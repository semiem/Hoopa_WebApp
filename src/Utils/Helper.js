export function isLogin() {
    return sessionStorage.getItem('token') != null;
}


export const addDataIntoCache = (cacheName, url, response) => {
    // Converting our respons into Actual Response form
    const data = new Response(JSON.stringify(response));

    if ('caches' in window) {
        // Opening given cache and putting our data into it
        caches.open(cacheName).then((cache) => {
            cache.put(url, data);
        });
    }
};
export const getCacheData = async (name, url) => {

    // var names = await caches.keys()
    const cacheStorage = await caches.open(name);
    const cachedResponse = await cacheStorage.match(url);
    // if (cachedResponse == undefined)
    //     throw new Error('Something went wrong');
    return await cachedResponse.json();
};

export function generateRequest(requestUrl, requestMethod, bodyData) {
    const baseURL = "https://reqres.in/api/";
    let fullUrl = baseURL + requestUrl;
    let userToken = sessionStorage.getItem('token') == null ? "" : sessionStorage.getItem('token');

    let fetchT = null;
    if (requestMethod == "GET" || requestMethod == "get")
        fetchT = fetch(fullUrl, {
            method: requestMethod,
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }
        });
    else if (requestMethod == "POST" || requestMethod == "post")
        fetchT = fetch(fullUrl, {
            method: requestMethod,
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(bodyData)
        });

    return fetchT.then(
        (response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Something went wrong');
            }
        },
        async (error) => {
            if (isLogin())
                return await getCacheData("RequestCaches", "users");
            else
                throw new Error('Something went wrong');
        }
    );
}