// task-1 console log the secondary school location of sophia
let data = {
    Sophia: {
        id: 33,
        study: [
            {
                primary:
                [
                    {school_name: "ABC primary school"},
                    {location: "Peters burg"}
                ]
            },
            {
                secondary:
                [
                    {school_name: "ABC secondary school"},
                    {location: "St Lorence"}
                ]
            },
        ]
    }
}
console.log(data.Sophia.study[1].secondary[1].location)

// task-2 console.log output: Petersburg, herry
let students = {
    2222: {
        name: "Jack",
        section: "C",
        class: "IX",
        address: {
            "building no": 12,
            "street": "St. Jonson",
            "city": "Petersburg",
            "country": "UK"
        }
    },
    3333: {
        name: "Herry",
        section: "D",
        class: "X",
        address: {
            "building no": 85,
            "street": "DC road",
            "city": "Kachukhet",
            "country": "Bangladesh"
        }
    },
}
console.log(students['2222'].address["city"],',',students['3333'].name)

//task-3: 
let data2 = {
    data:
    [
        {
            bookId: 1,
            bookDetails: {
                name: "habluder adda",
                category: "XYZ",
                price: "20$"
            },
        },
        {
            bookId: 2,
            bookDetails: {
                name: "notun adda",
                category: "abc",
                price: "10$"
            },
        },
    ]
}
console.log(data2.data[0].bookDetails.name)