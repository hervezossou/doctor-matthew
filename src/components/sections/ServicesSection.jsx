import FlexCard from "../layout/FlexCard"
import ImageContainer from "../layout/ImageContainer"
import ServiceCard from "../layout/ServiceCard"
import { servicesHeader } from "../../data/services"
import { services } from "../../data/services"

export default function ServicesSection () {
    return (
        <div className="services-section">
            <div className="top-section">
                <FlexCard 
                    title={servicesHeader.title} 
                    subtitle={servicesHeader.subtitle} 
                    paragraph={servicesHeader.paragraph} 
                    icon={servicesHeader.icon}
                    label={servicesHeader.label}
                />
                <ImageContainer image={servicesHeader.image} imageAlt={servicesHeader.imageAlt} />
            </div>
            <div className="services">
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