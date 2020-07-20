import { PlanTypeAction } from "./types";
import { PLAN_PLUS30, PLAN_PLUS60, PLAN_PLUS120 } from "../constants";

export const initialState = {
    withPlanValue: 0,
    withoutPlanValue: 0,
};

function reducer(state = initialState, action: PlanTypeAction) {
    switch (action.type) {
        case PLAN_PLUS30:
            return {
                ...state,
                withPlanValue: state.withPlanValue + 15,
            };
        case PLAN_PLUS60:
            return {
                ...state,
                withPlanValue: state.withPlanValue + 20,
            };
        case PLAN_PLUS120:
            return {
                ...state,
                withPlanValue: state.withPlanValue + 25,
            };
        default:
            return state;
    }
}

export default reducer;
