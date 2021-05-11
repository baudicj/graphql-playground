import { ApolloLink, Operation, FetchResult, Observable } from 'apollo-link';
import { Client } from 'graphql-ws';
export declare class WebSocketLink extends ApolloLink {
    private client;
    constructor(client: Client);
    request(operation: Operation): Observable<FetchResult>;
}
