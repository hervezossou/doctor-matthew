import heroProfile from "../assets/images/hero-profile.png";
import messageIcon from "../assets/icons/message-icon.png";
import clockIcon from "../assets/icons/clock.png";
import checkIcon from "../assets/icons/check-circle.png";
import careIcon from "../assets/icons/care.png";

export const hero = {
    title: "Dr. Matthew Anderson",
    subtitle: "A dedicated doctor you can trust",
    paragraph:
        "With over 15 years of medical experience, I'm committed to providing comprehensive healthcare services tailored to your individual needs. Trust your health with a physician who listens, cares, and delivers results.",
    icon: messageIcon,
    label: "Book an appointment",
    image: heroProfile,
    imageAlt: "Dr Matthew Anderson",
};

export const tagList = [
    {
        icon: clockIcon,
        title: "24 hour service",
        description:
            "Available around the clock for emergencies and urgent care. Your health doesn't wait, and neither do we.",
    },
    {
        icon: checkIcon,
        title: "15+ years of experience",
        description:
            "Trusted by thousands of patients with extensive expertise across multiple medical specialties.",
    },
    {
        icon: careIcon,
        title: "High quality care",
        description:
            "Patient-centered care with the latest medical technologies and evidence-based treatment protocols.",
    },
];
