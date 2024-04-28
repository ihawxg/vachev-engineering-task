'use client'
import { AgencyMainContainer, TitleContainer, Title, SubTitle } from './elements'
import { Card } from "~/collections";
import { useState } from "react";

export const AgencyPage = ({ image, title,subTitle, texts }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleTextClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };
    return (
        <AgencyMainContainer>
            <TitleContainer>
                <Title>{title}</Title>
                <SubTitle>{subTitle}</SubTitle>
            </TitleContainer>
            <div>
                <Card
                    texts={texts}
                    image={image}
                    activeIndex={activeIndex}
                    handleTextClick={handleTextClick}
                />
            </div>
        </AgencyMainContainer >
    );
};
