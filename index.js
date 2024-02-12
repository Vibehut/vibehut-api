API

About -- Image
Getting Started Code Example

More Examples

Pricing





const axios = require('axios');

const apiKey = '[API KEY]';
const url = 'https://vibehut.io/api/v1/public/events';

const headers = {
    'api-key': apiKey
};


axios.get(url, { params, headers })
.then(response => {
    console.log(JSON.stringify(response.data.data[0]));
})
.catch(error => {
    console.error(error);
});


# Vibehut Social Video API

Vibehut wants to engage the developer community to build together. We’ll releasing a very early API for a few select users to open the imagination to what can be built. 




[ Video Is More Engaging ]
[ Con]


Social Video Platform
Access Controls
BYOV - Bring Your Own Provider







# Vibehut V1 Api

## Vibehut Developer Ethos

Vibehut wants to engage the developer community to build together. We’ll releasing a very early API for a few select users to open the imagination to what can be built. 

**Use Cases**
1. List Upcoming Vibehut Events

# GET /events

Query

1. `desoUserPublicKey` (optional)
2. `filterBy` (optional) (valid values - popular,upcomig and new) default is popular
3. `limit` (optional) default 20
4. `offset` (optional) default 0
5. `roomId` (optional) - will return the events of the specified room and with all the other filters applied. 
6. `roomSlug` (optional) - will return the events of the specified room and with all the other filters applied. (can be left empty if the `roomId` is already mentioned).
7. `createdBy` - accept comma separated value like Facebook,DeSo
    1. Facebook
    2. WorldCoin
    3. Twitter
    4. DeSo
    5. Instagram
    6. Linkedin
    7. Metamask
    8. Tiktok
8. Exclude accept comma separated value
    1. `passwordProtected`
    2. `paid`
    3. `NFT token gated`
    4. ObjectId of event
    5. Deso User PublicKey
    6. Vibehut username

### Note: Please be aware that only events occurring within the next 30 days are accessible for queries.

```jsx
const axios = require('axios');

const apiKey = [API KEY];
const url = 'https://vibehut.io/api/v1/public/events';

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

```jsx
Returns {
      _id: '64ade89038ce4c001462f23f',
      cover: [Object],
      isPaidEvent: false,
      price: 0,
      isPasswordProtected: false,
      title: 'Weekly Vibehut Platform Call',
      description: '',
      startDate: '2023-08-08T22:00:00.000Z',
      endDate: '2023-08-08T23:00:00.000Z',
      room: [Object],
      createdAt: '2023-07-11T23:41:04.416Z',
      rsvps: [Array],
      rsvp_count: 46,
      eventOwner: [Object],
      isAccessibleEvent: true
    }
```

Room specific events:

```jsx
const axios = require('axios');

const apiKey = [API KEY];
const url = 'https://vibehut.io/api/v1/public/events?';

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

```jsx
Returns {
      _id: '64ade89038ce4c001462f23f',
      cover: [Object],
      isPaidEvent: false,
      price: 0,
      isPasswordProtected: false,
      title: 'Weekly Vibehut Platform Call',
      description: '',
      startDate: '2023-08-08T22:00:00.000Z',
      endDate: '2023-08-08T23:00:00.000Z',
      room: [Object],
      createdAt: '2023-07-11T23:41:04.416Z',
      rsvps: [Array],
      rsvp_count: 46,
      eventOwner: [Object],
      isAccessibleEvent: true
    }
```

# GET /events/room/:roomId

### Get Events of a room based on either roomId or slug

**Query**:

1. `limit` (optional) default 20
2. `offset` (optional) default 0

**Parameters**:

1. `roomId` (optional) - will return the events of the specified room and with all the other filters applied. 
2. `roomSlug` (optional) - will return the events of the specified room and with all the other filters applied. (can be left empty if the `roomId` is already mentioned).

```jsx
const axios = require('axios');

const apiKey = [API KEY];
const url = 'https://vibehut.io/api/v1/public/events/room/65aa7b44c11b8455e4c4ab2a';

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

```jsx
Returns {
			data:[
			{
            "_id": "65aa812d4ea1f42230127607",
            "cover": {
                "urls": {
                    "raw": "https://images.unsplash.com/photo-1702564696436-276e00d7909f?ixid=M3wyNjkwNTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDU2NzI5OTR8&ixlib=rb-4.0.3",
                    "full": "https://images.unsplash.com/photo-1702564696436-276e00d7909f?crop=entropy&cs=srgb&fm=jpg&ixid=M3wyNjkwNTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDU2NzI5OTR8&ixlib=rb-4.0.3&q=85",
                    "regular": "https://images.unsplash.com/photo-1702564696436-276e00d7909f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjkwNTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDU2NzI5OTR8&ixlib=rb-4.0.3&q=80&w=1080",
                    "small": "https://images.unsplash.com/photo-1702564696436-276e00d7909f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjkwNTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDU2NzI5OTR8&ixlib=rb-4.0.3&q=80&w=400",
                    "thumb": "https://images.unsplash.com/photo-1702564696436-276e00d7909f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjkwNTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDU2NzI5OTR8&ixlib=rb-4.0.3&q=80&w=200"
                },
                "source": "unsplash"
            },
            "isPaidEvent": false,
            "price": 0,
            "isHomePageEvent": false,
            "is_deleted": false,
            "isPasswordProtected": false,
            "isRequireApproval": false,
            "title": "Bookeh",
            "description": "",
            "startDate": "2024-01-26T14:03:00.000Z",
            "endDate": "2024-01-26T15:03:00.000Z",
            "creatorTimeZone": "Asia/Calcutta",
            "room": {
                "_id": "65aa7b44c11b8455e4c4ab2a",
                "cover": {
                    "urls": {
                        "raw": "https://images.unsplash.com/photo-1705450568642-d9d3523a9b12?ixid=M3wyNjkwNTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDU2NzE0ODB8&ixlib=rb-4.0.3",
                        "full": "https://images.unsplash.com/photo-1705450568642-d9d3523a9b12?crop=entropy&cs=srgb&fm=jpg&ixid=M3wyNjkwNTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDU2NzE0ODB8&ixlib=rb-4.0.3&q=85",
                        "regular": "https://images.unsplash.com/photo-1705450568642-d9d3523a9b12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjkwNTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDU2NzE0ODB8&ixlib=rb-4.0.3&q=80&w=1080",
                        "small": "https://images.unsplash.com/photo-1705450568642-d9d3523a9b12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjkwNTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDU2NzE0ODB8&ixlib=rb-4.0.3&q=80&w=400",
                        "thumb": "https://images.unsplash.com/photo-1705450568642-d9d3523a9b12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjkwNTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDU2NzE0ODB8&ixlib=rb-4.0.3&q=80&w=200"
                    },
                    "source": "unsplash"
                },
                "promotion": {
                    "isActive": false
                },
                "is_deleted": false,
                "is_private": false,
                "isNftCollectionRoom": false,
                "nftCollectionSlugs": [],
                "isPasswordProtected": false,
                "hasSubscription": false,
                "isWaveRoom": false,
                "isGroupRoom": true,
                "isBreakoutRoom": false,
                "isInstantRoom": false,
                "breakoutRoomNames": [],
                "isChatRoom": false,
                "chatUsers": [],
                "moderators": [],
                "isGuestAllowed": false,
                "isRequireApproval": false,
                "subscriberApprovedUsers": [],
                "blockedUsers": [],
                "blockedGeneralUsers": [],
                "resourceRooms": [],
                "isSubscriberRequireApproval": false,
                "name": "public room",
                "maxUsersPerGroup": "16",
                "totalLiveCalls": "16",
                "totalCalls": 1,
                "subscriptionType": "monthly",
                "subscriptionAmount": 0,
                "isSelfOrganized": true,
                "selfOrganizeCount": 2,
                "owner": "********************",
                "lastActive": "2024-01-19T13:38:12.042Z",
                "nftCollectionSlugsMapping": [],
                "blockedFromRooms": [],
                "labels": [],
                "createdAt": "2024-01-19T13:38:12.044Z",
                "updatedAt": "2024-01-19T13:38:12.044Z",
                "__v": 0
            },
            "isExternalEvent": false,
            "maxRsvp": 16,
            "owner": "****************************",
            "createdAt": "2024-01-19T14:03:25.084Z",
            "updatedAt": "2024-01-19T14:03:25.084Z",
            "__v": 0,
            "user_rsvp": [],
            "eventSubscriptions": [],
            "isAccessibleEvent": true,
            "rsvps": [],
            "waitList": [],
            "rsvp_count": 1
        },
			]
    }
```

# POST /events

### Create an event

**Body**

1. `title` accepts the title of the event (required)
2. `cover` accepts the url of cover image (required)
3. `room` accepts the id of the room in which event is going to be created (required)
4. `startDate` accepts the start time of event in date format (required).
Example: 2024-01-21T13:55:00.000Z
5. `endDate` accepts the end time of event in date format (required).
Example: 2024-01-21T14:55:00.000Z
Note: endDate should be greather than startDate
6. `isRecurrEvent` accepts Boolean (optional)
7. `selectedOption` is required if `isRecurrEvent` is true. Accepts string. 
Options: daily, weekly, alternate, monthly, weekday
8. `isPaidEvent` accepts Boolean (optional) 
9. `price` is required if `isPaidEvent` is true. Accepts number. 
10. `selectedWeekOption` is required if the `selectedOption` is set weekday, accepts the array of weekday options. 
Options: { sun , mon , tue , wed , thurs , fri , sat}
11. `recurrDate` is required if `isRecurrEvent` is true. Accepts date string.
Note: `recurrDate` must be greater than startDate
12. `description` accepts string upto 2000 characters. 
13. `creatorTimeZone` accepts time zone of the event creator for accurate time settings of event. 
Example: America/New_York
14. `isPasswordProtected` accepts Boolean (optional)
15. `password` is required if `isPasswordProtected` is true. Accepts string. 
16. `maxRsvp` accepts number (optional)
17. `isExternalEvent` accepts Boolean (optional)
18. `location` is required if `isExternalEvent` is true. Accepts object with field :
formatted_address: { lat : accepts string, lng: accepts string }
19. `extLink` is required if `isExternalEvent` is true. Accepts string. 
20. `isRequireApproval` accepts Boolean (optional)
21. `invitedUsers` accepts array of Id of invited users. 

### `invitationMsg` accepts string. (optional)

Note: You can only create event in your own rooms.

```jsx
const axios = require('axios');
const joi = require('joi');

const apiKey = '[API KEY]';
const url = 'https://vibehut.io/api/v1/public/events'; 

const headers = {
  'api-key': apiKey,
};

const sampleEventData = {
    "title": "coloredpro",
    "description": "",
    "startDate": "2024-01-21T13:55:00.000Z",
    "endDate": "2024-01-21T14:55:00.000Z",
    "isPaidEvent": false,
    "price": 0,
    "cover": "http://res.cloudinary.com/dkcchsedy/image/upload/v1705758975/ce70goubsrtvy77orvdy.png",
    "room": "65aba86d156ff927e002cbb0",
    "isPasswordProtected": false,
    "isExternalEvent": false,
    "isRequireApproval": false
};

  axios.post(url, samplePostData, { headers })
    .then(response => {
      console.log(JSON.stringify(response));
    })
    .catch(error => {
      console.error(error);
    });

```

```jsx
Returns {
"event": {
            "_id": "65ac24d8e425155cb0151f90",
            "cover": {
                "urls": {
                    "raw": "http://res.cloudinary.com/dkcchsedy/image/upload/v1705758975/ce70goubsrtvy77orvdy.png",
                    "full": "http://res.cloudinary.com/dkcchsedy/image/upload/v1705758975/ce70goubsrtvy77orvdy.png",
                    "regular": "http://res.cloudinary.com/dkcchsedy/image/upload/v1705758975/ce70goubsrtvy77orvdy.png",
                    "small": "http://res.cloudinary.com/dkcchsedy/image/upload/v1705758975/ce70goubsrtvy77orvdy.png",
                    "thumb": "http://res.cloudinary.com/dkcchsedy/image/upload/v1705758975/ce70goubsrtvy77orvdy.png"
                },
                "source": "unsplash"
            },
            "isPaidEvent": false,
            "price": 0,
            "isHomePageEvent": false,
            "is_deleted": false,
            "isPasswordProtected": false,
            "isRequireApproval": false,
            "title": "coloredpro",
            "description": "",
            "startDate": "2024-01-21T13:55:00.000Z",
            "endDate": "2024-01-21T14:55:00.000Z",
            "room": {
                "_id": "65aba86d156ff927e002cbb0",
                "cover": {
                    "urls": {
                        "raw": "https://res.cloudinary.com/dkcchsedy/image/upload/v1705741817/txoggjzsf4xxtj2mti8m.webp",
                        "full": "https://res.cloudinary.com/dkcchsedy/image/upload/v1705741817/txoggjzsf4xxtj2mti8m.webp",
                        "regular": "https://res.cloudinary.com/dkcchsedy/image/upload/v1705741817/txoggjzsf4xxtj2mti8m.webp",
                        "small": "https://res.cloudinary.com/dkcchsedy/image/upload/v1705741817/txoggjzsf4xxtj2mti8m.webp",
                        "thumb": "https://res.cloudinary.com/dkcchsedy/image/upload/v1705741817/txoggjzsf4xxtj2mti8m.webp"
                    },
                    "source": "custom"
                },
                "promotion": {
                    "isActive": false
                },
                "is_deleted": false,
                "is_private": false,
                "isNftCollectionRoom": false,
                "nftCollectionSlugs": [],
                "isPasswordProtected": false,
                "hasSubscription": false,
                "isWaveRoom": false,
                "isGroupRoom": false,
                "isBreakoutRoom": false,
                "isInstantRoom": false,
                "breakoutRoomNames": [],
                "isChatRoom": false,
                "chatUsers": [],
                "moderators": [],
                "isGuestAllowed": false,
                "isRequireApproval": false,
                "subscriberApprovedUsers": [],
                "blockedUsers": [],
                "blockedGeneralUsers": [],
                "resourceRooms": [],
                "isSubscriberRequireApproval": false,
                "name": "AJX22",
                "subscriptionType": "monthly",
                "subscriptionAmount": 1,
                "owner": "61e7e45fc191b95513b7f3f4",
                "lastActive": "2024-01-20T11:03:09.714Z",
                "nftCollectionSlugsMapping": [],
                "blockedFromRooms": [],
                "labels": [],
                "createdAt": "2024-01-20T11:03:09.716Z",
                "updatedAt": "2024-01-20T11:03:09.716Z",
                "__v": 0,
                "isAccessible": false,
                "notificationsubscriptions": []
            },
            "isExternalEvent": false,
            "owner": "61e7e45fc191b95513b7f3f4",
            "createdAt": "2024-01-20T19:54:00.661Z",
            "updatedAt": "2024-01-20T19:54:00.661Z",
            "__v": 0,
            "rsvps": [
               {.................}
            ],
            "rsvp_count": 1,
            "eventSubscriptions": [],
            "host": {
                "_id": "61e7e45fc191b95513b7f3f4",
                "bitclout_data": {
                    "provider": "bitclout",
                    "_id": "65ac24b3e425155cb0151c72",
                    "username": "jonh703",
                    "bitclout_publickey": "*************************Ne6",
                    "description": ".\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n....................................................................\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.",
                    "profile_picture": "https://diamondapp.com/api/v0/get-single-profile-picture/*************************Ne6",
                    "investorCount": 6,
                    "isHolder": false,
                    "coins_held": 0,
                    "isHoldingMinimum": false
                },
                "__v": 0,
                "instagram_data": {
                    "provider": "instagram"
                },
                "last_seen": "2024-01-20T19:53:26.610Z",
                "provider": "bitclout",
                "role": "admin",
                "tiktok_data": {
                    "provider": "tiktok"
                },
                "twitter_data": {
                    "provider": "twitter"
                },
                "wallet_balance": 531.51115,
                "room": {
                    "name": "",
                    "id": null
                },
                "isProfileCompleted": true,
                "updatedAt": "2024-01-20T19:53:26.612Z",
                "availableVibebucks": 149,
                "cover": {
                    "urls": {
                        "raw": "http://res.cloudinary.com/dkcchsedy/image/upload/v1704877558/qgygtsdcrceb9d9lcrq7.jpg",
                        "full": "http://res.cloudinary.com/dkcchsedy/image/upload/v1704877558/qgygtsdcrceb9d9lcrq7.jpg",
                        "regular": "http://res.cloudinary.com/dkcchsedy/image/upload/v1704877558/qgygtsdcrceb9d9lcrq7.jpg",
                        "small": "http://res.cloudinary.com/dkcchsedy/image/upload/v1704877558/qgygtsdcrceb9d9lcrq7.jpg",
                        "thumb": "http://res.cloudinary.com/dkcchsedy/image/upload/v1704877558/qgygtsdcrceb9d9lcrq7.jpg"
                    },
                    "source": "custom"
                },
                "stripe_data": {
                    "customer_id": "acct_1LKg6g2SB3A0l8W5",
                    "is_full_connected": true
                },
                "socialLinks": {
                    "instagram": "jonh703",
                    "twitter": "jonh703",
                    "metamask": "",
                    "linkedIn": "https://linkedin.com/in/mmarandi",
                    "tiktok": "@jonh703",
                    "facebook": "",
                    "telegram": "jonh703",
                    "link": "",
                    "thread": "https://github.com/jonh703/vibehut-frontend/pull/1246",
                    "deso": "jonh703",
                    "_id": "65a104cd1da9932f21dfa206"
                },
                "userState": {
                    "status": null,
                    "updatedAt": "2024-01-20T17:35:15.513Z",
                    "notificationSentAt": "2024-01-05T12:49:36.366Z"
                },
                "services": [
                    {
                        "createdAt": "2023-10-18T11:54:15.795Z",
                        "rate": 0,
                        "_id": "654101144647fe8438330d12",
                        "name": "Header",
                        "description": "Let check"
                    }
                ],
                "watch_last_seen": "2024-01-04T15:31:27.147Z",
                "appSettings": {
                    "sound": {
                        "chat": true,
                        "wave": false
                    },
                    "banner": {
                        "chat": true,
                        "wave": true
                    },
                    "decryptOnServer": {
                        "chat": true
                    }
                },
                "serviceRole": "63b6ed2c1ecac8c97cfda307",
                "facebook_data": {
                    "provider": "facebook",
                    "_id": "64d1c502b81cc6e2b385ca48"
                },
                "promotion": {
                    "title": "man standing outside the room 2 3",
                    "link": "https://trello.com/c/iDoGodNX/1418-openai-chat-bot",
                    "imgUrl": "https://images.unsplash.com/photo-1687360440886-f220f137a16c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjkwNTR8MXwxfGFsbHwxfHx8fHx8MXx8MTY5MzI4NjI5OXw&ixlib=rb-4.0.3&q=80&w=400",
                    "isActive": true
                },
                "vibehutUsername": "jonh703",
                "vibehutDescription": "hello",
                "referralCode": {
                    "code": "12345678",
                    "updatedAt": "2023-06-27T13:41:58.270Z"
                },
                "location": {
                    "formatted_address": "india",
                    "lat": "",
                    "lng": ""
                },
                "stripeCustomerId": "cus_P3hfA0fFLEl2v8",
                "stripeSubscriptionId": "sub_1OHUhcC0z82E4yuXus54QPX2"
            },
            "specificChatRoom": [],
            "isAccessibleEvent": true,
            "user_rsvp": [
                {
                    "_id": "65ac24dbe425155cb0151fa8",
                    "event": "65ac24d8e425155cb0151f90",
                    "user": {
                        "_id": "61e7e45fc191b95513b7f3f4",
                        "bitclout_data": {
                            "provider": "bitclout",
                            "_id": "65ac24b3e425155cb0151c72",
                            "username": "jonh703",
                            "bitclout_publickey": "*************************Ne6",
                            "description": ".\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n....................................................................\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.",
                            "profile_picture": "https://diamondapp.com/api/v0/get-single-profile-picture/*************************Ne6",
                            "investorCount": 6,
                            "isHolder": false,
                            "coins_held": 0,
                            "isHoldingMinimum": false
                        },
                        "__v": 0,
                        "instagram_data": {
                            "provider": "instagram"
                        },
                        "last_seen": "2024-01-20T19:53:26.610Z",
                        "provider": "bitclout",
                        "role": "admin",
                        "tiktok_data": {
                            "provider": "tiktok"
                        },
                        "twitter_data": {
                            "provider": "twitter"
                        },
                        "wallet_balance": 531.51115,
                        "room": {
                            "name": "",
                            "id": null
                        },
                        "isProfileCompleted": true,
                        "updatedAt": "2024-01-20T19:53:26.612Z",
                        "availableVibebucks": 149,
                        "cover": {
                            "urls": {
                                "raw": "http://res.cloudinary.com/dkcchsedy/image/upload/v1704877558/qgygtsdcrceb9d9lcrq7.jpg",
                                "full": "http://res.cloudinary.com/dkcchsedy/image/upload/v1704877558/qgygtsdcrceb9d9lcrq7.jpg",
                                "regular": "http://res.cloudinary.com/dkcchsedy/image/upload/v1704877558/qgygtsdcrceb9d9lcrq7.jpg",
                                "small": "http://res.cloudinary.com/dkcchsedy/image/upload/v1704877558/qgygtsdcrceb9d9lcrq7.jpg",
                                "thumb": "http://res.cloudinary.com/dkcchsedy/image/upload/v1704877558/qgygtsdcrceb9d9lcrq7.jpg"
                            },
                            "source": "custom"
                        },
                        "stripe_data": {
                            "customer_id": "acct_1LKg6g2SB3A0l8W5",
                            "is_full_connected": true
                        },
                        "socialLinks": {
                            "instagram": "jonh703",
                            "twitter": "jonh703",
                            "metamask": "",
                            "linkedIn": "https://linkedin.com/in/mmarandi",
                            "tiktok": "@jonh703",
                            "facebook": "",
                            "telegram": "jonh703",
                            "link": "",
                            "thread": "https://github.com/jonh703/vibehut-frontend/pull/1246",
                            "deso": "jonh703",
                            "_id": "65a104cd1da9932f21dfa206"
                        },
                        "userState": {
                            "status": null,
                            "updatedAt": "2024-01-20T17:35:15.513Z",
                            "notificationSentAt": "2024-01-05T12:49:36.366Z"
                        },
                        "services": [
                            {
                                "createdAt": "2023-10-18T11:54:15.795Z",
                                "rate": 0,
                                "_id": "654101144647fe8438330d12",
                                "name": "Header",
                                "description": "Let check"
                            }
                        ],
                        "watch_last_seen": "2024-01-04T15:31:27.147Z",
                        "appSettings": {
                            "sound": {
                                "chat": true,
                                "wave": false
                            },
                            "banner": {
                                "chat": true,
                                "wave": true
                            },
                            "decryptOnServer": {
                                "chat": true
                            }
                        },
                        "serviceRole": "63b6ed2c1ecac8c97cfda307",
                        "facebook_data": {
                            "provider": "facebook",
                            "_id": "64d1c502b81cc6e2b385ca48"
                        },
                        "promotion": {
                            "title": "man standing outside the room 2 3",
                            "link": "https://trello.com/c/iDoGodNX/1418-openai-chat-bot",
                            "imgUrl": "https://images.unsplash.com/photo-1687360440886-f220f137a16c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjkwNTR8MXwxfGFsbHwxfHx8fHx8MXx8MTY5MzI4NjI5OXw&ixlib=rb-4.0.3&q=80&w=400",
                            "isActive": true
                        },
                        "vibehutUsername": "jonh703",
                        "vibehutDescription": "hello",
                        "referralCode": {
                            "code": "12345678",
                            "updatedAt": "2023-06-27T13:41:58.270Z"
                        },
                        "location": {
                            "formatted_address": "india",
                            "lat": "",
                            "lng": ""
                        },
                        "stripeCustomerId": "cus_P3hfA0fFLEl2v8",
                        "stripeSubscriptionId": "sub_1OHUhcC0z82E4yuXus54QPX2"
                    },
                    "__v": 0,
                    "createdAt": "2024-01-20T19:54:03.041Z",
                    "isHighLighted": false,
                    "status": "confirmed",
                    "updatedAt": "2024-01-20T19:54:03.041Z"
                }
            ],
            "waitList": []
        },
owner:{...............}
}
```

# PATCH /events/:eventId

### Update an event

**Body**

1. `title` accepts the title of the event (required)
2. `cover` accepts the url of cover image (required)
3. `startDate` accepts the start time of event in date format (required).
Example: 2024-01-21T13:55:00.000Z
4. `endDate` accepts the end time of event in date format (required).
Example: 2024-01-21T14:55:00.000Z
Note: endDate should be greather than startDate
5. `isRecurrEvent` accepts Boolean (optional)
6. `selectedOption` is required if `isRecurrEvent` is true. Accepts string. 
Options: daily, weekly, alternate, monthly, weekday
7. `isPaidEvent` accepts Boolean (optional) 
8. `price` is required if `isPaidEvent` is true. Accepts number. 
9. `selectedWeekOption` is required if the `selectedOption` is set weekday, accepts the array of weekday options. 
Options: { sun , mon , tue , wed , thurs , fri , sat}
10. `recurrDate` is required if `isRecurrEvent` is true. Accepts date string.
Note: `recurrDate` must be greater than startDate
11. `description` accepts string upto 2000 characters. 
12. `creatorTimeZone` accepts time zone of the event creator for accurate time settings of event. 
Example: America/New_York
13. `isPasswordProtected` accepts Boolean (optional)
14. `password` is required if `isPasswordProtected` is true. Accepts string. 
15. `maxRsvp` accepts number (optional)
16. `isExternalEvent` accepts Boolean (optional)
17. `location` is required if `isExternalEvent` is true. Accepts object with field :
formatted_address: { lat : accepts string, lng: accepts string }
18. `extLink` is required if `isExternalEvent` is true. Accepts string. 
19. `isRequireApproval` accepts Boolean (optional)
20. `invitedUsers` accepts array of Id of invited users. 
21. `invitationMsg` accepts string. (optional)

### Note: You can only update your own events.

```jsx
const axios = require('axios');
const joi = require('joi');

const apiKey = '[API KEY]';
const url = 'https://vibehut.io/api/v1/public/events/65ac24d8e425155cb0151f90'; 

const headers = {
  'api-key': apiKey,
};

const sampleEventData = {
    "title": "coloredUpdate",
    "description": "",
    "startDate": "2024-01-21T13:55:00.000Z",
    "endDate": "2024-01-21T14:55:00.000Z",
    "isPaidEvent": false,
    "price": 0,
    "cover": "http://res.cloudinary.com/dkcchsedy/image/upload/v1705758975/ce70goubsrtvy77orvdy.png",
    "isPasswordProtected": false,
    "isExternalEvent": false,
    "isRequireApproval": false
};

  axios.post(url, samplePostData, { headers })
    .then(response => {
      console.log(JSON.stringify(response));
    })
    .catch(error => {
      console.error(error);
    });

```

```jsx
Returns {
          "event": {
            "_id": "65ac24d8e425155cb0151f90",
            "cover": {
                "source": "custom",
                "urls": {
                    "raw": "http://res.cloudinary.com/dkcchsedy/image/upload/v1705758975/ce70goubsrtvy77orvdy.png",
                    "full": "http://res.cloudinary.com/dkcchsedy/image/upload/v1705758975/ce70goubsrtvy77orvdy.png",
                    "regular": "http://res.cloudinary.com/dkcchsedy/image/upload/v1705758975/ce70goubsrtvy77orvdy.png",
                    "small": "http://res.cloudinary.com/dkcchsedy/image/upload/v1705758975/ce70goubsrtvy77orvdy.png",
                    "thumb": "http://res.cloudinary.com/dkcchsedy/image/upload/v1705758975/ce70goubsrtvy77orvdy.png"
                }
            },
            "isPaidEvent": false,
            "price": 0,
            "isHomePageEvent": false,
            "is_deleted": false,
            "isPasswordProtected": false,
            "isRequireApproval": false,
            "title": "coloredUpdate",
            "description": "",
            "startDate": "2024-01-21T13:55:00.000Z",
            "endDate": "2024-01-21T14:55:00.000Z",
            "room": {..............},
            "isExternalEvent": false,
            "owner": "61e7e45fc191b95513b7f3f4",
            "createdAt": "2024-01-20T19:54:00.661Z",
            "updatedAt": "2024-01-20T20:06:34.849Z",
            "__v": 0,
            "rsvps": [..................],
            "rsvp_count": 1,
            "eventSubscriptions": [],
            "host": {
                "_id": "61e7e45fc191b95513b7f3f4",
                "bitclout_data": {
                    "provider": "bitclout",
                    "_id": "65ac24b3e425155cb0151c72",
                    "username": "jonh703",
                    "bitclout_publickey": "**********************************Ne6",
                    "description": ".\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n....................................................................\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.",
                    "profile_picture": "https://diamondapp.com/api/v0/get-single-profile-picture/**********************************Ne6",
                    "investorCount": 6,
                    "isHolder": false,
                    "coins_held": 0,
                    "isHoldingMinimum": false
                },
                "__v": 0,
                "instagram_data": {
                    "provider": "instagram"
                },
                "last_seen": "2024-01-20T19:57:43.085Z",
                "provider": "bitclout",
                "role": "admin",
                "tiktok_data": {
                    "provider": "tiktok"
                },
                "twitter_data": {
                    "provider": "twitter"
                },
                "wallet_balance": 531.51115,
                "room": {
                    "name": "",
                    "id": null
                },
                "isProfileCompleted": true,
                "updatedAt": "2024-01-20T19:57:43.086Z",
                "availableVibebucks": 149,
                "cover": {
                    "urls": {
                        "raw": "http://res.cloudinary.com/dkcchsedy/image/upload/v1704877558/qgygtsdcrceb9d9lcrq7.jpg",
                        "full": "http://res.cloudinary.com/dkcchsedy/image/upload/v1704877558/qgygtsdcrceb9d9lcrq7.jpg",
                        "regular": "http://res.cloudinary.com/dkcchsedy/image/upload/v1704877558/qgygtsdcrceb9d9lcrq7.jpg",
                        "small": "http://res.cloudinary.com/dkcchsedy/image/upload/v1704877558/qgygtsdcrceb9d9lcrq7.jpg",
                        "thumb": "http://res.cloudinary.com/dkcchsedy/image/upload/v1704877558/qgygtsdcrceb9d9lcrq7.jpg"
                    },
                    "source": "custom"
                },
                "stripe_data": {
                    "customer_id": "acct_1LKg6g2SB3A0l8W5",
                    "is_full_connected": true
                },
                "socialLinks": {
                    "instagram": "jonh703",
                    "twitter": "jonh703",
                    "metamask": "",
                    "linkedIn": "https://linkedin.com/in/mmarandi",
                    "tiktok": "@jonh703",
                    "facebook": "",
                    "telegram": "jonh703",
                    "link": "",
                    "thread": "https://github.com/jonh703/vibehut-frontend/pull/1246",
                    "deso": "jonh703",
                    "_id": "65a104cd1da9932f21dfa206"
                },
                "userState": {
                    "status": null,
                    "updatedAt": "2024-01-20T19:57:42.769Z",
                    "notificationSentAt": "2024-01-05T12:49:36.366Z"
                },
                "services": [
                    {
                        "createdAt": "2023-10-18T11:54:15.795Z",
                        "rate": 0,
                        "_id": "654101144647fe8438330d12",
                        "name": "Header",
                        "description": "Let check"
                    }
                ],
                "watch_last_seen": "2024-01-04T15:31:27.147Z",
                "appSettings": {
                    "sound": {
                        "chat": true,
                        "wave": false
                    },
                    "banner": {
                        "chat": true,
                        "wave": true
                    },
                    "decryptOnServer": {
                        "chat": true
                    }
                },
                "serviceRole": "*************307",
                "facebook_data": {
                    "provider": "facebook",
                    "_id": "64d1c502b81cc6e2b385ca48"
                },
                "promotion": {
                    "title": "man standing outside the room 2 3",
                    "link": "https://trello.com/c/iDoGodNX/1418-openai-chat-bot",
                    "imgUrl": "https://images.unsplash.com/photo-1687360440886-f220f137a16c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjkwNTR8MXwxfGFsbHwxfHx8fHx8MXx8MTY5MzI4NjI5OXw&ixlib=rb-4.0.3&q=80&w=400",
                    "isActive": true
                },
                "vibehutUsername": "jonh703",
                "vibehutDescription": "hello",
                "referralCode": {
                    "code": "12345678",
                    "updatedAt": "2023-06-27T13:41:58.270Z"
                },
                "location": {
                    "formatted_address": "india",
                    "lat": "",
                    "lng": ""
                },
                "stripeCustomerId": "cus_P3hfA0fFLEl2v8",
                "stripeSubscriptionId": "sub_1OHUhcC0z82E4yuXus54QPX2"
            },
            "specificChatRoom": [],
            "isAccessibleEvent": true,
            "user_rsvp": [
                {
                    "_id": "65ac24dbe425155cb0151fa8",
                    "event": "65ac24d8e425155cb0151f90",
                    "user": {
                        "_id": "61e7e45fc191b95513b7f3f4",
                        "bitclout_data": {
                            "provider": "bitclout",
                            "_id": "65ac24b3e425155cb0151c72",
                            "username": "jonh703",
                            "bitclout_publickey": "**********************************Ne6",
                            "description": ".\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n....................................................................\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.",
                            "profile_picture": "https://diamondapp.com/api/v0/get-single-profile-picture/**********************************Ne6",
                            "investorCount": 6,
                            "isHolder": false,
                            "coins_held": 0,
                            "isHoldingMinimum": false
                        },
                        "__v": 0,
                        "instagram_data": {
                            "provider": "instagram"
                        },
                        "last_seen": "2024-01-20T19:57:43.085Z",
                        "provider": "bitclout",
                        "role": "admin",
                        "tiktok_data": {
                            "provider": "tiktok"
                        },
                        "twitter_data": {
                            "provider": "twitter"
                        },
                        "wallet_balance": 531.51115,
                        "room": {
                            "name": "",
                            "id": null
                        },
                        "isProfileCompleted": true,
                        "updatedAt": "2024-01-20T19:57:43.086Z",
                        "availableVibebucks": 149,
                        "cover": {
                            "urls": {
                                "raw": "http://res.cloudinary.com/dkcchsedy/image/upload/v1704877558/qgygtsdcrceb9d9lcrq7.jpg",
                                "full": "http://res.cloudinary.com/dkcchsedy/image/upload/v1704877558/qgygtsdcrceb9d9lcrq7.jpg",
                                "regular": "http://res.cloudinary.com/dkcchsedy/image/upload/v1704877558/qgygtsdcrceb9d9lcrq7.jpg",
                                "small": "http://res.cloudinary.com/dkcchsedy/image/upload/v1704877558/qgygtsdcrceb9d9lcrq7.jpg",
                                "thumb": "http://res.cloudinary.com/dkcchsedy/image/upload/v1704877558/qgygtsdcrceb9d9lcrq7.jpg"
                            },
                            "source": "custom"
                        },
                        "stripe_data": {
                            "customer_id": "acct_1LKg6g2SB3A0l8W5",
                            "is_full_connected": true
                        },
                        "socialLinks": {
                            "instagram": "jonh703",
                            "twitter": "jonh703",
                            "metamask": "",
                            "linkedIn": "https://linkedin.com/in/mmarandi",
                            "tiktok": "@jonh703",
                            "facebook": "",
                            "telegram": "jonh703",
                            "link": "",
                            "thread": "https://github.com/jonh703/vibehut-frontend/pull/1246",
                            "deso": "jonh703",
                            "_id": "65a104cd1da9932f21dfa206"
                        },
                        "userState": {
                            "status": null,
                            "updatedAt": "2024-01-20T19:57:42.769Z",
                            "notificationSentAt": "2024-01-05T12:49:36.366Z"
                        },
                        "services": [
                            {
                                "createdAt": "2023-10-18T11:54:15.795Z",
                                "rate": 0,
                                "_id": "654101144647fe8438330d12",
                                "name": "Header",
                                "description": "Let check"
                            }
                        ],
                        "watch_last_seen": "2024-01-04T15:31:27.147Z",
                        "appSettings": {
                            "sound": {
                                "chat": true,
                                "wave": false
                            },
                            "banner": {
                                "chat": true,
                                "wave": true
                            },
                            "decryptOnServer": {
                                "chat": true
                            }
                        },
                        "serviceRole": "63b6ed2c1ecac8c97cfda307",
                        "facebook_data": {
                            "provider": "facebook",
                            "_id": "64d1c502b81cc6e2b385ca48"
                        },
                        "promotion": {
                            "title": "man standing outside the room 2 3",
                            "link": "https://trello.com/c/iDoGodNX/1418-openai-chat-bot",
                            "imgUrl": "https://images.unsplash.com/photo-1687360440886-f220f137a16c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjkwNTR8MXwxfGFsbHwxfHx8fHx8MXx8MTY5MzI4NjI5OXw&ixlib=rb-4.0.3&q=80&w=400",
                            "isActive": true
                        },
                        "vibehutUsername": "jonh703",
                        "vibehutDescription": "hello",
                        "referralCode": {
                            "code": "12345678",
                            "updatedAt": "2023-06-27T13:41:58.270Z"
                        },
                        "location": {
                            "formatted_address": "india",
                            "lat": "",
                            "lng": ""
                        },
                        "stripeCustomerId": "cus_P3hfA0fFLEl2v8",
                        "stripeSubscriptionId": "sub_1OHUhcC0z82E4yuXus54QPX2"
                    },
                    "__v": 0,
                    "createdAt": "2024-01-20T19:54:03.041Z",
                    "isHighLighted": false,
                    "status": "confirmed",
                    "updatedAt": "2024-01-20T19:54:03.041Z"
                }
            ],
            "waitList": []
        }
}
```

# POST /events/rsvp

### Update Event RSVP

**Body**

1. `desoUserPublicKey` accepts the public key of user whose rsvp will be updated (required)
2. `event` accepts the event Id (required)
3. `status` accepts enum ("confirmed", "maybe", "declined", "removed"), and is required.
    
    ```jsx
    const axios = require('axios');
    const joi = require('joi');
    
    const apiKey = '[API KEY]';
    const url = 'https://vibehut.io/api/v1/public/events/rsvp'; 
    
    const headers = {
      'api-key': apiKey,
    };
    
    //desoUserPublicKey hidden for privacy reasons
    const samplePostData = {
        "event":"65aa812d4ea1f42230127607", 
        "desoUserPublicKey" : "*************************************Ne6",
        "status" : "confirmed"
    };
    
      axios.post(url, samplePostData, { headers })
        .then(response => {
          console.log(JSON.stringify(response.data.data));
        })
        .catch(error => {
          console.error(error);
        });
    
    ```
    
    ```jsx
    Returns {
    "data": {
            "_id": "65aa812d4ea1f42230127607",
            "cover": {
                "urls": {
                    "raw": "https://images.unsplash.com/photo-1702564696436-276e00d7909f?ixid=M3wyNjkwNTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDU2NzI5OTR8&ixlib=rb-4.0.3",
                    "full": "https://images.unsplash.com/photo-1702564696436-276e00d7909f?crop=entropy&cs=srgb&fm=jpg&ixid=M3wyNjkwNTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDU2NzI5OTR8&ixlib=rb-4.0.3&q=85",
                    "regular": "https://images.unsplash.com/photo-1702564696436-276e00d7909f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjkwNTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDU2NzI5OTR8&ixlib=rb-4.0.3&q=80&w=1080",
                    "small": "https://images.unsplash.com/photo-1702564696436-276e00d7909f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjkwNTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDU2NzI5OTR8&ixlib=rb-4.0.3&q=80&w=400",
                    "thumb": "https://images.unsplash.com/photo-1702564696436-276e00d7909f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjkwNTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDU2NzI5OTR8&ixlib=rb-4.0.3&q=80&w=200"
                },
                "source": "unsplash"
            },
            "isPaidEvent": false,
            "price": 0,
            "isPasswordProtected": false,
            "isRequireApproval": false,
            "title": "Bookeh",
            "description": "",
            "startDate": "2024-01-26T14:03:00.000Z",
            "endDate": "2024-01-26T15:03:00.000Z",
            "room": {
                "_id": "65aa7b44c11b8455e4c4ab2a",
                "cover": {
                    "urls": {
                        "raw": "https://images.unsplash.com/photo-1705450568642-d9d3523a9b12?ixid=M3wyNjkwNTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDU2NzE0ODB8&ixlib=rb-4.0.3",
                        "full": "https://images.unsplash.com/photo-1705450568642-d9d3523a9b12?crop=entropy&cs=srgb&fm=jpg&ixid=M3wyNjkwNTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDU2NzE0ODB8&ixlib=rb-4.0.3&q=85",
                        "regular": "https://images.unsplash.com/photo-1705450568642-d9d3523a9b12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjkwNTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDU2NzE0ODB8&ixlib=rb-4.0.3&q=80&w=1080",
                        "small": "https://images.unsplash.com/photo-1705450568642-d9d3523a9b12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjkwNTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDU2NzE0ODB8&ixlib=rb-4.0.3&q=80&w=400",
                        "thumb": "https://images.unsplash.com/photo-1705450568642-d9d3523a9b12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjkwNTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDU2NzE0ODB8&ixlib=rb-4.0.3&q=80&w=200"
                    },
                    "source": "unsplash"
                },
                "is_private": false,
                "name": "public room",
                "owner": "63453a0eac0cb148e49bba5c",
                "lastActive": "2024-01-19T13:38:12.042Z",
                "createdAt": "2024-01-19T13:38:12.044Z"
            },
            "isExternalEvent": false,
            "createdAt": "2024-01-19T14:03:25.084Z",
            "rsvps": [
                {
                    "_id": "61e7e45fc191b95513b7f3f4",
                    "username": "jonh703",
                    "description": ".\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n....................................................................\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.",
                    "profilePicture": "https://diamondapp.com/api/v0/get-single-profile-picture/*****************************Ne6",
                    "desoUserPublicKey": "*****************************Ne6"
                },
                {
                    "_id": "63453a0eac0cb148e49bba5c",
                    "username": "jonh702",
                    "description": "jonh702 - Second Doodle Artist on BitClout.\nDM if you want to get a custom digital/handmade Doodle.\n\nInvest $100+ And DM me to get on this golden project.\nIG - https://bit.ly/3veGVwV",
                    "profilePicture": "https://diamondapp.com/api/v0/get-single-profile-picture/*******************************",
                    "desoUserPublicKey": "*******************************"
                }
            ],
            "rsvp_count": 2,
            "eventOwner": {
                "_id": "63453a0eac0cb148e49bba5c",
                "username": "jonh703",
                "description": "jonh703 - Second Doodle Artist on BitClout.\nDM if you want to get a custom digital/handmade Doodle.\n\nInvest $100+ And DM me to get on this golden project.\nIG - https://bit.ly/3veGVwV",
                "profile_picture": "https://diamondapp.com/api/v0/get-single-profile-picture/*******************************2AC",
                "desoUserPublicKey": "************************************"
            },
            "eventUrl": "http://vibehut.io/65aa7b44c11b8455e4c4ab2a/events/65aa812d4ea1f42230127607"
        }
    }
    ```
    

# GET /calls

### Create instant call link

Will generate an instant call and return the call link in response. 

```jsx
const axios = require('axios');

const apiKey = [API KEY];
const url = 'https://vibehut.io/api/v1/public/calls';

const headers = {
  'api-key': `${apiKey}`
};

axios.get(url, { headers })
  .then(response => {
    console.log(JSON.stringify(response.data));
  })
  .catch(error => {
    console.error(error);
  });
```

```jsx
Returns {
    "code": 1,
    "status": "success",
    "data": "https://2c82-2401-4900-1c22-373d-d46c-2d5f-8dd9-58d7.ngrok-free.app/call?v=lltq8R"
}
```

# GET /calls/active-calls

### Get list of all active calls on the platform

Will look for all the active calls and list them, there can be number of active calls from same room. 

```jsx
const axios = require('axios');

const apiKey = [API KEY];
const url = 'https://vibehut.io/api/v1/public/calls/active-calls';

const headers = {
  'api-key': `${apiKey}`
};

axios.get(url, { headers })
  .then(response => {
    console.log(JSON.stringify(response.data));
  })
  .catch(error => {
    console.error(error);
  });
```

```jsx
Returns {
   "data": [
        {
            "_id": "65aa95f8f7760d435838d826",
            "room": "65aa7b44c11b8455e4c4ab2a",
            "users": [
                {
                    "_id": "63453a0eac0cb148e49bba5c",
                    "provider": "bitclout",
                    "username": "TheBitDoodler",
                    "publickey": "*********************************2AC",
                    "profile_picture": "https://diamondapp.com/api/v0/get-single-profile-picture/B*********************************2AC",
                    "description": "BitDoodle - Second Doodle Artist on BitClout.\nDM if you want to get a custom digital/handmade Doodle.\n\nInvest $100+ And DM me to get on this golden project.\nIG - https://bit.ly/3veGVwV",
                    "investorCount": 8,
                    "socialLinks": {
                        "instagram": "",
                        "twitter": "",
                        "metamask": "",
                        "linkedIn": "",
                        "tiktok": "",
                        "facebook": "",
                        "telegram": "",
                        "link": "",
                        "thread": "",
                        "deso": "TheBitDoodler",
                        "_id": "658bdfb65c8a292d408e5cfa"
                    },
                    "serviceRole": "63b6ed2c1ecac8c97cfda307",
                    "vibehutDescription": null,
                    "coinprice": 5.6,
                    "userState": {
                        "status": "oncall",
                        "room": "public room",
                        "roomId": "65aa7b44c11b8455e4c4ab2a"
                    }
                }
            ],
            "isGroupCall": true,
            "screenPresentingUser": null,
            "isRecordingOngoing": false,
            "callCreated": "2024-01-19T15:32:08.589Z",
            "subRoomName": null,
            "eventId": null,
            "roomName": "public room",
            "talkingCount": 1,
            "boostCallUserDetails": {},
            "isBoostedCall": false
        }
    ]
}
```

# GET /feed

### Get a list of feed posts

**Query Params**

1. `lastPostHash` (optional) 
2. `orderBy` (optional) (valid value - newest) default is (“”)
3. `pageNumber` (optional) default 0
4. `size`  (optional) default 20

```jsx
const axios = require('axios');

const apiKey = [API KEY];
const url = 'https://vibehut.io/api/v1/public/feed';

const headers = {
  'api-key': `${apiKey}`
};

const sampleQueryParams = 'lastPostHash=""&orderBy=""&size=1&pageNumber=0';
const urlWithQueryParams = `${url}?${sampleQueryParams}`;

axios.get(urlWithQueryParams)
  .then(response => {
    console.log(JSON.stringify(response.data.data));
  })
  .catch(error => {
    console.error(error);
  });
```

```jsx
Returns {
"posts": [
            {
                "id": "ad721c112d87929e5b180dd0f85afe4345ab17f58b6441b634bc3f940486b5b5",
                "postSource": "deso",
                "body": "Who was gone from DeSo for a long time and just returned?",
                "imageUrls": null,
                "videoUrls": null,
                "isHidden": false,
                "parentPostId": "",
                "postedBy": {
                    "username": "darian_parrish",
                    "profile_picture": "https://diamondapp.com/api/v0/get-single-profile-picture/BC1YLjJnaJSDy5SS1AXBrLXSQS6cv4jcVDftQLuv2rCyrKac4Tuw2Vf"
                },
                "createdAt": "2023-12-01T16:22:42.950Z",
                "isLiked": false,
                "likeCount": 1,
                "vibehutUser": {},
                "chatCount": 0,
                "views": 1
            },
],
"lastPostHash": "a58868cc606ee622e0c429dfbb3c7e97002899c93430c478acb12c625eb16981"
}
```

### Pagination of Feed List

For pagination we need to pass  `lastPostHash` value of the previous page and also the number of the next page we want to fetch. 
The posts are fetched by taking the `lastPostHash` as reference point. 

```jsx
const axios = require('axios');

const apiKey = [API KEY];
const url = 'https://vibehut.io/api/v1/public/feed';

const headers = {
  'api-key': `${apiKey}`
};

const sampleQueryParams = 'lastPostHash="9bbbe1f9c4074130c2899a9e184b887d4e39315d2327f9f7eec58db9dbba4c47"&orderBy=""&size=2&pageNumber=1';
const urlWithQueryParams = `${url}?${sampleQueryParams}`;

axios.get(urlWithQueryParams)
  .then(response => {
    console.log(JSON.stringify(response.data.data));
  })
  .catch(error => {
    console.error(error);
  });
```

It will return consecutive posts of `size` provided from both the sources: **DeSo** and **Vibehut (**subject to availability**)**

```jsx
Returns {
        "posts": [
            {
                "id": "0989e5df3fd28a10492839f826e4752b9d9fc839d4d6bb218ea533befb03e4ba",
                "postSource": "deso",
                "body": "Celebrities couldn't handle Decentralized Social media. Without bots to hype them up and no actual content or creativity. More than likely wouldn't give back or share knowledge. Why invest in them and not @PSYCOart or @PenWyn ",
                "imageUrls": null,
                "videoUrls": null,
                "isHidden": false,
                "parentPostId": "",
                "postedBy": {
                    "username": "Ugottaloveit",
                    "profile_picture": "https://diamondapp.com/api/v0/get-single-profile-picture/BC1YLiZMd4fmvjscAvKic3rzowN6gbKkQfvR6iBEMMk97oFZ24PPDua"
                },
                "createdAt": "2023-12-04T11:34:56.680Z",
                "isLiked": false,
                "likeCount": 1,
                "vibehutUser": {},
                "chatCount": 0,
                "views": 0
            },
            {
                "id": "9feab84ffeeeaa0f931d452cc8df2275c1f113a4bff8a4079e33f6605b1b2bc0",
                "postSource": "deso",
                "body": "Bullyballo‘s favorite activity is to inflate soccer balls. \nAnd as soon as he‘s finished, Bullyballo…: *vote*!\n\nI‘ll check the votes from time to time, and when there are at least 10 votes, I‘ll accept the vote, update the post with the result, and draw the next frame - together with a new poll 😁\n\n#moggel #apfelmus #applesauce #cartoon #poll #post2earn",
                "imageUrls": [
                    "https://images.deso.org/f0d87aa3868743c568ab5f5b5a88e2c9548fd609fecb5d2c983a2ae70f8c8f20.webp"
                ],
                "videoUrls": null,
                "isHidden": false,
                "parentPostId": "",
                "postedBy": {
                    "username": "Moggel",
                    "profile_picture": "https://images.deso.org/b223bb664b839deab649bed7142119d70aa1d12d21d8d0d80a4429f53df6d381.webp"
                },
                "createdAt": "2023-12-04T11:05:19.804Z",
                "isLiked": false,
                "likeCount": 2,
                "vibehutUser": {},
                "chatCount": 0,
                "views": 0
            },
            {
                "id": "656a2876e2d8bb25100786b8",
                "postSource": "vibehut",
                "body": "hello public",
                "imageUrls": [],
                "videoUrls": [],
                "isHidden": false,
                "postedBy": {
                    "username": "jonh703",
                    "profile_picture": "https://diamondapp.com/api/v0/get-single-profile-picture/*************************************Ne6",
                    "serviceRole": "63b6ed2c1ecac8c97cfda307"
                },
                "createdAt": "2023-12-01T18:39:50.861Z",
                "likeCount": 0,
                "vibehutUser": {
                    "provider": "bitclout",
                    "_id": "61e7e45fc191b95513b7f3f4",
                    "username": "jonh703",
                    "bitclout_publickey": "*************************************Ne6",
                    "description": ".\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n....................................................................\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.",
                    "profile_picture": "https://diamondapp.com/api/v0/get-single-profile-picture/*************************************Ne6",
                    "investorCount": 6,
                    "isHolder": false,
                    "coins_held": 0,
                    "isHoldingMinimum": false,
                    "last_seen": "2023-12-04T11:03:24.343Z",
                    "cover": {
                        "urls": {
                            "raw": "https://images.unsplash.com/photo-1552300977-cbc8b08d95e7?ixid=MnwyNjkwNTR8MHwxfGFsbHw3fHx8fHx8MXx8MTY2MjczNDQwNA&ixlib=rb-1.2.1",
                            "full": "https://images.unsplash.com/photo-1552300977-cbc8b08d95e7?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwyNjkwNTR8MHwxfGFsbHw3fHx8fHx8MXx8MTY2MjczNDQwNA&ixlib=rb-1.2.1&q=80",
                            "regular": "https://images.unsplash.com/photo-1552300977-cbc8b08d95e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjkwNTR8MHwxfGFsbHw3fHx8fHx8MXx8MTY2MjczNDQwNA&ixlib=rb-1.2.1&q=80&w=1080",
                            "small": "https://images.unsplash.com/photo-1552300977-cbc8b08d95e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjkwNTR8MHwxfGFsbHw3fHx8fHx8MXx8MTY2MjczNDQwNA&ixlib=rb-1.2.1&q=80&w=400",
                            "thumb": "https://images.unsplash.com/photo-1552300977-cbc8b08d95e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjkwNTR8MHwxfGFsbHw3fHx8fHx8MXx8MTY2MjczNDQwNA&ixlib=rb-1.2.1&q=80&w=200"
                        },
                        "source": "unsplash"
                    },
                    "socialLinks": {
                        "instagram": "jonh703",
                        "twitter": "jonh703",
                        "metamask": "",
                        "linkedIn": "https://linkedin.com/in/mmarandi",
                        "tiktok": "@jonh703",
                        "facebook": "",
                        "telegram": "jonh703",
                        "link": "",
                        "thread": "https://github.com/jonh703/vibehut-frontend/pull/1246",
                        "deso": "jonh703",
                        "_id": "656da82b0e3fba06a4733b40"
                    },
                    "userStatus": "offline",
                    "services": [
                        {
                            "createdAt": "2023-10-18T11:54:15.795Z",
                            "rate": 0,
                            "_id": "654101144647fe8438330d12",
                            "name": "Header",
                            "description": "Let check"
                        }
                    ],
                    "vibehutUsername": "jonh703",
                    "vibehutDescription": null,
                    "serviceRole": "*********************"
                },
                "chatCount": 0,
                "views": 0
            },
            {
                "id": "6555fb603eefea5d38c706ef",
                "postSource": "vibehut",
                "body": "https://vibehut.io/deepanshu",
                "imageUrls": [],
                "videoUrls": [],
                "isHidden": false,
                "postedBy": {
                    "username": "jonh703",
                    "profile_picture": "https://diamondapp.com/api/v0/get-single-profile-picture/*************************************Ne6",
                    "serviceRole": "63b6ed2c1ecac8c97cfda307"
                },
                "createdAt": "2023-11-16T11:22:08.781Z",
                "likeCount": 0,
                "vibehutUser": {
                    "provider": "bitclout",
                    "_id": "61e7e45fc191b95513b7f3f4",
                    "username": "jonh703",
                    "bitclout_publickey": "*************************************Ne6",
                    "description": ".\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n....................................................................\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.",
                    "profile_picture": "https://diamondapp.com/api/v0/get-single-profile-picture/*************************************Ne6",
                    "investorCount": 6,
                    "isHolder": false,
                    "coins_held": 0,
                    "isHoldingMinimum": false,
                    "last_seen": "2023-12-04T11:03:24.343Z",
                    "cover": {
                        "urls": {
                            "raw": "https://images.unsplash.com/photo-1552300977-cbc8b08d95e7?ixid=MnwyNjkwNTR8MHwxfGFsbHw3fHx8fHx8MXx8MTY2MjczNDQwNA&ixlib=rb-1.2.1",
                            "full": "https://images.unsplash.com/photo-1552300977-cbc8b08d95e7?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwyNjkwNTR8MHwxfGFsbHw3fHx8fHx8MXx8MTY2MjczNDQwNA&ixlib=rb-1.2.1&q=80",
                            "regular": "https://images.unsplash.com/photo-1552300977-cbc8b08d95e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjkwNTR8MHwxfGFsbHw3fHx8fHx8MXx8MTY2MjczNDQwNA&ixlib=rb-1.2.1&q=80&w=1080",
                            "small": "https://images.unsplash.com/photo-1552300977-cbc8b08d95e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjkwNTR8MHwxfGFsbHw3fHx8fHx8MXx8MTY2MjczNDQwNA&ixlib=rb-1.2.1&q=80&w=400",
                            "thumb": "https://images.unsplash.com/photo-1552300977-cbc8b08d95e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjkwNTR8MHwxfGFsbHw3fHx8fHx8MXx8MTY2MjczNDQwNA&ixlib=rb-1.2.1&q=80&w=200"
                        },
                        "source": "unsplash"
                    },
                    "socialLinks": {
                        "instagram": "jonh703",
                        "twitter": "jonh703",
                        "metamask": "",
                        "linkedIn": "https://linkedin.com/in/mmarandi",
                        "tiktok": "@jonh703",
                        "facebook": "",
                        "telegram": "jonh703",
                        "link": "",
                        "thread": "https://github.com/jonh703/vibehut-frontend/pull/1246",
                        "deso": "jonh703",
                        "_id": "656da82b0e3fba06a4733b40"
                    },
                    "userStatus": "offline",
                    "services": [
                        {
                            "createdAt": "2023-10-18T11:54:15.795Z",
                            "rate": 0,
                            "_id": "654101144647fe8438330d12",
                            "name": "Header",
                            "description": "Let check"
                        }
                    ],
                    "vibehutUsername": "jonh703",
                    "vibehutDescription": null,
                    "serviceRole": "63b6ed2c1ecac8c97cfda307"
                },
                "chatCount": 0,
                "views": 6
            }
        ],
        "lastPostHash": "9feab84ffeeeaa0f931d452cc8df2275c1f113a4bff8a4079e33f6605b1b2bc0"
    }

```

# GET /feed/:postId

### Get single post by `id` or `postHashHex`

**Params**
`postId` (mandatory)

```jsx
const axios = require('axios');

const apiKey = '[API KEY]';
const url = 'https://vibehut.io/api/v1/public/feed';

const headers = {
  'api-key': apiKey,
};

const postId = '9bbbe1f9c4074130c2899a9e184b887d4e39315d2327f9f7eec58db9dbba4c47';
const appendPostIdInURL = `${url}/${postId}`;

axios.get(appendPostIdInURL, { headers })
  .then(response => {
    console.log(JSON.stringify(response.data.data));
  })
  .catch(error => {
    console.error(error);
  });
```

```jsx
Returns {
        "post": {
            "id": "9bbbe1f9c4074130c2899a9e184b887d4e39315d2327f9f7eec58db9dbba4c47",
            "postSource": "deso",
            "body": "This is such a classic and so relevant for today's world. Maybe even more so!  Thank you Annie Lennox ...",
            "imageUrls": null,
            "videoUrls": null,
            "isHidden": false,
            "parentPostId": "",
            "postedBy": {
                "username": "ElizabethTubbs",
                "profile_picture": "https://images.deso.org/84c6bcd0d04750ec8dc2213c39017331898950ead842d0dd5bf9d0b82906e02a.webp"
            },
            "createdAt": "2023-12-04T13:32:22.323Z",
            "likeCount": 0,
            "vibehutUser": {},
            "chatCount": 0,
            "views": 0
        }
    }
```

# POST  **/feed**

### Post to Vibehut Feed

**Body**

1. `imageUrls` accepts array of image URLs (optional)
2. `videoUrls` accepts array of video URLs (optional)
3. `isHidden` accepts boolean (default : false)
4. `parentPostId`   accepts string (optional)
5. `body`   accepts string (mandatory if image or video URLs are not passed)

```jsx
const axios = require('axios');
const joi = require('joi');

const apiKey = '[API KEY]';
const url = 'https://vibehut.io/api/v1/public/post'; 

const headers = {
  'api-key': apiKey,
};

const samplePostData = {
  imageUrls: ['https://example.com/image1.jpg', 'https://example.com/image2.jpg'],
  videoUrls: ['https://example.com/video1.mp4', 'https://example.com/video2.mp4'],
  isHidden: false,
  parentPostId: 'parentPostId123', // Provide an actual parent post ID if needed
  body: 'Sample post body text',
};

  axios.post(url, samplePostData, { headers })
    .then(response => {
      console.log(JSON.stringify(response.data.data));
    })
    .catch(error => {
      console.error(error);
    });

```

```jsx
Returns {
"post": {
            "id": "656a2876e2d8bb25100786b8",
            "postSource": "vibehut",
            "body": "Sample post body text",
            "imageUrls": ['https://example.com/image1.jpg', 'https://example.com/image2.jpg'],
            "videoUrls": ['https://example.com/video1.mp4', 'https://example.com/video2.mp4'],
            "isHidden": false,
            "postedBy": {
                "username": "jonh703",
                "profile_picture": "https://diamondapp.com/api/v0/get-single-profile-picture/*************************************Ne6",
                "serviceRole": "63b6**********************"
            },
            "createdAt": "2023-12-01T18:39:50.861Z",
            "isLiked": false,
            "likeCount": 0,
						"vibehutUser": {...},
						"chatCount": 0,
            "views": 0
}
}
```

# GET  **/notifications**

### Get user notifications

Query:

1. `limit` (required)
2. `offset` (required)  
3. `isInstant` (optional)

```jsx
const axios = require('axios');

const apiKey = [API KEY];
const url = 'https://vibehut.io/api/v1/public/notifications?limit=1&offset=0';

const headers = {
  'api-key': `${apiKey}`
};

axios.get(url, { headers })
  .then(response => {
    console.log(JSON.stringify(response.data));
  })
  .catch(error => {
    console.error(error);
  });
```

```jsx
Returns {
      "notifications": [
            {
                "_id": "65aa7f5df520c8428cc11c80",
                "usersMentioned": [
                    {
                        "_id": "62b03fdd542c453854bdb514",
                        "bitclout_data": {
                            "provider": "bitclout",
                            "_id": "659bdfd91cf9afa20efd9029",
                            "username": "jonh703",
                            "bitclout_publickey": "BC1YLg2rzRb7RQqPrLCNLMAvixBBpiL24dcwy3xhAtZaMTbBMmxPBae",
                            "description": "Please follow @jonh703.\nLoss from this account will be covered.",
                            "profile_picture": "https://diamondapp.com/api/v0/get-single-profile-picture/********************************Bae",
                            "investorCount": 24,
                            "isHolder": false,
                            "coins_held": 0,
                            "isHoldingMinimum": false
                        },
                        "__v": 0,
                        "createdAt": "2023-07-21T06:30:07.624Z",
                        "instagram_data": {
                            "provider": "instagram"
                        },
                        "isProfileCompleted": true,
                        "last_seen": "2024-01-19T13:55:52.570Z",
                        "linkedin_data": {
                            "provider": "linkedin"
                        },
                        "provider": "bitclout",
                        "role": "user",
                        "tiktok_data": {
                            "provider": "tiktok"
                        },
                        "twitter_data": {
                            "provider": "twitter"
                        },
                        "updatedAt": "2024-01-19T16:57:29.032Z",
                        "userState": {
                            "status": null,
                            "updatedAt": "2024-01-19T16:57:29.031Z",
                            "notificationSentAt": "2022-09-13T10:23:55.457Z"
                        },
                        "vibehutUsername": "DAJJAL",
                        "vibehutDescription": null,
                        "referralCode": {
                            "code": "12341234",
                            "updatedAt": "2023-04-19T12:35:28.064Z"
                        },
                        "location": {
                            "formatted_address": "",
                            "lat": "",
                            "lng": ""
                        },
                        "watch_last_seen": "2023-11-23T20:07:33.174Z"
                    }
                ],
                "roomsMentioned": [
                    {
                        "_id": "64f6bfd719eb524c7db132b9",
                        "cover": {
                            "urls": {
                                "raw": "https://images.unsplash.com/photo-1495379572396-5f27a279ee91?ixid=M3wyNjkwNTR8MHwxfGFsbHw0fHx8fHx8MXx8MTcwNTMwODMzOHw&ixlib=rb-4.0.3",
                                "full": "https://images.unsplash.com/photo-1495379572396-5f27a279ee91?crop=entropy&cs=srgb&fm=jpg&ixid=M3wyNjkwNTR8MHwxfGFsbHw0fHx8fHx8MXx8MTcwNTMwODMzOHw&ixlib=rb-4.0.3&q=85",
                                "regular": "https://images.unsplash.com/photo-1495379572396-5f27a279ee91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjkwNTR8MHwxfGFsbHw0fHx8fHx8MXx8MTcwNTMwODMzOHw&ixlib=rb-4.0.3&q=80&w=1080",
                                "small": "https://images.unsplash.com/photo-1495379572396-5f27a279ee91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjkwNTR8MHwxfGFsbHw0fHx8fHx8MXx8MTcwNTMwODMzOHw&ixlib=rb-4.0.3&q=80&w=400",
                                "thumb": "https://images.unsplash.com/photo-1495379572396-5f27a279ee91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjkwNTR8MHwxfGFsbHw0fHx8fHx8MXx8MTcwNTMwODMzOHw&ixlib=rb-4.0.3&q=80&w=200"
                            }
                        },
                        "isNftCollectionRoom": false,
                        "isPasswordProtected": false,
                        "isSubscriberRequireApproval": false,
                        "name": "Physics",
                        "slug": "physocs"
                    }
                ],
                "eventsMentioned": [],
                "wavesMentioned": [],
                "callsMentioned": [],
                "seenStatus": true,
                "datesMentioned": [],
                "body": "$(_user:62b03fdd542c453854bdb514) joined $(_room:64f6bfd719eb524c7db132b9)  ",
                "type": "user_joined_room",
                "to": "61e7e45fc191b95513b7f3f4",
                "createdAt": "2024-01-19T13:55:41.807Z",
                "updatedAt": "2024-01-19T16:59:18.113Z",
                "__v": 0,
                "watchMentioned": []
            }
        ]
    }
```

# POST  **/rooms**

### Create a room

**Body**

1. `cover` url of cover image (required)
2. `slug` slug of the room
3. `name` (required)
4. `description` room description (max 500 characters)
5. `is_private` accepts Boolean (optional)
6. `isPasswordProtected` accepts Boolean
7. `password` is required if the `isPasswordProtected` is true. 
8. `hasSubscription` accepts Boolean (optional)
9. `subscriptionType` is required when `hasSubscription` is true. Accepts values : monthly, oneTime 
10. `subscriptionAmount` is required when `hasSubscription` is true. Accepts number.
11. `isGroupRoom` accepts Boolean (optional)
12. `totalCalls` is required if `isGroupRoom` is true. Accepts number.
13. `maxUsersPerGroup` is required if `isGroupRoom` is true. Accepts number, minimum 2 and maximum 16. 
14. `isBreakoutRoom` accepts Boolean (optional)
15. `isGuestAllowed` accepts Boolean (optional)
16. `breakoutRoomNames` is required if `isBreakoutRoom` is true, accepts an array of strings
17. `isRequireApproval` accepts Boolean (optional)
18. `isSubscriberRequireApproval` accepts Boolean (optional)
19. `weeklyPassCharge` accepts number (optional)
20. `isNftCollectionRoom` accepts Boolean (optional)
21. `nftDetails` is required if `isNftCollectionRoom` is true, accepts an array of objects. 
Sample Object : {url : “https://abcd.com” , title: “abcd”}
22. `isSelfOrganized` accepts Boolean (optional)
23. `selfOrganizeCount` is required if `isSelfOrganized` is true, accepts number, minimum 0 and max 16.
24. `planAccessible` accepts available plan options, (i.e : Free, Starter, Pro, Business). Is Optional. 
25. `desoPostRoom` accepts an object with fields postHashHex (string) and diamondLevel (number)
Sample Object : {postHashHex : “abcd54heb” , diamondLevel: 2}
    
    
    ```jsx
    const axios = require('axios');
    const joi = require('joi');
    
    const apiKey = '[API KEY]';
    const url = 'https://vibehut.io/api/v1/public/rooms'; 
    
    const headers = {
      'api-key': apiKey,
    };
    
    const sampleRoomData = {
    	 "cover" : "https://res.cloudinary.com/dkcchsedy/image/upload/v1705741817/txoggjzsf4xxtj2mti8m.webp",
       "name" : "AJX22",
       "hasSubscription" : false
    };
    
      axios.post(url, sampleRoomData, { headers })
        .then(response => {
          console.log(JSON.stringify(response.data));
        })
        .catch(error => {
          console.error(error);
        });
    
    ```
    
    ```jsx
    Returns {
    "room": {
                "_id": "65aba89cad3f073ce04a9958",
                "cover": {
                    "urls": {
                        "raw": "https://res.cloudinary.com/dkcchsedy/image/upload/v1705741817/txoggjzsf4xxtj2mti8m.webp",
                        "full": "https://res.cloudinary.com/dkcchsedy/image/upload/v1705741817/txoggjzsf4xxtj2mti8m.webp",
                        "regular": "https://res.cloudinary.com/dkcchsedy/image/upload/v1705741817/txoggjzsf4xxtj2mti8m.webp",
                        "small": "https://res.cloudinary.com/dkcchsedy/image/upload/v1705741817/txoggjzsf4xxtj2mti8m.webp",
                        "thumb": "https://res.cloudinary.com/dkcchsedy/image/upload/v1705741817/txoggjzsf4xxtj2mti8m.webp"
                    },
                    "source": "custom"
                },
                "promotion": {
                    "isActive": false
                },
                "is_deleted": false,
                "is_private": false,
                "isNftCollectionRoom": false,
                "nftCollectionSlugs": [],
                "isPasswordProtected": false,
                "hasSubscription": false,
                "isWaveRoom": false,
                "isGroupRoom": false,
                "isBreakoutRoom": false,
                "isInstantRoom": false,
                "breakoutRoomNames": [],
                "isChatRoom": false,
                "chatUsers": [],
                "moderators": [],
                "isGuestAllowed": false,
                "isRequireApproval": false,
                "subscriberApprovedUsers": [],
                "blockedUsers": [],
                "blockedGeneralUsers": [],
                "resourceRooms": [],
                "isSubscriberRequireApproval": false,
                "name": "AJX22",
                "owner": {
                    "_id": "61e7e45fc191b95513b7f3f4",
                    "bitclout_data": {
                        "provider": "bitclout",
                        "_id": "65aba0e362f3ab6ab058293b",
                        "username": "jonh703",
                        "bitclout_publickey": "********************Ne6",
                        "description": ".\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n....................................................................\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.",
                        "profile_picture": "https://diamondapp.com/api/v0/get-single-profile-picture/********************Ne6",
                        "investorCount": 6,
                        "isHolder": false,
                        "coins_held": 0,
                        "isHoldingMinimum": false
                    },
                    "__v": 0,
                    "instagram_data": {
                        "provider": "instagram"
                    },
                    "last_seen": "2024-01-20T10:50:26.025Z",
                    "provider": "bitclout",
                    "role": "admin",
                    "tiktok_data": {
                        "provider": "tiktok"
                    },
                    "twitter_data": {
                        "provider": "twitter"
                    },
                    "wallet_balance": 531.51115,
                    "room": {
                        "name": "",
                        "id": null
                    },
                    "isProfileCompleted": true,
                    "updatedAt": "2024-01-20T10:50:26.025Z",
                    "availableVibebucks": 149,
                    "cover": {
                        "urls": {
                            "raw": "http://res.cloudinary.com/dkcchsedy/image/upload/v1704877558/qgygtsdcrceb9d9lcrq7.jpg",
                            "full": "http://res.cloudinary.com/dkcchsedy/image/upload/v1704877558/qgygtsdcrceb9d9lcrq7.jpg",
                            "regular": "http://res.cloudinary.com/dkcchsedy/image/upload/v1704877558/qgygtsdcrceb9d9lcrq7.jpg",
                            "small": "http://res.cloudinary.com/dkcchsedy/image/upload/v1704877558/qgygtsdcrceb9d9lcrq7.jpg",
                            "thumb": "http://res.cloudinary.com/dkcchsedy/image/upload/v1704877558/qgygtsdcrceb9d9lcrq7.jpg"
                        },
                        "source": "custom"
                    },
                    "stripe_data": {
                        "customer_id": "acct_1LKg6g2SB3A0l8W5",
                        "is_full_connected": true
                    },
                    "socialLinks": {
                        "instagram": "jonh703",
                        "twitter": "jonh703",
                        "metamask": "",
                        "linkedIn": "https://linkedin.com/in/mmarandi",
                        "tiktok": "@jonh703",
                        "facebook": "",
                        "telegram": "jonh703",
                        "link": "",
                        "thread": "https://github.com/jonh703/vibehut-frontend/pull/1246",
                        "deso": "jonh703",
                        "_id": "65a104cd1da9932f21dfa206"
                    },
                    "userState": {
                        "status": null,
                        "updatedAt": "2024-01-20T10:50:25.715Z",
                        "notificationSentAt": "2024-01-05T12:49:36.366Z"
                    },
                    "services": [
                        {
                            "createdAt": "2023-10-18T11:54:15.795Z",
                            "rate": 0,
                            "_id": "654101144647fe8438330d12",
                            "name": "Header",
                            "description": "Let check"
                        }
                    ],
                    "watch_last_seen": "2024-01-04T15:31:27.147Z",
                    "appSettings": {
                        "sound": {
                            "chat": true,
                            "wave": false
                        },
                        "banner": {
                            "chat": true,
                            "wave": true
                        },
                        "decryptOnServer": {
                            "chat": true
                        }
                    },
                    "serviceRole": "63b6ed2c1ecac8c97cfda307",
                    "facebook_data": {
                        "provider": "facebook",
                        "_id": "64d1c502b81cc6e2b385ca48"
                    },
                    "promotion": {
                        "title": "man standing outside the room 2 3",
                        "link": "https://trello.com/c/iDoGodNX/1418-openai-chat-bot",
                        "imgUrl": "https://images.unsplash.com/photo-1687360440886-f220f137a16c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjkwNTR8MXwxfGFsbHwxfHx8fHx8MXx8MTY5MzI4NjI5OXw&ixlib=rb-4.0.3&q=80&w=400",
                        "isActive": true
                    },
                    "vibehutUsername": "jonh703",
                    "vibehutDescription": "hello",
                    "referralCode": {
                        "code": "12345678",
                        "updatedAt": "2023-06-27T13:41:58.270Z"
                    },
                    "location": {
                        "formatted_address": "india",
                        "lat": "",
                        "lng": ""
                    },
                    "stripeCustomerId": "cus_P3hfA0fFLEl2v8",
                    "stripeSubscriptionId": "sub_1OHUhcC0z82E4yuXus54QPX2"
                },
                "lastActive": "2024-01-20T11:03:56.959Z",
                "nftCollectionSlugsMapping": [],
                "blockedFromRooms": [],
                "labels": [],
                "createdAt": "2024-01-20T11:03:56.962Z",
                "updatedAt": "2024-01-20T11:03:56.962Z",
                "__v": 0,
                "password": null,
                "notificationsubscriptions": [],
                "last_connected_calls": [],
                "isSubscribedForUser": [],
                "calls": [],
                "isAccessible": false,
                "resource": [],
                "event": [],
                "watch": [],
                "prompt": [],
                "chats": [],
                "unreadMessagesCount": 0,
                "allChats": [],
                "messagesCount": 0,
                "isActiveRoom": false,
                "totalActiveUsersInChat": 1
            }
    }
    ```
    

# PATCH  **/rooms/:roomId**

### Update a room

**Body**

1. `cover` url of cover image (required)
2. `slug` slug of the room
3. `name` (required)
4. `description` room description (max 500 characters)
5. `is_private` accepts Boolean (optional)
6. `isPasswordProtected` accepts Boolean
7. `password` is required if the `isPasswordProtected` is true. 
8. `hasSubscription` accepts Boolean (optional)
9. `subscriptionType` is required when `hasSubscription` is true. Accepts values : monthly, oneTime 
10. `subscriptionAmount` is required when `hasSubscription` is true. Accepts number.
11. `isGroupRoom` accepts Boolean (optional)
12. `totalCalls` is required if `isGroupRoom` is true. Accepts number.
13. `maxUsersPerGroup` is required if `isGroupRoom` is true. Accepts number, minimum 2 and maximum 16. 
14. `isBreakoutRoom` accepts Boolean (optional)
15. `isGuestAllowed` accepts Boolean (optional)
16. `breakoutRoomNames` is required if `isBreakoutRoom` is true, accepts an array of strings
17. `isRequireApproval` accepts Boolean (optional)
18. `isSubscriberRequireApproval` accepts Boolean (optional)
19. `weeklyPassCharge` accepts number (optional)
20. `isNftCollectionRoom` accepts Boolean (optional)
21. `nftDetails` is required if `isNftCollectionRoom` is true, accepts an array of objects. 
Sample Object : {url : “https://abcd.com” , title: “abcd”}
22. `isSelfOrganized` accepts Boolean (optional)
23. `selfOrganizeCount` is required if `isSelfOrganized` is true, accepts number, minimum 0 and max 16.
24. `planAccessible` accepts available plan options, (i.e : Free, Starter, Pro, Business). Is Optional. 
25. `desoPostRoom` accepts an object with fields postHashHex (string) and diamondLevel (number)
Sample Object : {postHashHex : “abcd54heb” , diamondLevel: 2}
26. `promotion` accepts an object with fields : isActive (boolean) , title (string) , imgUrl (string) , link (string).

### Note: You can only update your own rooms.

```jsx
const axios = require('axios');
const joi = require('joi');

const apiKey = '[API KEY]';
const url = 'https://vibehut.io/api/v1/public/rooms/65aba89cad3f073ce04a9958'; 

const headers = {
  'api-key': apiKey,
};

const sampleRoomData = {
   "cover" : "https://res.cloudinary.com/dkcchsedy/image/upload/v1705741817/txoggjzsf4xxtj2mti8m.webp",
   "name" : "AJX222225sswdw",
   "hasSubscription" : false
}

  axios.post(url, sampleRoomData, { headers })
    .then(response => {
      console.log(JSON.stringify(response.data));
    })
    .catch(error => {
      console.error(error);
    });

```

```jsx
Returns {
       "room": {
            "_id": "65aba89cad3f073ce04a9958",
            "cover": {
                "source": "custom",
                "urls": {
                    "raw": "https://res.cloudinary.com/dkcchsedy/image/upload/v1705741817/txoggjzsf4xxtj2mti8m.webp",
                    "full": "https://res.cloudinary.com/dkcchsedy/image/upload/v1705741817/txoggjzsf4xxtj2mti8m.webp",
                    "regular": "https://res.cloudinary.com/dkcchsedy/image/upload/v1705741817/txoggjzsf4xxtj2mti8m.webp",
                    "small": "https://res.cloudinary.com/dkcchsedy/image/upload/v1705741817/txoggjzsf4xxtj2mti8m.webp",
                    "thumb": "https://res.cloudinary.com/dkcchsedy/image/upload/v1705741817/txoggjzsf4xxtj2mti8m.webp"
                }
            },
            "promotion": {
                "isActive": false
            },
            "is_deleted": false,
            "is_private": false,
            "isNftCollectionRoom": false,
            "nftCollectionSlugs": [],
            "isPasswordProtected": false,
            "hasSubscription": false,
            "isWaveRoom": false,
            "isGroupRoom": false,
            "isBreakoutRoom": false,
            "isInstantRoom": false,
            "breakoutRoomNames": [],
            "isChatRoom": false,
            "chatUsers": [],
            "moderators": [],
            "isGuestAllowed": false,
            "isRequireApproval": false,
            "subscriberApprovedUsers": [],
            "blockedUsers": [],
            "blockedGeneralUsers": [],
            "resourceRooms": [],
            "isSubscriberRequireApproval": false,
            "name": "AJX222225sswdw",
            "owner": {
                "_id": "61e7e45fc191b95513b7f3f4",
                "bitclout_data": {
                    "provider": "bitclout",
                    "_id": "65abf1c77ca8c067bc20f8bd",
                    "username": "jonh703",
                    "bitclout_publickey": "***************************************Ne6",
                    "description": ".\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n....................................................................\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.",
                    "profile_picture": "https://diamondapp.com/api/v0/get-single-profile-picture/***************************************Ne6",
                    "investorCount": 6,
                    "isHolder": false,
                    "coins_held": 0,
                    "isHoldingMinimum": false
                },
                "__v": 0,
                "instagram_data": {
                    "provider": "instagram"
                },
                "last_seen": "2024-01-20T17:35:15.850Z",
                "provider": "bitclout",
                "role": "admin",
                "tiktok_data": {
                    "provider": "tiktok"
                },
                "twitter_data": {
                    "provider": "twitter"
                },
                "wallet_balance": 531.51115,
                "room": {
                    "name": "",
                    "id": null
                },
                "isProfileCompleted": true,
                "updatedAt": "2024-01-20T17:35:15.851Z",
                "availableVibebucks": 149,
                "cover": {
                    "urls": {
                        "raw": "http://res.cloudinary.com/dkcchsedy/image/upload/v1704877558/qgygtsdcrceb9d9lcrq7.jpg",
                        "full": "http://res.cloudinary.com/dkcchsedy/image/upload/v1704877558/qgygtsdcrceb9d9lcrq7.jpg",
                        "regular": "http://res.cloudinary.com/dkcchsedy/image/upload/v1704877558/qgygtsdcrceb9d9lcrq7.jpg",
                        "small": "http://res.cloudinary.com/dkcchsedy/image/upload/v1704877558/qgygtsdcrceb9d9lcrq7.jpg",
                        "thumb": "http://res.cloudinary.com/dkcchsedy/image/upload/v1704877558/qgygtsdcrceb9d9lcrq7.jpg"
                    },
                    "source": "custom"
                },
                "stripe_data": {
                    "customer_id": "acct_1LKg6g2SB3A0l8W5",
                    "is_full_connected": true
                },
                "socialLinks": {
                    "instagram": "jonh703",
                    "twitter": "jonh703",
                    "metamask": "",
                    "linkedIn": "https://linkedin.com/in/mmarandi",
                    "tiktok": "@jonh703",
                    "facebook": "",
                    "telegram": "jonh703",
                    "link": "",
                    "thread": "https://github.com/jonh703/vibehut-frontend/pull/1246",
                    "deso": "jonh703",
                    "_id": "65a104cd1da9932f21dfa206"
                },
                "userState": {
                    "status": null,
                    "updatedAt": "2024-01-20T17:35:15.513Z",
                    "notificationSentAt": "2024-01-05T12:49:36.366Z"
                },
                "services": [
                    {
                        "createdAt": "2023-10-18T11:54:15.795Z",
                        "rate": 0,
                        "_id": "654101144647fe8438330d12",
                        "name": "Header",
                        "description": "Let check"
                    }
                ],
                "watch_last_seen": "2024-01-04T15:31:27.147Z",
                "appSettings": {
                    "sound": {
                        "chat": true,
                        "wave": false
                    },
                    "banner": {
                        "chat": true,
                        "wave": true
                    },
                    "decryptOnServer": {
                        "chat": true
                    }
                },
                "serviceRole": "63b6ed2c1ecac8c97cfda307",
                "facebook_data": {
                    "provider": "facebook",
                    "_id": "64d1c502b81cc6e2b385ca48"
                },
                "promotion": {
                    "title": "man standing outside the room 2 3",
                    "link": "https://trello.com/c/iDoGodNX/1418-openai-chat-bot",
                    "imgUrl": "https://images.unsplash.com/photo-1687360440886-f220f137a16c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjkwNTR8MXwxfGFsbHwxfHx8fHx8MXx8MTY5MzI4NjI5OXw&ixlib=rb-4.0.3&q=80&w=400",
                    "isActive": true
                },
                "vibehutUsername": "jonh703",
                "vibehutDescription": "hello",
                "referralCode": {
                    "code": "12345678",
                    "updatedAt": "2023-06-27T13:41:58.270Z"
                },
                "location": {
                    "formatted_address": "india",
                    "lat": "",
                    "lng": ""
                },
                "stripeCustomerId": "cus_P3hfA0fFLEl2v8",
                "stripeSubscriptionId": "sub_1OHUhcC0z82E4yuXus54QPX2"
            },
            "lastActive": "2024-01-20T11:03:56.959Z",
            "nftCollectionSlugsMapping": [],
            "blockedFromRooms": [],
            "labels": [],
            "createdAt": "2024-01-20T11:03:56.962Z",
            "updatedAt": "2024-01-20T17:48:47.345Z",
            "__v": 0,
            "password": null,
            "notificationsubscriptions": [],
            "last_connected_calls": [],
            "isSubscribedForUser": [],
            "calls": [],
            "isAccessible": false,
            "resource": [],
            "event": [],
            "watch": [],
            "prompt": [],
            "chats": [],
            "unreadMessagesCount": 0,
            "allChats": [],
            "messagesCount": 0,
            "isActiveRoom": false,
            "totalActiveUsersInChat": 1
        }
}
```

# POST  **/rooms/lookup/all**

### Get all rooms

**Query**:

1. `limit` (optional)
2. `offset` (optional)  

**Body**

1. `roomTypes` accepts array of room types. (required)
    
    Example : PUBLIC, NFT_ACCESSIBLE, NFT_NOT_ACCESSIBLE
    

```jsx
const axios = require('axios');
const joi = require('joi');

const apiKey = '[API KEY]';
const url = 'https://vibehut.io/api/v1/public/rooms/lookup/all?limit=1&offset=0'; 

const headers = {
  'api-key': apiKey,
};

const sampleBodyData = {
  "roomTypes":[
        "PUBLIC"
    ]
};

  axios.post(url, sampleBodyData, { headers })
    .then(response => {
      console.log(JSON.stringify(response.data));
    })
    .catch(error => {
      console.error(error);
    });

```

```jsx
Returns {
"rooms": [
            {
                "_id": "65aa7b44c11b8455e4c4ab2a",
                "cover": {
                    "urls": {
                        "raw": "https://images.unsplash.com/photo-1705450568642-d9d3523a9b12?ixid=M3wyNjkwNTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDU2NzE0ODB8&ixlib=rb-4.0.3",
                        "full": "https://images.unsplash.com/photo-1705450568642-d9d3523a9b12?crop=entropy&cs=srgb&fm=jpg&ixid=M3wyNjkwNTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDU2NzE0ODB8&ixlib=rb-4.0.3&q=85",
                        "regular": "https://images.unsplash.com/photo-1705450568642-d9d3523a9b12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjkwNTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDU2NzE0ODB8&ixlib=rb-4.0.3&q=80&w=1080",
                        "small": "https://images.unsplash.com/photo-1705450568642-d9d3523a9b12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjkwNTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDU2NzE0ODB8&ixlib=rb-4.0.3&q=80&w=400",
                        "thumb": "https://images.unsplash.com/photo-1705450568642-d9d3523a9b12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjkwNTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDU2NzE0ODB8&ixlib=rb-4.0.3&q=80&w=200"
                    },
                    "source": "unsplash"
                },
                "promotion": {
                    "isActive": false
                },
                "is_deleted": false,
                "is_private": false,
                "isNftCollectionRoom": false,
                "nftCollectionSlugs": [],
                "isPasswordProtected": false,
                "hasSubscription": false,
                "isWaveRoom": false,
                "isGroupRoom": true,
                "isBreakoutRoom": false,
                "isInstantRoom": false,
                "breakoutRoomNames": [],
                "isChatRoom": false,
                "chatUsers": [],
                "moderators": [],
                "isGuestAllowed": false,
                "isRequireApproval": false,
                "subscriberApprovedUsers": [],
                "blockedUsers": [],
                "blockedGeneralUsers": [],
                "resourceRooms": [],
                "isSubscriberRequireApproval": false,
                "name": "public room",
                "maxUsersPerGroup": "16",
                "totalLiveCalls": "16",
                "totalCalls": 1,
                "subscriptionType": "monthly",
                "subscriptionAmount": 0,
                "isSelfOrganized": true,
                "selfOrganizeCount": 2,
                "owner": "63453a0eac0cb148e49bba5c",
                "lastActive": "2024-01-19T15:37:16.301Z",
                "nftCollectionSlugsMapping": [],
                "blockedFromRooms": [],
                "labels": [],
                "createdAt": "2024-01-19T13:38:12.044Z",
                "updatedAt": "2024-01-19T18:03:31.332Z",
                "__v": 0,
                "description": "",
                "slug": "ajx",
                "slugUpdatedAt": "2024-01-19T18:03:31.331Z",
                "subscriptions": [],
                "isActiveRoom": false,
                "totalActiveUsersInChat": 1
            }
        ]
}
```

# GET  **/rooms/:roomIdOrSlug**

### Get single room by either room Id or slug

Params :

1. `roomIdOrSlug` (required)