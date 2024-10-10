import { footerHeading } from "../../data/footer"
import FooterHeading from "../layout/FooterHeading"
import { footerLinks } from "../../data/footer"
import FooterLinks from "../layout/FooterLinks"

export default function Footer () {
    return (
        <footer className="flex flex-col bg-pure-blue gap-10 my-10 p-6">
            <div className="flex flex-col">
                <FooterHeading infos={footerHeading} />
                <div className="flex flex-col items-center justify-center gap-4">
                    {footerLinks.map((list) => (
                        <FooterLinks key={list.title} list={list}  />
                    ))}
                </div>
            </div>
            <div className="flex flex-col justify-center">
                <hr className="separator-line"></hr>
                <p className="font-sans text-sm text-center text-pure-white mt-6">© Doctor all rights 2023 - Designed by remmcal</p>
            </div>
        </footer>
    )
}