import styled from "styled-components";

export const InformationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    
    h3{
        font-size: 2rem;
        margin-bottom: 2rem;
    }
    span{
        display: -webkit-box;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
        overflow: hidden;
        max-width: 80%;
        margin-bottom: 2rem;
    }
    strong{
        font-size: 2rem;
        color: red;
    }

    a{
        font-size: 1.25rem;
        margin-top: 3rem;
        padding: 1rem;
        background: ${props => props.theme.colors["purple-300"]};
        color: #FFF;
        text-decoration: none;
        width: 40%;
    }

    @media(max-width:768px){
        a{
            margin-top: 1rem;
        }
    }
`