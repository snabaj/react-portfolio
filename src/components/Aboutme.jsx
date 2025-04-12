import React from "react";
//import profileImage from "../assets/images/profile-image.png";
import portfolioImage from "../assets/images/Portfolio_3.jpg";

function AboutMe() {
    return (
    <section>
      <h2>About Me</h2>
      <img src={portfolioImage} alt="placeholder" />
        <br /> 
      <p>
      Hi, I’m Stella — a curious and creative web developer based in beautiful Boston, Massachusetts. I’m a beginner developer with a certificate in Full-Stack Software Development and a Bachelor’s degree in Information Technology. Translation: I’ve been trained, caffeinated, and unleashed into the tech world, ready to build cool stuff and learn even cooler things.

<br/>My front-end toolkit includes HTML, CSS, JavaScript, React, and TypeScript — the dream team I use to create beautiful, intuitive interfaces. On the back end, I work with Node.js, Express.js, PostgreSQL, and MongoDB to keep my applications robust and efficient. I’ve also worked with RESTful APIs, GraphQL APIs, and JWT authentication to create secure, modern web apps that connect and scale with ease.

I’m well-versed in GitHub for version control, and I’m learning the ropes of testing and deployment to ensure smooth, bug-free launches. 

<br/><br/>I take pride in writing clean, maintainable code and paying attention to the little details that make a big difference in user experience.

Beyond solo projects, I thrive in collaboration — I love working with other developers, sharing ideas, solving problems, and leveling up together. My portfolio showcases a range of projects — from solo builds to team collaborations developed during my coding bootcamp that taught me the power of working together to bring big ideas to life.

<br/><br/>When I’m not coding, you’ll find me riding my bike (yep — I just learned recently as an adult 👏), reading literary fiction, exploring new places, or planning my next adventure.

Let’s connect, build something great, and maybe share a laugh or two along the way. 🚀
      </p>
    </section>
    );
};

export default AboutMe;
