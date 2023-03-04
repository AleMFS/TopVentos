import { Fans } from "./components/Fans";
import { FilterCheckbox } from "./components/FilterCheckbox";
import { CarroselContainer, Checkbox, FilterArea, HomeCointainer, ProductContainer, Products, ProductsContent } from "./styles";
import { Ventiladores } from '../../data/Ventiladores'
import { useEffect, useRef, useState } from "react";
import ReactPaginate from "react-paginate";
import { CaretLeft, CaretRight } from "phosphor-react";



export interface FansProps {
    id: number
    helices: number
    potencia: number
    tamanho: number
    valor: number
    modelo: string
    title: string
    marca: string
    tipo: "Mesa" | "Coluna"
    cor: string
    descricao: string
    imagens: string[]
    banner?: string
}
export function Home() {
    const [shuffledItems,SetshuffledItems] = useState<FansProps[]>([])
    const [category, setCategory] = useState<String[]>([])

    const handleTypeFilter = (type: string) => {
        setTimeout(() => {
            const index = category.indexOf(type);
        if (index === -1) {
          // adiciona o tipo selecionado ao array de category
          setCategory([...category, type]);
        } else {
          // remove o tipo selecionado do array de category
          const newGeneros = [...category];
          newGeneros.splice(index, 1);
          setCategory(newGeneros);
          setCurrentPage(1)
        }
        }, 500);
        
      };
    
      const fanFilter = shuffledItems.filter((product) => {
        if (category.length === 0) {
          // se nenhum tipo estiver selecionado, exibe todos os ventiladores
          return true;
        } else {
          // verifica se o tipo do ventilador está entre os tipos selecionados
          return category.includes(product.tipo);
        }
      });

    
      
    function embaralhar(){
        SetshuffledItems(Ventiladores.sort(() => Math.random() - 0.5))
    }

    useEffect(()=>{

        embaralhar()

    },[])

    const [currentPage, setCurrentPage] = useState(1)
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
    const transactionsPerPage = fanFilter.slice(start, end)


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
                        <FilterCheckbox filtro={handleTypeFilter} opcoes={category}/>
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
                        {fanFilter.length > itemPerPage ?
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
                                pageCount={Math.ceil(fanFilter.length / itemPerPage)}
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