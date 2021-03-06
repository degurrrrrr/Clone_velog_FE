import React from "react";
import styled from "styled-components";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { useHistory } from "react-router-dom";

const Menu = () => {
  const history = useHistory();
  return (
    <React.Fragment>
      <MenuWrap>
        <Updated>
          <AccessTimeIcon style={{ marginRight: "6px" }} />
          최신순
        </Updated>
        <Trending
          onClick={() => {
            window.alert("준비중인 컨텐츠입니다");
          }}
        >
          <TrendingUpIcon style={{ marginRight: "6px" }} />
          트렌딩
        </Trending>{" "}
        <MyPost
          onClick={() => {
            window.alert("준비중인 컨텐츠입니다");
          }}
        >
          내가 쓴 글
        </MyPost>
      </MenuWrap>
    </React.Fragment>
  );
};

const MenuWrap = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 38px;
  margin: 40px 5% 50px;
  @media screen and (max-width: 1024px) {
    margin: 40px 3%;
  }
`;

const Updated = styled.div`
  width: 80px;
  margin-right: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-bottom: 2px solid black;
`;

const Trending = styled.div`
  width: 90px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #868e96;
  cursor: pointer;
`;

const MyPost = styled.div`
  border: 1px solid black;
  margin-left: 10px;
  height: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  border-radius: 1rem;
  outline: none;
  font-weight: bold;
  background-color: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.125s ease-in 0s;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  }
`;
export default Menu;
