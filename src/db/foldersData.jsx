export const foldersData = [
    // desktop folder 
    {
        name: "Desktop",
        files: [
            {
                icon: 'folder',
                name: "About",
                type: "folder",
            },
            {
                icon: 'folder',
                name: "Projects",
                type: "folder",
            },
            {
                icon: 'folder',
                name: "Contact",
                type: "folder",
            },
        ]
    },
    // about folder
    {
        name: "Desktop/About",
        files: [
            {
                icon: 'txt',
                name: "About-PT.txt",
                type: "file",
                content: [
                    "Sobre mim,",
                    "Olá, me chamo Ernesto e moro no interior do Rio de Janeiro. Em 2022 despertei interesse em desenvolvimento web e foi então que descobri uma paixão pela área. Desde aí, não parei de estudar e querer aprender mais.",
                    "Atualmente estou em um processo de mudança de carreira, estou estudando para me capacitar e ter um bom currículo para conseguir minha primeira oportunidade profissional."
                ]
            },
            {
                icon: 'txt',
                name: "About-EN.txt",
                type: "file",
                content: [
                    "About me,",
                    "Hi! My name is Ernesto. I'm from Brazil and in 2022 I started to read about web development and that's how I discovered what I love to do. Since then, I haven't stopped studying and wanting to learn more.",
                    "Now, I'm in a career change process. I'm studying to develop my skills and have experience to get my first professional opportunity."
                ]
            },
            {
                icon: 'table',
                name: "Skills.table",
                type: "file"
            },
            {
                icon: 'pdf',
                name: "Curriculum.pdf",
                type: "link",
                link: "images/curriculum.pdf"
            },
        ]
    },
    // projects folder
    {
        name: "Desktop/Projects/Pokedex",
        files: [
            {
                icon: 'browser',
                name: "Index.html",
                type: "link",
                link: "https://csb-yjyxj5.netlify.app"
            },
            {
                icon: 'github',
                name: "Project.github",
                type: "link",
                link: "https://github.com/ernestoborges/Pokedex"
            },
            {
                icon: 'img',
                name: "Preview.png",
                type: "file",
                ref: "Pokedex",
                content: [
                    "My first React project",
                    "The idea was to come up with what a real pokedex would look like.",
                    "I plan to redo it using React correctly in the future"
                ]
            },
        ]
    },
    {
        name: "Desktop/Projects/REST Countries API",
        files: [
            {
                icon: 'browser',
                name: "Index.html",
                type: "link",
                link: "https://csb-hz0799.netlify.app"
            },
            {
                icon: 'github',
                name: "Project.github",
                type: "link",
                link: "https://github.com/ernestoborges/frontendMentor-12"
            },
            {
                icon: 'img',
                name: "Preview.png",
                type: "file",
                ref: "REST Countries API"
            },
        ]
    },
    {
        name: "Desktop/Projects/DnD5e Monster Encounters",
        files: [
            {
                icon: 'browser',
                name: "Index.html",
                type: "link",
                link: "https://csb-un44vw.netlify.app"
            },
            {
                icon: 'github',
                name: "Project.github",
                type: "link",
                link: "https://github.com/ernestoborges/dnd5e-encounter-calculator"
            },
            {
                icon: 'img',
                name: "Preview.png",
                type: "file",
                ref: "DnD5e Monster Encounters"
            },
        ]
    },
    {
        name: "Desktop/Projects/Frontend Mentor",
        files: [
            {
                icon: 'browser',
                name: "Index.html",
                type: "link"
            },
        ]
    },
    {
        name: "Desktop/Projects",
        files: [
            {
                icon: 'folder',
                name: "Pokedex",
                type: "folder",
            },
            {
                icon: 'folder',
                name: "REST Countries API",
                type: "folder",
            },
            {
                icon: 'folder',
                name: "DnD5e Monster Encounters",
                type: "folder",
            },
            {
                icon: 'folder',
                name: "Frontend Mentor",
                type: "folder",
            },
        ]
    },
    // contact folder
    {
        name: "Desktop/Contact",
        files: [
            {
                icon: 'github',
                name: "Github",
                type: "link",
                link: "https://github.com/ernestoborges"
            },
            {
                icon: 'linkedin',
                name: "Linkedin",
                type: "link",
                link: "https://www.linkedin.com/in/ernesto-borges-b9a440194/"
            },
            {
                icon: 'mail',
                name: "E-mail",
                type: "clip",
            },
        ]
    }
]
