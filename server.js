var express = require('express')
var { graphqlHTTP } = require('express-graphql');
var app = express();
const {
  GraphQLSchema,
  GraphQLObjectType
} = require('graphql');

// we can access graphql without Postman
app.use('/graphql', graphqlHTTP({
  graphiql: true
}));

app.listen(5000, () => console.log('Server Running'))