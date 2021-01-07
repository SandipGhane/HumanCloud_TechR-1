# HumanCloud_TechR-1

## Getting Started

Clone the repo

```git clone https://github.com/SandipGhane/HumanCloud_TechR-1.git```

```cd HumanCloud_TechR-1```

Install npm 

```npm i```

## Running Locally

```npm start```

## API Endpoint 

```https://humancloudround.herokuapp.com/```

## Postman collection

https://www.getpostman.com/collections/4b1d9f10681d8dcfa8ea

## Testing Locally

First you need to create Account

http://localhost:7000/auth/signup

Req Body

```
{
  "email": "sandyghane@gmail.com",
  "password": "sandip",
  "confirmPassword": "sandip",
  "phone": 8888710346
}
```

Get REsponse

```
{
    "message": "User details saved",
    "data": {
        "balance": 0,
        "_id": "5ff6c836520def15e54251ff",
        "email": "sandyghane@gmail.com",
        "phone": 8888710346,
        "profileID": "01d4e42f754054ac3b1e23af5e54568d",
        "__v": 0
    }
}
```

## Login

http://localhost:7000/auth/login

Req
```
{
    "email":"sandyghane@gmail.com",
    "password":"sandip"
}
```
Response
```
{
    "message": "User logged in",
    "userToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.IntcImlhdFwiOiAxNDQwNzEzNDE0Ljg1fSI.4gJJ9YKDcyj0vrjBSpCeraMTsZE0fkbnhlDygN-VFfG8TqfiJgWB7PhhYrpLzABVqYHoWZJQI9d0mdUWi_FDAA",
    "profileID": "01d4e42f754054ac3b1e23af5e54568d"
}
```
## Fill Profile 

Req
```
{
    "firstName":"kiran",
    "lastName":"Ghane",
    "city":"Sangamner",
    "phone":8888710346,
    "state":"maha",
    "email":"kiranghane@gmail.com",
    "country":"india",
    "pincode":56734,
    "profileID":"11467c91def7ba5983d9dadd223ad2e7"
}
```
## if profile filled already then api update all data instead your phone
Response
```
{
    "message": "Update details",
    "data": {
        "balance": 0,
        "_id": "5ff6bd212a7501151265c088",
        "email": "kiranghane@gmail.com",
        "phone": 7350361316,
        "profileID": "11467c91def7ba5983d9dadd223ad2e7",
        "__v": 0,
        "firstName": "kiran",
        "lastName": "Ghane"
    }
}
```





