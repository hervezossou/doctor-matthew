import FlexCard from "../layout/FlexCard"
import { hero } from "../../data/hero"
import { tagList } from "../../data/hero"
import ImageContainer from "../layout/ImageContainer"
import Tag from "../ui/Tag"

export default function HeroSection () {
    return (
        <div className="flex flex-col gap-10 my-10">
            <div className="flex flex-col gap-4">
                <ImageContainer image={hero.image} imageAlt={hero.imageAlt} />
                <FlexCard 
                    title={hero.title} 
                    subtitle={hero.subtitle} 
                    paragraph={hero.paragraph} 
                    icon={hero.icon}
                    label={hero.label}
                />
            </div>
            <div className="flex flex-col gap-4">
                {tagList.map((tag, index) => (
                    <Tag key={index} icon={tag.icon} title={tag.title} description={tag.description}/>
                ))}
            </div>
        </div>
    )
}