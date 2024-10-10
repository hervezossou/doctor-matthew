import PropTypes from 'prop-types'

export default function FooterHeading ({infos}) {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center'>
                <img src={infos.logo} alt="Doctor logo" />
                <p className='text-center font-body text-xs font-light text-pure-white'>{infos.description}</p>
            </div>
            <div className='my-4 flex items-center gap-4'>
                <img src={infos.youtube} alt="youtube logo" />
                <img src={infos.facebook} alt="facebook logo" />
                <img src={infos.whatsapp} alt="whatsapp logo" />
            </div>
        </div>
    )
}

FooterHeading.propTypes = {
    infos: PropTypes.object
}