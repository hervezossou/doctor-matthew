import Heading from "../layout/Heading"
import Button from "../ui/Button"
import { appointment } from "../../data/appointment"

export default function AppointmentSection () {
    return (
        <div className="bg-pure-white flex flex-col gap-10 p-6">
            <h2 className="font-medium text-title text-base font-body">{appointment.title}</h2>
            <div className="appointment-cta">
                <Heading title={appointment.subtitle} paragraph={appointment.paragraph} />
                <Button icon={appointment.icon} label={appointment.label}/>
            </div>
        </div>
    )
}