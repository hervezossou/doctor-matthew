import PropTypes from 'prop-types'

export default function Heading ({title, paragraph}) {
 return (
    <div className='mb-6 flex flex-col items-center justify-center gap-4'>
        <h2 className='text-center font-body text-xl font-semibold text-subtitle'>{title}</h2>
        <p className='text-center font-sans text-sm text-paragraph'>{paragraph}</p>
    </div>
 )
}

Heading.propTypes = {
    title: PropTypes.string,
    paragraph: PropTypes.string,
}