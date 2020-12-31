import React from "react";
import {
  Title,
  Container,
  Item,
  ItemTitle,
  ItemDetails,
  ItemDetailsLine,
  ItemDetailsTitle,
  ItemDetailsValue,
  ItemDetailsUpdatedAt,
} from "./SectionElements";
function getDtColor(dt) {
  if (dt === "high") return "green";
  else if (dt === "low") return "red";
  else return;
}
function Section({ title, children }) {
  return (
    <section>
      {title && <Title>{title}:</Title>}
      <Container>{children}</Container>
    </section>
  );
}

Section.Item = ({ dt }) => {
  return (
    <Item dt={getDtColor(dt)}>
      <ItemTitle>Test</ItemTitle>
      <ItemDetails>
        <ItemDetailsLine>
          <ItemDetailsTitle>خرید:</ItemDetailsTitle>
          <ItemDetailsValue>25000</ItemDetailsValue>
        </ItemDetailsLine>
        <ItemDetailsLine>
          <ItemDetailsTitle>فروش:</ItemDetailsTitle>
          <ItemDetailsValue>25000</ItemDetailsValue>
        </ItemDetailsLine>
        <ItemDetailsUpdatedAt>22/10/21</ItemDetailsUpdatedAt>
      </ItemDetails>
    </Item>
  );
};

export default Section;