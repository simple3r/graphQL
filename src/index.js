import express from "express";
import { graphqlHTTP } from 'express-graphql';
import { schema } from "./schema.js";


const appServer = express();

appServer.get('/', (req, res) => {
    res.json({
        message: 'Hello GRAPH_QL'
        
    })
});

appServer.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}));



appServer.listen(3000, () => console.log('Server on port 3000'));