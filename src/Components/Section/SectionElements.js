import styled from "styled-components/macro";

export const Container = styled.div`
  display: block;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  background-color: #4d4d4d;
  padding: 1rem;
  margin-bottom: 1rem;
  &&:last-child {
    margin-bottom: 0;
  }
`;

export const ItemTitle = styled.span`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  color: white;
  font-style: 1.2rem;
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  align-content: space-around;
`;
export const ItemDetailsLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  width: 100%;
`;
export const ItemDetailsTitle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 400;
`;
export const ItemDetailsValue = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #dcb325;
  font-weight: 600;
  margin-right: 0.25rem;
`;
export const ItemDetailsUpdatedAt = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  width: 100%;
  color: white;
  opacity: 0.5;
  margin-top: 0.5rem;
  font-size: 0.8rem;
  font-weight: 300;
`;
