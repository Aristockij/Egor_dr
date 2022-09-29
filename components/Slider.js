import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

const Slider = () => {
    return (
        <Swiper
            pagination={{
                type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className='slider-title'>
                    Желаю тебе почаще встречаться с корешами))
                </div>
                <div className='slider-img'>
                    <img src="./images/friends.jpg" alt="friends"/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slider-title'>
                    Познать что такое успешная жизнь
                </div>
                <div className='slider-img'>
                    <img src="./images/swag.jpg" alt="swag"/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slider-title'>
                    Брать только самые выгодные заказы
                </div>
                <div className='slider-img'>
                    <img src="./images/deal.jpg" alt="deal"/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slider-title'>
                    Быть позитивным даже в самой страшной ситуации
                </div>
                <div className='slider-img'>
                    <img src="./images/fine.jpg" alt="fine"/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slider-title'>
                    Оставаться все такой же доброй булочкой
                </div>
                <div className='slider-img'>
                    <img src="./images/cat.jpg" alt="cat"/>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;