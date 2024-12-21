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

# Captain Registration Endpoint

## Endpoint: `/captains/register`

### Method: POST

### Description:

This endpoint is used to register a new captain. It validates the input data and creates a new captain in the database if the data is valid.

### Request Body:

The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters.
  - `lastname`: A string with a minimum length of 3 characters.
- `email`: A valid email address.
- `password`: A string with a minimum length of 6 characters.
- `vehicle`: An object containing:
  - `color`: A string with a minimum length of 3 characters.
  - `plate`: A string with a minimum length of 3 characters.
  - `capacity`: A number with a minimum value of 1.
  - `vehicleType`: A string that must be one of the following: "car", "motorcycle", "auto".

### Example Request Body:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
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
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "inactive"
  }
}
```

### Example Error Response Body:

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
