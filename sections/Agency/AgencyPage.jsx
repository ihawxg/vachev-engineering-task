'use client'
import Image from "next/image";
import { Text, TextTitle, AgencyContainer, AgencyMainContainer, TitleContainer, Title, SubTitle, MainContentContainer } from './elements'
import { FaGithub } from 'react-icons/fa';
import {useState } from "react";

const texts = [
    {
        name: 'Brief',
        description: "Complete brief writing or simple duidance on what to include, we've got you covered"
    },
    {
        name: 'Search',
        description: "In-depth agency search covering; criteria matching,door knocking and due-diligence vetting"
    },
    {
        name: 'Pitch',
        description: "Comprehensive pitch management, including comms, diary management and pitch hosting."
    },
]

export const AgencyPage = ({ image, title, description, ctaText, ...props }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleTextClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };
    const handleTextHover = (index) => {
        setHoveredIndex(index);
    };

    const handleTextLeave = () => {
        setHoveredIndex(null);
    };
    return (
        <AgencyMainContainer>

            <TitleContainer>
                <Title>Managed agency selection</Title>
                <SubTitle>Strenghen your onboarding process</SubTitle>
            </TitleContainer>

            <div>
                <AgencyContainer>
                    <div>
                        <Image
                            alt="Image"
                            src='/img/video.png'
                            width="250px"
                            height="400px">
                        </Image>
                    </div>
                    <div>
                        {texts.map((text, index) => (
                            <MainContentContainer
                                marginTop={`${(40 - (index * 10)) + 'px'}`}
                                width={`${300 + (index * 20)}px`}
                                border={`2px solid ${activeIndex === index || hoveredIndex === index ? 'blue' : 'transparent'}`}
                                onMouseEnter={() => handleTextHover(index)}
                                onMouseLeave={handleTextLeave}
                                onClick={() => handleTextClick(index)}
                                key={text.name}>
                                <div>
                                    <FaGithub style={{ height: "50px", width: "75px" }} />
                                </div>
                                <div>
                                    <TextTitle selected={activeIndex === index || hoveredIndex === index}>{text.name}</TextTitle>
                                    <Text>{text.description}</Text>
                                </div>
                            </MainContentContainer>
                        ))}
                    </div>
                </AgencyContainer >
            </div >
        </AgencyMainContainer >
    );
};
