import '../styles/ResearchAndGallery.css';

function ResearchAndGallery(){
    return (
        <>
        <div className='research'>
            <img src='/Feature_image.png'/>
            <div className='research-content'>
                <div className='research-card'>
                    <img src='./Quality_Product_logo.png'/>
                    <h3>Quality Product</h3>
                    <p>
                        our flower are of the highest quality. carefully selected and sourced from
                    </p>
                </div>
                <div className='research-card' id='card'>
                    <img src='./Grow_Sprout_logo.png'/>
                    <h3>Always Fresh</h3>
                    <p>Or flower are always fresh, handpicked and delivered promptly for maximum longevity and enjoyment.</p>
                </div>
                <div className='research-card' id='card'>
                    <img src='./Temperature_logo.png'/>
                    <h3>Work Smart</h3>
                    <p>We work smart, using innovative techniques and technoloy to streamline and process</p>
                </div>
                <div className='research-card' >
                    <img src='./Pruning_logo.png'/>
                    <h3>Excelent Service</h3>
                    <p>We pride ourselves on providing excellent services, going above and beyond to meet our customer's needs</p>
                </div>
            </div>
        </div>
        <div className='gallery'>
            <h1>Our Gallery View</h1>
            <div className='gallery-content'>
                <img src='./Gallery_1.png' className='gallery-left' />
                <div className='gallery-right'>
                    <img src='./Gallery_2.png' />
                    <img src='./Gallery_3.png' />
                    <img src='./Gallery_4.png' />
                    <img src='./Gallery_5.png' />
                </div>
            </div>
        </div>
        </>
    );
}
export default ResearchAndGallery;