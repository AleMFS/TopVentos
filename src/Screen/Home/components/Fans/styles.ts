import styled from "styled-components";

export const Fan = styled.div`
        display: flex;        
        flex-direction: column;
        justify-content: space-between;
        
        //max-width: 16.875rem;
        background: #FFF;
        padding: 1rem;
        border: 1px solid #114074;

        img{
           width: 100%;
        }
        h3{
        font-family: 'PT Serif', serif;        
        max-width: 250px; 
        font-weight :400 ;
        font-size: 1rem;
        }
        span{
            border-bottom: 1px solid #114074;
            max-width: 80%;
            margin-top: 0.5rem;
            
        }
        p{
            margin: 0.5rem 0;
            color: red;
            font-weight: bold;
            font-size: 1.5rem;

        }
        a{
            
            button{
                width: 100%;
            padding: 1rem;
            border: none;
            background: #114074 ;
            color: #FFF;
            font-weight: bold;
            cursor: pointer;

            :hover{
                background: #3176bf;
            }
        }
        }

       
`