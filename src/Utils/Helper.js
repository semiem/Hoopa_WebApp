export function isLogin() {
    return sessionStorage.getItem('token') != null;
}


export function generateRequest(requestUrl, requestMethod, bodyData) {
    const baseURL = "https://reqres.in/api/";
    let fullUrl = baseURL + requestUrl;
    let userToken = sessionStorage.getItem('token') == null ? "" : sessionStorage.getItem('token');
    // console.log("userToken= " + userToken)
    // console.log("userTokenSecret= " + userTokenSecret)

    // const authHeader = Oauth1Helper.getAuthHeaderForRequest(request, userToken, userTokenSecret);

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
        }
    );
}