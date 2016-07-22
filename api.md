#Zesty Stocking REST api 

**Returns and posts json data about users and messages.** 

###URL
`/api/users : 
/api/messages`

##Methods:

`GET | POST | PUT`

###Path Params

**Optional:**
`UserId=[interger]`

##Data Params
None

##Success Response:

**Code:** `200` 
Content: 
```javascript
            { 
            username: "John_Doe11",
            name: "John Doe",
            location: "Berkeley, CA",
            avatarUrl: "_____",
            accessToken: *****
          }
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
