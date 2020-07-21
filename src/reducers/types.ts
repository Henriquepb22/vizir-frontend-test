export type PlanTypeAction = {
    type: string;
    payload: {
        minutes: number;
        plan: string;
    };
};
