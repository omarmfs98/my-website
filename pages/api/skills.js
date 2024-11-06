const typeSkills = [
    { id: 1, name: "Frontend" },
    { id: 2, name: "Backend" },
    { id: 3, name: "Web Framework" },
    { id: 4, name: "Cloud Computing Services" },
    { id: 6, name: "Headless CMS" },
    { id: 7, name: "AI and Machine Learning" },
    { id: 5, name: "Mobile and Web Application Development Platform" }
];

const searchType = (id) => {
    return typeSkills.find(type => type.id === id);
}

export default async (req, res) => { 
    const urlAssets = `https://${req.headers.host}`;
    res.status(200).json([    
        { id: 1, name: "Vue.js", styles: {"width": 100, "height": 80}, type_skill: searchType(1), percent: 85, icon: { url: `${urlAssets}/assets/skills/vue.svg` } },
        { id: 2, name: "React.js", styles: {"width": 100, "height": 80}, type_skill: searchType(1), percent: 65, icon: { url: `${urlAssets}/assets/skills/react.svg` } },
        { id: 3, name: "Nuxt.js", styles: {"width": 100, "height": 80}, type_skill: searchType(1), percent: 75, icon: { url: `${urlAssets}/assets/skills/nuxt.svg` } },
        { id: 4, name: "Next.js", styles: {"width": 120, "height": 80}, type_skill: searchType(1), percent: 52, icon: { url: `${urlAssets}/assets/skills/next.svg` }},
        { id: 5, name: "Firebase", styles: {"width": 70, "height": 90}, type_skill: searchType(5), percent: 60, icon: { url: `${urlAssets}/assets/skills/firebase.svg`} },
        { id: 6, name: "Laravel", styles: {"width": 100, "height": 80}, type_skill: searchType(3), percent: 77, icon: { url: `${urlAssets}/assets/skills/laravel.svg`} },
        { id: 7, name: "Django", styles: {"width": 120, "height": 40}, type_skill: searchType(3), percent: 46, icon: { url: `${urlAssets}/assets/skills/django.svg`} },
        { id: 8, name: "Amazon Web Services", styles: {"width": 100, "height": 55}, type_skill: searchType(4), percent: 68, icon: { url: `${urlAssets}/assets/skills/aws.svg`} },
        { id: 9, name: "Strapi", styles: {"width": 100, "height": 80}, type_skill: searchType(6), percent: 70, icon: { url: `${urlAssets}/assets/skills/strapi.svg`} },
        { id: 10, name: "Dialogflow", styles: {"width": 80, "height": 80 }, type_skill: searchType(7), percent: 55, icon: { url: `${urlAssets}/assets/skills/dialoglow.svg`} }
    ])
}