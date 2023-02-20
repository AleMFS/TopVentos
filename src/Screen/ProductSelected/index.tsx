import { useParams } from "react-router-dom"
import { Ventiladores } from '../../../Ventiladores'
import { BannerLogo, InfoProduct, SelectedContainer } from "./styles";
import Arno from "../../assets/Logos/Arno.png"
import Britania from "../../assets/Logos/Britania.png"
import Mallory from "../../assets/Logos/Mallory.png"

export function ProductSelected() {
    const { id, brand } = useParams()
    const selectedProduct = Ventiladores.find((product) => product.id === Number(id));
    console.log(selectedProduct)


    return (
        <SelectedContainer>
            <BannerLogo className={`${brand}`}>
                <img src={brand === 'Arno' ? Arno : brand === 'Mallory' ? Mallory : Britania} alt="Logo" />
            </BannerLogo>

            <InfoProduct>
                <img src={selectedProduct?.imagens[0]} alt="" />
            </InfoProduct>
        </SelectedContainer>
    )
}