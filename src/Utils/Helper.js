export function isLogin() {
    return sessionStorage.getItem('token') != null;
}


export function generateRequest(requestUrl, requestMethod, bodyData) {
    const baseURL = "https://reqres.in/api/";
    const request = {
        url: baseURL + requestUrl,
        method: requestMethod,
        body: bodyData
    };
    let userToken = sessionStorage.getItem('token') == null ? "" : sessionStorage.getItem('token');
    // console.log("userToken= " + userToken)
    // console.log("userTokenSecret= " + userTokenSecret)

    // const authHeader = Oauth1Helper.getAuthHeaderForRequest(request, userToken, userTokenSecret);

    return fetch(request.url, {
        method: request.method,
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(request.body),
    }).then(
        (response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Something went wrong');
            }
        }
    )

}
