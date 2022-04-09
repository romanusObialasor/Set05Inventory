import React,{useState, useEffect} from "react";
import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { MdStarRate } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiViewGridAdd } from "react-icons/hi";
import { Link } from "react-router-dom";
import axios from "axios";

const Create = () => {

  const [image, setImage] = useState("")
  const [avatar, setAvatar] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const imageHandler = (e) => {
    const file = e.target.files[0]
    const save = URL.createObjectURL(file)
    setImage(save)
  }

  const createUser = async () => {

    const url = "";
    await axios.post(url);
  };
  return (
    <Container>
      <Wrapper>
        <Logodiv>
          <img src="/Ellipse 1.png" />
          <span>Roman Empire</span>
          <Username>Romanus Obialasor</Username>
        </Logodiv>
        <Sidewidget>
          <Icons>
            <Link to="/dash">
              <button>
                <Inner>
                  <AiFillHome size="25px" />
                </Inner>
                Overview
              </button>
            </Link>
            <Link to="/dash">
            <button>
              <Inner>
                <HiViewGridAdd size="25px" />
              </Inner>
              Add Product
            </button>
            </Link>
          </Icons>
          <Link to="/">
            {" "}
            <LogOut>
              <button>
                <Inner>
                  <CgProfile size="25px" />
                </Inner>
                Logout
              </button>
            </LogOut>
          </Link>
        </Sidewidget>
      </Wrapper>
      <Wrapper2>
        <h3>CREATE A PRODUCT</h3>
        <Content>
          <InputHold>
            <Spanhold>
              <span>Product Name</span>
            </Spanhold>
            <input />
            <Spanhold>
              <span>Quanity</span>
            </Spanhold>
            <input />
            <Spanhold>
              <span>Amount Per One</span>
            </Spanhold>
            <input />
          </InputHold>
          <Link to="/dash">
            {" "}
            <CreateBtn>
              <button>Create</button>
            </CreateBtn>
          </Link>
        </Content>
      </Wrapper2>
    </Container>
  );
};

export default Create;

const CreateBtn = styled.div`
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  /* background-color: red; */
  /* margin-bottom: 50px; */
  button {
    text-decoration: none;
    height: 60px;
    width: 200px;
    border-radius: 30px;
    font-size: 25px;
    font-weight: 400;
    outline: none;
    border: none;
    background-color: #231e71;
    color: white;
    cursor: pointer;

    :hover {
      background-color: rgba(35, 30, 113, .8);
    }
  }
`;
const Spanhold = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;

  span {
    font-size: 18px;
    font-weight: 600;
  }
`;

const InputHold = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  justify-content: flex-start;

  
  input {
    font-size: 18px;
    padding: 15px;
    outline: none;
    border: 1px solid black;
    border-radius: 5px;
    margin-bottom: 30px;

    /* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px; */
  }
`;
const Content = styled.div`
  width: 450px;
  /* background-color: orange; */
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  justify-content: flex-start;
`;

const Inner = styled.div`

`;

const LogOut = styled.div`
  
  width: 100%;
  button {
    width: 100%;
    font-size: 18px;
    background-color: #231e71;
    outline: none;
    border: none;
    font-weight: 400;
    padding: 30px 20px;
    height: 40px;
    color: white;
    border-radius: 8px;
    display: flex;
    flex-direction:row;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;

    ${Inner}{
      margin-right: 15px;

    }
    :hover {
      background-color: #484489;
    }
  }
`;


const Icons = styled.div`
  
  width: 100%;
  /* background-color: hotpink; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items:center; */
  button {
    font-size: 18px;
    text-decoration: none;
    width: 100%;
    height: 40px;
    padding: 30px 20px;

    background-color: #231e71;
    outline: none;
    border: none;
    font-weight: 400;
    color: white;
    border-radius: 8px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;

    ${Inner}{
      margin-right: 15px;
    }

    :hover {
      background-color: #484489;
    }
  }
`;
const Sidewidget = styled.div`
  height: 50%;
  width: 90%;
  /* background-color: green; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
  padding:  60px 50px  50px ;
`;
const Username = styled.div`
  color: white;
  font-size: 16px;
`;
const Logodiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  /* background-color:orange; */
  span {
    font-size: 25px;
    font-weight: 500;
    color: #fff;
  }
  img {
    width: 100px;
  }
`;
const Wrapper = styled.div`
  width: 290px;
  height: 100vh;
  background-color: #231e71;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
 
`;
const Wrapper2 = styled.div`
  width: 83%;
  height: 100vh;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h3 {
    font-size: 25px;
  }
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  /* background-color: orange; */
`;
