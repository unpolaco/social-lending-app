import {mocked} from 'ts-jest/utils';
import {getUserAuctions} from '../../../../src/api/getUserAuctions';
import {axios} from '../../../../src/api/axios';
import {apiAuctionsBorrower} from '../../../../src/helpers/constants-api';

jest.mock('../../../../src/api/axios');

describe('getUserAuctions', () => {
    beforeEach(() => {
        mocked(axios.get).mockResolvedValue('getMock');
    });

    it('calls request for get user auctions and passes response', async () => {
        mocked(axios.get).mockResolvedValue({data: 'getDataMock'});
        const request = await getUserAuctions('1');
        expect(request.data).toEqual('getDataMock');
        expect(axios.get).toHaveBeenCalledWith(`${apiAuctionsBorrower}/1`);
    });
});
