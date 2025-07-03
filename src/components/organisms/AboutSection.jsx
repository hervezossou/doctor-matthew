import FlexCard from "../molecules/FlexCard"
import ImageContainer from "../molecules/ImageContainer"
import { about } from "../../lib/about"

export default function AboutSection () {
    return (
        <div className="my-10 flex flex-col gap-10 p-6 md:flex-row-reverse md:items-center md:p-10 lg:px-12 xl:px-20">
            <FlexCard 
                    title={about.title} 
                    subtitle={about.subtitle} 
                    paragraph={about.paragraph} 
                    icon={about.icon}
                    label={about.label}
                    variant="secondary"
            />
            <ImageContainer image={about.image} imageAlt={about.imageAlt} />
        </div>
    )
}