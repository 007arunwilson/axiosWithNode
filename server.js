const axios = require('axios');

let axios_response_data = null;

const promise_instance_axios_result = new Promise((resolve,reject)=>{

    axios
    .get("https://jsonplaceholder.typicode.com/photos")
    .then(function(response) {
  
      resolve(response.data);
  
    })
    .catch(function(error) {
      console.log(error);
    });

});

let final_array = [];

promise_instance_axios_result.then((axios_response_data)=>{
    
    console.log(`Before spliced array count : ${axios_response_data.length}`);

    for (let i = 0;axios_response_data.length;){

        const spliced_result = axios_response_data.splice(0,3);
        final_array.push(spliced_result);

    }

    console.log(`After spliced array count : ${final_array.length}`);

});

