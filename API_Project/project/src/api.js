import data from './resources.json';

const api = {
    name : "name",
    getProducts : function(){
        // return("string");
        // link in json file
        // parse json
        return(data.resources);
        // return the webpage
    }
}

export default api;