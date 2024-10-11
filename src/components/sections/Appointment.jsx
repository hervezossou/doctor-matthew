import Heading from "../layout/Heading"
import Button from "../ui/Button"
import { appointment } from "../../data/appointment"

export default function AppointmentSection () {
    return (
        <div className="flex flex-col items-center justify-between gap-10 bg-pure-white p-6 md:p-16 lg:w-screen lg:px-24 xl:px-40">
            <h2 className="font-body text-base font-medium text-title md:text-left lg:text-2xl">{appointment.title}</h2>
            <div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-pure-blue to-light-blue p-4 lg:w-full lg:rounded-2xl lg:p-12">
                <Heading title={appointment.subtitle} paragraph={appointment.paragraph} variant="secondary" />
                <Button icon={appointment.icon} label={appointment.label} variant="secondary"/>
            </div>
        </div>
    )
}