import facebook from './icons/facebook.png'
import instagram from './icons/instagram.png'
import youtube from './icons/youtube.png'
function Footer(){
    return(
        <div className="footer">
            <div className="footerTitle">
                <p>PARK MAP</p>
                <p>VOLUNTEERING & INTERSHIP</p>
                <p>PARTIES & EVENTS</p>
                <p>CAREERS</p>
            </div>
            <div className='icons'>
                <img src={facebook} alt='facebook' width='25px'/>
                <img src={instagram} alt='instagramm' width='25px' />
                <img src={youtube} alt='youtube' width='25px' />
            </div>
            <div className="footerTitle">
                <p>Visitor Rules</p>
                <p>Park Accessibility</p>
                <p>Newsroom</p>
                <p>Contact Us</p>
                <p>Terms of Use</p>
                <p>Privacy Policy</p>
                <p>Children's Privacy Policy</p>
                <p>Charitable Solicitations</p>
            </div>
    </div>
    )
}
export default Footer;