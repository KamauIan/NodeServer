const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools');
// import mocks from './mocks';
import resolvers from './resolvers';



const typeDefs = `
#Define the types as in the database
  type Employee {
    id: Int
    first_name: String
    last_name: String
  },
  type LeaveCategory {
    id: Int
    leave_type: String
    LeaveDays: [LeaveDays]
  },
  type LeaveDays {
    emp_id: Int
    leave_id: Int
    days: Int
  },
  #Create Queries that model the allowable parameters and how they can be fetched
  type Query {
    employee(id: Int): Employee
    allEmployees: [Employee]
    leaveCat(id: Int): LeaveCategory
    allLeaveCat: [LeaveCategory]
    getLeaveDays(emp_id: Int, leave_id: Int): LeaveDays
  },
  #Creates mutations on how the data can be changed
  type Mutation {
    #EMployee Mutations
    addEmployee (first_name: String!, last_name: String!): Employee
    updateEmployee (id:Int, first_name:String, last_name:String): Employee
    deleteEmployee (id: Int!): Employee

    #LeaveCategories Mutations
    addLeaveCat (leave_type: String!): LeaveCategory
    updateLeaveCat (id:Int, leave_type:String!): LeaveCategory
    deleteLeaveCat (id: Int): LeaveCategory

    #LeaveDays Mutations
    
  }
`

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
