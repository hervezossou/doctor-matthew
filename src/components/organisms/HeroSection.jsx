import FlexCard from "../molecules/FlexCard"
import { hero } from "../../lib/hero"
import { tagList } from "../../lib/hero"
import ImageContainer from "../molecules/ImageContainer"
import Tag from "../atoms/Tag"

export default function HeroSection () {
    return (
        <div className="flex flex-col gap-10 bg-alice-blue p-6 md:p-16 lg:px-24 xl:px-40">
            <div className="flex flex-col items-center justify-between gap-10 md:flex-row-reverse md:p-4 xl:px-12">
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
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:flex-wrap md:gap-6 xl:absolute xl:inset-x-48 xl:bottom-4">
                {tagList.map((tag, index) => (
                    <Tag key={index} icon={tag.icon} title={tag.title} description={tag.description}/>
                ))}
            </div>
        </div>
    )
}