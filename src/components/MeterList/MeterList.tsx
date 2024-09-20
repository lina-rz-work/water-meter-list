import React, { useEffect } from 'react';
import { observer, inject } from 'mobx-react';
import { reaction } from 'mobx';
import MeterRow from '../MeterRow/MeterRow';
import Pagination from '../Pagination/Pagination';
import { RootStoreType } from '../../stores/RootStore';
import {
  StyledMeterList,
  StyledHeader,
  TableContainer,
  StyledTable,
  StyledHeadRow,
  StyledCell,
} from './styles';

interface MeterListProps {
  rootStore?: RootStoreType;
}

const MeterList: React.FC<MeterListProps> = ({ rootStore }) => {
  const { meterStore, addressStore } = rootStore!;
  const totalPages = Math.ceil(meterStore.totalCount / meterStore.limit);

  useEffect(() => {
    meterStore.fetchMeters();
  }, [meterStore]);

  useEffect(() => {
    const disposer = reaction(
      () => meterStore.meters.map((meter) => meter.area?.id).filter(Boolean),
      (areaIds) => {
        const uniqueAreaIds = Array.from(new Set(areaIds));
        addressStore.fetchAddresses(uniqueAreaIds);
      }
    );
    return () => disposer();
  }, [meterStore, addressStore]);

  const handlePageClick = (data: { selected: number }) => {
    const selectedPage = data.selected + 1;
    meterStore.setPage(selectedPage);
  };

  const handleDelete = (meterId: string) => {
    meterStore.deleteMeter(meterId);
  };

  return (
    <StyledMeterList>
      <StyledHeader>Список счётчиков</StyledHeader>

      <TableContainer>
        <StyledTable>
          <thead>
            <StyledHeadRow>
              <StyledCell className="number_cell">№</StyledCell>
              <StyledCell>Тип</StyledCell>
              <StyledCell>Дата установки</StyledCell>
              <StyledCell>Автоматический</StyledCell>
              <StyledCell>Текущие показания</StyledCell>
              <StyledCell>Адрес</StyledCell>
              <StyledCell>Примечание</StyledCell>
              <StyledCell></StyledCell>
            </StyledHeadRow>
          </thead>

          <tbody>
            {meterStore.meters.map((meter, index) => {
              const address = addressStore.addresses.get(meter.area?.id || '');
              return (
                <MeterRow
                  key={meter.id}
                  meter={meter}
                  index={index}
                  offset={meterStore.offset}
                  address={address}
                  handleDelete={handleDelete}
                />
              );
            })}
          </tbody>
        </StyledTable>

        <Pagination
          totalPages={totalPages}
          currentPage={meterStore.currentPage}
          onPageChange={handlePageClick}
        />
      </TableContainer>
    </StyledMeterList>
  );
};

export default inject('rootStore')(observer(MeterList));
