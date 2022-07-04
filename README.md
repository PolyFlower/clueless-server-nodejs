### Clueless Server

Attempt to make something w/o NestJS :P

### Setup:

> I will not include docker setup here

**.env**

```
NODE_ENV="development"
APP_PORT=3000

PG_HOST="localhost"
PG_DB="postgres"
PG_USER="postgres"
PG_PASS="postgrespw"
PG_PORT=5432

JWT_SECRET="BU5ZTATpIevFfbRtNqcPV52SoNKAkVbwqwuGRVzYK6uATjlKtBcoTjLO8zxcYBr5UkVmtbXl6fAqRz5gHVbkxqWUOV18U7OH94pCILDE5jAg5Ooprz"
JWT_EXPIRY="10m"
```

### Features:

- [x] Auth routes for login and register functional
- [x] Controller with registration and login logic
- [x] Request body validators using validator.js
- [x] Exception handler middleware
- [x] Custom HttpException classes
- [x] Argon2 for hashing
- [x] TypeORM as DAL

#### 1. feat/routes

Status: Done

- [x] Mount routes
- [x] Plug request-validator into pipeline
- [x] Handle custom HttpException to exception-handler
- [x] Forward valid request to next middleware (controller)

Example request:

```
curl --location --request POST 'localhost:3000/v1/register' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'username=polyflower' \
--data-urlencode 'password=$uper$3cR3Tp@$$w0Rd'
```

Response (password is not stripped):

```
{
    "username": "polyflower",
    "password": "$argon2i$v=19$m=4096,t=3,p=1$YTYky4ZipD3zsjgnn4L/uA$G/LzX3JatW/OxR0f3Y8aZ+MdeWZob9UzFExv1MfdEyM",
    "id": 1
}
```

#### 2. feat/request-body-validator

Status: Done

- [x] Destructurize body of the request
- [x] Transform request body object into instance of class with validators.
- [x] Validate instance and handle errors
- [x] Strip unwanted properties from ValidationError instances using class transformer
- [x] Insert middleware into pipeline between receiving and processing the request body.

Validator takes a class as a schema for validation, with help of class-transformer and class-validator and decorators.

Response from failing any validators looks like example below:

```
{
    "errs": {
        "0": {
            "property": "username",
            "constraints": {
                "minLength": "username must be longer than 5 characters",
                "isString": "username must be a string",
                "isNotEmpty": "username should not be empty"
            }
        },
        "1": {
            "property": "password",
            "constraints": {
                "matches": "password must contain minimum 2 uppercase letters",
                "minLength": "password must be longer than 8 characters",
                "isString": "password must be a string",
                "isNotEmpty": "password should not be empty"
            }
        }
    }
}
```

#### 3. feat/exception-handler

Status: Done

- [x] Custom HttpException classes
- [x] Takes instance of custom HttpException child class (ex. BadRequestException)
- [x] Returns response from instance using statusCode property, and message

Example of registering with already existing user:

```
{
    "message": "Username already taken",
    "name": "BadRequestException",
    "statusCode": 400
}
```

#### 4. feat/auth-controller

Status: Done

- [x] Implement register and login logic
- [x] Hash password on register
- [x] Verify hash on login
- [x] Generate and response with cookie property with JWT token

Example cookie

| Name  | Value              | Domain   | Expires                       | HttpOnly |
| ----- | ------------------ | -------- | ----------------------------- | -------- |
| token | eyJhbGciOiJIUzI... | locahost | Sat, 02 Jul 2022 17:07:32 GMT | true     |
