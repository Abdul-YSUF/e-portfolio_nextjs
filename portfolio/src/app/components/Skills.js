"use client";
import { useEffect, useState, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  FaJs,
  FaReact,
  FaNode,
  FaCss3Alt,
  FaHtml5,
  FaSass,
  FaBootstrap,
  FaPhp,
  FaGithub,
  FaWordpress,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiPostman,
  SiExpress,
  SiReactrouter,
  SiPhpmyadmin,
  SiAdobephotoshop,
  SiTailwindcss,
} from "react-icons/si";
import { TbSeo } from "react-icons/tb";
import { BiHandicap } from "react-icons/bi";

const skillGroups = [
  {
    level: 90,
    skills: ["GitHub", "WordPress"],
    icons: [FaGithub, FaWordpress],
  },
  {
    level: 85,
    skills: ["HTML", "CSS", "SASS", "Postman"],
    icons: [FaHtml5, FaCss3Alt, FaSass, SiPostman],
  },
  {
    level: 80,
    skills: [
      "Tailwind",
      "Bootstrap",
      "SEO",
      "Accessibilité",
      "MongoDB",
      "Express",
    ],
    icons: [
      SiTailwindcss,
      FaBootstrap,
      TbSeo,
      BiHandicap,
      SiMongodb,
      SiExpress,
    ],
  },
  {
    level: 75,
    skills: ["JavaScript", "Node.js", "Next.js", "React", "React Router"],
    icons: [FaJs, FaNode, SiNextdotjs, FaReact, SiReactrouter],
  },
  {
    level: 70,
    skills: ["Adobe Photoshop", "PHP", "PHPMyAdmin"],
    icons: [SiAdobephotoshop, FaPhp, SiPhpmyadmin],
  },
];

export default function Skills() {
  const [progressValues, setProgressValues] = useState(
    Array(skillGroups.length).fill(0)
  );
  const [hasAnimated, setHasAnimated] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    const refCurrent = skillsRef.current;
    if (refCurrent) {
      observer.observe(refCurrent);
    }

    return () => {
      if (refCurrent) {
        observer.unobserve(refCurrent);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 2000;
    const steps = 60;
    const intervalTime = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;

      setProgressValues(
        skillGroups.map((group) =>
          Math.min(Math.floor((group.level / steps) * currentStep), group.level)
        )
      );

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [hasAnimated]);

  return (
    <section id="skills" className="competences" ref={skillsRef}>
      <h2 className="competences__titre">Compétences</h2>
      <div className="skills-container">
        {skillGroups.map((group, index) => (
          <div key={index} className="skill-group">
            <div className="skill-content">
              <div className="skill-info">
                <div className="icons">
                  {group.icons.map((Icon, i) => (
                    <span key={group.skills[i]} className="icon">
                      <Icon />
                    </span>
                  ))}
                </div>
              </div>
              <div className="skill-bar-wrapper">
                <div className="skill-bar">
                  <div
                    className="skill-fill"
                    style={{
                      width: `${progressValues[index]}%`,
                      transition: "width 0.1s ease-out",
                    }}
                  ></div>
                </div>
                <div className="skill-circle">
                  <CircularProgressbar
                    value={progressValues[index]}
                    text={`${progressValues[index]}%`}
                    styles={buildStyles({
                      textSize: "28px",
                      pathTransitionDuration: 0.1,
                      pathColor: `rgba(59, 130, 246, ${
                        progressValues[index] / 100
                      })`,
                      textColor: "#000",
                      trailColor: "#e5e7eb",
                    })}
                  />
                </div>
              </div>
              <span className="skill-names">{group.skills.join(" / ")}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/*"use client";

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

export default Skills;*/
