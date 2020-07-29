import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mobile, tablet, desktop } from '../../../styles/mediaQueries/mixins';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  color: ${props => props.theme.cadetblue};
  padding: 0 32px 50px 32px;
  font-weight: 600;
  font-size: 24px;
`;

export const Module = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

export const WelcomeText = styled.div`
  font-size: 30px;
  padding: 32px;

  ${mobile`
    font-size: 30px;
  `};
  ${tablet`
    font-size: 40px;
  `};
  ${desktop`
    font-size: 50px;
  `};
`;

export const LongText = styled.div`
  font-size: 20px;
  padding: 12px;
`;

export const LinkStyled = styled(Link)`
  color: ${props => props.theme.cadetblue};
  margin: 32px;
  text-decoration: none;
  font-size: 32px;
`;

export const Logo = styled.img`
  height: 200px;
  position: absolute;
  bottom: 120px;
  right: 100px;
`;

export const Music = styled.span`
  color: blue;
  padding: 5px;
`;

export const Films = styled.span`
  color: red;
  padding: 5px;
`;

export const Books = styled.span`
  color: limeGreen;
  padding: 5px;
`;

export const Other = styled.span`
  color: orange;
  padding: 5px;
`;
