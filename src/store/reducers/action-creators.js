import { CalculatingActionCreators } from "./calculating/actionCreators";
import { LanguageActionCreators } from "./language/actionCreators";
import { TalentsActionCreators } from "./talents/actionCreators";

export const allActionCreators = {
    ...LanguageActionCreators,
    ...TalentsActionCreators,
    ...CalculatingActionCreators,
}