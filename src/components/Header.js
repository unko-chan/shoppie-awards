import React from "react";
import styled from "styled-components";
import banner from "../img/banner.png";

const StyledHeader = styled.img`
  width: 450px;
  align-self: center;
  margin: 2rem;
`;

function Header() {
  return <StyledHeader src={banner} alt={"(shopify logo drawn with mspaint) The Shopify Awards"}/>;
}

export default Header;
