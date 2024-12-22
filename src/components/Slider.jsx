import React, {useRef} from 'react';
import leftBtn from '../assets/Left.png';
import rightBtn from '../assets/Right.png';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import breakingBad from '../assets/Breaking bad.png';
import rain from '../assets/The Rain.png';
import lifeInAYear from '../assets/Life in a year.png';
import moneyHeist from '../assets/Money Heist.png';
import squidGame from '../assets/Squid game.png';


function Slider(props) {
    let swiperEl = useRef(null);

    return (
        <div>
             <div className="popular-this-week">
            <div>
                <h4>
                    POPULAR THIS WEEK
                </h4>
            </div>
            <div>

            <button className="button-shevron"
                    onClick={() => {
                        if (swiperEl.current) {
                            swiperEl.current.slidePrev();
                        }
                    }}
                    >
                        <img src={leftBtn} alt="Button left" />
            </button>
            <button className="button-shevron"
                    onClick={() => {
                            if (swiperEl.current) {
                                swiperEl.current.slideNext();
                            }
                        }}
                    >
                        <img src={rightBtn} alt="Button right" />
                    </button>
            </div>
        </div>
        <div className="scrolled-films">
        <Swiper
        slidesPerView={5}
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Pagination]}
        className="mySwiper"
        onSwiper={(swiper) => {
            swiperEl.current = swiper;
        }}
      >
        <SwiperSlide>
            <img className="img-box" src={breakingBad} alt="Breaking bad"/>
        </SwiperSlide>
        <SwiperSlide>
            <img className="img-box" src={rain} alt="The Rain"/>
        </SwiperSlide>
        <SwiperSlide>
            <img className="img-box" src={lifeInAYear} alt="Life in a year"/>
        </SwiperSlide>
        <SwiperSlide>
            <img className="img-box" src={moneyHeist} alt="Money Heist"/>
        </SwiperSlide>
        <SwiperSlide>
            <img className="last-img-box" src={squidGame} alt="Squid game"/>
        </SwiperSlide>
        <SwiperSlide>
            <img className="img-box" src={breakingBad} alt="Breaking bad"/>
        </SwiperSlide>
      </Swiper>
        </div>
        </div>
    );
}
export default Slider;