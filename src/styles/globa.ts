import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}
@media(max-width:1024px){
    html{
    font-size: 87.5%;
}
@media (max-width:768px){
    html{
        font-size: 70%;
    }
}
@media (max-width:640px){
    html{
        font-size: 63%;
    }
}
}
body{
    font-family: 'DM Sans', sans-serif;
    font-size: 1rem;
    font-weight: 400;
}


`