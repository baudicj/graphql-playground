import { ApolloLink } from 'apollo-link';
import { ForkEffect } from 'redux-saga/effects';
import { SchemaFetcher } from '../../components/Playground/SchemaFetcher';
import { SubscriptionClient as SubscriptionClientSTWS } from 'subscriptions-transport-ws';
import { Client as SubscriptionClientGWS } from 'graphql-ws';
export declare function setSubscriptionEndpoint(endpoint: any): void;
export interface LinkCreatorProps {
    endpoint: string;
    headers?: Headers;
    credentials?: string;
    subscriptionTransport?: string;
}
export interface Headers {
    [key: string]: string | number | null;
}
export declare const defaultLinkCreator: (session: LinkCreatorProps, subscriptionEndpoint?: string) => {
    link: ApolloLink;
    subscriptionClient?: SubscriptionClientGWS | SubscriptionClientSTWS;
};
export declare let schemaFetcher: SchemaFetcher;
export declare function setLinkCreator(newLinkCreator: any): void;
export declare function formatError(error: any, fetchingSchema?: boolean): any;
export declare const fecthingSagas: ForkEffect<never>[];
export { ForkEffect };
