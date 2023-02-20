import { useParams } from "react-router-dom"
import { Ventiladores } from '../../../Ventiladores'
import { BannerLogo, Carrosel, InfoProduct, SelectedContainer } from "./styles";
import Arno from "../../assets/Logos/Arno.png"
import Britania from "../../assets/Logos/Britania.png"
import Mallory from "../../assets/Logos/Mallory.png"

import {
    useKeenSlider,
    KeenSliderPlugin,
    KeenSliderInstance,
} from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { MutableRefObject, useState } from "react";

function ThumbnailPlugin(
    mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
    return (slider) => {
        function removeActive() {
            slider.slides.forEach((slide) => {
                slide.classList.remove("active")
            })
        }
        function addActive(idx: number) {
            slider.slides[idx].classList.add("active")
        }

        function addClickEvents() {
            slider.slides.forEach((slide, idx) => {
                slide.addEventListener("click", () => {
                    if (mainRef.current) mainRef.current.moveToIdx(idx)
                })
            })
        }

        slider.on("created", () => {
            if (!mainRef.current) return
            addActive(slider.track.details.rel)
            addClickEvents()
            mainRef.current.on("animationStarted", (main) => {
                removeActive()
                const next = main.animator.targetIdx || 0
                addActive(main.track.absToRel(next))
                slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
            })
        })
    }
}

export function ProductSelected() {
    const { id, brand } = useParams()
    const selectedProduct = Ventiladores.find((product) => product.id === Number(id));
    console.log(selectedProduct)

    const [currentSlide, setCurrentSlide] = useState(0)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
    })
    const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
        {
            initial: 0,
            slides: {
                perView: 3.5,
                spacing: 10,
            },
        },
        [ThumbnailPlugin(instanceRef)]
    )


    return (
        <>
            <SelectedContainer>
                <BannerLogo className={`${brand}`}>
                    <img src={brand === 'Arno' ? Arno : brand === 'Mallory' ? Mallory : Britania} alt="Logo" />
                </BannerLogo>

                <InfoProduct>
                    <Carrosel>
                        <div ref={sliderRef} className="keen-slider">

                            {selectedProduct?.imagens.map((imagens, index) => {
                                return (
                                    <div>
                                        <img src={imagens} className="keen-slider__slide number-slide" alt="" key={index} />
                                    </div>
                                )
                            })}
                        </div>

                        <div ref={thumbnailRef} className="keen-slider thumbnail">
                            {selectedProduct?.imagens.map((imagens, index) => {
                                return (
                                    <div>
                                        <img src={imagens} className="keen-slider__slide number-slide" alt="" key={imagens} />
                                    </div>
                                )
                            })}
                        </div>
                        <div className="dots">
                            {
                                
                            selectedProduct?.imagens.map((imagens,idx) => {
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => {
                                            instanceRef.current?.moveToIdx(idx)
                                        }}
                                        className={"dot" + (currentSlide === idx ? " active" : "")}
                                    ></button>
                                )
                            })}
                        </div>
                    </Carrosel >
                </InfoProduct>
            </SelectedContainer>





        </>
    )
}