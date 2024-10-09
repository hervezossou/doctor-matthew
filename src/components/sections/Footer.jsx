import { footerHeading } from "../../data/footer"
import FooterHeading from "../layout/FooterHeading"
import { footerLinks } from "../../data/footer"
import FooterLinks from "../layout/FooterLinks"

export default function Footer () {
    return (
        <footer>
            <div className="footer-container">
                <FooterHeading infos={footerHeading} />
                <div className="footer-heading">
                    {footerLinks.map((list) => (
                        <FooterLinks key={list.title} list={list}  />
                    ))}
                </div>
            </div>
            <div className="footer-bottom">
                <hr className="separator-line"></hr>
                <p className="Copyright">© Doctor all rights 2023 - Designed by remmcal</p>
            </div>
        </footer>
    )
}