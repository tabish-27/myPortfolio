import "./about.css";

const About = () => {
  return (
    <div className="aboutcontainer" id="about">
      <div className="partContainer">
        <div className="partleft">
          <h1>ABOUT ME</h1>
          <div className="bar1"></div>
        </div>

        <div className="partrightAbout">
          <p>
            Hey everyone, I'm Tabish Javed, a passionate Full-Stack Web
            Developer skilled in modern technologies like React, Node.js, and
            other JavaScript libraries and frameworks. With over a year of
            hands-on development experience, I’ve built and contributed to 5+
            React web applications as personal and academic projects, focusing
            on creating effective, user-friendly solutions. I also have a strong
            foundation in data structures and algorithms and am active on
            LeetCode, where I’ve solved over 500 problems. My expertise includes
            JavaScript, React, Node.js, Express.js, and MongoDB. Join me on this
            journey as I bring together technology, creativity, and strategic
            thinking to build impactful solutions. Let's connect and explore the
            endless possibilities in tech together!
          </p>

          <a
            href="https://drive.google.com/file/d/1P190VS8WDvmZxVm7V7A8z3z0Z11XUnrV/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
