import {PaymentFormValidator} from '../../../../src/components/shared/PaymentForm/PaymentForm.helpers';

describe('PaymentFormValidator', () => {
    describe('amount inputs tests', () => {
        test.each([
            [-1, 'Enter correct amount'],
            [0, 'Enter correct amount'],
            [1, undefined],
        ])("should return 'Enter correct amount' if amount is lower or equal 0", (amount, expectedResult) => {
            const errors = PaymentFormValidator({amount});
            expect(errors.amount).toBe(expectedResult);
        });
    });
});
