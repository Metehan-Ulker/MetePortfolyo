import "./Skills.css";

const skills = [
    { name: "JavaScript", icon: "/skills/jsresim.png" },
    { name: "React", icon: "/skills/ReactPng.png" },
    { name: "Python", icon: "/skills/pythonresim.png" },
    { name: "CSS", icon: "/skills/css-logo.png" },
    { name: "C#", icon: "/skills/Csharp_Logo.png" },
    {name:"HTML5", icon: "/skills/HTML5.png" }

];

export default function Skills() {
    return (
        <section className="skills-section" id="skills">
            <h2>Neler Yapabilirim ?</h2>
            <div className="skills-list">
                {skills.map(({ name, icon }, index) => (
                    <div className="skill-item" key={index}>
                        <img src={icon} alt={`${name} icon`} className="skill-icon" />
                        <span className="skill-name">{name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
