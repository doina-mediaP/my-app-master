import React, {useState} from "react";
import Unsplash, {toJson} from "unsplash-js";
import Image from "./Image/Image";
import "./App.scss";
require('dotenv').config();
process.env.CI = false;

const apiKey= process.env.REACT_APP_UNSPLASH_KEY;
const unsplash = new Unsplash({accessKey: apiKey});

const Component = () => {
    const [searchString, setSearchString] = useState("");
    const [images, setImages] = useState([]);
    const [isFirstRequest, setIsFirstRequest] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);

    const searchImg = (e) => {
           e.preventDefault();
           setIsLoaded(true);
           unsplash.search
            .photos(searchString, 1, 10, {orientation: "portrait"})
            .then(toJson)
            .then((json) => {
                setImages(json.results);
                setIsLoaded(false);
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
                    images.map((image, index) => {
                        return (
                            <Image
                                src={image.urls.small}
                                alt={image.alt_description}
                                ss={index}
                                isLoaded={isLoaded}
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
