import {mocked} from 'ts-jest/utils';
import {getUserLoans} from '../../../src/api/getUserLoans';
import {axios} from '../../../src/api/axios';
import {apiLoans} from '../../../src/helpers/constants-api';

jest.mock('../../../../src/api/axios');

describe('getUserLoans', () => {
    beforeEach(() => {
        mocked(axios.get).mockResolvedValue('getMock');
    });

    it('calls request for get user loans and passes response', async () => {
        mocked(axios.get).mockResolvedValue({data: 'getDataMock'});
        const request = await getUserLoans('1');
        expect(request.data).toEqual('getDataMock');
        expect(axios.get).toHaveBeenCalledWith(`${apiLoans}/1`);
    });
});
