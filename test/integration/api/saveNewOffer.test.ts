import {mocked} from 'ts-jest/utils';
import {saveNewOffer} from '../../../src/api/saveNewOffer';
import {axios} from '../../../src/api/axios';
import {apiOffers} from '../../../src/helpers/constants-api';

jest.mock('../../../../src/api/axios');

describe('saveNewOffer', () => {
    beforeEach(() => {
        mocked(axios.post).mockResolvedValue('getMock');
    });

    it('calls request for save new offer and passes response', async () => {
        const newOffer = {
            amount: 12,
            rate: 5,
        };
        mocked(axios.post).mockResolvedValue({data: 'getDataMock'});
        const request = await saveNewOffer(newOffer);
        expect(request.data).toEqual('getDataMock');
        expect(axios.post).toHaveBeenCalledWith(apiOffers, newOffer);
    });
});
