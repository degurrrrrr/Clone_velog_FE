import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import LogoImg from "../images/velog 로고.png";
import detailImg from "../images/상세 헤더 로고.png";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import SearchIcon from "@mui/icons-material/Search";

import SignUp from "../pages/SignUp";
import { Grid } from "../element";
import { actionCreators as userActions } from "../redux/modules/user";
import { useHistory } from "react-router-dom";

const Header = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = React.useState(false);
  const modalClose = () => {
    setModalOpen(!modalOpen);
  };

  
  const currentUrl = window.location.href.split("/");

  const is_login = useSelector((state) => state.user.is_login);
  const is_local = localStorage.getItem("is_login") ? true : false;

  const detailNickName = useSelector((state) => state.post.one_post.nickname);

  console.log(detailNickName);

  React.useEffect(() => {}, [is_login]);

  const _logOut = () => {
    dispatch(userActions.logOutFB());
  };

  if (is_local) {
    return (
      <React.Fragment>
        <HeaderContainer>
          <Wrap>
            <Logo>
              <a href="/" style={{textDecoration: "none", color: "inherit",
              display:"flex", alignItems:"center"}}>
                {currentUrl.indexOf('detail') !== -1 ?
                <React.Fragment>
                  <img src={detailImg} alt="로고" />
                  <DetailNick>{detailNickName}</DetailNick>
                </React.Fragment>
                 :
                <img src={LogoImg} alt="로고" /> }
              </a>
            </Logo>
            <HeadItem>
              <WbSunnyIcon style={{ marginLeft: "20px" }} />
              <SearchIcon style={{ marginLeft: "20px" }} />
              <NewPostWrite
                onClick={() => {
                  history.push("/write");
                }}
              >
                새 글 작성
              </NewPostWrite>
              <LoginBtn onClick={_logOut}>로그아웃</LoginBtn>
            </HeadItem>
          </Wrap>
        </HeaderContainer>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <HeaderContainer>
        <Wrap>
          <Logo>
            <a href="/">
              <img src={LogoImg} alt="로고" />
            </a>
          </Logo>
          <HeadItem>
            <WbSunnyIcon style={{ marginLeft: "20px" }} />
            <SearchIcon style={{ marginLeft: "20px" }} />
            <LoginBtn onClick={modalClose}>로그인</LoginBtn>
            {modalOpen && <SignUp modalClose={modalClose}></SignUp>}
          </HeadItem>
        </Wrap>
      </HeaderContainer>
    </React.Fragment>
  );
};

const HeaderContainer = styled.div`
  height: 4rem;
`;

const Wrap = styled.div`
  height: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin: 0 5%;
  @media screen and (max-width: 1024px) {
    margin: 0 1%;
  }
`;

const Logo = styled.div`
  
`;

const DetailNick = styled.span`
    display: block;
    margin-left: 10px;
    font-weight: bold;
    font-size: 1.125rem;
`;

const HeadItem = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
`;

const LoginBtn = styled.button`
  margin-left: 20px;
  height: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  border-radius: 1rem;
  border: none;
  outline: none;
  font-weight: bold;
  word-break: keep-all;
  background-color: black;
  color: white;
  transition: all 0.125s ease-in 0s;
  cursor: pointer;
`;

const NewPostWrite = styled.button` 
  border: 1px solid black;
  margin-left: 20px;
  height: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  border-radius: 1rem;
  outline: none;
  font-weight: bold;
  word-break: keep-all;
  background-color: white;
  color: black;
  transition: all 0.125s ease-in 0s;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  }
`;

export default Header;
