import { footerHeading } from "../../data/footer"
import FooterHeading from "../layout/FooterHeading"
import { footerLinks } from "../../data/footer"
import FooterLinks from "../layout/FooterLinks"

export default function Footer () {
    return (
        <footer className="flex flex-col gap-10 bg-pure-blue p-6">
            <div className="flex flex-col md:p-16 lg:flex-row lg:items-start lg:justify-between lg:px-24 xl:gap-32">
                <FooterHeading infos={footerHeading} />
                <div className="flex flex-col items-center justify-between gap-4 lg:flex-row lg:flex-wrap lg:items-start lg:gap-16">
                    {footerLinks.map((list) => (
                        <FooterLinks key={list.title} list={list}  />
                    ))}
                </div>
            </div>
            <div className="flex flex-col justify-center">
                <hr className="flex items-center justify-center md:mx-16 lg:mx-24"></hr>
                <p className="mt-6 text-center font-sans text-sm text-pure-white lg:text-base xl:text-lg">© Doctor all rights 2023 - Designed by remmcal</p>
            </div>
        </footer>
    )
}