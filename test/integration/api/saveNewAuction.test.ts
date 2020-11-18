import {mocked} from 'ts-jest/utils';
import {saveNewAuction} from '../../../src/api/saveNewAuction';
import {axios} from '../../../src/api/axios';
import {apiAuctions} from '../../../src/helpers/constants-api';

jest.mock('../../../src/api/axios');

describe('saveNewAuction', () => {
    beforeEach(() => {
        mocked(axios.post).mockResolvedValue('getMock');
    });

    it('calls request for save new auction and passes response', async () => {
        const newAuction = {
            amount: 12,
            borrower: 'Test_Borrower',
            loanDuration: 3,
            loanStartDate: '2020-11-19',
            rate: 5,
        };
        mocked(axios.post).mockResolvedValue({data: 'getDataMock'});
        const request = await saveNewAuction(newAuction);
        expect(request.data).toEqual('getDataMock');
        expect(axios.post).toHaveBeenCalledWith(apiAuctions, newAuction);
    });
});
