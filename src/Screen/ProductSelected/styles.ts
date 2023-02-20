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