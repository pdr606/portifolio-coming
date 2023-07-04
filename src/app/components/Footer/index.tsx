
import style from './style.module.css'
import {FaLinkedinIn} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'
import Link from "next/link";

export default function Footer(){

    return(
        <footer className={style.Footer} >
            <div className={style.Container} >
                <div>
                    <h2>Connect whith me.</h2>
                </div>
                <div>
                    <Link className={style.Link} href='https://www.linkedin.com/in/pedro-guarnieri-152731252/' target='_blank'>
                    <FaLinkedinIn className={style.Icon} />
                    </Link>
                    <Link className={style.Link} href='https://github.com/pdr606' target='_blank'>
                    <AiFillGithub className={style.Icon}/>
                    </Link>

                </div>
            </div>
        </footer>
    )
}