import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #dcb325;
  width: 100%;
  height: 4rem;
`;
export const Inner = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
  align-items: center;
`;
export const UpdatedAt = styled.span`
  padding: 0 1rem 0 0;
  font-size: 1rem;
  font-weight: 500;
  color: black;
`;
export const Button = styled.button`
  background-color: #a17616;
  border: none;
  border-radius: 100%;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 1rem;
  position: absolute;
  left: 1rem;
  top: -12px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:focus,
  &:active {
    outline: none;
  }
`;
export const Icon = styled.span``;

export const RotateLeftIcon = ({ size = 24, color = "#ffffff" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2.5 2v6h6M2.66 15.57a10 10 0 1 0 .57-8.38" />
  </svg>
);
