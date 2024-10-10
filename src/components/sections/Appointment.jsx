import Heading from "../layout/Heading"
import Button from "../ui/Button"
import { appointment } from "../../data/appointment"

export default function AppointmentSection () {
    return (
        <div className="bg-pure-white flex flex-col items-center justify-between gap-10 p-6">
            <h2 className="font-medium text-title text-base font-body">{appointment.title}</h2>
            <div className="bg-gradient-to-r from-pure-blue to-light-blue flex flex-col items-center justify-center gap-4 p-4 rounded-lg">
                <Heading title={appointment.subtitle} paragraph={appointment.paragraph} />
                <Button icon={appointment.icon} label={appointment.label}/>
            </div>
        </div>
    )
}