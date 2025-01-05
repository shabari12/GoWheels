# User Registration Endpoint

## Endpoint: `/users/register`

### Method: POST

### Description:

This endpoint is used to register a new user. It validates the input data and creates a new user in the database if the data is valid.

### Request Body:

The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters.
  - `lastname`: A string with a minimum length of 3 characters.
- `email`: A valid email address.
- `password`: A string with a minimum length of 6 characters.

### Example Request Body:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Example Response Body Success:

```json
{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

### Example Error Response Body Error:

```json
{
  "errors": [
    {
      "msg": "First name must be at least 3 characters",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

### Example General Error Response Body:

```json
{
  "message": "Error message here"
}
```

# User Login Endpoint

## Endpoint: `/users/login`

### Method: POST

### Description:

This endpoint is used to log in an existing user. It validates the input data and returns a JWT token if the credentials are valid.

### Request Body:

The request body should be a JSON object with the following fields:

- `email`: A valid email address.
- `password`: A string with a minimum length of 6 characters.

### Example Request Body:

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Example Response Body Success:

```json
{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

### Example Error Response Body Error:

```json
{
  "errors": [
    {
      "msg": "Invalid email or password",
      "param": "email",
      "location": "body"
    }
  ]
}
```

### Example General Error Response Body:

```json
{
  "message": "Error message here"
}
```

# User Profile Endpoint

## Endpoint: `/users/profile`

### Method: GET

### Description:

This endpoint is used to retrieve the profile of the authenticated user. It requires a valid JWT token to be provided in the request headers or cookies.

### Headers:

- `Authorization`: Bearer token (if not using cookies)

### Example Request:

```http
GET /users/profile HTTP/1.1
Host: yourapi.com
Authorization: Bearer jwt_token_here
```

### Example Response Body Success:

```json
{
  "_id": "user_id_here",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
}
```

### Example Unauthorized Response Body:

```json
{
  "message": "Unauthorized"
}
```

# User Logout Endpoint

## Endpoint: `/users/logout`

### Method: GET

### Description:

This endpoint is used to log out the authenticated user. It requires a valid JWT token to be provided in the request headers or cookies.

### Headers:

- `Authorization`: Bearer token (if not using cookies)

### Example Request:

```http
GET /users/logout HTTP/1.1
Host: yourapi.com
Authorization: Bearer jwt_token_here
```

### Example Response Body Success:

```json
{
  "message": "Successfully logged out"
}
```

### Example Unauthorized Response Body:

```json
{
  "message": "Unauthorized"
}
```

# Captain Login Endpoint

## Endpoint: `/captains/login`

### Method: POST

### Description:

This endpoint is used to log in an existing captain. It validates the input data and returns a JWT token if the credentials are valid.

### Request Body:

The request body should be a JSON object with the following fields:

- `email`: A valid email address.
- `password`: A string with a minimum length of 6 characters.

### Example Request Body:

```json
{
  "email": "captain@example.com",
  "password": "password123"
}
```

### Example Response Body Success:

```json
{
  "token": "jwt_token_here",
  "captain": {
    "_id": "captain_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "captain@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

### Example Error Response Body Error:

````json
{
  "errors": [
    {
      "msg": "Invalid email or password",
      "param": "email",
      "location": "body"
    }
  ]
}

### Example General Error Response Body:

```json
{
  "message": "Error message here"
}
````

# Captain Profile Endpoint

## Endpoint: `/captains/profile`

### Method: POST

### Description:

This endpoint is used to retrieve the profile of the authenticated captain. It requires a valid JWT token to be provided in the request headers or cookies.

### Headers:

- `Authorization`: Bearer token (if not using cookies)

### Example Request:

```http
POST /captains/profile HTTP/1.1
Host: yourapi.com
Authorization: Bearer jwt_token_here
```

### Example Response Body Success:

```json
{
  "captain": {
    "_id": "captain_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "captain@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

### Example Unauthorized Response Body:

```json
{
  "message": "Unauthorized"
}
```

# Captain Logout Endpoint

## Endpoint: `/captains/logout`

### Method: POST

### Description:

This endpoint is used to log out the authenticated captain. It requires a valid JWT token to be provided in the request headers or cookies.

### Headers:

- `Authorization`: Bearer token (if not using cookies)

### Example Request:

```http
POST /captains/logout HTTP/1.1
Host: yourapi.com
Authorization: Bearer jwt_token_here
```

### Example Response Body Success:

```json
{
  "message": "logout Sucessfull"
}
```

### Example Unauthorized Response Body:

```json
{
  "message": "Unauthorized"
}
```

# Maps Routes

## Get Coordinates Endpoint

### Endpoint: `/maps/get-cordinates`

### Method: GET

### Description:

This endpoint is used to get the coordinates of a given address. It requires a valid JWT token to be provided in the request headers or cookies.

### Headers:

- `Authorization`: Bearer token (if not using cookies)

### Query Parameters:

- `address`: A string representing the address to get coordinates for.

### Example Request:

```http
GET /maps/get-cordinates?address=1600+Amphitheatre+Parkway HTTP/1.1
Host: yourapi.com
Authorization: Bearer jwt_token_here


{
  "latitude": 37.4224764,
  "longitude": -122.0842499
}

{
  "message": "cordinate not found"
}

GET /maps/get-distance-time?origin=1600+Amphitheatre+Parkway&destination=1+Infinite+Loop HTTP/1.1
Host: yourapi.com
Authorization: Bearer jwt_token_here

{
  "distance": "14.5 km",
  "duration": "20 mins"
}

{
  "message": "distance and time not found"
}

GET /maps/get-suggestions?input=1600+Amphitheatre HTTP/1.1
Host: yourapi.com
Authorization: Bearer jwt_token_here



[
  {
    "description": "1600 Amphitheatre Parkway, Mountain View, CA, USA",
    "place_id": "ChIJ2eUgeAK6j4ARbn5u_wAGqWA"
  },
  ...
]

{
  "message": "suggestions not found"
}


{
  "pickup": "1600 Amphitheatre Parkway",
  "destination": "1 Infinite Loop",
  "vehicleType": "car"
}

{
  "_id": "ride_id_here",
  "userId": "user_id_here",
  "pickup": "1600 Amphitheatre Parkway",
  "destination": "1 Infinite Loop",
  "fare": 100,
  "otp": "123456",
  "status": "pending"
}


{
  "message": "ride not created",
  "error": "Error message here"
}

{
  "message": "ride not created",
  "error": "Error message here"
}
```

# Get Fare Endpoint

## Endpoint: `/rides/get-fare`

### Method: GET

### Description:

This endpoint is used to calculate the fare for a ride based on the pickup and destination locations. It requires a valid JWT token to be provided in the request headers or cookies.

### Headers:

- `Authorization`: Bearer token (if not using cookies)

### Query Parameters:

- `pickup`: A string representing the pickup location.
- `destination`: A string representing the destination location.

### Example Request:

```http
GET /rides/get-fare?pickup=1600+Amphitheatre+Parkway&destination=1+Infinite+Loop HTTP/1.1
Host: yourapi.com
Authorization: Bearer jwt_token_here


{
  "auto": 100,
  "car": 150,
  "motorcycle": 75
}


{
  "message": "fare not calculated",
  "error": "Error message here"
}


{
  "message": "Validation error",
  "errors": [
    {
      "msg": "Invalid pickup",
      "param": "pickup",
      "location": "query"
    },
    {
      "msg": "Invalid destination",
      "param": "destination",
      "location": "query"
    }
  ]
}