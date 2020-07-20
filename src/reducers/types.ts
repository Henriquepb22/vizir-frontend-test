export type PlanTypeAction = {
    type: string;
    payload: {
        origin: number;
        destiny: number;
        minutes: number;
    };
};
