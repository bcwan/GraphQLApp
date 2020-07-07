var express = require('express')
var { graphqlHTTP } = require('express-graphql');
var app = express();
var {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = require('graphql');

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Hello World',
    fields: () => ({
      message: { type: GraphQLString, 
      resolve: () => 'Hello World'
      }     
    })
  })
})

// we can access graphql without Postman
// pass schema into here
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

app.listen(5000, () => console.log('Server Running'))