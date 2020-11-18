import {CollapseBoxCreateOfferValidator} from '../../../../src/components/shared/TableCollapseBox/CollapseBoxCreateOffer.helpers';

describe('CollapseBoxCreateOfferValidator', () => {
    describe('rate incorrect inputs tests', () => {
        test.each([
            [-1, 'Enter correct rate'],
            [0, 'Enter correct rate'],
            [1, undefined],
            [20, undefined],
            [21, 'Such a big rate is not allowed'],
        ])(
            "should return 'Enter correct rate' if rate is lower or equal 0 and 'Such a big rate is not allowed' if is greater than 20",
            (rate, expectedResult) => {
                const errors = CollapseBoxCreateOfferValidator({rate});
                expect(errors.rate).toBe(expectedResult);
            },
        );
    });
});
