function botNotify(message){
    const token = "6550731156:AAGJkAcyEBnalZ2TKDYasEOG4jyVdvIel38";
    const apiUrl = "https://api.telegram.org/bot";
    const queryParams = {
            "text": message,
            "chat_id" : "6424026652",
            "parse_mode":"html"
        };
    const queryString = Object.keys(queryParams)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(queryParams[key]))
    .join("&");
    // Construct the  URL with the query string
    const link = `${apiUrl}${token}/sendMessage?${queryString}`;
    // $getId ="https://api.telegram.org/bot6390734132:AAH6cmhS58odS_4q8zEyQJDOgS1seD_9uig/getUpdates";
    // Make a GET request using the fetch API
        fetch(link)
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