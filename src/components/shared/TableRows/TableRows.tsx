import React, {useState} from 'react';
import {TableRow, Collapse} from '@material-ui/core';
import {CollapseBoxCreateOffer} from '../TableCollapseBox/CollapseBoxCreateOffer';
import {CollapseBoxAuctionOffers} from '../TableCollapseBox/CollapseBoxAuctionOffers';
import {CollapseBoxCreateLoan} from '../TableCollapseBox/CollapseBoxCreateLoan';
import {TableRowsBorrowerAllAuctions} from '../TableRows/TableRowsBorrowerAllAuctions';
import {TableRowsBorrowerUserAuctions} from '../TableRows/TableRowsBorrowerUserAuctions';
import {TableRowsBorrowerUserLoans} from '../TableRows/TableRowsBorrowerUserLoans';
import {TableRowsLenderAllAuctions} from '../TableRows/TableRowsLenderAllAuctions';
import {TableRowsLenderUserInvestments} from '../TableRows/TableRowsLenderUserInvestments';
import {TableRowsLenderUserOffers} from '../TableRows/TableRowsLenderUserOffers';
import {CollapsedCell, StyledTableRow} from '../Table/Table.styles';

export const TableRows: React.FC<any> = ({row, currentPage, handleSaveNewOffer}) => {
    const [clickedCollapsed, setClickedCollapsed] = useState<number | null>(null);

    const handleClickCollapse = (id: number) => {
        if (clickedCollapsed === id) setClickedCollapsed(null);
        else setClickedCollapsed(id);
    };
    return (
        <>
            <StyledTableRow role="checkbox" tabIndex={-1} key={row.id} onClick={() => handleClickCollapse(row.id)}>
                {currentPage === 'borrowerAllAuctions' && <TableRowsBorrowerAllAuctions row={row} clickedCollapsed={clickedCollapsed} />}
                {currentPage === 'borrowerUserAuctions' && <TableRowsBorrowerUserAuctions row={row} clickedCollapsed={clickedCollapsed} />}
                {currentPage === 'borrowerUserLoans' && <TableRowsBorrowerUserLoans row={row} />}
                {currentPage === 'lenderAllAuctions' && <TableRowsLenderAllAuctions row={row} clickedCollapsed={clickedCollapsed} />}
                {currentPage === 'lenderUserInvestments' && <TableRowsLenderUserInvestments row={row} />}
                {currentPage === 'lenderUserOffers' && <TableRowsLenderUserOffers row={row} />}
            </StyledTableRow>
            <TableRow>
                <CollapsedCell colSpan={7} align="center">
                    <Collapse in={clickedCollapsed === row.id} timeout="auto" unmountOnExit>
                        {currentPage === 'lenderAllAuctions' && (
                            <CollapseBoxCreateOffer row={row} handleSaveNewOffer={handleSaveNewOffer} />
                        )}
                        {currentPage === 'borrowerAllAuctions' && <CollapseBoxAuctionOffers row={row} />}
                        {currentPage === 'borrowerUserAuctions' && <CollapseBoxCreateLoan row={row} />}
                    </Collapse>
                </CollapsedCell>
            </TableRow>
        </>
    );
};
