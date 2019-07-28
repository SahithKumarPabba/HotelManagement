## Getting started

install npm packages:
```
npm install
```

run the service
```
npm start
```

unit test the service
```
npm test
```

## Development

Default port is 8080.

##Health end point

localhost:8080/health

##spin up DB & Sevice 

docker-compose build
docker-compose up

    ->Service will start listening on port 8080.

##Make a reservation

Endpoint: POST: http://localhost:8080/makereservation
BODY: 
{
	"userId": 1234,
	"roomId": 1234,
	"quantity": 1
}
Response: RESERVED/PENDING_APPROVAL

userId: 
    Endpoint: http://localhost:8080/userinfo/jack
    Response: Get the Id from here
    [
    {
        "Id": "4DFAB02E-775F-4E14-ABB8-BEA727DDC5A2",
        "Name": "JACK",
        "Email": "abc@xyz.com",
        "MobileNo": 1234,
        "AccountCreatedDate": "2019-07-27T00:00:00.000Z",
        "LastLoginDate": null,
        "Role": "USER"
    }
]

roomId: 
    Endpoint: http://localhost:8080/availability
    Response: Get the room id from here
    [
    {
        "Id": "B1F6829D-D8D0-48BA-8396-485A8B3F54F1",
        "Name": "DELUXE WITH AC",
        "Address": "25- STREET HYDERABAD",
        "MobileNumber": 123456,
        "AvailableAmount": 0,
        "RequiredPoints": 2700,
        "LastUpdateTs": "2019-07-27T10:45:30.750Z"
    },
    {
        "Id": "CB782EB4-4263-4C38-8740-E34DE3E830DD",
        "Name": "LUXURY",
        "Address": "15- STREET HYDERABAD",
        "MobileNumber": 1234,
        "AvailableAmount": 2,
        "RequiredPoints": 4500,
        "LastUpdateTs": "2019-07-27T10:45:30.750Z"
    },
    {
        "Id": "DBFE5ABA-6DAD-4695-9A45-1DB6C05AC688",
        "Name": "ECONOMY",
        "Address": "10- STREET HYDERABAD",
        "MobileNumber": 123,
        "AvailableAmount": 12,
        "RequiredPoints": 500,
        "LastUpdateTs": "2019-07-27T10:45:30.750Z"
    },
    {
        "Id": "F5393A37-E932-4DF4-87E0-3F8F6F87ECD1",
        "Name": "DELUXE",
        "Address": "20- STREET HYDERABAD",
        "MobileNumber": 12345,
        "AvailableAmount": 7,
        "RequiredPoints": 2500,
        "LastUpdateTs": "2019-07-27T10:45:30.750Z"
    }
]