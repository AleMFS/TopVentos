
import { useRef } from "react";
import { FansProps } from "../../../../../Ventiladores";
import { Characteristics, DescriptionContainer, DescriptionProducts } from "./styles";

interface Props {
    product: FansProps | undefined

}

interface ServicesRefType {
    current: HTMLDivElement | null;
}


export function Description({ product }: Props) {


    const description = useRef<HTMLDivElement>(null);
    const characteristic = useRef<HTMLDivElement>(null);

    const moveDescription = () => {
        if (description.current) {
            window.scrollTo({
                top: description.current.offsetTop,
                behavior: "smooth",
            });
        }
    };

    const moveCharacteristics = () => {
        if (characteristic.current) {
            window.scrollTo({
                top: characteristic.current.offsetTop,
                behavior: "smooth",
            });
        }
    };

    return (
        <DescriptionContainer>
            <nav>
                <li><button onClick={moveDescription}>Descrição</button></li>
                <li><button onClick={moveCharacteristics}>Características</button></li>
            </nav>

            <img src={product?.banner} alt="" />
            <DescriptionProducts ref={description}>
                <h3>Descrição</h3>
                <p>{product?.descricao}</p>
            </DescriptionProducts>


            <Characteristics >
                <h3>Características</h3>

                <div className="infomation" ref={characteristic} >
                    <div >
                        <p>Cor</p>
                        <span>{product?.cor}</span>
                    </div>
                    <div>
                        <p>Tamanho</p>
                        <span>{product?.tamanho}CM</span>
                    </div>
                    <div>
                        <p>Quantidade de Pás</p>
                        <span>{product?.helices}</span>
                    </div>
                    <div>
                        <p>`Potencia (W)`</p>
                        <span>{product?.potencia}</span>
                    </div>
                    <div>
                        <p>Tipo</p>
                        <span>{product?.tipo}</span>
                    </div>
                    <div>
                        <p>Marca</p>
                        <span>{product?.marca}</span>
                    </div>
                    <div>
                        <p>Modelo</p>
                        <span>{product?.modelo}</span>
                    </div>
                </div>
            </Characteristics>


        </DescriptionContainer>
    )
}