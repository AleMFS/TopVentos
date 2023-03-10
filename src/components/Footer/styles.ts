import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    max-width: 90rem;
    margin: 1rem auto 0;
   

`
export const FooterContent = styled.div`
    width: 100%;
    max-width: 69rem;   
    background: ${bg => bg.theme.colors["purple-300"]};
    height: 200px;

    display: flex;
    justify-content: space-around;
    align-items: center;

    
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #FFF;
        gap: 0.25rem;
        text-decoration: none;
        
        .contato {
            display: flex;
            align-items: flex-start;

        }

    } 
        a,p{
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: #FFF;
            text-decoration: none;

        }

    
   
   
`