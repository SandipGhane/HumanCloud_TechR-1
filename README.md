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

http://localhost:7000/profile/register

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
## Add funds in wallet

http://localhost:7000/ewallet/addfund

Req
```
{
    "profileID":"cb4a46f84e3c4fe5285a5f9d1d560f86",
    "phone":7350361316,
    "card":"4253617253627252",
    "amount":1000
}
```
Response
```
{
    "amount": 1000,
    "_id": "5ff6d9f6026f136714639547",
    "operation": "AddFunds",
    "phone": 8888710346,
    "destignationPhone": 8888710346,
    "reference": "payment_gateway_transaction:efbc456d-8fb1-4626-b8d9-855889020461",
    "createdAt": "2021-01-07T09:52:54.920Z",
    "updatedAt": "2021-01-07T09:52:54.920Z",
    "__v": 0
}
```
## Get Account Balance

http://localhost:7000/ewallet/balance?profileID=150b0d17114b3635acd5b4bf8a2d826b

Response 

```
{
    "message": "Account Balance",
    "data": 3400
}

```

## Transafer Funds to another register user 

http://localhost:7000/ewallet/transfer

Req

```
{
    "phone":7350361316,
    "amount":300,
    "destignationPhone":8888710346
}
```

Response

```
{
    "message": "Fund transfer successful",
    "data": {
        "amount": 300,
        "_id": "5ff6dba9244c926eb1d078f6",
        "operation": "transfer",
        "phone": 7350361316,
        "destignationPhone": 8888710346,
        "reference": "transfer_to_account:8888710346"
    }
}
```

## Get transaction list
Req

http://localhost:7000/ewallet/transactionList?phone=7350361316

Response 

```
{
    "message": "Transaction History",
    "data": [
        {
            "amount": 300,
            "_id": "5ff68bf317a2bc6e87aa2435",
            "operation": "transfer",
            "phone": 7350361316,
            "destignationPhone": 8888710346,
            "reference": "transfer_to_account:8888710346",
            "createdAt": "2021-01-07T04:20:03.040Z",
            "updatedAt": "2021-01-07T04:20:03.040Z",
            "__v": 0
        },
        {
            "amount": 300,
            "_id": "5ff68edd8c6ed77b1a574280",
            "operation": "transfer",
            "phone": 7350361316,
            "destignationPhone": 88887346,
            "reference": "transfer_to_account:88887346",
            "createdAt": "2021-01-07T04:32:29.919Z",
            "updatedAt": "2021-01-07T04:32:29.919Z",
            "__v": 0
        },
        {
            "amount": 300,
            "_id": "5ff68ef0ed40187b8153d467",
            "operation": "transfer",
            "phone": 7350361316,
            "destignationPhone": 88887346,
            "reference": "transfer_to_account:88887346",
            "createdAt": "2021-01-07T04:32:48.151Z",
            "updatedAt": "2021-01-07T04:32:48.151Z",
            "__v": 0
        },
        {
            "amount": 300,
            "_id": "5ff68f48dec45a7d1b470bc1",
            "operation": "transfer",
            "phone": 7350361316,
            "destignationPhone": 88887346,
            "reference": "transfer_to_account:88887346",
            "createdAt": "2021-01-07T04:34:16.653Z",
            "updatedAt": "2021-01-07T04:34:16.653Z",
            "__v": 0
        },
        {
            "amount": 300,
            "_id": "5ff68f91dadff57e1dbf0ccd",
            "operation": "transfer",
            "phone": 7350361316,
            "destignationPhone": 88887346,
            "reference": "transfer_to_account:88887346",
            "createdAt": "2021-01-07T04:35:29.495Z",
            "updatedAt": "2021-01-07T04:35:29.495Z",
            "__v": 0
        }
    ]
}
```






