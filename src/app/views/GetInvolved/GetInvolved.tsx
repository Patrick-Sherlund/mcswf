import React, { FC } from "react";
import {
  Banner,
  BannerContainer,
  BannerImage,
  ContentBody,
  ContentContainer,
  ContentTitle,
  GetInvolvedContainer,
  Header,
  HorizontalDivider,
  InfoCard,
  InfoCardImage,
  InnerBanner,
  InnerCard,
  JoinTeamButton,
  MainTitle,
  SubTitle,
  VerticalContentDivider,
  VerticalTextDivider,
} from "./GetInvolved.styles";
import { GetInvolvedData } from "../../constants/data/get-involved";

const GetInvolved: FC = () => (
  <GetInvolvedContainer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
    viewport={{ once: true }}
    data-testid="GetInvolved"
    id={"Get-Involved"}
  >
    <Header>
      <MainTitle>{GetInvolvedData.mainTitle}</MainTitle>
      <SubTitle>
        {GetInvolvedData.subTitles.titleOne}
        <VerticalTextDivider /> {GetInvolvedData.subTitles.titleTwo}
        <VerticalTextDivider /> {GetInvolvedData.subTitles.titleThree}
      </SubTitle>
    </Header>
    <ContentContainer>
      <BannerContainer>
        {GetInvolvedData.bannerContent.map((bannerContent, index) => {
          return (
            <Banner key={`banner-${index}`}>
              <InnerBanner>
                <ContentTitle>
                  <VerticalTextDivider />
                  {bannerContent.title}
                </ContentTitle>
                <ContentBody>{bannerContent.body}</ContentBody>
              </InnerBanner>
              <VerticalContentDivider />
              <BannerImage src={bannerContent.image} />
            </Banner>
          );
        })}
      </BannerContainer>
      <InfoCard>
        <InnerCard>
          <ContentTitle>
            <VerticalTextDivider />
            {GetInvolvedData.cardContent.title}
          </ContentTitle>
          <ContentBody>{GetInvolvedData.cardContent.body}</ContentBody>
        </InnerCard>
        <HorizontalDivider />
        <InfoCardImage src={GetInvolvedData.cardContent.image} />
      </InfoCard>
    </ContentContainer>
    <JoinTeamButton />
  </GetInvolvedContainer>
);

export default GetInvolved;
