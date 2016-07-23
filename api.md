#Zesty Stocking REST api 

**Returns and posts json data about users and messages.** 

###URL
`../api/users`  
`../api/messages`

##Methods:

`GET | POST | PUT`

###Path Params

**Optional:**  
`UserId=[interger]` i.e. `/api/users/1`


##Data Params
None

##Success Response:

**Code:** `200` 
Content: 
Users
```javascript
{ 
 "username": "John_Doe11",
 "name": "John Doe",
 "location": "Berkeley, CA",
 "avatarUrl": "_____",
 "accessToken": *****, 
 "createdAt": "2016-07-21T20:30:17.00Z",
 "updatedAt": "2016-07-21T20:30:17.00Z"
}
```
Messages
```javascript
[
 {
  "id": 7, 
  "text": "Hello World", 
  "likes": 4, 
  "createdAt": "2016-07-21T20:30:17.00Z",
  "updatedAt": "2016-07-21T20:30:17.00Z"
  "User" : {
    "id": 1, 
    "username": "John_Doe11", 
    "name": "John Doe", 
    "location": "Berkeley CA", 
    "avatarUrl": ______, 
    "createdAt": "2016-07-21T20:30:17.00Z",
    "updatedAt": "2016-07-21T20:30:17.00Z"
   }
 }
]
```

**Error Response:**
`Code: 401 UNAUTHORIZED 
Content: { error : "Error" }`

Sample Call:
```javascript
 $.ajax({
    url: "/api/messages",
    dataType: "json",
    type : "GET",
    success : function(r) {
      console.log(r);
    }
  });
```
##Notes:
**Express Node server. MariaDB Database. Sequalize ORM.** 
