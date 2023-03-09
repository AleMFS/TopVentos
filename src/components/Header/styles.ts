import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    max-width: 90rem;
    padding: 1rem;
    

    img{
        width: 50px;
    }

    nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    p{
        font-size: 1.5rem;
        color: ${color => color.theme.colors["purple-300"]};
        margin-right: 2rem;
    }

    div{
        display: flex;
        gap: 0.75rem;
    }

`