import '../styles/Footer.css';

function Footer(){
    return (
        <>
        <div className='footer'>
            <h1>Feel free to contact us</h1>
            <div className='footer-icon'>
                <a href='https://www.instagram.com/_mithilesh_24_/'><img src='./instagram.png'/></a>
                <a href='#'><img src='./facebook.png'/></a>
                <a href='https://www.linkedin.com/in/mithilesh-b-r-120b58363/'><img src='./linkedin.png'/></a>
            </div>
            <div className='footer-link'>
                <a href='#' className='footer-link-nav'>Home</a>
                <a href='#' className='footer-link-nav'>About US</a>
                <a href='#' className='footer-link-nav'>Plants</a>
                <a href='#' className='footer-link-nav'>Delivery</a>
                <a href='#' className='footer-link-nav'>Blog</a>
                <a href='#' className='footer-link-nav'>Contact Us</a>
            </div>
            <div className='footer-copyrights'>
                <p>copyrights @ 2021 Lush. All right reserved.</p>
            </div>
        </div>
        </>
    );
}
export default Footer;