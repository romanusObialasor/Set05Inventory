import React from "react"
import styled from "styled-components"
import {Link } from 'react-router-dom'



const Header = () =>{
    return(
     <Contaner>
<Wrapper>
<LogoDiv>
   <img src="/logo.png" alt=""/>
    </LogoDiv>
    <Navigation>
        <Nav>
            <span to="/">Home</span>
            <span>About</span>
            <span>Contact </span>
            <span>services</span>
       </Nav>


        <Link to ="/consume"><Btn>Login</Btn></Link>
    </Navigation>
</Wrapper>
     </Contaner>
    )
}
export default Header;

const Contaner = styled.div`
width:100%;
height:60px;
display:flex;
align-items:center;
justify-content:center;
background:#BED5FF;
position: fixed;
top: 0;

background-image:url("/background.png");
`
const Wrapper = styled.div`
width:90%;
align-items:center;
justify-content:space-between;
display:flex;
@media (max-width:768px){
    display:none
}
`
const LogoDiv=styled.div`
img{
    width: 60px;
}
`
const Navigation=styled.div`
width:860px;
display:flex;
align-items:center;
justify-content:space-between;
/* padding:45px; */
`;
const Btn=styled.button`
padding:10px 30px;
border-radius:5px;
background:transparent;
border:1px solid #74ADFF;
outline:none;
font-size:18px;
color:#74ADFF;
:Hover{
    transform:scale(1.1)
}
`;
const Nav =  styled.div`
font-size:15px;
font-weight: 600;
display:flex;
justify-content: space-between;
width: 500px;

span{
    padding: 10px 20px;
    border-radius: 3px;
    cursor: pointer;
    transition: 350ms;
    :hover{
 background:  #3e82ff70;
 color: white; 
}
}
div{
    /* width: 60px;
    height:40px;
    background: white;
    display:flex;
    justify-content:center;
    align-items:center; */
    
    :hover{
        opacity: 1;
    }
}

`