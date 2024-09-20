import React from 'react';
import { MeterType } from '../../models/Meter';
import { AddressType } from '../../models/Address';
import { StyledRow, StyledCell, DeleteButton } from './styles';
import { ReactComponent as HvsIcon } from '../assets/icons/hvs.svg';
import { ReactComponent as GvsIcon } from '../assets/icons/gvs.svg';
import { ReactComponent as TrashIcon } from '../assets/icons/trash.svg';
import { ReactComponent as TrashHoverIcon } from '../assets/icons/trash_hover.svg';

interface MeterRowProps {
  meter: MeterType;
  index: number;
  offset: number;
  address?: AddressType;
  handleDelete: (id: string) => void;
}

const MeterRow: React.FC<MeterRowProps> = ({
  meter,
  index,
  offset,
  address,
  handleDelete,
}) => {
  return (
    <StyledRow key={meter.id}>
      <StyledCell className="number-cell">{index + 1 + offset}</StyledCell>

      <StyledCell className="type-icon">
        {meter._type.includes('ColdWaterAreaMeter') ? (
          <>
            <HvsIcon />
            ХВС
          </>
        ) : meter._type.includes('HotWaterAreaMeter') ? (
          <>
            <GvsIcon />
            ГВС
          </>
        ) : (
          'Неизвестно'
        )}
      </StyledCell>

      <StyledCell>
        {new Date(meter.installation_date).toLocaleDateString('ru-RU')}
      </StyledCell>

      <StyledCell>{meter.is_automatic ? 'Да' : 'Нет'}</StyledCell>

      <StyledCell>{meter.initial_values.join(', ')}</StyledCell>

      <StyledCell>
        {address
          ? `${address.house.address}, ${address.str_number_full}`
          : 'Загрузка...'}
      </StyledCell>

      <StyledCell>{meter.description}</StyledCell>

      <StyledCell>
        <DeleteButton
          className="delete-button"
          onClick={() => handleDelete(meter.id)}
        >
          <TrashIcon className="default-icon" />
          <TrashHoverIcon className="hover-icon" />
        </DeleteButton>
      </StyledCell>
    </StyledRow>
  );
};

export default MeterRow;
