import style from "./style.module.css";
import Link from "next/link";
import { BiLogoGithub } from "react-icons/bi";
import { AiOutlineLink } from "react-icons/ai";

interface CardProps {
  title: string;
  paragraph: string;
  technologies: string[];
  backgroundImageUrl: string;
  githubUrl: string;
  projectUrl?: string;
  siteUrl?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  paragraph,
  technologies,
  backgroundImageUrl,
  githubUrl,
  siteUrl,
}) => {
  return (
    <>
      <div className={style.CardProject} id="card">
        <div className={style.CardProjectLeft}>
          <h3>{title}</h3>
          <h4>{paragraph}</h4>
          <div>
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
          <div className={style.InviteCode}>
            <span>
              <Link className={style.Link} href={githubUrl} target="_blank">
                Code <BiLogoGithub className={style.Icon} />
              </Link>
              {siteUrl && (
                <Link className={style.Link} href={siteUrl} target="_blank">
                  Site <AiOutlineLink className={style.Icon} />
                </Link>
              )}
            </span>
          </div>
        </div>
        <div
          className={style.CardProjectRight}
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        ></div>
      </div>
    </>
  );
};

export default Card;
