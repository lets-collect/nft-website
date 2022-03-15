import React from "react";

const SliderItem = ({ image }: { image: any }) => {
  return (
    <div className="swiper-slide">
      <div className="nft-item home-3">
        <div className="nft-inner">
          <div className="nft-item-top  justify-content-between align-items-center">
           
          <div className="nft-item-bottom">
            <div className="nft-thumb text-center pt-10">
              <img
                loading="lazy"
                src={image}
                alt="nft-img"
                className="img-responsive"
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Hero = () => {
  return (
    <section className="banner-section">
     <div className="container ">
      <div className="pt-5 row">

        <ul className="list-unstyled list-inline text-center">

          <li className="list-inline-item">
            <a href="https://twitter.com/letscollectnft" className="btn-floating btn-fb mx-1">
              <i className="icofont-twitter"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://opensea.io/collection/ilmthefilm" className="btn-floating btn-fb mx-1">
              <img src="/assets/icons/opensea.svg" alt="" className="w-25" />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://discord.gg/efx7NyHVZx" className="btn-floating btn-fb mx-1">
              <img src="/assets/icons/discord.svg" alt="" className=" w-75" />
            </a>
          </li> <hr />
        </ul>

      </div>
      
        <div className="banner-wrapper">
          <div className="row align-items-center g-4" id="slide-img">
            {/* <div className="col-lg-3"></div> */}
            {/* <div className="col-lg-6"> */}
              <div className="nft-slider-wrapper">
                <div className="banner-item-slider">
                  <div className="swiper-wrapper">
                    <SliderItem image="/assets/images/mint/Plantinum.png" />
                    <SliderItem image="/assets/images/mint/Gold.png" />
                    <SliderItem image="/assets/images/mint/Silver.png" />
                    <SliderItem image="/assets/images/mint/Bronze.png" />
                  </div>
                </div>
              </div>
          
            
            {/* </div> */}
          </div>
        </div >
      </div>
    </section >
  );
};
