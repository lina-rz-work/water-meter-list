import { types } from 'mobx-state-tree';
import MeterStore from './MeterStore';
import AddressStore from './AddressStore';

const RootStore = types.model('RootStore', {
  meterStore: MeterStore,
  addressStore: AddressStore,
});

export type RootStoreType = typeof RootStore.Type;

export default RootStore;
