import {AuctionCreateFormValidator} from '../../../../src/components/shared/AuctionCreateForm/AuctionCreateForm.helpers';

describe('AuctionCreateFormValidator', () => {
    describe('rate inputs tests', () => {
        test.each([
            [-1, 'Enter correct rate'],
            [0, 'Enter correct rate'],
            [1, undefined],
            [20, undefined],
            [21, 'Such a big rate is not allowed'],
        ])(
            "should return 'Enter correct rate' if rate is lower or equal 0 and 'Such a big rate is not allowed' if is greater than 20",
            (rate, expectedResult) => {
                const errors = AuctionCreateFormValidator({rate});
                expect(errors.rate).toBe(expectedResult);
            },
        );
    });
    describe('amount inputs tests', () => {
        test.each([
            [-1, 'Enter correct amount'],
            [1, undefined],
        ])("should return 'Enter correct amount' if amount is lower or equal 0", (amount, expectedResult) => {
            const errors = AuctionCreateFormValidator({amount});
            expect(errors.amount).toBe(expectedResult);
        });
    });
});
