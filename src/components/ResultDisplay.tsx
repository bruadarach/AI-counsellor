import { styled } from "styled-components";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import { FaHeartCircleCheck, FaListCheck, FaHeartPulse } from "react-icons/fa6";
import { BiSolidAnalyse } from "react-icons/bi";

interface ResultDisplayProps {
  data: {
    title: string;
    thumbnail: string;
    summary: string;
    emotional_content: string;
    emotional_insight: string;
    analysis: string;
    action_list: string[];
  };
}

const ResultDisplay = ({ data }: ResultDisplayProps) => {
  const sections = [
    {
      icon: (
        <MdOutlineStickyNote2
          size={24}
          color="#0c3f1a"
          style={{
            position: "absolute",
            top: "35px",
          }}
        />
      ),
      title: "Summary",
      content: data.summary,
    },
    {
      title: "Thumbnail",
      content: data.thumbnail,
    },
    {
      icon: (
        <FaHeartCircleCheck
          size={22}
          color="#0c3f1a"
          style={{
            position: "absolute",
            top: "34px",
          }}
        />
      ),
      title: "Emotional Diary",
      content: data.emotional_content,
    },
    {
      icon: (
        <FaHeartPulse
          size={22}
          color="#0c3f1a"
          style={{
            position: "absolute",
            top: "34px",
          }}
        />
      ),
      title: "Emotional Insight",
      content: data.emotional_insight,
    },
    {
      icon: (
        <BiSolidAnalyse
          size={22}
          color="#0c3f1a"
          style={{
            position: "absolute",
            top: "35px",
          }}
        />
      ),
      title: "Analysis",
      content: data.analysis,
    },
    {
      icon: (
        <FaListCheck
          size={20}
          color="#0c3f1a"
          style={{
            position: "absolute",
            top: "37px",
          }}
        />
      ),
      title: "Action List",
      content: data.action_list.map((action: string, index: number) => (
        <div key={`action_list-${index}`}>{action}</div>
      )),
    },
  ];
  return (
    <>
      <LogTitle>Topic: {data.title}</LogTitle>
      {sections.map((section, index) => (
        <div key={`sections-${index}`}>
          {section.title === "Thumbnail" ? (
            <ImageWrapper key={`section-thumbnail`}>
              <img src={data.thumbnail} alt="create_image" />
            </ImageWrapper>
          ) : (
            <div key={`section-${index}`}>
              <Section>
                <SectionTitle>
                  <span>{section.icon}</span>
                  {section.title}
                </SectionTitle>
                <SectionContent>
                  {section.title === "Action List" ? (
                    data.action_list.map((action: string, index: number) => (
                      <SubSection key={`subsection-${index}`}>
                        <span>
                          <FaCircle
                            size={6}
                            color="#0c3f1a"
                            style={{
                              position: "absolute",
                              top: "11px",
                            }}
                          />
                        </span>
                        {action}
                      </SubSection>
                    ))
                  ) : (
                    <div key={`subsection-${index}`}>{section.content}</div>
                  )}
                </SectionContent>
              </Section>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default ResultDisplay;

const LogTitle = styled.div`
  font-size: 34px;
  font-weight: bold;
  color: #0c3f1a;

  @media screen and (max-width: 640px) {
    padding: 24px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 5px;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Section = styled.div`
  margin: 20px 0;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 30px 40px;
  width: 100%;
  overflow: hidden;
  position: relative;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #0c3f1a;

  span {
    margin-right: 30px;

    @media screen and (max-width: 380px) {
      display: none;
      margin-right: 0;
    }
  }

  @media screen and (max-width: 380px) {
    padding: 10px;
  }

  @media screen and (max-width: 280px) {
    padding: 0px;
  }
`;

const SectionContent = styled.div`
  font-size: 16px;
  margin-left: 7px;
  word-wrap: break-word;
  white-space: pre-wrap;
  line-height: 1.7;
  position: relative;
  color: #505251;
  text-align: justify;

  span {
    margin-right: 15px;
  }

  @media screen and (max-width: 480px) {
    text-align: left;
  }
`;

const SubSection = styled.div`
  position: relative;
`;
