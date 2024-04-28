import Image from 'next/image';
import { MainContentContainer, TextTitle, Text, CardContainer, AgencyCardContainer } from './elements';
import { FaGithub } from 'react-icons/fa';
import { RenderFormattedText } from '~/components';
export const Card = ({ texts, image, handleTextClick, handleTextHover, handleTextLeave, activeIndex, hoveredIndex }) => {
    return (
        <AgencyCardContainer>
            <div>
                <Image
                    responsive
                    alt="Image"
                    src={image}
                    width="250px"
                    height="400px">
                </Image>
            </div>
            <CardContainer>
                {texts.map((text, index) => (
                    <MainContentContainer
                        border={`2px solid ${activeIndex === index ? 'blue' : 'transparent'}`}
                        onClick={() => handleTextClick(index)}
                        key={text.name}>
                        <div>
                            <FaGithub style={{ height: "50px", width: "75px" }} />
                        </div>
                        <div>
                            <TextTitle selected={activeIndex === index}>{text.name}</TextTitle>
                            <Text>{RenderFormattedText(text.description)}</Text>
                        </div>
                    </MainContentContainer>
                ))}
            </CardContainer>
        </AgencyCardContainer>
    );
};