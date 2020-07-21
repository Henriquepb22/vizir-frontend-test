import { PlanTypeAction } from "./types";
import {
    ORIGIN011_DESTINY016,
    ORIGIN011_DESTINY017,
    ORIGIN011_DESTINY018,
    ORIGIN016_DESTINY011,
    ORIGIN017_DESTINY011,
    ORIGIN018_DESTINY011,
} from "../constants";

export const initialState = {
    withPlanValue: 0,
    withoutPlanValue: 0,
    invalidOriginDestiny: true,
};

function reducer(state = initialState, action: PlanTypeAction) {
    let planDiscountMinutes = 0;
    if (action.payload.plan === "PLUS30") planDiscountMinutes = 30;
    if (action.payload.plan === "PLUS60") planDiscountMinutes = 60;
    if (action.payload.plan === "PLUS120") planDiscountMinutes = 120;
    switch (action.type) {
        case ORIGIN011_DESTINY016:
            return {
                ...state,
                withPlanValue:
                    action.payload.minutes >= planDiscountMinutes
                        ? (action.payload.minutes - planDiscountMinutes) *
                          (1.9 * 1.1)
                        : 0,
                withoutPlanValue: action.payload.minutes * 1.9,
                invalidOriginDestiny: false,
            };
        case ORIGIN011_DESTINY017:
            return {
                ...state,
                withPlanValue:
                    action.payload.minutes >= planDiscountMinutes
                        ? (action.payload.minutes - planDiscountMinutes) *
                          (1.7 * 1.1)
                        : 0,
                withoutPlanValue: action.payload.minutes * 1.7,
                invalidOriginDestiny: false,
            };
        case ORIGIN011_DESTINY018:
            return {
                ...state,
                withPlanValue:
                    action.payload.minutes >= planDiscountMinutes
                        ? (action.payload.minutes - planDiscountMinutes) *
                          (0.9 * 1.1)
                        : 0,
                withoutPlanValue: action.payload.minutes * 0.9,
                invalidOriginDestiny: false,
            };
        case ORIGIN016_DESTINY011:
            return {
                ...state,
                withPlanValue:
                    action.payload.minutes >= planDiscountMinutes
                        ? (action.payload.minutes - planDiscountMinutes) *
                          (2.9 * 1.1)
                        : 0,
                withoutPlanValue: action.payload.minutes * 2.9,
                invalidOriginDestiny: false,
            };
        case ORIGIN017_DESTINY011:
            return {
                ...state,
                withPlanValue:
                    action.payload.minutes >= planDiscountMinutes
                        ? (action.payload.minutes - planDiscountMinutes) *
                          (2.7 * 1.1)
                        : 0,
                withoutPlanValue: action.payload.minutes * 2.7,
                invalidOriginDestiny: false,
            };
        case ORIGIN018_DESTINY011:
            return {
                ...state,
                withPlanValue:
                    action.payload.minutes >= planDiscountMinutes
                        ? (action.payload.minutes - planDiscountMinutes) *
                          (1.9 * 1.1)
                        : 0,
                withoutPlanValue: action.payload.minutes * 1.9,
                invalidOriginDestiny: false,
            };
        default:
            return {
                ...state,
                withPlanValue: 0,
                withoutPlanValue: 0,
                invalidOriginDestiny: true,
            };
    }
}

export default reducer;
