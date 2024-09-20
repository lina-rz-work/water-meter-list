import styled from 'styled-components';

export const StyledMeterList = styled.div`
  margin: 16px;
`;

export const StyledHeader = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
`;

export const TableContainer = styled.div`
  position: relative;
  width: 1408px;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  display: block;

  thead {
    position: sticky;
    top: 0;
    height: 32px;
  }

  tbody {
    display: block;
    height: 864px;
    overflow-y: scroll;
    border-left: 1px;
    border-right: 1px;
    border-top: 0;
    border-bottom: 0;
    border-style: solid;
    border-color: #e0e5eb;

    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-thumb {
      height: 362.87px;
      background-color: rgb(94, 102, 116, 0.5);
      border-radius: 4px;
      background-clip: content-box;
    }

    &::-webkit-scrollbar-track {
      background: #f8f9fa;
    }
  }
`;

export const StyledHeadRow = styled.tr`
  display: grid;
  width: 100%;
  grid-template-columns: 48px 120px 160px 128px 146px 430px 304px 68px;
  background-color: #f0f3f7;
  border-radius: 8px 8px 0px 0px;
  border: 1px;
  border-style: solid;
  border-color: #e0e5eb;
  position: sticky;
  top: 0;
  z-index: 1;

  .number_cell {
    justify-content: center;
  }
`;

export const StyledCell = styled.td`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  font-size: 13px;
  font-weight: 500;
  line-height: 16px;
  color: #697180;
`;
