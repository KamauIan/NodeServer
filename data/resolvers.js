
const axios = require('axios');

const BaseURL = `http://www.slimapp.com/api`;
const resolvers = {
    Query: {
        //Queries for Employees
        async employee(root, {id}){
            const emp = await axios.get(`${BaseURL}/employee/${id}`).then(res => res.data);
            return emp[0];
        },
        async allEmployees(){
            return await axios.get(`${BaseURL}/employees`).then(res => res.data);
        }, 
        //Queries for Leave categories
        async leaveCat(root, {id}){
            const leave =  await axios.get(`${BaseURL}/leave_cat/${id}`).then(res => res.data);
            return leave[0];
        },
        async allLeaveCat(){
            return await axios.get(`${BaseURL}/leave_cats`);
        },
        //Queries for Leave days
        async getLeaveDays(root, {emp_id, leave_id}){
            const leave_days = await axios.get(`${BaseURL}/leave_days/${emp_id}/${leave_id}`).then(res=>res.data);
            console.log(leave_days);
            return leave_days;
        }
    },
    Mutation: {

        //Mutations for Employees
        async addEmployee(_, {first_name, last_name}){
            return await axios.post(`${BaseURL}/employee/add`,{first_name, last_name});
        },
        async updateEmployee(_, {id, first_name, last_name}){
            return await axios.put(`${BaseURL}/employee/update/${id}`, {first_name, last_name});
        },
        async deleteEmployee(root, {id}){
            return await axios.delete(`${BaseURL}/employee/delete/${id}`);
        },
        //Muatations for LeaveCategories
        async addLeaveCat(_, {leave_type}){
            return await axios.post(`${BaseURL}/leave_cat/add`, {leave_type});
        },
        async updateLeaveCat(_, {id, leave_type}){
            return await axios.put(`${BaseURL}/leave_cat/update/${id}`, {leave_type});
        },
        async deleteLeaveCat(root, {id}){
            return await axios.delete(`${BaseURL}/leave_cat/delete/${id}`);
        }

    }
}

export default resolvers;