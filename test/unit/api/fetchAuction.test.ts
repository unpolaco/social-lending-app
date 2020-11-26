import {mocked} from 'ts-jest/utils';
import {getAllAuctions, getUserAuctions, saveNewAuction, createLoan} from '../../../src/api/fetchAuction';
import {axios} from '../../../src/api/axios';
import {apiAuctions, apiAuctionsBorrower} from '../../../src/helpers/constants-api';

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
describe('createLoan', () => {
    beforeEach(() => {
        mocked(axios.get).mockResolvedValue('getMock');
    });

    it('calls request for create loan and passes response', async () => {
        mocked(axios.get).mockResolvedValue({data: 'getDataMock'});
        const request = await createLoan('1');
        expect(request.data).toEqual('getDataMock');
        expect(axios.get).toHaveBeenCalledWith(`${apiAuctions}/1/create-loan`);
    });
});

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
            auctionId: 1,
        };
        mocked(axios.post).mockResolvedValue({data: 'getDataMock'});
        const request = await saveNewAuction(newAuction);
        expect(request.data).toEqual('getDataMock');
        expect(axios.post).toHaveBeenCalledWith(apiAuctions, newAuction);
    });
});
