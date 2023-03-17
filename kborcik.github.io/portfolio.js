const views = {
    "about": `
        <section id="about" class="section">
            <h2>About</h2>
            <p>Kyle is a Dad of three kids. He is interested in how computers and technology will shape their daily lives. <br><br>
            Technology's potential exponentially grows and he would like to help them and his communities make responsible decisions about how to use it. <br><br>
            Since computers ability to access language is 
            <p>
        </section>
        `,
    "skills": `
        <section id="skills" class="section">
            <h2>Skills</h2>
            <p>Kyle has implented webs apps using the following tools & skills:<p>
            <ul></ul>
        </section>
    `,
    "projects": `
        <section id="projects" class="section">
            <h2>Projects</h2>
            <Hey Dad: An Ai tool used to be a mentor 
        </section>
    `,
    "contact": `
        <section id="contact" class="section">
            <h2>Contact</h2>
            <p>Kyle can be reached via email at kyleborcikdreams@gmail.com<p>
        </section>
    `
}
const navLinks = document.querySelectorAll('a')
const main = document.querySelector('#main')
console.log(navLinks)

const changeView = evt => {
    let view = evt.target.id
    main.innerHTML = views[view]
}

for(let i = 0; i < navLinks.length; i++){
    navLinks[i].addEventListener('click', changeView)
}