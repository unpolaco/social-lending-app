import {mocked} from 'ts-jest/utils';
import {getMakeLoanRepayment} from '../../../src/api/getMakeLoanRepayment';
import {axios} from '../../../src/api/axios';
import {apiLoans} from '../../../src/helpers/constants-api';

jest.mock('../../../src/api/axios');

describe('getMakeLoanRepayment', () => {
    beforeEach(() => {
        mocked(axios.get).mockResolvedValue('getMock');
    });

    it('calls request for make loan repayment and passes response', async () => {
        mocked(axios.get).mockResolvedValue({data: 'getDataMock'});
        const request = await getMakeLoanRepayment(1);
        expect(request.data).toEqual('getDataMock');
        expect(axios.get).toHaveBeenCalledWith(`${apiLoans}/1/repay`);
    });
});
