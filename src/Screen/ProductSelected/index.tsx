import { useParams } from "react-router-dom"
import { Ventiladores } from '../../../Ventiladores'
import { BannerLogo, Carossel, Info, InfoProduct, Product, SelectedContainer } from "./styles";
import Arno from "../../assets/Logos/Arno.png"
import Britania from "../../assets/Logos/Britania.png"
import Mallory from "../../assets/Logos/Mallory.png"
import { useState } from "react";
import { Description } from "./components/Description";




export function ProductSelected() {
    const { id, brand } = useParams()
    const selectedProduct = Ventiladores.find((product) => product.id === Number(id));
    const [image, setImage] = useState(0)




    return (
        <SelectedContainer>
            <BannerLogo className={`${brand}`}>
                <img src={brand === 'Arno' ? Arno : brand === 'Mallory' ? Mallory : Britania} alt="Logo" />
            </BannerLogo>

            <InfoProduct>
                <Product>
                    <img src={selectedProduct?.imagens[image]} alt="" />

                    <Carossel className="teste">



                        {selectedProduct?.imagens.map((imagens, index) => {
                            return (
                                <div className="item">
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