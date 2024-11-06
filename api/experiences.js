const typeEnterprises = [
    //{ id: 1, name: "AXYZ" },
    { id: 2, name: "Segrith Corp" },
    { id: 3, name: "BlackSip" },
    { id: 4, name: "Global66" }
];
const searchType = (id) => {
    return typeEnterprises.find(type => type.id === id);
}

export default async (req, res) => {
    res.status(200).json([    
        //{ id: 1, name: "Frontend Developer", start: "2017-08-01", end: "2018-04-01", description: "", enterprise: searchType(1) },
        //{ id: 2, name: "Frontend Developer", start: "2018-04-01", end: "2020-07-30", description: "", enterprise: searchType(2) },
        { id: 2, name: "Frontend Developer", start: "2017-08-01", end: "2020-07-30", description: "", enterprise: searchType(2) },
        { id: 3, name: "Frontend Developer", start: "2020-09-02", end: "2021-06-28", description: "", enterprise: searchType(3) },
        { id: 3, name: "Frontend Developer", start: "2021-06-05", end: null, description: "", enterprise: searchType(4) }
    ])
}
