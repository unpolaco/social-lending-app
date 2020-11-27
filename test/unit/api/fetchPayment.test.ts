import {mocked} from 'ts-jest/utils';
import {postPaymentOnPlatformAccount, postPaymentOnUserAccount} from '../../../src/api/fetchPayment';
import {axios} from '../../../src/api/axios';
import {apiPaymentOnPlatformAccount, apiPaymentOnUserAccount} from '../../../src/helpers/constants-api';

jest.mock('../../../src/api/axios');

describe('postPaymentOnPlatformAccount', () => {
    beforeEach(() => {
        mocked(axios.post).mockResolvedValue('getMock');
    });

    it('calls request for payment on platform account and passes response', async () => {
        const paymentDetails = {
            amount: 120,
            userName: 'Test_Borrower',
        };
        mocked(axios.post).mockResolvedValue({data: 'getDataMock'});
        const request = await postPaymentOnPlatformAccount(paymentDetails);
        expect(request.data).toEqual('getDataMock');
        expect(axios.post).toHaveBeenCalledWith(apiPaymentOnPlatformAccount, paymentDetails);
    });
});
describe('postPaymentOnUserAccount', () => {
    beforeEach(() => {
        mocked(axios.post).mockResolvedValue('getMock');
    });

    it('calls request for payment on user account and passes response', async () => {
        const paymentDetails = {
            amount: 120,
            userName: 'Test_Borrower',
        };
        mocked(axios.post).mockResolvedValue({data: 'getDataMock'});
        const request = await postPaymentOnUserAccount(paymentDetails);
        expect(request.data).toEqual('getDataMock');
        expect(axios.post).toHaveBeenCalledWith(apiPaymentOnUserAccount, paymentDetails);
    });
});
