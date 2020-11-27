import {AccountDto} from './../../../src/api/api.types';
import {AxiosRequestConfig, AxiosResponse} from 'axios';

interface Response<T> {
    response: T;
}

const responseMock: AxiosResponse = {
    data: {},
    status: 200,
    statusText: 'statusText',
    headers: 'headers',
    config: 'config' as AxiosRequestConfig,
    //@ts-ignore
    error: 'error',
    message: 'message',
};

const accountDataMock: AccountDto = {
    accountBalance: 1200,
    email: 'testuser@email.com',
    hasLinkedBankAccount: true,
    name: 'Test Name',
    phoneNumber: '500-500-500',
    surname: 'Test Surname',
    userName: 'Test User Name',
};

export const getAccountResponseMock: AxiosResponse<any> = {
    ...responseMock,
    data: accountDataMock,
};

export const getAccountResponse400Mock: Response<AxiosResponse<{}>> = {
    response: {
        ...responseMock,
        status: 400,
    },
};
