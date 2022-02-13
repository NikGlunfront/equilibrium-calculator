import { ModalsActions } from ".";

export const ModalsActionCreators = {
    changeModalVisibility: (payload) => ({type: ModalsActions.SET_MODAL_VISIBILITY, payload}),
}