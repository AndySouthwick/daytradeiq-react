import { ApolloClient, createNetworkInterface } from 'react-apollo';
const networkInterface = createNetworkInterface({
    uri: 'http://localhost:3000/graphql'
});
const client = new ApolloClient({
    networkInterface: networkInterface
});

export default client