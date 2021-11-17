import React from "react";

import RMDBLogo from "../../images/react-movie-logo.svg";
import TMBDLogo from "../../images/tmdb_logo.svg";

import { Wrapper, Content, LogoImg, TMBDLogoImg } from "./Header.styles";
import { Link } from "react-router-dom";

const Header = () => (
  <Wrapper>
    <Content>
      <Link to="./">
        <LogoImg src={RMDBLogo} alt="rmdb-logo" />
      </Link>
      <TMBDLogoImg src={TMBDLogo} alt="tmbdlogo" />
    </Content>
  </Wrapper>
);

export default Header;
