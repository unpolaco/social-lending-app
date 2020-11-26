import {mocked} from 'ts-jest/utils';
import {getUserInvestments} from '../../../src/api/fetchInvestment';
import {axios} from '../../../src/api/axios';
import {apiInvestments} from '../../../src/helpers/constants-api';

jest.mock('../../../src/api/axios');

describe('getUserInvestments', () => {
    beforeEach(() => {
        mocked(axios.get).mockResolvedValue('getMock');
    });

    it('calls request for get user investments and passes response', async () => {
        mocked(axios.get).mockResolvedValue({data: 'getDataMock'});
        const request = await getUserInvestments('1');
        expect(request.data).toEqual('getDataMock');
        expect(axios.get).toHaveBeenCalledWith(`${apiInvestments}/1`);
    });
});
