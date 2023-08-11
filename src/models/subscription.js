// import mongoose from 'mongoose';

// const TABLE = 'subscriptionDetail';
export const subscriptionPlan = {
    Monthly: {
        Mobile: {
            price: 100,
            quality: 'Good',
            resolution: '480p',
            devices: ['Phone', 'Tablet'],
        },
        Basic: {
            price: 200,
            quality: 'Good',
            resolution: '480p',
            devices: ['Phone', 'Tablet', 'Computer', 'TV'],
        },
        Standard: {
            price: 500,
            quality: 'Better',
            resolution: '1080p',
            devices: ['Phone', 'Tablet', 'Computer', 'TV'],
        },
        Premium: {
            price: 700,
            quality: 'Best',
            resolution: '4k+HDR',
            devices: ['Phone', 'Tablet', 'Computer', 'TV'],
        },
    },
    Yearly: {
        Mobile: {
            price: 1000,
            quality: 'Good',
            resolution: '480p',
            devices: ['Phone', 'Tablet'],
        },
        Basic: {
            price: 2000,
            quality: 'Good',
            resolution: '480p',
            devices: ['Phone', 'Tablet', 'Computer', 'TV'],
        },
        Standard: {
            price: 5000,
            quality: 'Better',
            resolution: '1080p',
            devices: ['Phone', 'Tablet', 'Computer', 'TV'],
        },
        Premium: {
            price: 7000,
            quality: 'Best',
            resolution: '4k+HDR',
            devices: ['Phone', 'Tablet', 'Computer', 'TV'],
        },
    },
};
