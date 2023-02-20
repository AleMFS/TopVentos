import styled from "styled-components";

export const BaseCategory = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 0 0 1rem; 
    background: #FFF;


    input[type="checkbox"] {
        margin-right: 5px;
}
    
    p{
        font-weight: bold;
        margin-bottom: 0.5rem;
    }
`

export const Category = styled(BaseCategory)`
span{

width: 80%;
margin-top: 0.5rem;
border-bottom: 1px solid #114074;
}    
`

export const Size = styled(BaseCategory)`
`