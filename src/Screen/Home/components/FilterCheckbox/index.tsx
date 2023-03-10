
import { Brand, Category, FilterCheckBoxContainer, Size } from "./styles";

interface props {
    filtroType: (tipo: string) => void
    filtroSize: (tipo: string) => void
    filtrosBrand: (tipo:string) => void
    
}

export function FilterCheckbox({ filtroType, filtroSize,filtrosBrand }: props) {

    function handleType(tipo: string) {
        filtroType(tipo)
    }

    function handleSize(size: string) {
        filtroSize(size)
    }

    function handleBrand(brand: string){
        filtrosBrand(brand)
    }

    return (
        <FilterCheckBoxContainer>
            <Brand>
                <p>Marcas</p>
                <label>
                    <input
                        type="checkbox"
                        name="Arno"
                        onChange={() => handleBrand("Arno")}
                        id="" />
                    Arno
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="Britânia"
                        onChange={() => handleBrand("Britânia")}
                        id="" />
                    Britânia
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="Mallory"
                        onChange={() => handleBrand("Mallory")}
                        id="" />
                    Mallory
                </label>
                <span></span>
            </Brand>
            <Category>


                <p>Categorias</p>
                <label>
                    <input
                        type="checkbox"
                        name="mesa"
                        //checked={} 
                        onChange={() => handleType("Mesa")}
                        id="" />

                    Mesa
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="coluna"
                        //checked={} 
                        onChange={() => handleType("Coluna")}
                        id="" />
                    Coluna
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
        </FilterCheckBoxContainer>
    )
}