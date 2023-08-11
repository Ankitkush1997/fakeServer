import { subscriptionPlan } from '../models/subscription.js';
export async function getSubscriptionData(req, res) {
    try {
        res.send(subscriptionPlan);
    } catch (error) {
        if (error instanceof Error) res.send(error.message);
        res.status(500).send(error);
    }
}
