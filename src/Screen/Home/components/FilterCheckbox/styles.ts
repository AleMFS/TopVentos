import styled from "styled-components";

export const FilterCheckBoxContainer = styled.div`
padding: 1rem 0 1rem 1rem; 
background: #FFF;

@media( max-width:1024px){
    width: 8.5rem;
    
    box-shadow: 1px 1px 8px #00000024;
}
`

export const BaseCategory = styled.div`
    display: flex;
    flex-direction: column;
    //padding: 1rem 0 0 1rem; 
    gap: 0.25rem;
    margin-top: 0.5rem;
    
    label{
        display: flex;
        align-items: center;
    }

    input[type="checkbox"] {
        margin-right: 5px;
}
    
    p{
        font-weight: bold;
        margin-bottom: 0.5rem;
    }

    @media(max-width:1024px){
        
    }
`

export const Category = styled(BaseCategory)`
span{

width: 80%;

border-bottom: 1px solid #114074;
}    
`

export const Size = styled(BaseCategory)`


`

export const Brand = styled(BaseCategory)`
    span{

width: 80%;

border-bottom: 1px solid #114074;
} 

`