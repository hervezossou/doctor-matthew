import FlexCard from "../molecules/FlexCard"
import ImageContainer from "../molecules/ImageContainer"
import ServiceCard from "../molecules/ServiceCard"
import { servicesHeader } from "../../lib/services"
import { services } from "../../lib/services"

export default function ServicesSection () {
    return (
        <div className="flex flex-col bg-alice-blue p-6">
            <div className="my-10 flex flex-col items-center gap-10 md:flex-row md:gap-10 md:p-16 lg:px-24 xl:px-40">
                <FlexCard 
                    title={servicesHeader.title} 
                    subtitle={servicesHeader.subtitle} 
                    paragraph={servicesHeader.paragraph} 
                    icon={servicesHeader.icon}
                    label={servicesHeader.label}
                    variant="secondary"
                />
                <ImageContainer image={servicesHeader.image} imageAlt={servicesHeader.imageAlt} />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-9 md:p-4 lg:justify-between lg:gap-4 lg:px-24 lg:pb-32 xl:px-40">
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