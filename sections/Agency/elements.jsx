import styled from "styled-components";
import { SectionHeading, SectionSubheading } from "~/components"

export const AgencyMainContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const TitleContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:0 0 2rem 0;
`
export const Title = styled(({ ...props }) => <SectionHeading {...props} />)`
  margin:0;
  line-height:2.5rem;
  text-align: center;
  @media only screen and (max-width: 1024px) {
    font-size: 2rem;
    line-height: 2rem;
  }
`

export const SubTitle = styled(({ ...props }) => <SectionSubheading {...props} />)`
  margin:0px;
  text-align: center;
  @media only screen and (max-width: 1024px) {
    font-size: 1rem;
    line-height: 1.875rem;
  }
`