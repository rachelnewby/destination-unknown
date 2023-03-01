const mockData = {
  id: 'Cheapest',
  name: 'Cheapest',
  items: [
    {
      id: '13870-2303102155--31669-0-11493-2303110025|11493-2303200630--31669-0-13870-2303200905',
      price: {
        "raw": 206.33,
        "formatted": "207 €"
    },
      legs: [
        {
            "id": "13870-2303100950--31669-0-11493-2303101220",
            "origin": {
                "id": "MAD",
                "name": "Madrid",
                "displayCode": "MAD",
                "city": "Madrid",
                "isHighlighted": false
            },
            "destination": {
                "id": "FCO",
                "name": "Rome Fiumicino",
                "displayCode": "FCO",
                "city": "Rome",
                "isHighlighted": false
            },
            "durationInMinutes": 150,
            "stopCount": 0,
            "isSmallestStops": false,
            "departure": "2023-03-10T09:50:00",
            "arrival": "2023-03-10T12:20:00",
            "timeDeltaInDays": 0,
            "carriers": {
                "marketing": [
                    {
                        "id": -31669,
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/WZ.png",
                        "name": "BA"
                    }
                ],
                "operating": [
                    {
                        "id": -30596,
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/I*.png",
                        "name": "Wizz Air Malta"
                    }
                ],
                "operationType": "not_operated"
            },
            "segments": [
                {
                    "id": "13870-11493-2303100950-2303101220--31669",
                    "origin": {
                        "flightPlaceId": "MAD",
                        "parent": {
                            "flightPlaceId": "MADR",
                            "name": "Madrid",
                            "type": "City"
                        },
                        "name": "Madrid",
                        "type": "Airport"
                    },
                    "destination": {
                        "flightPlaceId": "FCO",
                        "parent": {
                            "flightPlaceId": "ROME",
                            "name": "Rome",
                            "type": "City"
                        },
                        "name": "Rome Fiumicino",
                        "type": "Airport"
                    },
                    "departure": "2023-03-10T09:50:00",
                    "arrival": "2023-03-10T12:20:00",
                    "durationInMinutes": 150,
                    "flightNumber": "8354",
                    "marketingCarrier": {
                        "id": -31669,
                        "name": "Wizz Air",
                        "alternateId": "WZ",
                        "allianceId": 0
                    },
                    "operatingCarrier": {
                        "id": -30596,
                        "name": "Wizz Air Malta",
                        "alternateId": "I*",
                        "allianceId": 0
                    }
                }
            ]
        },
        {
            "id": "11493-2303200630--31669-0-13870-2303200905",
            "origin": {
                "id": "FCO",
                "name": "Rome Fiumicino",
                "displayCode": "FCO",
                "city": "Rome",
                "isHighlighted": false
            },
            "destination": {
                "id": "MAD",
                "name": "Madrid",
                "displayCode": "MAD",
                "city": "Madrid",
                "isHighlighted": false
            },
            "durationInMinutes": 155,
            "stopCount": 0,
            "isSmallestStops": false,
            "departure": "2023-03-20T06:30:00",
            "arrival": "2023-03-20T09:05:00",
            "timeDeltaInDays": 0,
            "carriers": {
                "marketing": [
                    {
                        "id": -31669,
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/WZ.png",
                        "name": "Magic Carpet"
                    }
                ],
                "operating": [
                    {
                        "id": -30596,
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/I*.png",
                        "name": "Wizz Air Malta"
                    }
                ],
                "operationType": "not_operated"
            },
            "segments": [
                {
                    "id": "11493-13870-2303200630-2303200905--31669",
                    "origin": {
                        "flightPlaceId": "FCO",
                        "parent": {
                            "flightPlaceId": "ROME",
                            "name": "Rome",
                            "type": "City"
                        },
                        "name": "Rome Fiumicino",
                        "type": "Airport"
                    },
                    "destination": {
                        "flightPlaceId": "MAD",
                        "parent": {
                            "flightPlaceId": "MADR",
                            "name": "Madrid",
                            "type": "City"
                        },
                        "name": "Madrid",
                        "type": "Airport"
                    },
                    "departure": "2023-03-20T06:30:00",
                    "arrival": "2023-03-20T09:05:00",
                    "durationInMinutes": 155,
                    "flightNumber": "8353",
                    "marketingCarrier": {
                        "id": -31669,
                        "name": "Wizz Air",
                        "alternateId": "WZ",
                        "allianceId": 0
                    },
                    "operatingCarrier": {
                        "id": -30596,
                        "name": "Wizz Air Malta",
                        "alternateId": "I*",
                        "allianceId": 0
                    }
                }
            ]
        }
    ],
      isSelfTransfer: false,
      isProtectedSelfTransfer: false,
      farePolicy: [Object],
      eco: [Object],
      fareAttributes: [],
      tags: [Array],
      isMashUp: false,
      hasFlexibleOptions: false,
      score: 1,
      pricingOptions: [Array],
      deeplink: 'https://www.skyscanner.net/transport/flights/mad/fco/230310/230320/config/13870-2303102155--31669-0-11493-2303110025|11493-2303200630--31669-0-13870-2303200905?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=27539793&originentityid=27544850&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=1'
    },
    {
      id: '13870-2303102155--31669-0-11493-2303110025|11493-2303201845--31669-0-13870-2303202120',
      price: {
        "raw": 289.22,
        "formatted": "290 €"
    },
      legs: [
        {
            "id": "13870-2303100950--31669-0-11493-2303101220",
            "origin": {
                "id": "MAD",
                "name": "Madrid",
                "displayCode": "MAD",
                "city": "Madrid",
                "isHighlighted": false
            },
            "destination": {
                "id": "FCO",
                "name": "Rome Fiumicino",
                "displayCode": "FCO",
                "city": "Rome",
                "isHighlighted": false
            },
            "durationInMinutes": 150,
            "stopCount": 0,
            "isSmallestStops": false,
            "departure": "2023-03-10T09:50:00",
            "arrival": "2023-03-10T12:20:00",
            "timeDeltaInDays": 0,
            "carriers": {
                "marketing": [
                    {
                        "id": -31669,
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/WZ.png",
                        "name": "Monarch"
                    }
                ],
                "operating": [
                    {
                        "id": -30596,
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/I*.png",
                        "name": "Wizz Air Malta"
                    }
                ],
                "operationType": "not_operated"
            },
            "segments": [
                {
                    "id": "13870-11493-2303100950-2303101220--31669",
                    "origin": {
                        "flightPlaceId": "MAD",
                        "parent": {
                            "flightPlaceId": "MADR",
                            "name": "Madrid",
                            "type": "City"
                        },
                        "name": "Madrid",
                        "type": "Airport"
                    },
                    "destination": {
                        "flightPlaceId": "FCO",
                        "parent": {
                            "flightPlaceId": "ROME",
                            "name": "Rome",
                            "type": "City"
                        },
                        "name": "Rome Fiumicino",
                        "type": "Airport"
                    },
                    "departure": "2023-03-10T09:50:00",
                    "arrival": "2023-03-10T12:20:00",
                    "durationInMinutes": 150,
                    "flightNumber": "8354",
                    "marketingCarrier": {
                        "id": -31669,
                        "name": "Wizz Air",
                        "alternateId": "WZ",
                        "allianceId": 0
                    },
                    "operatingCarrier": {
                        "id": -30596,
                        "name": "Wizz Air Malta",
                        "alternateId": "I*",
                        "allianceId": 0
                    }
                }
            ]
        },
        {
            "id": "11493-2303200630--31669-0-13870-2303200905",
            "origin": {
                "id": "FCO",
                "name": "Rome Fiumicino",
                "displayCode": "FCO",
                "city": "Rome",
                "isHighlighted": false
            },
            "destination": {
                "id": "MAD",
                "name": "Madrid",
                "displayCode": "MAD",
                "city": "Madrid",
                "isHighlighted": false
            },
            "durationInMinutes": 155,
            "stopCount": 0,
            "isSmallestStops": false,
            "departure": "2023-03-20T06:30:00",
            "arrival": "2023-03-20T09:05:00",
            "timeDeltaInDays": 0,
            "carriers": {
                "marketing": [
                    {
                        "id": -31669,
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/WZ.png",
                        "name": "Concord"
                    }
                ],
                "operating": [
                    {
                        "id": -30596,
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/I*.png",
                        "name": "Wizz Air Malta"
                    }
                ],
                "operationType": "not_operated"
            },
            "segments": [
                {
                    "id": "11493-13870-2303200630-2303200905--31669",
                    "origin": {
                        "flightPlaceId": "FCO",
                        "parent": {
                            "flightPlaceId": "ROME",
                            "name": "Rome",
                            "type": "City"
                        },
                        "name": "Rome Fiumicino",
                        "type": "Airport"
                    },
                    "destination": {
                        "flightPlaceId": "MAD",
                        "parent": {
                            "flightPlaceId": "MADR",
                            "name": "Madrid",
                            "type": "City"
                        },
                        "name": "Madrid",
                        "type": "Airport"
                    },
                    "departure": "2023-03-20T06:30:00",
                    "arrival": "2023-03-20T09:05:00",
                    "durationInMinutes": 155,
                    "flightNumber": "8353",
                    "marketingCarrier": {
                        "id": -31669,
                        "name": "Wizz Air",
                        "alternateId": "WZ",
                        "allianceId": 0
                    },
                    "operatingCarrier": {
                        "id": -30596,
                        "name": "Wizz Air Malta",
                        "alternateId": "I*",
                        "allianceId": 0
                    }
                }
            ]
        }
    ],
      isSelfTransfer: false,
      isProtectedSelfTransfer: false,
      farePolicy: [Object],
      fareAttributes: [],
      tags: [Array],
      isMashUp: false,
      hasFlexibleOptions: false,
      score: 0.5619902,
      pricingOptions: [Array],
      deeplink: 'https://www.skyscanner.net/transport/flights/mad/fco/230310/230320/config/13870-2303102155--31669-0-11493-2303110025|11493-2303201845--31669-0-13870-2303202120?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=27539793&originentityid=27544850&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=1'
    },
    {
      id: '13870-2303100950--31669-0-11493-2303101220|11493-2303200630--31669-0-13870-2303200905',
      price: {
        "raw": 300.33,
        "formatted": "301 €"
    },
      legs: [
        {
            "id": "13870-2303100950--31669-0-11493-2303101220",
            "origin": {
                "id": "MAD",
                "name": "Madrid",
                "displayCode": "MAD",
                "city": "Madrid",
                "isHighlighted": false
            },
            "destination": {
                "id": "FCO",
                "name": "Rome Fiumicino",
                "displayCode": "FCO",
                "city": "Rome",
                "isHighlighted": false
            },
            "durationInMinutes": 150,
            "stopCount": 0,
            "isSmallestStops": false,
            "departure": "2023-03-10T09:50:00",
            "arrival": "2023-03-10T12:20:00",
            "timeDeltaInDays": 0,
            "carriers": {
                "marketing": [
                    {
                        "id": -31669,
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/WZ.png",
                        "name": "Malaysian Air"
                    }
                ],
                "operating": [
                    {
                        "id": -30596,
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/I*.png",
                        "name": "Wizz Air Malta"
                    }
                ],
                "operationType": "not_operated"
            },
            "segments": [
                {
                    "id": "13870-11493-2303100950-2303101220--31669",
                    "origin": {
                        "flightPlaceId": "MAD",
                        "parent": {
                            "flightPlaceId": "MADR",
                            "name": "Madrid",
                            "type": "City"
                        },
                        "name": "Madrid",
                        "type": "Airport"
                    },
                    "destination": {
                        "flightPlaceId": "FCO",
                        "parent": {
                            "flightPlaceId": "ROME",
                            "name": "Rome",
                            "type": "City"
                        },
                        "name": "Rome Fiumicino",
                        "type": "Airport"
                    },
                    "departure": "2023-03-10T09:50:00",
                    "arrival": "2023-03-10T12:20:00",
                    "durationInMinutes": 150,
                    "flightNumber": "8354",
                    "marketingCarrier": {
                        "id": -31669,
                        "name": "Wizz Air",
                        "alternateId": "WZ",
                        "allianceId": 0
                    },
                    "operatingCarrier": {
                        "id": -30596,
                        "name": "Wizz Air Malta",
                        "alternateId": "I*",
                        "allianceId": 0
                    }
                }
            ]
        },
        {
            "id": "11493-2303200630--31669-0-13870-2303200905",
            "origin": {
                "id": "FCO",
                "name": "Rome Fiumicino",
                "displayCode": "FCO",
                "city": "Rome",
                "isHighlighted": false
            },
            "destination": {
                "id": "MAD",
                "name": "Madrid",
                "displayCode": "MAD",
                "city": "Madrid",
                "isHighlighted": false
            },
            "durationInMinutes": 155,
            "stopCount": 0,
            "isSmallestStops": false,
            "departure": "2023-03-20T06:30:00",
            "arrival": "2023-03-20T09:05:00",
            "timeDeltaInDays": 0,
            "carriers": {
                "marketing": [
                    {
                        "id": -31669,
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/WZ.png",
                        "name": "Wizz Air"
                    }
                ],
                "operating": [
                    {
                        "id": -30596,
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/I*.png",
                        "name": "Wizz Air Malta"
                    }
                ],
                "operationType": "not_operated"
            },
            "segments": [
                {
                    "id": "11493-13870-2303200630-2303200905--31669",
                    "origin": {
                        "flightPlaceId": "FCO",
                        "parent": {
                            "flightPlaceId": "ROME",
                            "name": "Rome",
                            "type": "City"
                        },
                        "name": "Rome Fiumicino",
                        "type": "Airport"
                    },
                    "destination": {
                        "flightPlaceId": "MAD",
                        "parent": {
                            "flightPlaceId": "MADR",
                            "name": "Madrid",
                            "type": "City"
                        },
                        "name": "Madrid",
                        "type": "Airport"
                    },
                    "departure": "2023-03-20T06:30:00",
                    "arrival": "2023-03-20T09:05:00",
                    "durationInMinutes": 155,
                    "flightNumber": "8353",
                    "marketingCarrier": {
                        "id": -31669,
                        "name": "Wizz Air",
                        "alternateId": "WZ",
                        "allianceId": 0
                    },
                    "operatingCarrier": {
                        "id": -30596,
                        "name": "Wizz Air Malta",
                        "alternateId": "I*",
                        "allianceId": 0
                    }
                }
            ]
        }
    ],
      isSelfTransfer: false,
      isProtectedSelfTransfer: false,
      farePolicy: [Object],
      eco: [Object],
      fareAttributes: [],
      tags: [Array],
      isMashUp: false,
      hasFlexibleOptions: false,
      score: 0.5252855,
      pricingOptions: [Array],
      deeplink: 'https://www.skyscanner.net/transport/flights/mad/fco/230310/230320/config/13870-2303100950--31669-0-11493-2303101220|11493-2303200630--31669-0-13870-2303200905?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=27539793&originentityid=27544850&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=1'
    }
  ]
}

export default mockData;