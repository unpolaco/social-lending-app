import {mocked} from 'ts-jest/utils';
import {getMakeLoanRepayment, getUserLoans, getConfirmCreateLoan} from '../../../src/api/fetchLoan';
import {axios} from '../../../src/api/axios';
import {apiLoans} from '../../../src/helpers/constants-api';

jest.mock('../../../src/api/axios.ts');

describe('getConfirmCreateLoan', () => {
    beforeEach(() => {
        mocked(axios.get).mockResolvedValue('getMock');
    });

    it('calls request confirm create loan and passes response', async () => {
        mocked(axios.get).mockResolvedValue({data: 'getDataMock'});
        const request = await getConfirmCreateLoan('1');
        expect(request.data).toEqual('getDataMock');
        expect(axios.get).toHaveBeenCalledWith(`${apiLoans}/1/activate`);
    });
});

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

describe('getUserLoans', () => {
    beforeEach(() => {
        mocked(axios.get).mockResolvedValue('getMock');
    });

    it('calls request for get user loans and passes response', async () => {
        mocked(axios.get).mockResolvedValue({data: 'getDataMock'});
        const request = await getUserLoans('1');
        expect(request.data).toEqual('getDataMock');
        expect(axios.get).toHaveBeenCalledWith(`${apiLoans}/borrower/1`);
    });
});
