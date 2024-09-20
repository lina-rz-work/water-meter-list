import { types, flow } from 'mobx-state-tree';
import Address from '../models/Address';
import axios from 'axios';

const AddressStore = types
  .model('AddressStore', {
    addresses: types.map(Address),
  })
  .actions((self) => {
    const fetchAddresses = flow(function* (ids: string[]) {
      const idsToFetch = ids.filter((id) => !self.addresses.has(String(id)));
      if (idsToFetch.length > 0) {
        try {
          const params = new URLSearchParams();
          idsToFetch.forEach((id) => {
            params.append('id__in', id);
          });

          const response = yield axios.get(
            'http://showroom.eis24.me/api/v4/test/areas/',
            { params }
          );

          response.data.results.forEach((addressData: any) => {
            self.addresses.set(addressData.id, Address.create(addressData));
          });
        } catch (error) {
          console.error('Failed to fetch addresses', error);
        }
      }
    });
    return { fetchAddresses };
  });

export default AddressStore;
