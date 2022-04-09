import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { MdStarRate } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiViewGridAdd } from "react-icons/hi";
import Boxes from "../Boxes/Boxes";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../AuthProvider";

const Dashboard = () => {
    const navigate = useNavigate()
  const [storedData, setStoredData] = useState([]);
  const { currentUser } = useContext(AuthContext);

  const getData = async () => {
    const url = "";
    const res = await axios.get(url);
  };

  return (
    <Components>
      <Wrap>
        <Wrapper>
            <Logodiv>
              <img src={currentUser && currentUser.avatar} />
            <span>{currentUser && currentUser.companyName}</span>
            <Username>{currentUser && currentUser.userName}</Username>
            </Logodiv>
          <Sidewidget>
          <Icons>
            <Link to="/dash">
              {" "}
              <button>
                <Inner>
                  <AiFillHome size="25px" />
                </Inner>
                Overview
              </button>
            </Link>
            <Link to="/create">
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
            <LogOut
            onClick={() => {
                localStorage.removeItem("user")
                window.location.reload()
                navigate('/')
            }}
            >
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
        <Right>
          <Top>
            <h3> Welcome Romanus, </h3>
            <p>Your Products are in safe hands</p>
          </Top>
          <Wrapps>
            <Boxes />
            <Boxes />
            <Boxes />
            <Boxes />
            <Boxes />
            <Boxes />
            <Boxes />
            <Boxes />
            <Boxes />
          </Wrapps>
        </Right>
      </Wrap>
    </Components>
  );
};

export default Dashboard;
const Components = styled.div`
  width: 100%;
  min-height: 100vh;
`;
const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

// const Left = styled.div`
//   width: 18%;
//   height: 100%;
//   background: #231e71;
//   display: flex;
//   flex-direction: column;
//   position: fixed;
//   bottom: 0px;
// `;
const Right = styled.div`
  /* width: 500px; */
  flex-grow: .9;
  margin-right: 30px;
  margin-left: 380px ;
`;
// const Image = styled.div`
//   width: 105px;
//   height: 105px;
//   border-radius: 50%;
//   margin-bottom: 15px;
// `;
// const Names = styled.div`
//   color: white;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   div {
//     font-size: 40px;
//   }
//   span {
//     font-size: 20px;
//     opacity: 0.8;
//   }
// `;
// const Over = styled.div`
//   color: white;
//   font-size: 20px;
//   margin-left: 30px;

//   margin-bottom: 30px;

//   img {
//     width: 25px;
//     margin-right: 30px;
//     /* margin-top: 5px; */
//   }
//   span {
//     padding: 10px 10px;
//     border-radius: 3px;
//     cursor: pointer;
//     transition: 350ms;
//     :hover {
//       background: #3e82ff70;
//       color: white;
//     }
//   }
// `;
// const Add = styled.div`
//   color: white;
//   margin-left: 33px;
//   font-size: 20px;

//   img {
//     width: 24px;
//     margin-right: 30px;
//     margin-top: 5px;
//   }
//   span {
//     padding: 10px 10px;
//     border-radius: 3px;
//     cursor: pointer;
//     transition: 350ms;
//     :hover {
//       background: #3e82ff70;
//       color: white;
//     }
//   }
// `;
// const Dwon = styled.div`
//   color: white;
//   margin-top: 400px;
//   font-size: 20px;
//   margin-left: 30px;

//   img {
//     width: 18px;
//     margin-right: 40px;
//   }
//   span {
//     padding: 10px 10px;
//     border-radius: 3px;
//     cursor: pointer;
//     transition: 350ms;
//     :hover {
//       background: #3e82ff70;
//       color: white;
//     }
//   }
// `;
// const Profiles = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 70px;
// `;
// const Mid = styled.div`
//   margin-top: 120px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   height: 70px;
// `;
const Top = styled.div`
  margin-top: 0px;
  h3 {
    font-size: 50px;
    margin-bottom: 10px;
  }
  p {
    font-size: 20px;
  }
`;
const Wrapps = styled.div`
  background: #eee;
 
  padding: 15px 34px;
  display: grid;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 20px;
  /* gap: 10px;  */
  
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
  position: fixed;
  background-color: #231e71;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
 
`;