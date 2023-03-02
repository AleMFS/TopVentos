import { priceFormmater } from "../../../../utils/formatter";
import { Fan } from "./styles";
import { FansProps } from "../../../../data/Ventiladores";
import { NavLink } from "react-router-dom";
import teste from '../../../../assets/images/ventiladores/Arno/Coluna/VB52/0.jpg'

interface Props {
    fan: FansProps
}

export function Fans({ fan }: Props) {
    console.log(fan.imagens[0])
    return (
        <Fan>
            
            <img src={fan.imagens[0]} alt="" />
            <h3>{fan.title}</h3>
            <span></span>
            <p>{priceFormmater.format(fan.valor)}</p>
            <NavLink to={`/${fan.id}/${fan.marca}/${fan.tipo}/${fan.modelo}`}>
                <button>Mais informações</button>
            </NavLink>
        </Fan>
    )
}