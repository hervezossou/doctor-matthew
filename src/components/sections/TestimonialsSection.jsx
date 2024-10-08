import Heading from "../layout/Heading";
import TestimonialCard from "../layout/TestimonialCard";
import { testimonialsHeading } from "../../data/testimonials";
import { testimonials } from "../../data/testimonials";

export default function TestimonialsSection () {
    return (
        <div className="testimonials-section">
            <Heading title={testimonialsHeading.title} paragraph={testimonialsHeading.paragraph} />
            {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial.testimonial} authorName={testimonial.authorName} authorPosition={testimonial.authorPosition} authorProfile={testimonial.authorProfile} />
            ))}
        </div>
    )
}