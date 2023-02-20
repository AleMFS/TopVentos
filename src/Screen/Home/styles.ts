import styled from "styled-components";

export const HomeCointainer = styled.section`
    width: 100%;
    padding: 0 1rem;
`
export const HomeContent = styled.div`
    width: 100%;
    max-width: 90rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 21% 1fr;

    .area-carrosel{
        padding: 0 2rem;

        strong{
            display: flex;
            align-items: flex-end;
            
            padding: 1rem;
        }
    }
`

export const CarroselContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 3rem;
    gap: 1rem;
    
    
`

export const FilterArea = styled.section`    
    display: flex;    
    align-items: flex-end;
    
    div{
        width: 100%;  
        min-width:13.125rem ;
        background: #114074;
        color: #FFF;
        padding: 1rem 0 1rem 1rem;        
    }
   
`
export const ProductContainer = styled.section`
    width: 100%;
    background: #fbfbfb;

`
export const ProductsContent = styled.div`
    width: 100%;
    max-width: 90rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 21% 1fr;
    grid-column-gap: 2rem;      

`
export const Checkbox = styled.section`
    min-width: 13.125rem;
`

export const Products = styled.main`

    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 2rem;
    padding-top: 2rem;
    
  
    
   
`
