import FlexCard from "../layout/FlexCard"
import about from "../../data/about"
import ImageContainer from "../layout/ImageContainer"

export default function HeroSection () {
    return (
        <div>
            <div>
                <FlexCard 
                    title={about.title} 
                    subtitle={about.subtitle} 
                    paragraph={about.paragraph} 
                    icon={about.icon}
                    label={about.label}
                />
            </div>
            <ImageContainer image={about.image} imageAlt={about.imageAlt} />
        </div>
    )
}