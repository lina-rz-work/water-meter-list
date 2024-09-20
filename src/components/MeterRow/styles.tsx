import styled from 'styled-components';

export const StyledRow = styled.tr`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 48px 120px 160px 128px 146px 430px 304px 64px;
  width: 1400px;
  height: 52px;
  background-color: white;
  border-bottom: 1px solid #e0e5eb;
  padding: 6px 0px;
  cursor: pointer;

  &:hover {
    background-color: #f7f8f9;

    .delete-button {
      visibility: visible;
    }
  }

  .number-cell {
    justify-content: center;
  }

  .type-icon {
    svg {
      margin-right: 8px;
    }
  }
`;

export const StyledCell = styled.td`
  display: flex;
  align-items: center;
  padding: 0px 12px;
  height: 40px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #1f2939;
`;

export const DeleteButton = styled.button`
  visibility: hidden;
  border: 0;
  border-radius: 8px;
  padding: 10px 12px;
  background-color: #fee3e3;
  cursor: pointer;

  .default-icon {
    display: block;
    transition: opacity 0.3s;
  }

  .hover-icon {
    display: none;
    transition: opacity 0.3s;
  }

  /* При наведении на кнопку */
  &:hover {
    background-color: #fed7d7; /* Изменение фона при ховере, опционально */

    .default-icon {
      display: none;
    }

    .hover-icon {
      display: block;
    }
  }
`;
