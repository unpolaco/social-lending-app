import {mocked} from 'ts-jest/utils';
import {getUserOffers} from '../../../src/api/getUserOffers';
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
