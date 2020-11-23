import {getComparator, stableSort} from '../../../../src/components/shared/Table/Table.helpers';

describe('Sort.helpers', () => {
    describe('getValuesToChange', () => {
        const randomData = [
            {name: 'Marc', accountBalance: 20, age: 15, profession: 'student'},
            {name: 'Kate', accountBalance: 1740, age: 41, profession: 'teacher'},
            {name: 'Ana', accountBalance: 5430, age: 41, profession: 'taxi driver'},
            {name: 'Victoria', accountBalance: 800, age: 41, profession: 'pilot'},
            {name: 'Michael', accountBalance: 17880, age: 39, profession: 'actor'},
        ];

        it('returns an array with the same length as array, which was to be sorted', () => {
            expect(stableSort(randomData, getComparator('asc', 'name')).length).toEqual(randomData.length);
        });

        const numbersArray = randomData.map(person => person.age);
        const highestNumber = Math.max(...numbersArray);
        const smallestNumber = Math.min(...numbersArray);
        const sortedAscByNumber = stableSort(randomData, getComparator('asc', 'age'));
        const sortedDescByNumber = stableSort(randomData, getComparator('desc', 'age'));

        it('returns the biggest number at the end of the array, when sorting order is ascending', () => {
            expect(sortedAscByNumber[sortedAscByNumber.length - 1].age).toEqual(highestNumber);
        });

        it('returns the smallest number at the beginning of the array, when sorting order is ascending', () => {
            expect(sortedAscByNumber[0].age).toEqual(smallestNumber);
        });

        it('returns the biggest number at the beginnng of the array, when sorting order is descending', () => {
            expect(sortedDescByNumber[0].age).toEqual(highestNumber);
        });

        it('returns the smallest number at the end of the array, when sorting order is descending', () => {
            expect(sortedDescByNumber[sortedAscByNumber.length - 1].age).toEqual(smallestNumber);
        });

        it('returns array with smallest number at the beginning and each next number the same or bigger, then previous one, when sorting order is ascending', () => {
            let previousNumber: number;
            sortedAscByNumber.forEach(el => {
                if (previousNumber) {
                    expect(el.age >= previousNumber).toBeTruthy();
                }
                previousNumber = el.age;
            });
        });

        const sortedAscByString = stableSort(randomData, getComparator('desc', 'name'));
        const fisrtSortedElement = sortedAscByString[0].name;
        const lastSortedELement = sortedAscByString[sortedAscByString.length - 1].name;

        it("returns array, which fisrt element's alphabet letter is after last element's alphabet letter, when sorting order is descending", () => {
            expect(fisrtSortedElement.localeCompare(lastSortedELement)).toEqual(1);
        });

        it('returns array alphabetically sorted from Z to A, when sorting order is descending', () => {
            let previousString: string;
            sortedAscByString.forEach(el => {
                if (previousString) {
                    expect(el.name <= previousString).toBeTruthy();
                }
                previousString = el.name;
            });
        });
    });
});
