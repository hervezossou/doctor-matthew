import PropTypes from 'prop-types'

export default function Heading ({title, paragraph}) {
 return (
    <div className='mb-6 flex flex-col items-center justify-center gap-4 md:px-4 md:pt-4'>
        <h2 className='text-center font-body text-2xl font-semibold text-subtitle lg:text-3xl xl:text-4xl'>{title}</h2>
        <p className='text-center font-sans text-sm text-paragraph md:text-base lg:text-xl xl:text-2xl'>{paragraph}</p>
    </div>
 )
}

Heading.propTypes = {
    title: PropTypes.string,
    paragraph: PropTypes.string,
}