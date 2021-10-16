// The prepr.js file will contain the client holding the configuration which will be used for every request made to the Prepr API.

import { createPreprClient } from "@preprio/nodejs-sdk";

const prepr = createPreprClient({
    token: process.env.Prepr_Access_Tokken,  // You can find one in your Prepr environment
    baseUrl: "https://graphql.prepr.io/graphql",
    userId: null,// Optional, used for AB testing implmentations
});

export { prepr };