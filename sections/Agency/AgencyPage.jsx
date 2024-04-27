'use client'
import Image from "next/image";
import { StyledAgencyContainer, StyledH1, StyledP, StyledAgencyVerticalContainer, StyledTextContainer, StyledAgencyMainContainer } from './elements'
import { FaGithub } from 'react-icons/fa';
import { useEffect, useState } from "react";
import "./Agency.module.css"
import useWindowWidth from "../../hooks/useWindowWidth";
import useWindowHeight from "../../hooks/useWindowHeight";

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
    const windowWidth = useWindowWidth();

    let isMobile = windowWidth <= 1024

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
        <StyledAgencyMainContainer>
            <StyledAgencyVerticalContainer>
                <StyledH1>Managed agency selection</StyledH1>
                <StyledP>Strenghen your onboarding process</StyledP>
            </StyledAgencyVerticalContainer>

            <div>
                <StyledAgencyContainer>
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
                            <StyledTextContainer style={
                                {
                                    marginTop: `${isMobile ? (40 - (index * 10)) + 'px' : ''}`,
                                    width: `${300 + (index * 20)}px`,
                                    border: `2px solid ${activeIndex === index || hoveredIndex === index ? 'blue' : 'transparent'}`
                                }
                            }
                                onMouseEnter={() => handleTextHover(index)}
                                onMouseLeave={handleTextLeave}
                                onClick={() => handleTextClick(index)}
                                key={text.name}>
                                <div>
                                    <FaGithub style={{ height: "50px", width: "75px" }} />
                                </div>
                                <div>
                                    <h4 style={{ margin: 0, fontWeight: 'bold' }}>{text.name}</h4>
                                    <p style={{ margin: "0.25rem 0" }}>{text.description}</p>
                                </div>
                            </StyledTextContainer>
                        ))}
                    </div>
                </StyledAgencyContainer >
            </div>
        </StyledAgencyMainContainer >
    );
};
