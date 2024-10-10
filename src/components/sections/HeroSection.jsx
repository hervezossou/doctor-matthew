import FlexCard from "../layout/FlexCard"
import { hero } from "../../data/hero"
import { tagList } from "../../data/hero"
import ImageContainer from "../layout/ImageContainer"
import Tag from "../ui/Tag"

export default function HeroSection () {
    return (
        <div className="hero-section">
            <div className="hero-introduction">
                <ImageContainer image={hero.image} imageAlt={hero.imageAlt} />
                <FlexCard 
                    title={hero.title} 
                    subtitle={hero.subtitle} 
                    paragraph={hero.paragraph} 
                    icon={hero.icon}
                    label={hero.label}
                />
            </div>
            <div>
                {tagList.map((tag, index) => (
                    <Tag key={index} icon={tag.icon} title={tag.title} description={tag.description}/>
                ))}
            </div>
        </div>
    )
}