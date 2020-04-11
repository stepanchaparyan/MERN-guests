import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.color};
  padding: 16px 32px;
  font-weight: 600;
  font-size: 20px;
`;

export const Logo = styled.img`
  width: 290px;
  height: auto;
`;

export const UserName = styled.div`
  font-weight: 200;
  padding-right: 32px;
`;

export const NavLinks = styled.div`
  display: flex;
`;

export const LinkStyled = styled(Link)`
  display: flex;
  padding: 0 10px;
  text-decoration: none;
  color: black;
  &:hover {
    color: white;
  }
`;

export const Logout = styled.div`
  cursor: pointer;
  color: black;
  &:hover {
    color: white;
  }
`;
