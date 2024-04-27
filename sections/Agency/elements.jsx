import styled from "styled-components";

export const StyledAgencyContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const StyledAgencyVerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 2rem 0;
`;

export const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  border-radius: 5%;
  margin: 1rem 2rem;
  background-color: rgba(200,200,200,0.25);
  gap:1rem;
  cursor: pointer;
  transition: border-color 0.3s ease;
  
  &:hover {
    border: 2px solid blue;
  }

  @media only screen and (max-width: 1024px) {
    width: calc(100% - 4rem);
    margin: 1rem 2rem;
  }
  > div {
    font-size: 0.85rem;
  }

`;

export const StyledH1 = styled(({ ...props }) => <h1 {...props} />)`
margin: 0 !important;
`;

export const StyledP = styled(({ ...props }) => <p {...props} />)`
margin: 0 !important;
`;

export const StyledAgencyMainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url('/img/background.png');
  background-size: 50%;
  background-position-y: 60%;
  background-position-x: 28%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  @media only screen and (max-width: 1024px) {
    height: fit-content;
    background-size: 100%;
    background-position-y: 15%;
    background-position-x: 60%;
  }
`;