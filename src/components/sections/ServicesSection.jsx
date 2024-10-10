import FlexCard from "../layout/FlexCard"
import ImageContainer from "../layout/ImageContainer"
import ServiceCard from "../layout/ServiceCard"
import { servicesHeader } from "../../data/services"
import { services } from "../../data/services"

export default function ServicesSection () {
    return (
        <div className="flex flex-col bg-alice-blue p-6">
            <div className="my-10 flex flex-col gap-10">
                <FlexCard 
                    title={servicesHeader.title} 
                    subtitle={servicesHeader.subtitle} 
                    paragraph={servicesHeader.paragraph} 
                    icon={servicesHeader.icon}
                    label={servicesHeader.label}
                />
                <ImageContainer image={servicesHeader.image} imageAlt={servicesHeader.imageAlt} />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-9">
                {
                    services.map((service, index) => (
                        <ServiceCard 
                            key={index}
                            image={service.image} 
                            title={service.title} 
                            description={service.description} 
                            icon={service.icon} 
                            label={service.label} 
                        />
                    ))
                }
            </div>
        </div>
    )
}