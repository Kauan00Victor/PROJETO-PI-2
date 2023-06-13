import { FaFacebook, FaInstagram, FaGithub, FaYoutube} from 'react-icons/fa'
import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <ul className='social_list'>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaGithub />
                </li>
                <li>
                    <FaYoutube />
                </li>
            </ul>
            <p><span>Tech systems </span>&copy; Direitos autorais - 2023</p>
        </footer>
    )
}