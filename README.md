<div class="container">

## API Project: URL Shortener Microservice

### User Story:

1.  I can POST a URL to `[project_url]/api/shorturl/new` and I will receive a shortened URL in the JSON response.  
    Example : `{"original_url":"www.google.com","short_url":1}`
2.  If I pass an invalid URL that doesn't follow the `http(s)://www.example.com(/more/routes)` format, the JSON response will contain an error like `{"error":"invalid URL"}`  
    HINT: to be sure that the submitted url points to a valid site you can use the function `dns.lookup(host, cb)` from the `dns` core module.
3.  When I visit the shortened URL, it will redirect me to my original link.

### Short URL Creation

example: `POST [project_url]/api/shorturl/new` - `https://www.google.com`

<form action="api/shorturl/new" method="POST"><label for="url_input">URL to be shortened</label> <input id="url_input" type="text" name="url" value="https://www.freecodecamp.com"> <input type="submit" value="POST URL"></form>

### Example Usage:

[https://island-nail.glitch.me/api/shorturl/74](https://island-nail.glitch.me/api/shorturl/74)

### Will Redirect to:

https://freecodecamp.com

</div>

<div class="footer">

by [freeCodeCamp](http://www.freecodecamp.com)

</div>