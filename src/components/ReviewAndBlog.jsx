import '../styles/ReviewAndBlog.css';

function ReviewAndBlog(){
    return (
        <>
        <div className='review'>
            <h1>What do They Say About Us</h1>
            <div className='review-content'>
                <div className='review-card'>
                   <div className='card-top'>
                        <img src='./boy.png' />
                        <h3>Jessica Watson</h3>
                    </div>
                    <p>" Highly recommend this website for quality flowers and plants. Great prices, timely delivery and excellent customer services. "</p> 
                </div>
                <div className='review-card'>
                   <div className='card-top'>
                        <img src='./boy.png' />
                        <h3>Kate Szu</h3>
                    </div>
                    <p>" Great service, beautiful flowers. timely delivery. Highly recommend. "</p> 
                </div>
                <div className='review-card'>
                   <div className='card-top'>
                        <img src='./boy.png' />
                        <h3>Grace</h3>
                    </div>
                    <p>" I am very happy with my purchase from this website. the plants were healthy and arrived on time. "</p> 
                </div>
            </div>
        </div>
        <div className='blog'>
            <h1>Interesting Blog To Read</h1>
            <div className='blog-content'>
                <div className='blog-card'>
                    <img src='./Blog_1.png' />
                    <div className='blog-card-content'>
                        <h3>More productiv with an atmosphere to greeney</h3>
                        <p>An Atmosphere of greeney can increase productivity in the workspace. Studies show that plants improve air quality and decrease stress...</p>
                    </div>
                    <div className='blog-card-bottom'>
                        <p>January 20, 2023</p>
                        <a href='#'>Read More</a>
                    </div>
                </div>
                <div className='blog-card'>
                    <img src='./Blog_2.png' />
                    <div className='blog-card-content'>
                        <h3>The benefits of plants in your room</h3>
                        <p>Plants in your room can bring numerous benefits. such as improved air quality, reduced stress, and increasing feelings of well-being...</p>
                    </div>
                    <div className='blog-card-bottom'>
                        <p>January 10, 2023</p>
                        <a href='#'>Read More</a>
                    </div>
                </div>
                <div className='blog-card'>
                    <img src='./Blog_3.png' />
                    <div className='blog-card-content'>
                        <h3>Hobbyist plants in the house</h3>
                        <p>Having hobbyyist plants in the house is a great way to bring nature indoors, Not only do they purify the air, but they...</p>
                    </div>
                    <div className='blog-card-bottom'>
                        <p>January 15, 2023</p>
                        <a href='#'>Read More</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default ReviewAndBlog; 