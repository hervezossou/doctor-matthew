import Heading from "../layout/Heading";
import TestimonialCard from "../layout/TestimonialCard";
import { testimonialsHeading } from "../../data/testimonials";
import { testimonials } from "../../data/testimonials";

export default function TestimonialsSection () {
    return (
        <div className="flex flex-col items-center gap-10 bg-alice-blue px-6 py-12 md:p-16 lg:px-24 xl:px-40">
            <Heading title={testimonialsHeading.title} paragraph={testimonialsHeading.paragraph} variant="primary" />
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:flex-wrap md:gap-8">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} testimonial={testimonial.testimonial} authorName={testimonial.authorName} authorPosition={testimonial.authorPosition} authorProfile={testimonial.authorProfile} />
                ))}
            </div>
        </div>
    )
}