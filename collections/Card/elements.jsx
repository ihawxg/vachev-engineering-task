import styled from "styled-components";
import { SectionInnerHeading, SectionParagraph } from "~/components"

export const MainContentContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  justify-content: center;
  align-items: center;
  border:2px solid transparent;
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
export const AgencyCardContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  justify-content: center;
  align-items: center;
  
  overflow: hidden;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`

export const CardContainer = styled(({ ...props }) => <div {...props} />)`
  & > :nth-child(1) {
    width: 320px;
  }

  & > :nth-child(2) {
    width: 340px;
  }

  & > :nth-child(3) {
    width: 360px;
  }

  @media only screen and (max-width: 1024px) {
    & > :nth-child(1) {
      width: 320px;
      margin-top: 40px;
    }

    & > :nth-child(2) {
      width: 340px;
      margin-top: 30px;
    }

    & > :nth-child(3) {
      width: 360px;
      margin-top: 20px;
    }
  }

`