import React from "react";
import {
  Title,
  Container,
  Item as ItemElement,
  ItemTitle,
  ItemDetails,
  ItemDetailsLine,
  ItemDetailsTitle,
  ItemDetailsValue,
  ItemDetailsUpdatedAt,
} from "./SectionElements";

function Item({ dt }) {
  return (
    <ItemElement dt={dt}>
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
    </ItemElement>
  );
}

function Section({ title }) {
  return (
    <section>
      {title && <Title>{title}:</Title>}
      <Container>
        <Item dt="green" />
        <Item dt="red" />
        <Item dt="green" />
        <Item dt="" />
        <Item dt="red" />
        <Item dt="" />
        <Item dt="green" />
        <Item dt="red" />
        <Item dt="" />
        <Item dt="" />
        <Item dt="red" />
        <Item dt="green" />
      </Container>
    </section>
  );
}

export default Section;
