import '../styles/Aboutus.css';

function aboutus(){
    return (
        <>
        <div className='div1'>
            <div className='textbox1'>
                <div className='design'>
                    <h1>We Help Choose the Most<br/>Suitable Plant For You</h1>
                </div>
                <div>
                    <p>Our selection include a wide variety of flowers, from classic roses to exotic<br/>
                    orchids, as well as a veriety of lush indoor and outdoor plants and aso offer<br/>
                    unique floral arrangements that are perfect for any occasion, whether you're<br/>
                    looking to brighten up your home or send a thoughtfull gift.</p>
                </div>
            </div>
            <div className='textbox2'>
                <div className='box'>
                    <img src='./Type_1.png'/>
                    <h2>Indoor Plants</h2>
                    <p>Bring the beauty of nature to your<br/>
                    outdooe space with our wide<br/>
                    selection of outdoor plants</p>
                </div>
                <div className='box' id='box'>
                    <img src='./Type_2.png'/>
                    <h2>Outdoor Plants</h2>
                    <p>Bring a touch of greenery to your<br/>living spaces with our collection of<br/>indoor plants, erfect for purifying<br/>the air and adding a natural touch<br/>to your home.</p>
                </div>
                <div className='box'>
                    <img src='./Type_3.png'/>
                    <h2>Plants Pots</h2>
                    <p>Add a touch of style to your indoor<br/>
                    or outdoor space with our<br/>
                    collection of pots plants, available<br/>
                    in a variety of sizes and designs to<br/>
                    fit any decor
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}
export default aboutus;