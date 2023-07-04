import style from "./style.module.css";
import Image from "next/image";
import {
  BiLogoNodejs,
  BiLogoReact,
  BiLogoMongodb,
  BiLogoTypescript,
  BiLogoGithub,
} from "react-icons/bi";
import { SiMysql, SiNextdotjs } from "react-icons/si";
import Card from "../Card";

export default function About() {
  return (
    <section className={style.Section}>
      <div className={style.Container}>
        <div className={style.ContainerLeft}>
          <h1>
            Hey, I&apos;m <span>Pedro</span>{" "}
            <Image
              src="/images/emoji-bye.png"
              width={55}
              height={55}
              alt="Icon Bye Apple"
            />
          </h1>
          <p>I&apos;m a Full Stack Developer</p>
          <p>
            I am a full stack developer with experience in web applications
            using React and Next.js. For the backend, I use Node.js and
            depending on the case, either MongoDB or SQL databases. Lately, I
            have been studying TypeScript and Tailwind CSS.
          </p>
          <p>
            I study Systems Analysis and Development at UNINTER, and in my free
            time, I seek to explore my passion for technology by learning new
            features and technologies.
          </p>
          <p>
            Technology is the catalyst that unlocks boundless possibilities
            within the depths of human imagination.
          </p>
        </div>
        <div className={style.ContainerRight}>
          <div>
            <Image
              className={style.Image}
              src="/images/pdr606.jpg"
              width={300}
              height={300}
              alt="Icon Pdr"
            />
          </div>
        </div>
      </div>
      <section className={style.SectionIcons}>
        <div className={style.ContainerIcons}>
          <BiLogoNodejs className={style.Icon} />
          <BiLogoReact className={style.Icon} />
          <BiLogoMongodb className={style.Icon} />
          <BiLogoTypescript className={style.Icon} />
          <SiMysql className={style.Icon} />
          <SiNextdotjs className={style.Icon} />
        </div>
      </section>
      <section className={style.SectionProjects}>
        <div className={style.ContainerProjects}>
          <div className={style.Title}>
            <h1>See some projects</h1>
          </div>
          <Card
            title="SOFTWARE PRESERVE &#8987;"
            paragraph="The focus of this project was to optimize my tasks by creating
          something practical, especially with the certificate generator,
          which used to be done manually. Additionally, I applied my first
          knowledge of JWT."
            technologies={["React", "Node", "MongoDB", "JWT", "EJS"]}
            backgroundImageUrl="https://dmanisio.sirv.com/Images/menu-do-sistema.png"
            githubUrl="https://github.com/pdr606/software-preserve"
          />
          <Card
            title="TEMPLATE ECOMMERCE &#128171; "
            paragraph="This is a project of a React application that integrates routes, useContext, useHooks, and API creation. It is a simple and practical project that has been of great importance for my learning with React. The application includes data storage using local storage."
            technologies={["React", "CSS"]}
            backgroundImageUrl="https://dmanisio.sirv.com/Images/amazon-ecommerce.png"
            githubUrl="https://github.com/pdr606/template-ecommerce"
            siteUrl="https://ecommerce-template-dun.vercel.app/"
          />
          <Card
            title="WEATHER APP &#127774;"
            paragraph="This is a simple project, and maybe even faster than Google, haha, that allows you to search for weather forecasts anywhere you want."
            technologies={["JavaScript", "HTML", "CSS"]}
            backgroundImageUrl="https://dmanisio.sirv.com/Images/weather-app.png"
            githubUrl="https://github.com/pdr606/weather-forecast"
            siteUrl="https://pdr606.github.io/weather-forecast/"
          />
        </div>
      </section>
    </section>
  );
}
