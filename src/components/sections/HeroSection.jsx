import FlexCard from "../layout/FlexCard"
import hero from "../../data/hero"
import ImageContainer from "../layout/ImageContainer"

export default function HeroSection () {
    return (
        <div>
            <FlexCard 
                title={hero.title} 
                subtitle={hero.subtitle} 
                paragraph={hero.paragraph} 
                icon={hero.icon}
                label={hero.label}
            />
            <ImageContainer image={hero.image} imageAlt={hero.imageAlt} />
        </div>
    )
}