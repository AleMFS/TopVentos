
import { Category, Size } from "./styles";

interface props {
    filtroType: (tipo:string) => void
    filtroSize: (tipo:string) => void
    opcoes:String[]
}

export function FilterCheckbox({ filtroType,filtroSize,opcoes }: props) {

    function handleType(tipo:string) {
        filtroType(tipo)
    }

    function handleSize (size:string) {
        filtroSize(size)
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
                        onChange={() => handleType("Mesa")}
                        id="" />

                    Ventiladores de Mesa
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="coluna"
                        //checked={} 
                        onChange={() => handleType("Coluna")}
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
                        onChange={() => handleSize('30')}
                    />
                    30CM
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="40"
                        onChange={() => handleSize('40')}
                        id="" />
                    40CM
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="50"
                        onChange={() => handleSize('50')}
                        id="" />
                    50CM
                </label>
            </Size>
        </>
    )
}