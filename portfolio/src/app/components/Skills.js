"use client";

import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "HTML / CSS", color: "#c0191b", value: 85 },
  { name: "SASS / Bootstrap / SEO", color: "#11b1ff", value: 80 },
  { name: "JS / Node.js / Next.js", color: "#9b59b6", value: 70 },
  { name: "PHP / PHP MyAdmin", color: "#ffaa00", value: 60 },
  { name: "React.js / React Router", color: "#27ae60", value: 70 },
  { name: "MongoDB / MySQL", color: "#c0392b", value: 75 },
  { name: "API REST / Postman", color: "#1199ff", value: 70 },
  { name: "GitHub", color: "#9b59b6", value: 80 },
  { name: "WordPress", color: "#ffa500", value: 75 },
  { name: "Adobe Photoshop", color: "#27ae60", value: 60 },
];

const Skills = () => {
  const [progressValues, setProgressValues] = useState(
    Array(skills.length).fill(0)
  );
  const [hasAnimated, setHasAnimated] = useState(false);
  const competencesDetailsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            animateSkills();
            entry.target.classList.add("scroll-animation");
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (competencesDetailsRef.current) {
      observer.observe(competencesDetailsRef.current);
    }

    return () => {
      if (competencesDetailsRef.current) {
        observer.unobserve(competencesDetailsRef.current);
      }
    };
  }, [hasAnimated]);

  const animateSkills = () => {
    const speed = 25;

    skills.forEach((skill, index) => {
      const endValue = skill.value;
      let startValue = 0;

      const incrementProgress = () => {
        if (startValue < endValue) {
          startValue += Math.ceil(endValue / (1000 / speed));
          if (startValue > endValue) startValue = endValue;

          setProgressValues((prevValues) => {
            const newValues = [...prevValues];
            newValues[index] = startValue;
            return newValues;
          });
          requestAnimationFrame(incrementProgress);
        }
      };

      incrementProgress();
    });
  };

  return (
    <section id="skills" className="competences">
      <h2 className="competences__titre">Compétences</h2>
      <div className="competences__div">
        <div
          className="competences__details animation scroll-animation"
          ref={competencesDetailsRef}
        >
          <div className="competences__un">
            <ul className="competences__barre">
              {skills.slice(0, 5).map((skill, index) => (
                <li className="competences__li" key={`${skill.name}-${index}`}>
                  <div className="progressbar-title">
                    <h3 className="skill">{skill.name}</h3>
                    <div className="containeur">
                      <div
                        className="circular-progress"
                        style={{
                          background: `conic-gradient(${skill.color} ${
                            progressValues[index] * 3.6
                          }deg, rgb(197, 197, 197) 0deg)`,
                        }}
                      >
                        <span className="progress-value percent">
                          {Math.round(progressValues[index])}%
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bar-container">
                    <span
                      className="progressbar progress-filled"
                      style={{
                        width: `${progressValues[index]}%`,
                        background: skill.color,
                      }}
                    ></span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="competences__deux">
            <ul className="competences__barre">
              {skills.slice(5).map((skill, index) => (
                <li
                  className="competences__li"
                  key={`${skill.name}-${index + 5}`}
                >
                  <div className="progressbar-title">
                    <h3 className="skill">{skill.name}</h3>
                    <div className="containeur">
                      <div
                        className="circular-progress"
                        style={{
                          background: `conic-gradient(${skill.color} ${
                            progressValues[index + 5] * 3.6
                          }deg, rgb(197, 197, 197) 0deg)`,
                        }}
                      >
                        <span className="progress-value percent">
                          {Math.round(progressValues[index + 5])}%
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bar-container">
                    <span
                      className="progressbar progress-filled"
                      style={{
                        width: `${progressValues[index + 5]}%`,
                        background: skill.color,
                      }}
                    ></span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
