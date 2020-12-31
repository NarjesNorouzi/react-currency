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

Section.Item = ({ dt, title, t, p, dp }) => {
  return (
    <Item dt={getDtColor(dt)}>
      <ItemTitle>{title}</ItemTitle>
      <ItemDetails>
        <ItemDetailsLine>
          <ItemDetailsTitle>ارزش:</ItemDetailsTitle>
          <ItemDetailsValue>{p}</ItemDetailsValue>
        </ItemDetailsLine>
        <ItemDetailsLine>
          <ItemDetailsTitle>درصد:</ItemDetailsTitle>
          <ItemDetailsValue>{dp}</ItemDetailsValue>
        </ItemDetailsLine>
        <ItemDetailsUpdatedAt>{t}</ItemDetailsUpdatedAt>
      </ItemDetails>
    </Item>
  );
};

export default Section;
