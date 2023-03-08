import styled from "styled-components";

export const FilterCheckBoxContainer = styled.div`
padding: 1rem 0 1rem 1rem; 
background: #FFF;

@media( max-width:1024px){
    width: 7.5rem;
    box-shadow: 1px 1px 8px #00000024;
}
`

export const BaseCategory = styled.div`
    display: flex;
    flex-direction: column;
    //padding: 1rem 0 0 1rem; 
    


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
margin-top: 0.5rem;
border-bottom: 1px solid #114074;
}    
`

export const Size = styled(BaseCategory)`

margin-top: 0.5rem;
`