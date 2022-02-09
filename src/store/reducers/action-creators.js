import { CalculatingActionCreators } from "./calculating/actionCreators";
import { CharmActionCreators } from "./charm/actionCreators";
import { LanguageActionCreators } from "./language/actionCreators";
import { PartnerActionCreators } from "./partners/actionCreators";
import { TalentsActionCreators } from "./talents/actionCreators";

export const allActionCreators = {
    ...LanguageActionCreators,
    ...PartnerActionCreators,
    ...TalentsActionCreators,
    ...CharmActionCreators,
    ...CalculatingActionCreators,
}