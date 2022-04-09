import React from 'react'
import styled from 'styled-components'


const Boxes = () => {
  return (
    <Div>
        <Wrapper>
            <Top>
                <span>product Name</span>
                <span><img src="/Delete.png"/></span>
            </Top>
            <Mid>
                <span style ={{color:"red", fontSize:"25px", fontWeight:"bold"}}>-</span>
                <span style ={{color:"blue" , fontSize:"25px", fontWeight:"bold", marginLeft:"10px"}}>+</span>
            </Mid>
            <Bottom>
                <span>TAM</span>
                <span>PAP</span>
                <span>N0</span>
            </Bottom>
            <Down>
                <span>#20,000</span>
                <span  style={{marginRight:"17px"}}>#400</span>
                <span style={{color:"blue",marginRight:"5px"}}>20</span>


            </Down>
        </Wrapper>
    </Div>
  )
}

export default Boxes

const Div = styled.div`
width:100%;
height: 180px;

border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

`

const Wrapper = styled.div`
width: 100%;
height: 80%;
padding: 20px 30px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`
const Down = styled.div`
display: flex;
justify-content:space-between;
align-items: center;
width: 100%;
font-size: 15px;
font-weight: 500;
color:#0f9215;
`
const Top= styled.div`
    display: flex;
    justify-content:space-between;
    width: 100%;
    align-items: center;
    font-size: 16px;

    font-weight: 600;
    img{
        width: 20px;
    }
    span{
        img{
            cursor: pointer;

        }
}
`
const Mid = styled.div`
display: flex;
justify-content:space-between;
align-items: center;
width: 100%;
span{
        cursor: pointer;
    }

`
const Bottom = styled.div`
display: flex;
justify-content:space-between;
width: 100%;
font-size: 15px;
font-weight: 500;

align-items: center;
`