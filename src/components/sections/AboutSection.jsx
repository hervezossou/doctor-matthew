import FlexCard from "../layout/FlexCard"
import ImageContainer from "../layout/ImageContainer"
import { about } from "../../data/about"

export default function AboutSection () {
    return (
        <div className="about-section">
            <FlexCard 
                    title={about.title} 
                    subtitle={about.subtitle} 
                    paragraph={about.paragraph} 
                    icon={about.icon}
                    label={about.label}
            />
            <ImageContainer image={about.image} imageAlt={about.imageAlt} />
        </div>
    )
}