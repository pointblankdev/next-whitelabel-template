import { GraphQLClient } from "graphql-request";

export const GATEWAY_API = process.env.GATEWAY_API;

const Gateway = new GraphQLClient(GATEWAY_API);

export default Gateway;
