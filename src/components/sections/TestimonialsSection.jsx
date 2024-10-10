import Heading from "../layout/Heading";
import TestimonialCard from "../layout/TestimonialCard";
import { testimonialsHeading } from "../../data/testimonials";
import { testimonials } from "../../data/testimonials";

export default function TestimonialsSection () {
    return (
        <div className="flex flex-col bg-alice-blue gap-10 px-6 py-12">
            <Heading title={testimonialsHeading.title} paragraph={testimonialsHeading.paragraph} />
            <div className="flex flex-col items-center justify-center gap-4">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} testimonial={testimonial.testimonial} authorName={testimonial.authorName} authorPosition={testimonial.authorPosition} authorProfile={testimonial.authorProfile} />
                ))}
            </div>
        </div>
    )
}