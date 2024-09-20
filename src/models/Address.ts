import { types, Instance } from 'mobx-state-tree';

const House = types.model('House', {
  address: types.string,
  id: types.string,
  fias_addrobjs: types.array(types.string),
});

const Address = types.model('Address', {
  id: types.identifier,
  number: types.number,
  str_number: types.string,
  str_number_full: types.string,
  house: House,
});

export default Address;

export type AddressType = Instance<typeof Address>;
