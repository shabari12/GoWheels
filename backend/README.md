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
