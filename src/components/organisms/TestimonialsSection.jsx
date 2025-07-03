import Heading from "../molecules/Heading";
import TestimonialCard from "../molecules/TestimonialCard";
import { testimonialsHeading } from "../../lib/testimonials";
import { testimonials } from "../../lib/testimonials";

export default function TestimonialsSection () {
    return (
        <div className="flex flex-col items-center gap-10 bg-alice-blue px-6 py-12 md:p-10 lg:px-12 xl:p-20">
            <Heading title={testimonialsHeading.title} paragraph={testimonialsHeading.paragraph} variant="primary" />
            <div className="grid grid-cols-1 items-center justify-center gap-4 md:grid-cols-2 md:gap-8">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} testimonial={testimonial.testimonial} authorName={testimonial.authorName} authorPosition={testimonial.authorPosition} authorProfile={testimonial.authorProfile} />
                ))}
            </div>
        </div>
    )
}