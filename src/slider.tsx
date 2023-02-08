import {useEffect, useRef} from "react"
import {Swiper, SwiperRef, SwiperSlide} from "swiper/react"
import {Mousewheel} from 'swiper'
import {Swiper as SwiperClass} from "swiper/types"


import slider0 from "/images/slider/0.jpg"
import slider1 from "/images/slider/1.jpg"
import slider2 from "/images/slider/2.jpg"
import slider3 from "/images/slider/3.jpg"
import slider4 from "/images/slider/4.jpg"
import slider5 from "/images/slider/5.jpg"
import slider6 from "/images/slider/6.jpg"
import slider7 from "/images/slider/7.jpg"

import 'swiper/css'

const DESKTOP_CONTAINER_WIDTH = 1327

const calcSliderOffset = (maxWidth: number) => {
    const w = window.innerWidth
    return w > maxWidth ? (w - maxWidth) / 2 : 0
}

const breakpoints = {
    376: {
        slidesPerView: 4.5,
        spaceBetween: 40,
        slidesPerGroup: 2,
        slidesOffsetBefore: calcSliderOffset(DESKTOP_CONTAINER_WIDTH),
        width: window.innerWidth - calcSliderOffset(DESKTOP_CONTAINER_WIDTH),
        speed: 900
    },
}

export const Slider = () => {
    const SliderRef = useRef<SwiperRef>(null)

    const onTransitionEnd = (swiper: SwiperClass) => {
        if (swiper.progress === 0 || swiper.progress === 1) {
            swiper.mousewheel.disable()
        }

    }

    useEffect(() => {
        const handleOnScroll = (e: WheelEvent) => {
            const target = e.target as Element
            const swiper = SliderRef.current?.swiper

            if (!swiper?.mousewheel.enabled && (
                target.classList.contains("slider") ||
                target.classList.contains("swiper-wrapper") ||
                (target.parentNode as Element).classList.contains("swiper-slide")
            ) && (
                swiper?.progress == 0 && e?.deltaY > 0 ||
                swiper?.progress == 1 && e?.deltaY < 0
            )
            ) {
                e.preventDefault()
               swiper.mousewheel.enable()
            }
        }

        document.addEventListener("wheel", handleOnScroll, {passive: false})
        return () => document.removeEventListener("wheel", handleOnScroll)
    }, [])

    return (
        <Swiper
            ref={SliderRef}
            className="slider"
            modules={[Mousewheel]}
            slidesPerView={1.5}
            slidesOffsetBefore={20}
            width={window.innerWidth - 20}
            spaceBetween={30}
            speed={600}
            grabCursor
            breakpoints={breakpoints}
            onTransitionEnd={onTransitionEnd}
        >
            <SwiperSlide><img src={slider0} alt=""/></SwiperSlide>
            <SwiperSlide><img src={slider1} alt=""/></SwiperSlide>
            <SwiperSlide><img src={slider2} alt=""/></SwiperSlide>
            <SwiperSlide><img src={slider3} alt=""/></SwiperSlide>
            <SwiperSlide><img src={slider4} alt=""/></SwiperSlide>
            <SwiperSlide><img src={slider5} alt=""/></SwiperSlide>
            <SwiperSlide><img src={slider6} alt=""/></SwiperSlide>
            <SwiperSlide><img src={slider7} alt=""/></SwiperSlide>
            <SwiperSlide><img src={slider1} alt=""/></SwiperSlide>
        </Swiper>
    )
}
