import React from "react";

const Image = ({src, alt, ss, isLoaded}) => {

    return (
        <>
            <div className="img" key={ss}>
                {
                    isLoaded 
                    ?
                    <div className="lds-spinner">
                        {new Array(12).fill(true).map((index) => <div key={index} />)}
                    </div>
                    :
                    <img
                        className="image-search__image"
                        src={src}
                        alt={alt}
                    />
                    
                }
            </div>            
        </>
    );
};

export default Image;



// import React, {useState} from "react";

// const Image = ({src, alt}) => {
//     const [isLoaded, setIsLoaded] = useState(false);
//     const imageLoaded = () => setIsLoaded(true);
  
//     return (
//         <React.Fragment>
//             <div className="img">
//                 <img
//                     className={
//                         isLoaded
//                             ? "image-search__image" 
//                             : "image-search__image" 
//                     }
//                     src={src}
//                     alt={alt}
//                     key={alt}
//                     onLoad={imageLoaded}
//                 />
//                  <div className={!isLoaded ? "lds-spinner visible" : "lds-spinner hidden"}>
//                 {new Array(12).fill(true).map(() => <div/>)}
//             </div> 
//             </div>
         
           
            
//         </React.Fragment>
//     );
// };

// export default Image;


