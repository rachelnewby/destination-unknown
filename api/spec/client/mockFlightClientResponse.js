const mockResponse = {
"success": true,
"data": {
    "buckets": [
        {
            "id": "Best",
            "name": "Best",
            "items": [
                {
                    "id": "13870-2303102155--31669-0-11493-2303110025|11493-2303200630--31669-0-13870-2303200905",
                    "price": {
                        "raw": 206.33,
                        "formatted": "207 €"
                    },
                    "legs": [
                        {
                            "id": "13870-2303102155--31669-0-11493-2303110025",
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
                            "departure": "2023-03-10T21:55:00",
                            "arrival": "2023-03-11T00:25:00",
                            "timeDeltaInDays": 1,
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
                                    "id": "13870-11493-2303102155-2303110025--31669",
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
                                    "departure": "2023-03-10T21:55:00",
                                    "arrival": "2023-03-11T00:25:00",
                                    "durationInMinutes": 150,
                                    "flightNumber": "8334",
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
                    "isSelfTransfer": false,
                    "isProtectedSelfTransfer": false,
                    "farePolicy": {
                        "isChangeAllowed": false,
                        "isPartiallyChangeable": false,
                        "isCancellationAllowed": false,
                        "isPartiallyRefundable": false
                    },
                    "eco": {
                        "ecoContenderDelta": 10.064947
                    },
                    "fareAttributes": [],
                    "tags": [
                        "cheapest",
                        "second_shortest"
                    ],
                    "isMashUp": false,
                    "hasFlexibleOptions": false,
                    "score": 0.649395,
                    "pricingOptions": [
                        {
                            "agentIds": [
                                "ctuk"
                            ],
                            "amount": 206.33,
                            "bookingProposition": "PBOOK"
                        }
                    ],
                    "deeplink": "https://www.skyscanner.net/transport/flights/mad/fco/230310/230320/config/13870-2303102155--31669-0-11493-2303110025|11493-2303200630--31669-0-13870-2303200905?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=27539793&originentityid=27544850&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=1"
                },
                {
                    "id": "13870-2303102155--31669-0-11493-2303110025|11493-2303201845--31669-0-13870-2303202120",
                    "price": {
                        "raw": 265.4,
                        "formatted": "266 €"
                    },
                    "legs": [
                        {
                            "id": "13870-2303102155--31669-0-11493-2303110025",
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
                            "departure": "2023-03-10T21:55:00",
                            "arrival": "2023-03-11T00:25:00",
                            "timeDeltaInDays": 1,
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
                                    "id": "13870-11493-2303102155-2303110025--31669",
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
                                    "departure": "2023-03-10T21:55:00",
                                    "arrival": "2023-03-11T00:25:00",
                                    "durationInMinutes": 150,
                                    "flightNumber": "8334",
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
                            "id": "11493-2303201845--31669-0-13870-2303202120",
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
                            "departure": "2023-03-20T18:45:00",
                            "arrival": "2023-03-20T21:20:00",
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
                                    "id": "11493-13870-2303201845-2303202120--31669",
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
                                    "departure": "2023-03-20T18:45:00",
                                    "arrival": "2023-03-20T21:20:00",
                                    "durationInMinutes": 155,
                                    "flightNumber": "8333",
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
                    "isSelfTransfer": false,
                    "isProtectedSelfTransfer": false,
                    "farePolicy": {
                        "isChangeAllowed": false,
                        "isPartiallyChangeable": false,
                        "isCancellationAllowed": false,
                        "isPartiallyRefundable": false
                    },
                    "fareAttributes": [],
                    "tags": [
                        "second_cheapest",
                        "second_shortest"
                    ],
                    "isMashUp": false,
                    "hasFlexibleOptions": false,
                    "score": 0.504859,
                    "pricingOptions": [
                        {
                            "agentIds": [
                                "ctuk"
                            ],
                            "amount": 265.4,
                            "bookingProposition": "PBOOK"
                        }
                    ],
                    "deeplink": "https://www.skyscanner.net/transport/flights/mad/fco/230310/230320/config/13870-2303102155--31669-0-11493-2303110025|11493-2303201845--31669-0-13870-2303202120?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=27539793&originentityid=27544850&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=1"
                },
                {
                    "id": "13870-2303100950--31669-0-11493-2303101220|11493-2303200630--31669-0-13870-2303200905",
                    "price": {
                        "raw": 270.35,
                        "formatted": "271 €"
                    },
                    "legs": [
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
                    "isSelfTransfer": false,
                    "isProtectedSelfTransfer": false,
                    "farePolicy": {
                        "isChangeAllowed": false,
                        "isPartiallyChangeable": false,
                        "isCancellationAllowed": false,
                        "isPartiallyRefundable": false
                    },
                    "eco": {
                        "ecoContenderDelta": 20.129894
                    },
                    "fareAttributes": [],
                    "tags": [
                        "third_cheapest",
                        "second_shortest"
                    ],
                    "isMashUp": false,
                    "hasFlexibleOptions": false,
                    "score": 0.495615,
                    "pricingOptions": [
                        {
                            "agentIds": [
                                "ctuk"
                            ],
                            "amount": 270.35,
                            "bookingProposition": "PBOOK"
                        }
                    ],
                    "deeplink": "https://www.skyscanner.net/transport/flights/mad/fco/230310/230320/config/13870-2303100950--31669-0-11493-2303101220|11493-2303200630--31669-0-13870-2303200905?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=27539793&originentityid=27544850&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=1"
                }
            ]
        },
        {
            "id": "Cheapest",
            "name": "Cheapest",
            "items": [
                {
                    "id": "13870-2303102155--31669-0-11493-2303110025|11493-2303200630--31669-0-13870-2303200905",
                    "price": {
                        "raw": 206.33,
                        "formatted": "207 €"
                    },
                    "legs": [
                        {
                            "id": "13870-2303102155--31669-0-11493-2303110025",
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
                            "departure": "2023-03-10T21:55:00",
                            "arrival": "2023-03-11T00:25:00",
                            "timeDeltaInDays": 1,
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
                                    "id": "13870-11493-2303102155-2303110025--31669",
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
                                    "departure": "2023-03-10T21:55:00",
                                    "arrival": "2023-03-11T00:25:00",
                                    "durationInMinutes": 150,
                                    "flightNumber": "8334",
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
                    "isSelfTransfer": false,
                    "isProtectedSelfTransfer": false,
                    "farePolicy": {
                        "isChangeAllowed": false,
                        "isPartiallyChangeable": false,
                        "isCancellationAllowed": false,
                        "isPartiallyRefundable": false
                    },
                    "eco": {
                        "ecoContenderDelta": 10.064947
                    },
                    "fareAttributes": [],
                    "tags": [
                        "cheapest",
                        "second_shortest"
                    ],
                    "isMashUp": false,
                    "hasFlexibleOptions": false,
                    "score": 1,
                    "pricingOptions": [
                        {
                            "agentIds": [
                                "ctuk"
                            ],
                            "amount": 206.33,
                            "bookingProposition": "PBOOK"
                        }
                    ],
                    "deeplink": "https://www.skyscanner.net/transport/flights/mad/fco/230310/230320/config/13870-2303102155--31669-0-11493-2303110025|11493-2303200630--31669-0-13870-2303200905?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=27539793&originentityid=27544850&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=1"
                },
                {
                    "id": "13870-2303102155--31669-0-11493-2303110025|11493-2303201845--31669-0-13870-2303202120",
                    "price": {
                        "raw": 265.4,
                        "formatted": "266 €"
                    },
                    "legs": [
                        {
                            "id": "13870-2303102155--31669-0-11493-2303110025",
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
                            "departure": "2023-03-10T21:55:00",
                            "arrival": "2023-03-11T00:25:00",
                            "timeDeltaInDays": 1,
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
                                    "id": "13870-11493-2303102155-2303110025--31669",
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
                                    "departure": "2023-03-10T21:55:00",
                                    "arrival": "2023-03-11T00:25:00",
                                    "durationInMinutes": 150,
                                    "flightNumber": "8334",
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
                            "id": "11493-2303201845--31669-0-13870-2303202120",
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
                            "departure": "2023-03-20T18:45:00",
                            "arrival": "2023-03-20T21:20:00",
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
                                    "id": "11493-13870-2303201845-2303202120--31669",
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
                                    "departure": "2023-03-20T18:45:00",
                                    "arrival": "2023-03-20T21:20:00",
                                    "durationInMinutes": 155,
                                    "flightNumber": "8333",
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
                    "isSelfTransfer": false,
                    "isProtectedSelfTransfer": false,
                    "farePolicy": {
                        "isChangeAllowed": false,
                        "isPartiallyChangeable": false,
                        "isCancellationAllowed": false,
                        "isPartiallyRefundable": false
                    },
                    "fareAttributes": [],
                    "tags": [
                        "second_cheapest",
                        "second_shortest"
                    ],
                    "isMashUp": false,
                    "hasFlexibleOptions": false,
                    "score": 0.5619902,
                    "pricingOptions": [
                        {
                            "agentIds": [
                                "ctuk"
                            ],
                            "amount": 265.4,
                            "bookingProposition": "PBOOK"
                        }
                    ],
                    "deeplink": "https://www.skyscanner.net/transport/flights/mad/fco/230310/230320/config/13870-2303102155--31669-0-11493-2303110025|11493-2303201845--31669-0-13870-2303202120?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=27539793&originentityid=27544850&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=1"
                },
                {
                    "id": "13870-2303100950--31669-0-11493-2303101220|11493-2303200630--31669-0-13870-2303200905",
                    "price": {
                        "raw": 270.35,
                        "formatted": "271 €"
                    },
                    "legs": [
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
                    "isSelfTransfer": false,
                    "isProtectedSelfTransfer": false,
                    "farePolicy": {
                        "isChangeAllowed": false,
                        "isPartiallyChangeable": false,
                        "isCancellationAllowed": false,
                        "isPartiallyRefundable": false
                    },
                    "eco": {
                        "ecoContenderDelta": 20.129894
                    },
                    "fareAttributes": [],
                    "tags": [
                        "third_cheapest",
                        "second_shortest"
                    ],
                    "isMashUp": false,
                    "hasFlexibleOptions": false,
                    "score": 0.5252855,
                    "pricingOptions": [
                        {
                            "agentIds": [
                                "ctuk"
                            ],
                            "amount": 270.35,
                            "bookingProposition": "PBOOK"
                        }
                    ],
                    "deeplink": "https://www.skyscanner.net/transport/flights/mad/fco/230310/230320/config/13870-2303100950--31669-0-11493-2303101220|11493-2303200630--31669-0-13870-2303200905?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=27539793&originentityid=27544850&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=1"
                }
            ]
        },
        {
            "id": "Fastest",
            "name": "Fastest",
            "items": [
                {
                    "id": "13870-2303100705--32680-0-11493-2303100930|11493-2303200630--31669-0-13870-2303200905",
                    "price": {
                        "raw": 324.75,
                        "formatted": "325 €"
                    },
                    "legs": [
                        {
                            "id": "13870-2303100705--32680-0-11493-2303100930",
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
                            "durationInMinutes": 145,
                            "stopCount": 0,
                            "isSmallestStops": false,
                            "departure": "2023-03-10T07:05:00",
                            "arrival": "2023-03-10T09:30:00",
                            "timeDeltaInDays": 0,
                            "carriers": {
                                "marketing": [
                                    {
                                        "id": -32680,
                                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/UX.png",
                                        "name": "Air Europa"
                                    }
                                ],
                                "operationType": "fully_operated"
                            },
                            "segments": [
                                {
                                    "id": "13870-11493-2303100705-2303100930--32680",
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
                                    "departure": "2023-03-10T07:05:00",
                                    "arrival": "2023-03-10T09:30:00",
                                    "durationInMinutes": 145,
                                    "flightNumber": "1043",
                                    "marketingCarrier": {
                                        "id": -32680,
                                        "name": "Air Europa",
                                        "alternateId": "UX",
                                        "allianceId": 0
                                    },
                                    "operatingCarrier": {
                                        "id": -32680,
                                        "name": "Air Europa",
                                        "alternateId": "UX",
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
                    "isSelfTransfer": false,
                    "isProtectedSelfTransfer": false,
                    "farePolicy": {
                        "isChangeAllowed": false,
                        "isPartiallyChangeable": false,
                        "isCancellationAllowed": false,
                        "isPartiallyRefundable": false
                    },
                    "eco": {
                        "ecoContenderDelta": 13.912344
                    },
                    "fareAttributes": [],
                    "tags": [
                        "shortest"
                    ],
                    "isMashUp": false,
                    "hasFlexibleOptions": false,
                    "score": 1,
                    "pricingOptions": [
                        {
                            "agentIds": [
                                "mtuk"
                            ],
                            "amount": 324.75,
                            "bookingProposition": "PBOOK"
                        }
                    ],
                    "deeplink": "https://www.skyscanner.net/transport/flights/mad/fco/230310/230320/config/13870-2303100705--32680-0-11493-2303100930|11493-2303200630--31669-0-13870-2303200905?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=27539793&originentityid=27544850&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=1"
                },
                {
                    "id": "13870-2303101500--32680-0-11493-2303101725|11493-2303200630--31669-0-13870-2303200905",
                    "price": {
                        "raw": 341.19,
                        "formatted": "342 €"
                    },
                    "legs": [
                        {
                            "id": "13870-2303101500--32680-0-11493-2303101725",
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
                            "durationInMinutes": 145,
                            "stopCount": 0,
                            "isSmallestStops": false,
                            "departure": "2023-03-10T15:00:00",
                            "arrival": "2023-03-10T17:25:00",
                            "timeDeltaInDays": 0,
                            "carriers": {
                                "marketing": [
                                    {
                                        "id": -32680,
                                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/UX.png",
                                        "name": "Air Europa"
                                    }
                                ],
                                "operationType": "fully_operated"
                            },
                            "segments": [
                                {
                                    "id": "13870-11493-2303101500-2303101725--32680",
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
                                    "departure": "2023-03-10T15:00:00",
                                    "arrival": "2023-03-10T17:25:00",
                                    "durationInMinutes": 145,
                                    "flightNumber": "1047",
                                    "marketingCarrier": {
                                        "id": -32680,
                                        "name": "Air Europa",
                                        "alternateId": "UX",
                                        "allianceId": 0
                                    },
                                    "operatingCarrier": {
                                        "id": -32680,
                                        "name": "Air Europa",
                                        "alternateId": "UX",
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
                    "isSelfTransfer": false,
                    "isProtectedSelfTransfer": false,
                    "farePolicy": {
                        "isChangeAllowed": false,
                        "isPartiallyChangeable": false,
                        "isCancellationAllowed": false,
                        "isPartiallyRefundable": false
                    },
                    "eco": {
                        "ecoContenderDelta": 16.66128
                    },
                    "fareAttributes": [],
                    "tags": [
                        "shortest"
                    ],
                    "isMashUp": false,
                    "hasFlexibleOptions": false,
                    "score": 1,
                    "pricingOptions": [
                        {
                            "agentIds": [
                                "ctuk"
                            ],
                            "amount": 341.19,
                            "bookingProposition": "PBOOK"
                        }
                    ],
                    "deeplink": "https://www.skyscanner.net/transport/flights/mad/fco/230310/230320/config/13870-2303101500--32680-0-11493-2303101725|11493-2303200630--31669-0-13870-2303200905?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=27539793&originentityid=27544850&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=1"
                },
                {
                    "id": "13870-2303101500--30727-0-11493-2303101725|11493-2303200630--31669-0-13870-2303200905",
                    "price": {
                        "raw": 337.34,
                        "formatted": "338 €"
                    },
                    "legs": [
                        {
                            "id": "13870-2303101500--30727-0-11493-2303101725",
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
                            "durationInMinutes": 145,
                            "stopCount": 0,
                            "isSmallestStops": false,
                            "departure": "2023-03-10T15:00:00",
                            "arrival": "2023-03-10T17:25:00",
                            "timeDeltaInDays": 0,
                            "carriers": {
                                "marketing": [
                                    {
                                        "id": -30727,
                                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/AZ.png",
                                        "name": "ITA Airways"
                                    }
                                ],
                                "operating": [
                                    {
                                        "id": -32680,
                                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/UX.png",
                                        "name": "Air Europa"
                                    }
                                ],
                                "operationType": "not_operated"
                            },
                            "segments": [
                                {
                                    "id": "13870-11493-2303101500-2303101725--30727",
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
                                    "departure": "2023-03-10T15:00:00",
                                    "arrival": "2023-03-10T17:25:00",
                                    "durationInMinutes": 145,
                                    "flightNumber": "7117",
                                    "marketingCarrier": {
                                        "id": -30727,
                                        "name": "ITA Airways",
                                        "alternateId": "AZ",
                                        "allianceId": 0
                                    },
                                    "operatingCarrier": {
                                        "id": -32680,
                                        "name": "Air Europa",
                                        "alternateId": "UX",
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
                    "isSelfTransfer": false,
                    "isProtectedSelfTransfer": false,
                    "farePolicy": {
                        "isChangeAllowed": false,
                        "isPartiallyChangeable": false,
                        "isCancellationAllowed": false,
                        "isPartiallyRefundable": false
                    },
                    "eco": {
                        "ecoContenderDelta": 16.66128
                    },
                    "fareAttributes": [],
                    "tags": [
                        "shortest"
                    ],
                    "isMashUp": false,
                    "hasFlexibleOptions": false,
                    "score": 1,
                    "pricingOptions": [
                        {
                            "agentIds": [
                                "ctuk"
                            ],
                            "amount": 337.34,
                            "bookingProposition": "PBOOK"
                        }
                    ],
                    "deeplink": "https://www.skyscanner.net/transport/flights/mad/fco/230310/230320/config/13870-2303101500--30727-0-11493-2303101725|11493-2303200630--31669-0-13870-2303200905?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=27539793&originentityid=27544850&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=1"
                }
            ]
        },
        {
            "id": "Direct",
            "name": "Direct",
            "items": [
                {
                    "id": "13870-2303102155--31669-0-11493-2303110025|11493-2303200630--31669-0-13870-2303200905",
                    "price": {
                        "raw": 206.33,
                        "formatted": "207 €"
                    },
                    "legs": [
                        {
                            "id": "13870-2303102155--31669-0-11493-2303110025",
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
                            "departure": "2023-03-10T21:55:00",
                            "arrival": "2023-03-11T00:25:00",
                            "timeDeltaInDays": 1,
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
                                    "id": "13870-11493-2303102155-2303110025--31669",
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
                                    "departure": "2023-03-10T21:55:00",
                                    "arrival": "2023-03-11T00:25:00",
                                    "durationInMinutes": 150,
                                    "flightNumber": "8334",
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
                    "isSelfTransfer": false,
                    "isProtectedSelfTransfer": false,
                    "farePolicy": {
                        "isChangeAllowed": false,
                        "isPartiallyChangeable": false,
                        "isCancellationAllowed": false,
                        "isPartiallyRefundable": false
                    },
                    "eco": {
                        "ecoContenderDelta": 10.064947
                    },
                    "fareAttributes": [],
                    "tags": [
                        "cheapest",
                        "second_shortest"
                    ],
                    "isMashUp": false,
                    "hasFlexibleOptions": false,
                    "score": 0.649395,
                    "pricingOptions": [
                        {
                            "agentIds": [
                                "ctuk"
                            ],
                            "amount": 206.33,
                            "bookingProposition": "PBOOK"
                        }
                    ],
                    "deeplink": "https://www.skyscanner.net/transport/flights/mad/fco/230310/230320/config/13870-2303102155--31669-0-11493-2303110025|11493-2303200630--31669-0-13870-2303200905?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=27539793&originentityid=27544850&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=1"
                },
                {
                    "id": "13870-2303102155--31669-0-11493-2303110025|11493-2303201845--31669-0-13870-2303202120",
                    "price": {
                        "raw": 265.4,
                        "formatted": "266 €"
                    },
                    "legs": [
                        {
                            "id": "13870-2303102155--31669-0-11493-2303110025",
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
                            "departure": "2023-03-10T21:55:00",
                            "arrival": "2023-03-11T00:25:00",
                            "timeDeltaInDays": 1,
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
                                    "id": "13870-11493-2303102155-2303110025--31669",
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
                                    "departure": "2023-03-10T21:55:00",
                                    "arrival": "2023-03-11T00:25:00",
                                    "durationInMinutes": 150,
                                    "flightNumber": "8334",
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
                            "id": "11493-2303201845--31669-0-13870-2303202120",
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
                            "departure": "2023-03-20T18:45:00",
                            "arrival": "2023-03-20T21:20:00",
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
                                    "id": "11493-13870-2303201845-2303202120--31669",
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
                                    "departure": "2023-03-20T18:45:00",
                                    "arrival": "2023-03-20T21:20:00",
                                    "durationInMinutes": 155,
                                    "flightNumber": "8333",
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
                    "isSelfTransfer": false,
                    "isProtectedSelfTransfer": false,
                    "farePolicy": {
                        "isChangeAllowed": false,
                        "isPartiallyChangeable": false,
                        "isCancellationAllowed": false,
                        "isPartiallyRefundable": false
                    },
                    "fareAttributes": [],
                    "tags": [
                        "second_cheapest",
                        "second_shortest"
                    ],
                    "isMashUp": false,
                    "hasFlexibleOptions": false,
                    "score": 0.504859,
                    "pricingOptions": [
                        {
                            "agentIds": [
                                "ctuk"
                            ],
                            "amount": 265.4,
                            "bookingProposition": "PBOOK"
                        }
                    ],
                    "deeplink": "https://www.skyscanner.net/transport/flights/mad/fco/230310/230320/config/13870-2303102155--31669-0-11493-2303110025|11493-2303201845--31669-0-13870-2303202120?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=27539793&originentityid=27544850&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=1"
                },
                {
                    "id": "13870-2303100950--31669-0-11493-2303101220|11493-2303200630--31669-0-13870-2303200905",
                    "price": {
                        "raw": 270.35,
                        "formatted": "271 €"
                    },
                    "legs": [
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
                    "isSelfTransfer": false,
                    "isProtectedSelfTransfer": false,
                    "farePolicy": {
                        "isChangeAllowed": false,
                        "isPartiallyChangeable": false,
                        "isCancellationAllowed": false,
                        "isPartiallyRefundable": false
                    },
                    "eco": {
                        "ecoContenderDelta": 20.129894
                    },
                    "fareAttributes": [],
                    "tags": [
                        "third_cheapest",
                        "second_shortest"
                    ],
                    "isMashUp": false,
                    "hasFlexibleOptions": false,
                    "score": 0.495615,
                    "pricingOptions": [
                        {
                            "agentIds": [
                                "ctuk"
                            ],
                            "amount": 270.35,
                            "bookingProposition": "PBOOK"
                        }
                    ],
                    "deeplink": "https://www.skyscanner.net/transport/flights/mad/fco/230310/230320/config/13870-2303100950--31669-0-11493-2303101220|11493-2303200630--31669-0-13870-2303200905?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=27539793&originentityid=27544850&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=1"
                }
            ]
        }
    ]
}
}

module.exports = mockResponse