
import { Category, Size } from "./styles";

interface props {
    filtro: (tipo:string) => void
    opcoes:String[]
}

export function FilterCheckbox({ filtro,opcoes }: props) {

    function teste(tipo:string) {
        filtro(tipo)
    }
    return (
        <>
            <Category>
                <p>Categorias</p>
                <label>
                    <input
                        type="checkbox"
                        name="mesa"
                        //checked={} 
                        onChange={() => teste("Mesa")}
                        id="" />

                    Ventiladores de Mesa
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="coluna"
                        //checked={} 
                        onChange={() => teste("Coluna")}
                        id="" />
                    Ventiladores de Coluna
                </label>
                <span></span>
            </Category>
            <Size>
                <p>Tamanho</p>
                <label>
                    <input
                        type="checkbox"
                        name="30"
                    />
                    30CM
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="40"
                        id="" />
                    40CM
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="50"
                        id="" />
                    50CM
                </label>
            </Size>
        </>
    )
}