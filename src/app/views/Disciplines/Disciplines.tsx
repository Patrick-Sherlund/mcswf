import React, { FC } from "react";
import {
  Body,
  DesktopContainer,
  DisciplineBodyContainer,
  DisciplineList,
  DisciplineListItem,
  DisciplinePrimaryTitle,
  DisciplinesContainer,
  DisciplinesDataCard,
  DisciplineSecondaryTitle,
  DisciplineTitle,
  FirstDisciplineHeader,
  HeaderContainer,
  HeaderTitleContainer,
  HorizontalDivider,
  SecondBody,
  SecondDisciplineHeader,
  SecondDisciplineList,
  SecondDisciplineListItem,
  Subtitle,
  TitleVerticalDivider,
  VerticalDivider,
} from "./Disciplines.styles";
import { DisciplineData } from "../../constants/data/discipline";
import { LeadershipTitle, TheTeamContainer } from "../TheTeam/TheTeam.styles";

const Disciplines: FC = () => {
  return (
    <DisciplinesContainer id={"Disciplines"} data-testid="discipline-container">
      <HeaderContainer>
        <HeaderTitleContainer>
          <FirstDisciplineHeader>Explore Disciplines</FirstDisciplineHeader>
          <TitleVerticalDivider />
          <SecondDisciplineHeader>Find Your Best Fit</SecondDisciplineHeader>
        </HeaderTitleContainer>
      </HeaderContainer>
      <DesktopContainer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        {DisciplineData.map((disciplineData, disciplineIndex) => {
          return (
            <DisciplinesDataCard key={`discipline-desktop-${disciplineIndex}`}>
              <DisciplineTitle>
                <DisciplinePrimaryTitle>
                  <VerticalDivider />
                  {disciplineData.primaryTitle}
                </DisciplinePrimaryTitle>
                <DisciplineSecondaryTitle>
                  {disciplineData.secondaryTitle}
                </DisciplineSecondaryTitle>
              </DisciplineTitle>
              <HorizontalDivider />
              {disciplineData.primaryList.map((dataList) => {
                return (
                  <DisciplineBodyContainer>
                    <Subtitle>{dataList.title}</Subtitle>
                    <Body>
                      <DisciplineList>
                        {dataList.body.map((data, index) => {
                          return (
                            <DisciplineListItem key={`listItem-${index}`}>
                              {data}
                            </DisciplineListItem>
                          );
                        })}
                      </DisciplineList>
                    </Body>
                  </DisciplineBodyContainer>
                );
              })}
              {disciplineData.secondaryList.map((secondaryDataList) => {
                return (
                  <DisciplineBodyContainer>
                    <Subtitle>{secondaryDataList.title}</Subtitle>
                    <SecondBody>
                      <SecondDisciplineList>
                        {secondaryDataList.body.map((data, index) => {
                          return (
                            <SecondDisciplineListItem
                              key={`secondListItem-${index}`}
                            >
                              {data}
                            </SecondDisciplineListItem>
                          );
                        })}
                      </SecondDisciplineList>
                    </SecondBody>
                  </DisciplineBodyContainer>
                );
              })}
            </DisciplinesDataCard>
          );
        })}
      </DesktopContainer>
    </DisciplinesContainer>
  );
};

export default Disciplines;
