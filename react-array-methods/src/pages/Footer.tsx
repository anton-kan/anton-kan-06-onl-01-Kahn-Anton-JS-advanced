import styled from 'styled-components';

const StyledFooter = styled.footer`
  flex-grow: 0;
  padding: 25px 0;
  background-color: #282c34;
  color: white;
`;

const Footer = () => <StyledFooter>&copy; Anton Kahn, 2021</StyledFooter>;

export default Footer;
