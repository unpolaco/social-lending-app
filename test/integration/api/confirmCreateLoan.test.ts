import {mocked} from 'ts-jest/utils';
import {confirmCreateLoan} from '../../../src/api/confirmCreateLoan';
import {axios} from '../../../src/api/axios';
import {apiLoans} from '../../../src/helpers/constants-api';

jest.mock('../../../src/api/axios.ts');

describe('confirmCreateLoan', () => {
    beforeEach(() => {
        mocked(axios.get).mockResolvedValue('getMock');
    });

    it('calls request confirm create loan and passes response', async () => {
        mocked(axios.get).mockResolvedValue({data: 'getDataMock'});
        const request = await confirmCreateLoan('1');
        expect(request.data).toEqual('getDataMock');
        expect(axios.get).toHaveBeenCalledWith(`${apiLoans}/1/activate`);
    });
});
