import React, { useState } from "react";
import "./SinglePage.scss";
import { singlePostData, userData } from "../../Lib/dummyData";

export default function SinglePage() {
  const [sliderIndex, setSliderIndex] = useState(null);
  const data = singlePostData;
  return (
    <>
      <div className="singlePage">
        <div className="details">
          <div className="container">
            <div className="imageSection">
              {sliderIndex !== null && (
                <div className="sliderSection">
                  <div
                    className="arrow"
                    onClick={() => {
                      {
                        sliderIndex <= 0
                          ? setSliderIndex(data.images.length - 1)
                          : setSliderIndex(sliderIndex - 1);
                      }
                    }}
                  >
                    <img src="/arrow.png" alt="" />
                  </div>
                  <div className="imageContainer">
                    <img src={data.images[sliderIndex]} alt="" />
                  </div>
                  <div
                    className="arrow right"
                    onClick={() => {
                      {
                        sliderIndex >= data.images.length - 1
                          ? setSliderIndex(0)
                          : setSliderIndex(sliderIndex + 1);
                      }
                    }}
                  >
                    <img src="/arrow.png" alt="" />
                  </div>
                  <div className="close" onClick={() => setSliderIndex(null)}>
                    X
                  </div>
                </div>
              )}
              <div className="largeImg">
                <img
                  src={data.images[0]}
                  onClick={() => setSliderIndex(0)}
                  alt=""
                />
              </div>
              <div className="commonImg">
                {data.images.slice(1).map((room, index) => (
                  <img
                    key={index}
                    width={300}
                    height={200}
                    onClick={() => setSliderIndex(index + 1)}
                    src={room}
                  />
                ))}
              </div>
            </div>
            <div className="profileSection">
              <div className="apartmentInfo">
                <h1>Beautiful Apartment</h1>
                <div className="location">
                  <img src="/pin.png" alt="" />
                  <span>{data.address}</span>
                </div>
                <p className="price">$ {data.price}</p>
              </div>
              <div className="ownerInfo">
                <div className="wrapper">
                  <img src={userData.img} width={200} alt="" />
                  <p>{userData.name}</p>
                </div>
              </div>
            </div>
            <div className="descriptionSection">{data.description}</div>
          </div>
        </div>
        <div className="feature">Features</div>
      </div>
    </>
  );
}
