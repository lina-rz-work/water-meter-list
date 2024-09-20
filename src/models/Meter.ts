import { types, Instance } from 'mobx-state-tree';

const Meter = types.model('Meter', {
  area: types.model({
    id: types.string,
  }),
  brand_name: types.maybeNull(types.string),
  communication: types.string,
  description: types.maybeNull(types.string),
  id: types.identifier,
  initial_values: types.array(types.number),
  installation_date: types.string,
  is_automatic: types.maybeNull(types.boolean),
  model_name: types.maybeNull(types.string),
  serial_number: types.string,
  _type: types.array(types.string),
});

export default Meter;

export type MeterType = Instance<typeof Meter>;
