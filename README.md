![Vibehut.io](images/logo.png)
# Vibehut API

The Vibehut API provides RESTful endpoints for you to interact easily with Vibehut's data.. so you can help manage and accelerate the good vibes 💪

## Getting Started

1. Login to Vibehut using any popular social account
2. Generate authentication token
3. Start coding!

```js
const axios = require('axios');

const apiKey = [API KEY];
const url = 'https://vibehut.io/api/v1/public/events'; 
// or any endpont of your choosing!

const headers = {
  'api-key': `${apiKey}`
};

axios.get(url, { params, headers })
  .then(response => {
    console.log(JSON.stringify(response.data.data[0]));
  })
  .catch(error => {
    console.error(error);
  });
```

## Authentication

The Vibehut API uses token-based authentication. To authenticate requests, include the `api-key` header with a valid access token. 

To get a token 
1. Login to Vibehut
2. Account Settings (Click profile in bottom left)
3. API Key in the sidebar
4. Create

![Account Settings](images/api.png)

```js
const headers = {
  'api-key': `${apiKey}`
};

axios.get(url, { params, headers })
```

## Endpoints

### Endpoint Highlights

We want to make time to first lines of code written as fast as possible. Here are some of our most popular endpoints. Please see the documentation below for a comprehensive list.

The root url is always `https://vibehut.io/api/v1/public/` so events is `https://vibehut.io/api/v1/public/events` 

`/events` - create, read, update events
- commonly used params: roomSlug, roomId, desoPublicKey
- filterBy [popular, upcoming, new]

`/calls` - create new instant call link

`/calls/active-calls` - see what calls are currently active

`/feed` - query the vibehut feed

`/notifications`- retrieve notifications

`/rooms` - create a room

## More Endpoints! See All API Documentation

The API documentation can be found [here](https://vibehut.notion.site/Vibehut-V1-Api-6f005655867747228cd5fef603f2ca45?pvs=4). It provides detailed information about each endpoint, including request and response examples.


## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
