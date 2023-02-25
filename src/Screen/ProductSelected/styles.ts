import styled from "styled-components";



export const SelectedContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    max-width: 90rem;
    margin: 0 auto;
    padding: 0 1rem;


`



export const BannerLogo = styled.section`
width: 100%;
padding: 1rem;

&.Arno{
    background: #FFF;
}
&.Britania{
    background: ${theme => theme.theme.colors["purple-300"]};
}
&.Mallory {
    background: #000;
}

`

export const InfoProduct = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    border-bottom: 1px solid black;

    
    
`
export const Product = styled.div`
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid gray;
    gap: 0.5rem;
    
    img{
        width: 75%;
    }


`
export const Info = styled.div`
    width: 100%;
    padding: 1rem;
    div{
        width: 100%;
        background: blue;
        
    }
`

export const Carossel = styled.div`
    width: 100%;
    max-width: 100%;    
    display: flex;
    overflow-x: hidden;
    
    .item{
        border: 1px solid gray;
      
       
       display: flex;

        button{
            border: none;
            background: transparent;
            width: 100%;
            
        }
        img{
            width: 100%;
            
        }
       

       
    }
    
`
