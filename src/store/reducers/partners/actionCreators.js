import { PartnerActions } from ".";

export const PartnerActionCreators = {
    changePartnerAmountAction: (payload) => ({type: PartnerActions.CHANGE_AMOUNT, payload}),
}