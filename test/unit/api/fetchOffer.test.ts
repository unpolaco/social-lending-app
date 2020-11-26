import {mocked} from 'ts-jest/utils';
import {getUserOffers, saveNewOffer} from '../../../src/api/fetchOffer';
import {axios} from '../../../src/api/axios';
import {apiOffers} from '../../../src/helpers/constants-api';

jest.mock('../../../src/api/axios');

describe('getUserOffers', () => {
    beforeEach(() => {
        mocked(axios.get).mockResolvedValue('getMock');
    });

    it('calls request for get user offers and passes response', async () => {
        mocked(axios.get).mockResolvedValue({data: 'getDataMock'});
        const request = await getUserOffers('1');
        expect(request.data).toEqual('getDataMock');
        expect(axios.get).toHaveBeenCalledWith(`${apiOffers}/1`);
    });
});

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
