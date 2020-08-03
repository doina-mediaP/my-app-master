import React, {useState} from "react";

const Image = ({src, alt}) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const imageLoaded = () => setIsLoaded(true);

    return (
        <React.Fragment>
            <div className="img">
                <img
                    className={
                        isLoaded
                            ? "image-search__image visible"
                            : "image-search__image hidden"
                    }
                    src={src}
                    alt={alt}
                    key={alt}
                    onLoad={imageLoaded}
                />
            </div>
            <div className={!isLoaded ? "lds-spinner visible" : "lds-spinner hidden"}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </React.Fragment>
    );
};

export default Image;
