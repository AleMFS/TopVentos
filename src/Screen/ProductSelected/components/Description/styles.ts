import styled from "styled-components";

export const DescriptionContainer = styled.section`
    display: flex;
    flex-direction: column;
   

    nav{
        display: flex;
        border-bottom: 1px solid black;
        padding: 1rem 0;
        gap: 2rem;
        margin-bottom: 2rem;

        li{
            list-style: none;
        }
        button{
            background: transparent;
            border: none;
            
            font-size: 1.5rem;
            border-bottom: 5px solid transparent;
            cursor: pointer;
           

            :hover{
                border-bottom: 5px solid ${theme => theme.theme.colors["purple-300"]};
                transition: all 0.3s;
            }
        }
    }
`

export const BaseDescription = styled.div`
    display: grid;
    grid-template-columns: 17rem 1fr ;    
    margin-top: 6rem;

    h3{
        text-align: left;
        font-size: 1.75rem;
        color: #eb322f;
    }
`

export const DescriptionProducts = styled(BaseDescription)`  

    p{
        max-width: 1100px;
        text-align: left;
        font-size: 1.25rem;
    }
`

export const Characteristics = styled(BaseDescription)`

.infomation{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    

    >div{
        width: 100%;
        display: grid;
        grid-template-columns: 200px 1fr;
        text-align: left;
        padding: 1rem;
        border-radius: 8px;

        :nth-child(odd){
            background: #CCC;
        }
    }
}
`


