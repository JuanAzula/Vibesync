import styled from 'styled-components';

export const InputField = styled.input`
  padding: 15px;
  align-content:center;
  width: 80%;
  border: 2px solid #ccc;
  border-radius: 15px;
  font-size: 16px;
  color: #333;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;