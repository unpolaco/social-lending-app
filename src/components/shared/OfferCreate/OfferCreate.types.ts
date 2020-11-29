import {OfferDto} from '../../../../src/api/api.types';

export interface OfferCreateProps {
    row: OfferDto;
    handleSaveNewOffer: any;
}

export interface OfferCreateValidatorProps {
    rate?: number;
    amount?: number;
    auctionId?: number;
}
