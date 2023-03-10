import { Fans } from "./components/Fans";
import { FilterCheckbox } from "./components/FilterCheckbox";
import { BannerPage, CarroselContainer, Checkbox, ContainerFilter, FilterArea, HomeCointainer, ProductContainer, Products, ProductsContent } from "./styles";
import { Ventiladores } from '../../data/Ventiladores'
import { useEffect, useRef, useState } from "react";
import ReactPaginate from "react-paginate";
import { CaretDown, CaretLeft, CaretRight, Faders } from "phosphor-react";
import Banner from '../../../public/images/BannerT1.png'
import { Footer } from "../../components/Footer";



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
    const [shuffledItems, SetshuffledItems] = useState<FansProps[]>([])
    const [filter, setFilter] = useState<{ typeFan: string[], sizeFan: string[], marca: string[] }>({
        typeFan: [],
        sizeFan: [],
        marca: [],
    });


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

    function embaralhar() {
        SetshuffledItems(Ventiladores.sort(() => Math.random() - 0.5))
    }

    useEffect(() => {

        embaralhar()

    }, [])

    function openOrClose() {
        setIsOpen(!isOpen)
    }


    const handleTypeFilter = (type: string) => {
        const index = filter.typeFan.indexOf(type);
        if (index === -1) {
            setFilter(prevState => ({
                ...prevState,
                typeFan: [...prevState.typeFan, type],
            }));
        } else {
            setFilter(prevState => ({
                ...prevState,
                typeFan: prevState.typeFan.filter(item => item !== type),
            }));
        }
        setCurrentPage(1);
    };

    const handleSizeFilter = (size: string) => {
        const index = filter.sizeFan.indexOf(size);
        if (index === -1) {
            setFilter(prevState => ({
                ...prevState,
                sizeFan: [...prevState.sizeFan, size],
            }));
        } else {
            setFilter(prevState => ({
                ...prevState,
                sizeFan: prevState.sizeFan.filter(item => item !== size),
            }));
        }
        setCurrentPage(1);
    };

    const handleMarcaFilter = (marca: string) => {
        const index = filter.marca.indexOf(marca);
        if (index === -1) {
            setFilter(prevState => ({
                ...prevState,
                marca: [...prevState.marca, marca],
            }));
        } else {
            setFilter(prevState => ({
                ...prevState,
                marca: prevState.marca.filter(item => item !== marca),
            }));
        }
        setCurrentPage(1);
    };

    const fanFilter = shuffledItems.filter(product =>
        (filter.typeFan.length === 0 || filter.typeFan.includes(product.tipo))
        && (filter.sizeFan.length === 0 || filter.sizeFan.includes(product.tamanho))
        && (filter.marca.length === 0 || filter.marca.includes(product.marca))
    );



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

            {!isMobile ? (
                <ProductContainer>
                    <ProductsContent>
                        <Checkbox>
                            <FilterArea>
                                <div>
                                    <p>Filtrar</p>
                                </div>
                            </FilterArea>
                            <FilterCheckbox filtroType={handleTypeFilter} filtroSize={handleSizeFilter} filtrosBrand={handleMarcaFilter} />
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
                                            <FilterCheckbox filtroType={handleTypeFilter} filtroSize={handleSizeFilter} filtrosBrand={handleMarcaFilter} />
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

            <Footer />
        </HomeCointainer>
    )
}