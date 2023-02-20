import styled from "styled-components";



export const SelectedContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    max-width: 90rem;
    margin: 0 auto;

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

    display: flex;
    
    
`

export const Carrosel = styled.div`
   width: 40%;
   padding: 1rem;
   display:flex ;
   flex-direction :column ;
   border-right: 1px solid black;
   border-bottom: 1px solid black;

   button{
    padding: 1rem;
    color: red;
   }

`