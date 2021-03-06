import './styles.css';
import { ReactComponent as Youtube} from './youtube.svg';
import { ReactComponent as Linkedin} from './linkedin.svg';
import { ReactComponent as Instagram} from './instagram.svg';

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://github.com/marceloperin">
                    <Youtube/>
                </a>
                <a href="https://github.com/marceloperin">
                    <Instagram/>
                </a>
                <a href="https://github.com/marceloperin">
                    <Linkedin/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;