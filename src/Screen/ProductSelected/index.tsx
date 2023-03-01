import { useParams } from "react-router-dom"
import { Ventiladores } from '../../../Ventiladores'
import { BannerLogo, Carossel, Info, InfoProduct, Product, SelectedContainer } from "./styles";
import Arno from "../../assets/images/Logos/Arno.png"
import Britania from "../../assets/images/Logos/Britania.png"

import { MutableRefObject, useState } from "react";
import { Description } from "./components/Description";
import Mallory from '../../../images/Logos/Mallory.png'
import {
    useKeenSlider,
    KeenSliderPlugin,
    KeenSliderInstance,
} from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import ScrollToTop from "./components/ScrollTop";



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
    const [image, setImage] = useState(0)


    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
    })
    const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
        {
            initial: 0,
            slides: {
                perView: 3.5,
                spacing: 15,
            },
        },
        [ThumbnailPlugin(instanceRef)]
    )

    return (
        <SelectedContainer>
            <ScrollToTop/>
            <BannerLogo className={`${brand}`}>
                <img src={brand === 'Arno' ? Arno : brand === 'Mallory' ? Mallory : Britania} alt="Logo" />
            </BannerLogo>

            <InfoProduct>
                <Product>
                    <div ref={sliderRef} className="keen-slider" >
                        {selectedProduct?.imagens.map((imagens, index) => {
                            return (

                                <div className="keen-slider__slide">
                                    <img src={imagens} alt="" />
                                </div>

                            )
                        })}
                    </div>

                    <Carossel ref={thumbnailRef} className="keen-slider thumbnail" >



                        {selectedProduct?.imagens.map((imagens, index) => {
                            return (
                                <div className="keen-slider__slide item">
                                    <button onClick={() => setImage(index)}>
                                        <img src={imagens} alt="" />
                                    </button>
                                </div>
                            )
                        })}

                    </Carossel>
                </Product>
                <Info>
                    <div>Info</div>
                </Info>

            </InfoProduct>
            <Description product={selectedProduct} />

        </SelectedContainer>
    )
}