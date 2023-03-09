import styled from "styled-components";

export const HomeCointainer = styled.section`
    width: 100%;
    
    
`
export const BannerPage =styled.div`
    width: 100%;
    max-width: 1440px;
    display: flex;
    justify-content:center ;

    img{
        width: 100%;
    }
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
    padding: 0 1rem;

`
export const ProductsContent = styled.div`
    width: 100%;
    max-width: 90rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 21% 1fr;
    grid-column-gap: 2rem;  
    
    strong{
        margin-top: 0.5rem;
    }

    .container{
        margin: 2rem auto;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        list-style: none;

        li{
            width: 2.5rem;
            height: 2.5rem;
            
            cursor: pointer;

            display: flex;
            justify-content: center;
            align-items: center; 
            background: #114074;
            border-radius: 6px;
            font-size: 1.25rem;
            color: #FFF;
            
            
            
            :hover{
                background: #3176bf;
            }
           
        }
    }
    .filter {
        padding: 1rem;
        
    }

        .currentNumberPage{
            color: #FFF;
            background: #3176bf !important;
            border-radius: 6px;

           
        }  
         
        .containerNumber{
            width: 2.5rem;
            height: 2.5rem;
            
            
            display: flex;
            justify-content: center;
            align-items: center;
        }  
        .arrowSelected{
            color:  #114074 !important;
            background: transparent !important;
            
        }
        .arrowDisabled{
            color: #CCC !important;
            background: transparent !important ;
        } 

        @media (max-width:1024px){
            display: grid;
            grid-template-columns: 1fr;
            

            .filter{
                display: flex;
                justify-content: space-between;   
                        
            }
          
        }
`
export const Checkbox = styled.section`
        min-width: 13.125rem;

    @media (max-width:1024px){
        position: absolute;
        top: 30px;
        box-shadow: 0 1px 8px #000;
        min-width: 0;
        

 
       
    &.open{
        opacity: 1;
        visibility: visible;
        
        transform: translateY(0);
        transition: opacity .4s ease, transform 0.4s ease, visibility .4s;
    }
  
    &.closed{
        
        opacity: 0;
        visibility: hidden;

        transform: translateY(20px);
        transition: opacity .4s ease, transform 0.4s ease, visibility .4s;
    }

    }
`

export const ContainerFilter = styled.div`
    position: relative;

    button{
        border: 0;
        background: transparent;

        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;

        margin-right: 1rem;
        svg:first-child{
            transform: rotate(90deg);
        }
    }

`

export const Products = styled.main`

    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 2rem;
    padding-top: 2rem;
    
  @media(max-width:640px){
    grid-template-columns: repeat(2,1fr);
  }
    
   
`
