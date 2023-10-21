import styled from "@emotion/styled";

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 600px;
  padding: 12px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.6);
  border: 2px solid #f08080;
  margin: 0 auto;
`;

export const Item = styled.li`
  background-color: #ffffff;
  border: 1px solid #f08080;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
`;

export const Button = styled.button`
  padding: 5px 10px;
  font: inherit;
  cursor: pointer;
  border-radius: 5px 10px;
  border: 1px solid brown;
  display: flex;
  align-items: center;

  &:hover {
    background-color: white;
  }
`;
