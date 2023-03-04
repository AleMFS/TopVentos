import { FansProps } from "../../../../data/Ventiladores";
import { priceFormmater } from "../../../../utils/formatter";
import { InformationContainer } from "./styles";


interface Props {
    product: FansProps | undefined

}

export function Informations({ product }: Props) {
    const mallory = 'https://www.mallory.com.br/ventilacao'
    const arno = 'https://www.arno.com.br/ventilacao'
    const britania = 'https://britania.com.br/toda-loja/climatizacao/ventiladores'

    return (
        <InformationContainer>
            <h3>{product?.title}</h3>
            <span>{product?.descricao}</span>
            <p><s>R$499,90</s></p>
            <strong>{product?.valor ? priceFormmater.format(product.valor) : ''}</strong>
            <a href={product?.marca === 'Mallory' ? mallory : product?.marca === 'Arno' ? arno : britania} target="_blank">Compre aqui</a>
        </InformationContainer>
    )
}