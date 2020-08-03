import React, { useState } from "react";
import Unsplash, { toJson } from "unsplash-js";
import Image from "./Image/Image";
import "./App.scss";

const Component = () => {
  const [searchString, setSearchString] = useState("");
  const [images, setImages] = useState([]);
  const [isFirstRequest, setIsFirstRequest] = useState(true);
  const apiKey = "acLEvitZqOXzEqB1K3dC8vX8pwP_0CqlFAkE2j-XwYA";
  const unsplash = new Unsplash({ accessKey: apiKey });


    const searchImg = (e) => {
        e.preventDefault();
        unsplash.search
            .photos(searchString, 1, 12, { orientation: "portrait" })
            .then(toJson)
            .then((json) => {
                console.log(json);
                setImages(json.results);
            });
        setIsFirstRequest(false);
    };


  return (
    <div className="image-search">
      <form onSubmit={searchImg} className="searchForm">
          <div className="input">
        <input
          className="image-search__input"
          type="text"
          onChange={(e) => setSearchString(e.target.value)}
        />
          </div>
        <button className="image-search__btn" onClick={searchImg}>
          Search
        </button>
      </form>

      <div className="image-search__image-list">

          {images.length > 0 || isFirstRequest ? (
              images.map((image) => {
                  return (
                      <Image
                          src={image.links.download}
                          alt={image.alt_description}
                          key={image.id}
                      />
                  );
              })
          ) : (
              <p className="noFound">No images found</p>
          )}

      </div>
    </div>
  );
};

export default Component;
