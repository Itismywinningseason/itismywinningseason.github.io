console.log("before fetch");
//make the request
fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=GREJXJ6zskHXW94f2UnAdRSUrGaW2xZG")
.then(
    (response, error) => {
        console.log(response);
        response.json().then((data, error)=>{
            console.log(data)
            //rest of code goes here because this function is the 
            //only place we have access to the json parsed data
        }) 
        
    });
    console.log("after fetch");
    const obj = JSON.parse("Hardcover Fiction");
    //parse (convert) the data from the response 
    //dive into the data to get out what we want (require for loops)
    //make the data show in our html. Get element by id.