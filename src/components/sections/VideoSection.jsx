import { video } from "../../data/video"
import { videoTag } from "../../data/video"
import Heading from "../layout/Heading"
import Tag from "../ui/Tag"

export default function VideoSection () {
    return (
        <div className="bg-alice-blue flex flex-col items-center gap-10 my-10 p-6">
            <h4 className="font-body font-medium text-title text-base text-center">{video.title}</h4>
            <div className="flex items-center justify-center bg-pure-white w-80 h-72 rounded-xl">
                <div className="flex items-center justify-center gap-3 bg-gradient-to-r from-pure-blue to-light-blue w-24 h-24 rounded-full">
                    <img src={video.play}/>
                </div>
            </div>
            <Heading title={video.subtitle} paragraph={video.paragraph} />
            <div className="flex flex-col items-center justify-center gap-4">
                {videoTag.map((tag, index) => (
                    <Tag key={index} icon={tag.icon} title={tag.title} description={tag.description}/>
                ))}
            </div>
        </div>
    )
}