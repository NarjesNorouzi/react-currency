import React from "react";
import {
  Container,
  Item as ItemElement,
  ItemTitle,
  ItemDetails,
  ItemDetailsLine,
  ItemDetailsTitle,
  ItemDetailsValue,
  ItemDetailsUpdatedAt,
} from "./SectionElements";

function Item() {
  return (
    <ItemElement>
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

function Section() {
  return (
    <section>
      <Container>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Container>
    </section>
  );
}

export default Section;
