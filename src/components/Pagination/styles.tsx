import styled from 'styled-components';

export const PaginationContainer = styled.div`
  box-sizing: border-box;
  max-height: 48px;
  align-items: center;
  display: flex;
  justify-content: right;
  background-color: #fff;
  padding: 8px 16px;
  border-radius: 0px 0px 8px 8px;
  border: 1px;
  border-style: solid;
  border-color: #eef0f4;

  .pagination {
    display: flex;
    list-style: none;
    padding: 0;
  }

  ul {
    margin: 0;
  }

  .pagination li {
    box-sizing: border-box;
    height: 32px;
    font-size: 14px;
    margin: 0 5px;
    padding: 8px 12px;
    border-radius: 6px;
    border: 1px solid #ced5de;
    font-weight: 400;
    line-height: 16px;
    text-align: center;
    color: #1f2939;
    cursor: pointer;
  }

  .pagination li.active {
    background-color: #ddd;
  }

  .pagination li.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .pagination .previous,
  .pagination .next {
    display: none;
  }
`;
