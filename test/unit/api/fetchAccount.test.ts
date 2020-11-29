import {mocked} from 'ts-jest/utils';
import {getAccountPrivateProfile, getAccountPublicProfile} from '../../../src/api/fetchAccount';
import {axios} from '../../../src/api/axios';
import {apiAccountDetails, apiAccountPublicProfile} from '../../../src/helpers/constants-api';

jest.mock('../../../src/api/axios');

describe('getAccountPrivateProfile', () => {
    beforeEach(() => {
        mocked(axios.get).mockResolvedValue('getMock');
    });

    it('calls request for user account details and passes response', async () => {
        mocked(axios.get).mockResolvedValue({data: 'getDataMock'});
        const request = await getAccountPrivateProfile('Test_User');
        expect(request.data).toEqual('getDataMock');
        expect(axios.get).toHaveBeenCalledWith(`${apiAccountDetails}/Test_User`);
    });
});

describe('getAccountPublicProfile', () => {
    beforeEach(() => {
        mocked(axios.get).mockResolvedValue('getMock');
    });

    it('calls request for user public profile and passes response', async () => {
        mocked(axios.get).mockResolvedValue({data: 'getDataMock'});
        const request = await getAccountPublicProfile('Test_User');
        expect(request.data).toEqual('getDataMock');
        expect(axios.get).toHaveBeenCalledWith(`${apiAccountPublicProfile}/Test_User`);
    });
});
