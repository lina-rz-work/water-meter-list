import { types, flow } from 'mobx-state-tree';
import Meter from '../models/Meter';
import axios from 'axios';

const MeterStore = types
  .model('MeterStore', {
    meters: types.array(Meter),
    limit: types.optional(types.number, 20),
    offset: types.optional(types.number, 0),
    totalCount: types.optional(types.number, 0),
    currentPage: types.optional(types.number, 1),
  })
  .actions((self) => {
    const fetchMeters = flow(function* () {
      try {
        const response = yield axios.get(
          'http://showroom.eis24.me/api/v4/test/meters/',
          {
            params: { limit: self.limit, offset: self.offset },
          }
        );
        self.totalCount = response.data.count;
        self.meters = response.data.results;
      } catch (error) {
        console.error('Failed to fetch meters', error);
      }
    });

    const deleteMeter = flow(function* (meterId: string) {
      try {
        yield axios.delete(
          `http://showroom.eis24.me/api/v4/test/meters/${meterId}/`
        );

        const meterToRemove = self.meters.find((meter) => meter.id === meterId);
        if (meterToRemove) {
          self.meters.remove(meterToRemove);
        }

        if (
          self.meters.length < 20 &&
          self.offset + self.limit < self.totalCount
        ) {
          const response = yield axios.get(
            'http://showroom.eis24.me/api/v4/test/meters/',
            {
              params: {
                limit: 1,
                offset: self.offset + self.limit - 1,
              },
            }
          );
          self.meters.push(response.data.results[0]);
        }
      } catch (error) {
        console.error('Failed to delete meter', error);
      }
    });

    const setPage = (page: number) => {
      self.currentPage = page;
      self.offset = (page - 1) * self.limit;
      fetchMeters();
    };

    return { fetchMeters, deleteMeter, setPage };
  });

export default MeterStore;
