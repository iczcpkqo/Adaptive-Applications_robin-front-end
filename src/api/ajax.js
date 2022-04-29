import axios from 'axios'
import StoreUser from "../utils/StoreUser";
import {message} from "antd";

/*
* ajax
* */

const HOSTER = {
    EVENT:  "https://robin-server-api.herokuapp.com",
    BOT: "https://dialogflow.cloud.google.com/v1/integrations/messenger/webhook/4b2add1d-2437-4dfc-b333-b0184a8203f3/sessions/dfMessenger-86231231"
}

export default function ajax(url,data={},type='GET', hoster='EVENT'){

    // https://robin-server-api.herokuapp.com/event/read_all
    const h = HOSTER[hoster];
    url = h+url;
    const axiosInstance =  axios.create({
        timeout: 8000,
        headers: {
            'Authorization': "Bearer " + StoreUser.getMyToken(),
            'Content-Type': 'application/json'
        }
    });
    return new Promise(function (resolve,reject){
        let promise
        if(type === 'GET'){
            promise = axiosInstance.get(url, {params:data})//query parameter
            console.log("GET:" + promise);
        }
        else if(type == 'POST')
        {
            console.log("POST back-end : "+ url);
            promise = axiosInstance.post(url,data)
        }
        else if(type == 'DELETE')
        {
            console.log("DELETE back-end : "+ url);
            promise = axiosInstance.delete(url,data)
        }else if(type == 'PATCH'){
            console.log("PATCH : "+ url);
            promise = axiosInstance.patch(url,data)
        }
        else
        {
            console.log("PUT back-end : "+ url);
            promise = axiosInstance.put(url,data)
        }
        promise.then(response =>{
            // if success
            resolve(response)
        }).catch(error => {
            message.error('axios error:'+error.message)
        })
    })
}

