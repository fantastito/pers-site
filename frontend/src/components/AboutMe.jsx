function generateAboutMe(aboutMe) {
    const summaryItems = aboutMe.summary.map(item => <li key={item} className="mb-2">{item}</li>);
    const skillsList = aboutMe.skills.map(skill => <li key={skill} className="mb-2">{skill}</li>);
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">About me</h2>
            <p className="mb-2">{aboutMe.location}</p>
            <div className="mb-4">
                <a href={aboutMe.links.github} className="mr-4">GitHub</a>
                <a href={aboutMe.links.linkedin} className="mr-4">LinkedIn</a>
                <a href={aboutMe.links.email}>Email</a>
            </div>
            <ul className="mb-4">{summaryItems}</ul>
            <h3 className="text-xl font-bold mb-2">Skills</h3>
            <ul>{skillsList}</ul>
        </div>
    );
}

export { generateAboutMe };