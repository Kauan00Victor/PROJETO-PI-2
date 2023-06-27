import { FaFacebook, FaInstagram, FaGithub, FaYoutube } from 'react-icons/fa'
import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <ul className='social_list'>
                <li>
                    <a href="https://www.facebook.com/razorofficialthrash/"> <FaFacebook/> </a>
                </li>
                <li>
                <a href="https://www.instagram.com/razor_computadores/"><FaInstagram /> </a>
                </li>
                <li>
                    <a href="https://github.com/Kauan00Victor/PROJETO-PI-2"><FaGithub /></a>
                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UCekO76xDNlsyc4Wh-ggjrZQ"><FaYoutube /> </a>
                </li>
            </ul>
            <p><span>Razor-1911 </span>&copy; Nenhum direito reservado</p>
        </footer>
    )
}