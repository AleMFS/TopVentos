import { Fans } from "./components/Fans";
import { FilterCheckbox } from "./components/FilterCheckbox";
import { BannerPage, CarroselContainer, Checkbox, ContainerFilter, FilterArea, HomeCointainer, ProductContainer, Products, ProductsContent } from "./styles";
import { Ventiladores } from '../../data/Ventiladores'
import { useEffect, useRef, useState } from "react";
import ReactPaginate from "react-paginate";
import { CaretDown, CaretLeft, CaretRight, Faders } from "phosphor-react";
import Banner from '../../../public/images/BannerT1.png'



export interface FansProps {
    id: number
    helices: number
    potencia: number
    tamanho: string
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
    const aleatorio = Ventiladores.sort(() => Math.random() - 0.5)
    const [typeFan, setTypeFan] = useState<String[]>([])
    const [sizeFan, setSizeFan] = useState<string[]>([])

    const [isOpen, setIsOpen] = useState(false)

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    useEffect(() => {
        function handleResize() {

            if (window.innerWidth < 1024) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    function openOrClose() {
        setIsOpen(!isOpen)
    }

    const handleTypeFilter = (type: string) => {

        const index = typeFan.indexOf(type);
        if (index === -1) {
            // adiciona o tipo selecionado ao array de category
            setTypeFan([...typeFan, type]);
        } else {
            // remove o tipo selecionado do array de category
            const newGeneros = [...typeFan];
            newGeneros.splice(index, 1);
            setTypeFan(newGeneros);
            setCurrentPage(1)
        }


    };
    const handleSizeFilter = (size: string) => {
        setTimeout(() => {
            const index = sizeFan.indexOf(size);
            if (index === -1) {
                // adiciona o tipo selecionado ao array de category
                setSizeFan([...sizeFan, size]);
            } else {
                // remove o tipo selecionado do array de category
                const newGeneros = [...sizeFan];
                newGeneros.splice(index, 1);
                setSizeFan(newGeneros);
                setCurrentPage(1)
            }
        }, 500);
    }

    const fanFilter = aleatorio.filter((product) => {
        if (typeFan.length === 0 && sizeFan.length === 0) {
            // se nenhum tipo ou tamanho estiver selecionado, exibe todos os ventiladores
            return true;
        } else if (typeFan.length > 0 && sizeFan.length === 0) {
            // verifica se o tipo do ventilador está entre os tipos selecionados
            return typeFan.includes(product.tipo);
        } else if (typeFan.length === 0 && sizeFan.length > 0) {
            // verifica se o tamanho do ventilador está entre os tamanhos selecionados
            return sizeFan.includes(product.tamanho);
        } else {
            // verifica se o tipo e o tamanho do ventilador estão entre os selecionados
            return typeFan.includes(product.tipo) && sizeFan.includes(product.tamanho);
        }
    });


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
            <BannerPage>
                <img src={Banner} alt="" />
            </BannerPage>
            <div className="area-carrosel">
                <CarroselContainer>
                    <p>marca1</p>
                    <p>marca2</p>
                    <p>marca3</p>
                </CarroselContainer>

            </div>
            {!isMobile ? (
                <ProductContainer>
                    <ProductsContent>
                        <Checkbox>
                            <FilterArea>
                                <div>
                                    <p>Filtrar</p>
                                </div>
                            </FilterArea>
                            <FilterCheckbox filtroType={handleTypeFilter} filtroSize={handleSizeFilter} opcoes={typeFan} />
                        </Checkbox>
                        <div>
                            <div style={{ padding: '1rem' }}>
                                <strong> {fanFilter.length} produtos encontrados</strong>
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
            ) :
                (

                    <ProductContainer>

                        <ProductsContent>

                            <div>
                                <div className="filter">
                                    <strong> {fanFilter.length} produtos encontrados</strong>
                                    <ContainerFilter>
                                        <button onClick={openOrClose}>

                                            <Faders size={22} color="#121212" />
                                            Filtrar
                                            <CaretDown size={15} color="#0d0d0d" />
                                        </button>

                                        <Checkbox className={isOpen ? 'open' : 'closed'}>
                                            <FilterCheckbox filtroType={handleTypeFilter} filtroSize={handleSizeFilter} opcoes={typeFan} />
                                        </Checkbox>

                                    </ContainerFilter>

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
                )}


        </HomeCointainer>
    )
}