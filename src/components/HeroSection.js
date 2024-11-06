import Customimg from "./Customimg"
export default function HeroSection(){
   const images =[
    "/Images/gallery/img1.png",
    "/Images/gallery/img2.png",
    "/Images/gallery/img3.png",
    "/Images/gallery/img4.png",
    "/Images/gallery/img5.png",
    "/Images/gallery/img6.png",
    "/Images/gallery/img7.png",
    "/Images/gallery/img8.png",
    "/Images/gallery/img9.png",
   ]
    return(
        <div className="section hero">
            <div className="col typography">
               <div className="title">
                  <h1>What Are We About</h1>
                  <p className="info">Discover a world of flavor with our recipe haven! From quick meals to gourmet delights, our site brings you step-by-step guides, stunning visuals, and handy tips to make every dish a masterpiece. Unleash your inner chef with easy, delicious, and inspiring recipes designed for every skill level. Let’s cook up something amazing!</p>
                  <button className="btn">Explore Now</button>
               </div>
            </div>
            <div className="col gallery">
                {images.map((src, index) =>(
                    <Customimg key={index} imgSrc={src} pt={"100%"}/>
                ))}
                
               
            </div>
        </div>
    )
}