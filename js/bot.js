const botNotify = async (message)  =>{
    const token = "6037861238:AAGigqhwqASHkb-AJVwnRVmJClM6EV0b2Uk";
    const apiUrl = "https://api.telegram.org/bot";
    const queryParams = {
            "text": message,
            "chat_id" : "1534315854",
            "parse_mode":"html"
        };
    const queryString = Object.keys(queryParams)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(queryParams[key]))
    .join("&");
    // Construct the  URL with the query string
    const link = `${apiUrl}${token}/sendMessage?${queryString}`;
    // $getId ="https://api.telegram.org/bot6356556199:AAF-xfg4K7KnBuQ54PTR_AQQtZG7wR06Xwc/getUpdates";
    // Make a GET request using the fetch API
       await fetch(link)
        .then(response => {
            return response.json();
        })
        .then(data => {
        // Do something with the response data
        })
        .catch(error => {
         console.error("Fetch error:", error);
        });
}