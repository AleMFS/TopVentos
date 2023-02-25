import { Fans } from "./components/Fans";
import { FilterCheckbox } from "./components/FilterCheckbox";
import { CarroselContainer, Checkbox, FilterArea, HomeCointainer, HomeContent, ProductContainer, Products, ProductsContent } from "./styles";
import { Ventiladores } from '../../../Ventiladores'
import { useRef, useState } from "react";
import ReactPaginate from "react-paginate";
import { CaretLeft, CaretRight } from "phosphor-react";

interface CheckboxProps {
    coluna: boolean
    mesa: boolean
    tamanho: string[]
}


export function Home() {
    const [checkboxValues, setCheckboxValues] = useState<CheckboxProps>({
        coluna: false,
        mesa: false,
        tamanho: []
    })

    const [currentPage, setCurrentPage] = useState(1)
    const shuffledItems = Ventiladores.sort(() => Math.random() - 0.5);
    const moveUp = useRef<HTMLDivElement>(null);

    const moveDescription = () => {
        if (moveUp.current) {
            window.scrollTo({
                top: moveUp.current.offsetTop,
                behavior: "smooth",
            });
        }
    };

    const handlePageClick = (data: any) => {
        const currentPage = data.selected + 1;
        setCurrentPage(currentPage)
        moveDescription()
        
    }

    const itemPerPage = 9
    const start = itemPerPage * (currentPage - 1)
    const end = start + itemPerPage
    const transactionsPerPage = shuffledItems.slice(start, end)


    return (
        <HomeCointainer>
            <div className="area-carrosel">
                <CarroselContainer>
                    <p>marca1</p>
                    <p>marca2</p>
                    <p>marca3</p>
                </CarroselContainer>

            </div>


            <ProductContainer>
                <ProductsContent>
                    <Checkbox>
                        <FilterArea>
                            <div>
                                <p>Filtrar</p>
                            </div>

                        </FilterArea>
                        <FilterCheckbox />
                    </Checkbox>

                    <div >
                        <div style={{ padding: '1rem' }}>
                            <strong> {Ventiladores.length} produtos encontrados</strong>
                        </div>
                        <Products ref={moveUp}>
                            {transactionsPerPage.map(fan => (
                                <Fans key={fan.id} fan={fan} />
                            ))}

                        </Products>
                        {Ventiladores.length > itemPerPage ?
                        < ReactPaginate
                        //styles
                        className="container"
                        pageLinkClassName='containerNumber'
                        disabledClassName="arrowDisabled"
                        activeClassName="currentNumberPage"
                        previousClassName='arrowSelected'
                        nextClassName='arrowSelected'

                        breakLabel="..."
                        nextLabel={<CaretRight size={24} weight='bold' />}
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={Math.ceil(Ventiladores.length / itemPerPage)}
                        previousLabel={<CaretLeft size={24} weight='bold' />}
                    />
                    :
                    ''}
                    </div>

                </ProductsContent>
            </ProductContainer>

        </HomeCointainer>
    )
}