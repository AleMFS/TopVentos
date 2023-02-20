import { Fans } from "./components/Fans";
import { FilterCheckbox } from "./components/FilterCheckbox";
import { CarroselContainer, Checkbox, FilterArea, HomeCointainer, HomeContent, ProductContainer, Products, ProductsContent } from "./styles";
import {Ventiladores} from '../../../Ventiladores'


export function Home() {

    const shuffledItems = Ventiladores.sort(() => Math.random() - 0.5);

    return (
        <HomeCointainer>
            <HomeContent>
                <FilterArea>
                    <div>
                        <p>Filtrar</p>
                    </div>
                </FilterArea>
                <div className="area-carrosel">
                    <CarroselContainer>
                        <p>marca1</p>
                        <p>marca2</p>
                        <p>marca3</p>
                    </CarroselContainer>
                    <strong>15 produtos encontrados</strong>
                </div>

            </HomeContent>

            <ProductContainer>
                <ProductsContent>
                    <Checkbox>
                        <FilterCheckbox />
                    </Checkbox>

                    <Products>
                        {shuffledItems.map(fan => (
                            <Fans key={fan.id} fan={fan}/>
                        ))}
        
                    </Products>
                </ProductsContent>
            </ProductContainer>

        </HomeCointainer>
    )
}