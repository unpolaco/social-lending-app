import {Offer} from '../../../helpers/types';

export interface CollapseBoxCreateOfferProps {
    row: Offer;
    handleSaveNewOffer: any;
}

export interface CollapseBoxCreateOfferValidatorProps {
    rate?: number;
    amount?: number;
    auctionId?: number;
}
