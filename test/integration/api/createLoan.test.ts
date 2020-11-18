import {mocked} from 'ts-jest/utils';
import {createLoan} from '../../../src/api/createLoan';
import {axios} from '../../../src/api/axios';
import {apiAuctions} from '../../../src/helpers/constants-api';

jest.mock('../../../src/api/axios');

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
