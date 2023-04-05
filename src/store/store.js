import { createStore, combineReducers } from "redux";

let userInitial = {
    users:[],
    currentUser:{}
};

function userSection(oldData = userInitial, newData){

    if(newData.type == "LOGIN_HOGYA"){

        oldData.currentUser = newData.payload;

    }else if(newData.type == "LOGOUT_HOGYA"){
        
        oldData.currentUser = {};
        localStorage.removeItem('meraToken');

    }else if(newData.type == "PERSON_ADD"){
        oldData.users.push(newData.payload);
    }else if(newData.type == "PERSON_DELETED"){
        oldData.users.splice(newData.meraIndex, 1);
    }else if(newData.type == "PERSON_EDIT"){

        let someIndex = oldData.findIndex(user=>user.id == newData.payload.id);
        oldData.users[someIndex]  = newData.payload;
    }
    

    return {...oldData};

}

let initial = {
    products:[]
}

function productSection(oldData = initial, newData){

   if(newData.type == "ADD_PRODUCT"){
    oldData.products.push(newData.payload)
   }

   return {...oldData};
}

let data = combineReducers({userSection, productSection});

export let meraStore = createStore(data);