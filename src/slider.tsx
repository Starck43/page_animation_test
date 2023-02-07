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

const CONTAINER_WIDTH = 1327

export const Slider = () => {
    const SliderRef = useRef<SwiperRef>(null)

    const calcSliderOffset = () => {
        const w = window.innerWidth
        return w > CONTAINER_WIDTH ? (w - CONTAINER_WIDTH) / 2 : 0
    }

    const onTransitionEnd = (swiper: SwiperClass) => {
        if (swiper.progress === 0 || swiper.progress === 1) {
            swiper.disable()
        }

    }

    const onTransitionStart = (swiper: SwiperClass, e: WheelEvent) => {
        if (swiper.progress === 0 && e?.deltaY > 0 || swiper.progress === 1 && e?.deltaY < 0) {
            swiper.enable()
        }
    }

    useEffect(() => {
        const handleOnScroll = (e: WheelEvent) => {
            // @ts-ignore
            if (!SliderRef.current?.swiper.enabled && !e.path[3].classList.contains("slider") ||
                // @ts-ignore
                e.path[3].classList.contains("slider") && (
                    SliderRef.current?.swiper.progress == 0 && e?.deltaY > 0 ||
                    SliderRef.current?.swiper.progress == 1 && e?.deltaY < 0
                )
            ) {
                e.preventDefault()
                SliderRef.current?.swiper.enable()
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
            slidesPerView={4.5}
            slidesOffsetBefore={calcSliderOffset()}
            width={window.innerWidth - calcSliderOffset()}
            spaceBetween={40}
            slidesPerGroup={2}
            speed={900}
            grabCursor
            mousewheel={{releaseOnEdges: false}}
            onScroll={onTransitionStart}
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
