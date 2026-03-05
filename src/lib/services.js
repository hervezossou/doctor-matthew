import whatsappIcon from "../assets/icons/whatsapp.png";
import servicesImage from "../assets/images/services-image.png";
import generalImage from "../assets/images/general.png";
import pediatrics from "../assets/images/pediatrics.png";
import nutritional from "../assets/images/nutritional.png";
import ophthalmology from "../assets/images/ophthalmology.png";
import cardiology from "../assets/images/cardiology.png";
import orthopedics from "../assets/images/orthopedics.png";

export const servicesHeader = {
    title: "Services",
    subtitle: "Experienced in multiple medical practices",
    paragraph:
        "I offer comprehensive medical services across various specialties. Whether you need routine check-ups, chronic disease management, or specialized care, I'm here to support your health journey with expertise and dedication.",
    icon: whatsappIcon,
    label: "Book an appointment",
    image: servicesImage,
    imageAlt: "Services Illustration",
};

export const services = [
    {
        image: generalImage,
        title: "General",
        description:
            "Comprehensive primary care including preventive medicine, routine check-ups, health maintenance, and management of common acute and chronic conditions.",
        icon: whatsappIcon,
        label: "Book an appointment",
    },
    {
        image: pediatrics,
        title: "Pediatrics",
        description:
            "Specialized care for infants, children, and adolescents including developmental screening, vaccinations, and treatment of pediatric conditions.",
        icon: whatsappIcon,
        label: "Book an appointment",
    },
    {
        image: nutritional,
        title: "Nutritional",
        description:
            "Personalized nutrition counseling and dietary planning to support your health goals, weight management, and treatment of nutrition-related conditions.",
        icon: whatsappIcon,
        label: "Book an appointment",
    },
    {
        image: cardiology,
        title: "Cardiology",
        description:
            "Comprehensive cardiac care including heart disease prevention, management of hypertension, arrhythmias, and other cardiovascular conditions.",
        icon: whatsappIcon,
        label: "Book an appointment",
    },
    {
        image: ophthalmology,
        title: "Ophthalmology",
        description:
            "Eye health and vision care services including comprehensive eye exams, treatment of common eye conditions, and referrals for specialized ophthalmologic care.",
        icon: whatsappIcon,
        label: "Book an appointment",
    },
    {
        image: orthopedics,
        title: "Orthopedics",
        description:
            "Musculoskeletal care including evaluation and management of joint pain, sports injuries, arthritis, and referrals for advanced orthopedic interventions.",
        icon: whatsappIcon,
        label: "Book an appointment",
    },
];
