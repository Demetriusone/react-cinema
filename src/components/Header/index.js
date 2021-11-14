import React from "react";

import RMDBLogo from "../../images/react-movie-logo.svg";
import TMBDLogo from "../../images/tmdb_logo.svg";

import { Wrapper, Content, LogoImg, TMBDLogoImg } from "./Header.styles";

const Header = () => (
  <Wrapper>
    <Content>
      <LogoImg src={RMDBLogo} alt="rmdb-logo" />
      <TMBDLogoImg src={TMBDLogo} alt="tmbdlogo" />
    </Content>
  </Wrapper>
);

export default Header;
