import { footerHeading } from "../../lib/footer"
import FooterHeading from "../molecules/FooterHeading"
import { footerLinks } from "../../lib/footer"
import FooterLinks from "../molecules/FooterLinks"

export default function Footer () {
    return (
        <footer className="flex flex-col gap-10 bg-pure-blue p-6 lg:px-16 xl:px-40">
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-between">
                <FooterHeading infos={footerHeading} />
                <div className="flex flex-col items-center justify-center lg:flex-row lg:items-start lg:gap-16 lg:py-5">
                    {footerLinks.map((list) => (
                        <FooterLinks key={list.title} list={list}  />
                    ))}
                </div>
            </div>
            <div className="flex flex-col justify-center">
                <hr className="flex items-center justify-center md:mx-16 lg:mx-0"></hr>
                <p className="mt-6 text-center font-sans text-sm text-pure-white lg:text-base xl:text-lg">© Doctor all rights 2023 - Designed by remmcal</p>
            </div>
        </footer>
    )
}