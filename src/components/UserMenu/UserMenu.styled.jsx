import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Par = styled.p`
  font-weight: 700;
  color: brown;
  font-size: 18px;
`;

export const Button = styled.button`
  padding: 4px 6px;
  font: inherit;
  cursor: pointer;
  border-radius: 5px 15px;
  border: 1px solid brown;
  color: white;
  background-color: brown;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 10px;

  &:hover {
    background-color: white;
    color: brown;
  }
`;
