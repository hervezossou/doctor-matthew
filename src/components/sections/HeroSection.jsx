import FlexCard from "../layout/FlexCard"
import { hero } from "../../data/hero"
import { tagList } from "../../data/hero"
import ImageContainer from "../layout/ImageContainer"
import Tag from "../ui/Tag"

export default function HeroSection () {
    return (
        <div className="flex flex-col gap-10 bg-alice-blue p-6 md:p-16 lg:px-24 xl:px-40">
            <div className="flex flex-col items-center justify-between gap-10 md:flex-row-reverse md:p-4 xl:gap-48 xl:px-12">
                <ImageContainer image={hero.image} imageAlt={hero.imageAlt} />
                <FlexCard 
                    title={hero.title} 
                    subtitle={hero.subtitle} 
                    paragraph={hero.paragraph} 
                    icon={hero.icon}
                    label={hero.label}
                    variant='primary'
                />
            </div>
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:flex-wrap md:gap-6">
                {tagList.map((tag, index) => (
                    <Tag key={index} icon={tag.icon} title={tag.title} description={tag.description}/>
                ))}
            </div>
        </div>
    )
}