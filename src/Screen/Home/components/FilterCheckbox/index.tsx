import { Category, Size } from "./styles";

export function FilterCheckbox() {
    return (
        <>
            <Category>
                <p>Categorias</p>
                <label>
                    <input type="checkbox" name="mesa" id="" />
                    Ventiladores de Mesa
                </label>
                <label>
                    <input type="checkbox" name="coluna" id="" />
                    Ventiladores de Coluna
                </label>
                <span></span>
            </Category>
            <Size>
                <p>Tamanho</p>
                <label>
                    <input type="checkbox" name="30" id="" />
                    30CM
                </label>
                <label>
                    <input type="checkbox" name="30" id="" />
                    40CM
                </label>
                <label>
                    <input type="checkbox" name="50" id="" />
                    50CM
                </label>
            </Size>
        </>
    )
}