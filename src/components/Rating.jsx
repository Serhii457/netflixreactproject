import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Rating() {
    let startRating = [true, true, true, false, false];
    let [rating, setRating] = useState(startRating);

    function changeRatingFn(index){
        let newRating = rating.map((element, i) => i <= index);
        setRating(newRating);
    }
    
    return (
        <div>
            <div className="rating">
                {rating.map((value, index) => (
                    value ? <FontAwesomeIcon icon="fa-solid fa-star" className="activeStar fa-lg" onClick={() => changeRatingFn(index)}/>
                          : <FontAwesomeIcon icon="fa-regular fa-star" className="inactiveStar fa-lg" onClick={() => changeRatingFn(index)} />
                          ))}

            </div>
        </div>
    );
}

export default Rating;