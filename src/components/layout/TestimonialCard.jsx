import PropTypes from 'prop-types'

export default function TestimonialCard ({testimonial, authorName, authorPosition, authorProfile}) {
 return (
    <div className='flex flex-col items-start gap-2 bg-pure-white px-7 py-5 rounded-xl'>
        <p className='font-light font-body text-xs text-subtitle italic'>{testimonial}</p>
        <div className='flex items-center gap-2'>
            <div className='flex items-center justify-center'>
                <img src={authorProfile} />
            </div>
            <div className='flex flex-col items-start'>
                <h4 className='font-body font-medium text-title text-base'>{authorName}</h4>
                <span className='font-sans text-xs text-paragraph'>{authorPosition}</span>
            </div>
        </div>
    </div>
 )
}

TestimonialCard.propTypes = {
    testimonial: PropTypes.string,
    authorName: PropTypes.string,
    authorPosition: PropTypes.string,
    authorProfile: PropTypes.string
}