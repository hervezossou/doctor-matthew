import FlexCard from "../layout/FlexCard"
import about from "../../data/about"

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
            <div>
                <img src={about.image} alt=""/>
            </div>
        </div>
    )
}