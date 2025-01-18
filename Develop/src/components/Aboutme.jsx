import React from "react";
import profileImage from "../assets/images/profile-image.png";

function AboutMe() {
    return <section>
      <h2>About Me</h2>
      <img src={profileImage} alt="placeholder" />
        <br /> <br /> <br /> <br />
      <p>
      Hello, I'm Stella, a passionate and detail-oriented beginner web developer eager to make a meaningful impact in the tech world. 
      With a strong foundation in both front-end and back-end technologies, I bring a versatile skill set and a commitment to continuous learning to every project.
      I specialize in front-end development, utilizing technologies such as HTML, CSS, JavaScript, React, and TypeScript to create visually appealing and user-friendly web applications. 
      My back-end development experience includes working with Node.js, server management, and SQL, ensuring robust and efficient application functionality. 
      Additionally, I have expertise in integrating and working with Web APIs to enhance application features and connectivity. 
      Proficiency in GitHub enables me to manage version control effectively, and my knowledge of prompt engineering allows me to optimize and leverage AI tools to enhance user experiences and streamline processes.
      I believe in crafting intuitive and efficient web solutions that not only meet users' needs but also exceed expectations. 
      My approach is proactive, emphasizing problem-solving, collaboration, and attention to detail to ensure clean and maintainable code. 
      I am dedicated to refining my skills and embracing new technologies to stay at the forefront of web development. Let’s connect and create something amazing together!
      </p>

    </section>
};

export default AboutMe;
