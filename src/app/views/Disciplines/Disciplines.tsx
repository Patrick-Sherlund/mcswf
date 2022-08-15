import React, { FC } from "react";
import {
  BulletPoints,
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
  Group,
  GroupContainer,
  HeaderContainer,
  HeaderTitleContainer,
  HorizontalDivider,
  SecondBulletPoints,
  SecondDisciplineHeader,
  SecondDisciplineList,
  SecondDisciplineListItem,
  Subtitle,
  TitleVerticalDivider,
  VerticalDivider,
} from "./Disciplines.styles";
import {
  DisciplineCardSetOne,
  DisciplineCardSetTwo,
} from "../../constants/data/discipline";

/*interface DataCardProps {
  data: string[];
}

const DataCards: FC<DataCardProps> = (props) => {
  return (
    <Group>
      {props.data.map((data) => {
        return <Card>data</Card>;
      })}
    </Group>
  );
};*/

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
        <Group>
          <GroupContainer>
            {DisciplineCardSetOne.map((disciplineData, disciplineIndex) => {
              return (
                <DisciplinesDataCard
                  key={`discipline-desktop-${disciplineIndex}`}
                >
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
                        <BulletPoints>
                          <DisciplineList>
                            {dataList.body.map((data, index) => {
                              return (
                                <DisciplineListItem key={`listItem-${index}`}>
                                  {data}
                                </DisciplineListItem>
                              );
                            })}
                          </DisciplineList>
                        </BulletPoints>
                      </DisciplineBodyContainer>
                    );
                  })}
                  {disciplineData.secondaryList.map((secondaryDataList) => {
                    return (
                      <DisciplineBodyContainer>
                        <Subtitle>{secondaryDataList.title}</Subtitle>
                        <SecondBulletPoints>
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
                        </SecondBulletPoints>
                      </DisciplineBodyContainer>
                    );
                  })}
                </DisciplinesDataCard>
              );
            })}
          </GroupContainer>
          <GroupContainer>
            {DisciplineCardSetTwo.map((disciplineData, disciplineIndex) => {
              return (
                <DisciplinesDataCard
                  key={`discipline-desktop-${disciplineIndex}`}
                >
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
                        <BulletPoints>
                          <DisciplineList>
                            {dataList.body.map((data, index) => {
                              return (
                                <DisciplineListItem key={`listItem-${index}`}>
                                  {data}
                                </DisciplineListItem>
                              );
                            })}
                          </DisciplineList>
                        </BulletPoints>
                      </DisciplineBodyContainer>
                    );
                  })}
                  {disciplineData.secondaryList.map((secondaryDataList) => {
                    return (
                      <DisciplineBodyContainer>
                        <Subtitle>{secondaryDataList.title}</Subtitle>
                        <SecondBulletPoints>
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
                        </SecondBulletPoints>
                      </DisciplineBodyContainer>
                    );
                  })}
                </DisciplinesDataCard>
              );
            })}
          </GroupContainer>
        </Group>
      </DesktopContainer>
    </DisciplinesContainer>
  );
};

export default Disciplines;
