const typeStudies = [
    { id: 1, name: "Pregrado" }
];

const typeColleges = [
    { id: 1, name: "University of Cordoba" }
];

const searchType = (arr, id) => {
    return arr.find(type => type.id === id);
}

export default async (req, res) => {
    res.status(200).json([    
        { id: 1, name: "Systems Engineer", start: "2015-02-09", end: "2021-06-01", type_study: searchType(typeStudies, 1), college: searchType(typeColleges, 1) }
    ])
}