import {mocked} from 'ts-jest/utils';
import {getAllAuctions} from '../../../src/api/getAllAuctions';
import {axios} from '../../../src/api/axios';
import {apiAuctions} from '../../../src/helpers/constants-api';

jest.mock('../../../src/api/axios');

describe('getAllAuctions', () => {
    beforeEach(() => {
        mocked(axios.get).mockResolvedValue('getMock');
    });

    it('calls request for all auctions and passes response', async () => {
        mocked(axios.get).mockResolvedValue({data: 'getDataMock'});
        const request = await getAllAuctions();
        expect(request.data).toEqual('getDataMock');
        expect(axios.get).toHaveBeenCalledWith(apiAuctions);
    });
});
