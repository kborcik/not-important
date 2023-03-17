const views = {
    "about": `
        <section id="about" class="section">
            <h2>About</h2>
            <p>Kyle is a Dad of three kids. He is interested in how computers and technology will shape their daily lives. <br><br>
            Technology's potential exponentially grows and he would like to help them and his communities make responsible decisions about how to use it. <br><br>
            Why use technology to be social 
            <p>
        </section>
        `,
    "skills": `
        <section id="skills" class="section">
            <h2>Skills</h2>
        </section>
    `,
    "projects": `
        <section id="projects" class="section">
            <h2>Projects</h2>
        </section>
    `,
    "contact": `
        <section id="contact" class="section">
            <h2>Contact</h2>
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