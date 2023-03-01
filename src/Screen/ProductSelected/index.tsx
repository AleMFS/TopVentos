import { useParams } from "react-router-dom"
import { Ventiladores } from '../../../Ventiladores'
import { BannerLogo, Carossel, Info, InfoProduct, Product, SelectedContainer } from "./styles";
import Arno from "../../assets/Logos/Arno.png"
import Britania from "../../assets/Logos/Britania.png"
import Mallory from "../../assets/Logos/Mallory.png"
import { useState } from "react";
import { Description } from "./components/Description";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"




export function ProductSelected() {
    const { id, brand } = useParams()
    const selectedProduct = Ventiladores.find((product) => product.id === Number(id));
    const [image, setImage] = useState(0)


    const [ref] = useKeenSlider<HTMLDivElement>({
        slides: {
          perView: 3.5,
          spacing: 15,
        },
      })

    return (
        <SelectedContainer>
            <BannerLogo className={`${brand}`}>
                <img src={brand === 'Arno' ? Arno : brand === 'Mallory' ? Mallory : Britania} alt="Logo" />
            </BannerLogo>

            <InfoProduct>
                <Product>
                    <img src={selectedProduct?.imagens[image]} alt="" />

                    <Carossel ref={ref} className="keen-slider" >



                        {selectedProduct?.imagens.map((imagens, index) => {
                            return (
                                <div className="item keen-slider__slide" key={index}>
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