import React, {useState} from 'react';
import {Collapse} from '@material-ui/core';
import {OfferCreate} from '../OfferCreate/OfferCreate';
import {OffersDisplay} from '../OffersDisplay/OffersDisplay';
import {LoanCreate} from '../LoanCreate/LoanCreate';
import {LoanDetails} from '../LoanDetails/LoanDetails';
import {TableRowsBorrowerAllAuctions} from '../TableRows/TableRowsBorrowerAllAuctions';
import {TableRowsBorrowerUserAuctions} from '../TableRows/TableRowsBorrowerUserAuctions';
import {TableRowsBorrowerUserLoans} from '../TableRows/TableRowsBorrowerUserLoans';
import {TableRowsLenderAllAuctions} from '../TableRows/TableRowsLenderAllAuctions';
import {TableRowsLenderUserInvestments} from '../TableRows/TableRowsLenderUserInvestments';
import {TableRowsLenderUserOffers} from '../TableRows/TableRowsLenderUserOffers';
import {OfferEdit} from '../OfferEdit/OfferEdit';
import {CollapsedCell, StyledTableRowHover, StyledTableRow} from './TableRows.styles';
import {PublicProfile} from '../PublicProfile/PublicProfile';

export const TableRows: React.FC<any> = ({row, currentPage, handleSaveNewOffer, fetchUserLoans, fetchUserAuctions, fetchUserOffers}) => {
    const [clickedCollapsed, setClickedCollapsed] = useState<number | null>(null);

    const handleClickCollapse = (id: number) => {
        setClickedCollapsed(clickedCollapsed === id ? null : id);
    };
    return (
        <>
            <StyledTableRowHover role="checkbox" tabIndex={-1} key={row.id} onClick={() => handleClickCollapse(row.id)}>
                {(() => {
                    switch (currentPage) {
                        case 'borrowerAllAuctions':
                            return <TableRowsBorrowerAllAuctions row={row} clickedCollapsed={clickedCollapsed} />;
                        case 'borrowerUserAuctions':
                            return (
                                <TableRowsBorrowerUserAuctions
                                    row={row}
                                    clickedCollapsed={clickedCollapsed}
                                    data-testid="userAuctionTableRow"
                                />
                            );
                        case 'borrowerUserLoans':
                            return <TableRowsBorrowerUserLoans row={row} clickedCollapsed={clickedCollapsed} />;
                        case 'lenderAllAuctions':
                            return <TableRowsLenderAllAuctions row={row} clickedCollapsed={clickedCollapsed} />;
                        case 'lenderUserInvestments':
                            return <TableRowsLenderUserInvestments row={row} clickedCollapsed={clickedCollapsed} />;
                        case 'lenderUserOffers':
                            return <TableRowsLenderUserOffers row={row} clickedCollapsed={clickedCollapsed} />;
                    }
                })()}
            </StyledTableRowHover>
            <StyledTableRow>
                <CollapsedCell colSpan={7} align="center" padding="none">
                    <Collapse in={clickedCollapsed === row.id} timeout="auto" unmountOnExit>
                        {(() => {
                            switch (currentPage) {
                                case 'borrowerAllAuctions':
                                    return (
                                        <>
                                            <PublicProfile row={row} />
                                            <OffersDisplay row={row} />
                                        </>
                                    );
                                case 'borrowerUserAuctions':
                                    return (
                                        <>
                                            <OffersDisplay row={row} />
                                            <LoanCreate row={row} fetchUserAuctions={fetchUserAuctions} />
                                        </>
                                    );
                                case 'borrowerUserLoans':
                                    return <LoanDetails row={row} fetchUserLoans={fetchUserLoans} page="borrowerUserLoans" />;
                                case 'lenderAllAuctions':
                                    return (
                                        <>
                                            <PublicProfile row={row} />
                                            <OffersDisplay row={row} />
                                            <OfferCreate row={row} handleSaveNewOffer={handleSaveNewOffer} />
                                        </>
                                    );
                                case 'lenderUserInvestments':
                                    return <LoanDetails row={row} page="lenderUserInvestments" />;
                                case 'lenderUserOffers':
                                    return <OfferEdit row={row} fetchUserOffers={fetchUserOffers} />;
                            }
                        })()}
                    </Collapse>
                </CollapsedCell>
            </StyledTableRow>
        </>
    );
};
