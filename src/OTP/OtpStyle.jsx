import styled from "styled-components";

export const Wrapper = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    background-color: white;
`
export const Input = styled.input.attrs((props)=>({
    type: 'alphanumeric',
    maxLength: props.maxLength, 
    minLength: props.minLength,
    required: props.true
}))
`
   width :40px ;
   height: 40px;
   border-radius: 100%;
   border: 1px solid grey;
   outline: none;
   text-align: center;
   background-color: #ffffff;
   color: black;
   font-size: 25px;
   @media screen and (max-width: 426px){
    width: 30px;
    height: 30px;
    border-radius: 100%;
    font-size: 20px;
    font-weight: 100;
   }
`
export const P = styled.p`
    
`
export const V = styled.p`
    
`
export const InputDiv = styled.div`
   /* background-color: red; */
   display: flex;
   gap: 20px;
`
export const Button = styled.div`
   width : 200px;
   height: 40px;
   background-color: blue;
   border-radius: 8px;
   display: flex;
   align-items: center;
   justify-content: center;
   color: white;
   cursor: pointer;
`
export const B = styled.div`
   @media screen and (max-width: 426px){
     text-align: center;
   } 
`
export const R = styled.div`
    font-size: 20px;
    margin-top: -20px;
    color: #4489dd;
    cursor: pointer;
`