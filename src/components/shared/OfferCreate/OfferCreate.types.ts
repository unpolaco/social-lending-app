import {Offer} from '../../../helpers/types';

export interface OfferCreateProps {
    row: Offer;
    handleSaveNewOffer: any;
}

export interface OfferCreateValidatorProps {
    rate?: number;
    amount?: number;
    auctionId?: number;
}
