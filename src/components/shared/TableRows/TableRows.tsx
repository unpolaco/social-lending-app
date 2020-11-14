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
                {(() => {
                    switch (currentPage) {
                        case 'borrowerAllAuctions':
                            return <TableRowsBorrowerAllAuctions row={row} clickedCollapsed={clickedCollapsed} />;
                        case 'borrowerUserAuctions':
                            return <TableRowsBorrowerUserAuctions row={row} clickedCollapsed={clickedCollapsed} />;
                        case 'borrowerUserLoans':
                            return <TableRowsBorrowerUserLoans row={row} />;
                        case 'lenderAllAuctions':
                            return <TableRowsLenderAllAuctions row={row} clickedCollapsed={clickedCollapsed} />;
                        case 'lenderUserInvestments':
                            return <TableRowsLenderUserInvestments row={row} />;
                        case 'lenderUserOffers':
                            return <TableRowsLenderUserOffers row={row} />;
                    }
                })()}
            </StyledTableRow>
            <TableRow>
                <CollapsedCell colSpan={7} align="center">
                    <Collapse in={clickedCollapsed === row.id} timeout="auto" unmountOnExit>
                        {(() => {
                            switch (currentPage) {
                                case 'borrowerAllAuctions':
                                    return <CollapseBoxAuctionOffers row={row} />;
                                case 'borrowerUserAuctions':
                                    return <CollapseBoxCreateLoan row={row} />;
                                case 'lenderAllAuctions':
                                    return <CollapseBoxCreateOffer row={row} handleSaveNewOffer={handleSaveNewOffer} />;
                            }
                        })()}
                    </Collapse>
                </CollapsedCell>
            </TableRow>
        </>
    );
};
