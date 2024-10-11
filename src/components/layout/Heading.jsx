import PropTypes from 'prop-types'

export default function Heading ({title, paragraph, variant}) {
    const variants = {
        "primary": {
            "h2": "text-subtitle",
            "p": "text-paragraph"
        },
        "secondary": {
            "h2": "text-pure-white",
            "p": "text-pure-white"
        }
    }
 return (
    <div className='mb-6 flex flex-col items-center justify-center gap-4 md:px-4 md:pt-4'>
        <h2 className={`text-center font-body text-2xl font-semibold ${variants[variant]?.h2} lg:text-3xl xl:text-4xl`}>{title}</h2>
        <p className={`text-center font-sans text-sm ${variants[variant]?.p} md:text-base lg:text-xl xl:text-2xl`}>{paragraph}</p>
    </div>
 )
}

Heading.propTypes = {
    title: PropTypes.string,
    paragraph: PropTypes.string,
    variant: PropTypes.string
}