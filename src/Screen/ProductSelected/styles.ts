import styled from "styled-components";



export const SelectedContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    max-width: 90rem;
    margin: 0 auto;
    padding: 0 1rem;


`



export const BannerLogo = styled.section`
width: 100%;
margin-bottom: 1rem;


&.Arno{
    background: #FFF;
}
&.Britânia{
   
@media(max-width:640px){
    img{
        width: 50%;
    }
}
   
}
&.Mallory {
    background: #000;
}

@media (max-width:640px){
 
}
  
`

export const InfoProduct = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    
    border-bottom: 1px solid black;

    
    
`
export const Product = styled.div`
    min-width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-right: 1px solid gray;
    gap: 0.5rem;
    
    img{
        width: 75%;
    }


`
export const Info = styled.div`
    display: flex;
    
    
    min-width: 100%;
    padding: 1rem;
    div{
        width: 100%;
        
        
        
    }
`

export const Carossel = styled.div`
      
    .item{
        
        
        border: 1px solid gray;
        
      
      
       display: flex;

        button{
            border: none;
            background: transparent;
           
            
        }
        img{
            
            
        }

        

       
    }
    
`
