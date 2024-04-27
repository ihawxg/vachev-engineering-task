import styled from "styled-components";
import { SectionHeading, SectionInnerHeading, SectionParagraph, SectionSubheading, SectionFlexContainer, SectionVerticalContainer } from "~/components"

export const MainContentContainer = styled(({ ...props }) => <SectionFlexContainer {...props} />)`
  border:2px solid transparent;
  width:${(props) => props.width || null} ;
  border:${(props) => props.border || null} ;
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
    margin-top: ${(props) => props.marginTop || null};
  }
`

export const Text = styled(({ ...props }) => <SectionParagraph {...props} />)`
  line-height: 1rem;
  font-size: 0.85rem;
  margin: 0.25rem 0;
`

export const TextTitle = styled(({ ...props }) => <SectionInnerHeading {...props} />)`
  margin: 0;
  font-weight: 600;
  color: ${(props) => props.selected ? 'blue' : null};
  text-decoration:  ${(props) => props.selected ? 'underline' : null};;
`

export const AgencyContainer = styled(({ ...props }) => <SectionFlexContainer {...props} />)`
  
  overflow: hidden;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`

export const AgencyMainContainer = styled(({ ...props }) => <SectionVerticalContainer {...props} />)`
  height: 100vh;
  justify-content: center;
  background-image: url('/img/background.png');
  background-size: 50%;
  background-position-y: 60%;
  background-position-x: 28%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  overflow: hidden;
  @media only screen and (max-width: 1024px) {
    height: fit-content;
    background-size: 120%;
    background-position-y: 15%;
    background-position-x: 60%;
  }
`

export const TitleContainer = styled(({ ...props }) => <SectionVerticalContainer {...props} />)`
  padding:0 0 2rem 0;
`
export const Title = styled(({ ...props }) => <SectionHeading {...props} />)`
  margin:0;
  line-height:2.5rem;
  @media only screen and (max-width: 1024px) {
    font-size: 2rem;
    line-height: 2rem;
  }
`

export const SubTitle = styled(({ ...props }) => <SectionSubheading {...props} />)`
  margin:0px;
  @media only screen and (max-width: 1024px) {
    font-size: 1rem;
    line-height: 1.875rem;
  }
`