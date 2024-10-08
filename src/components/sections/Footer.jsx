import { footerHeading } from "../../data/footer"
import FooterHeading from "../layout/FooterHeading"

export default function Footer () {
    return (
        <footer>
            <FooterHeading infos={footerHeading} />
            <div>
            </div>
        </footer>
    )
}