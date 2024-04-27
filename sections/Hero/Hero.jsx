import Image from "next/image";
import Link from "next/link";

import {
  StyledTextContainer,
  StyledContainer,
  StyledGetStartedBtn,
  StyledTitle,
  StyledDescription,
  StyledCTAContainer,
  StyledImageContainer,
} from "./elements";

export const Hero = ({ image, title, description, ctaText, ...props }) => {



  return (
    <StyledContainer {...props}>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
        <StyledCTAContainer>
        <Link href="/Agency">
            <StyledGetStartedBtn>{ctaText}</StyledGetStartedBtn>
          </Link>
        </StyledCTAContainer>
      </StyledTextContainer>
      <StyledImageContainer>
        <Image layout="responsive" src={image.src} alt={image.alt} width={image.width} height={image.height} />
      </StyledImageContainer>
    </StyledContainer>
  );
};
