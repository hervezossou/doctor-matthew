import PropTypes from 'prop-types'

export default function Heading ({title, paragraph}) {
 return (
    <div className='flex flex-col items-center justify-center gap-4 mb-6'>
        <h2 className='font-semibold text-lg text-center text-body'>{title}</h2>
        <p className='font-sans text-sm text-center text-paragraph'>{paragraph}</p>
    </div>
 )
}

Heading.propTypes = {
    title: PropTypes.string,
    paragraph: PropTypes.string,
}