import React from "react";

export const TeamItem = ({
  name,
  image,
  post,
  url,
  about,
}: {
  name: string;
  image: any;
  post: string;
  url?: string;
  about: string
}) => {
  return (
    <div className="col-l-3 col-lg-3 col-sm-6">
      <div className="nft-item home-2">
        <div className="nft-inner">
          <div className="nft-item-top d-flex justify-content-between align-items-center"></div>
          <div className="nft-item-bottom">
            <div className="nft-thumb">
              <img
                loading="lazy"
                src={image}
                className="team-img"
                alt="team-img"
              />
            </div>
            <div className="nft-content" style={{ paddingBottom: "25px" }}>
              <h4>{name}</h4>
              <h6>
                {post}
                <a href={url} rel="noreferrer" >
                  
                </a>
              </h6>
              <div className="price-like d-flex justify-content-between align-items-center">
                <p><em>{about}</em></p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Team = () => {
  return (
    <section className="ex-drop-section padding-top" id="team">
      <div className="container">
        <div className="section-header style-2">
          <div className="header-shape">
            <span></span>
          </div>
          <h3>Our Team</h3>
        </div>
        <div className="section-wrapper">
          <div className="ex-drop-wrapper">
            <div className="row justify-content-center gx-4 gy-3">
            <div className="row justify-content-center gx-4 gy-3">
              
              <TeamItem
                name="Vishal Malhotra"
                image="/assets/images/team-1.jpg"
                post="Founder"
                url="https://twitter.com/Vishhman?t=8aQL--RINvsCNBB8ovMvPQ&amp;s=09"
                about ="Conceived the NFT project. 
                The First Indian Actor to have minted & sold an NFT"
              />
              
              <TeamItem
                name="Rick De"
                image="/assets/images/team-2.jpg"
                post="Project Architect"
                url="https://twitter.com/rdtect?t=DGVCjtQTx72pXiVE1KCFUw&amp;s=09"
                about ="An Architect who Codes! Implementation of the entire concept on the web3 side."
              />
              <hr/><hr/></div>

              <div className="row justify-content-center w-75">
              <TeamItem
                name="RatLab"
                image="/assets/images/team-3.png"
                post="Solidity Development "
                url="https://github.com/RatLab2022"
                about ="The entire WebDev and smart contract team "
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
