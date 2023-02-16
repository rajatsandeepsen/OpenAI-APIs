import { Configuration, OpenAIApi } from "openai";
import * as dotenv from 'dotenv';


dotenv.config({ path: './.env' })
const conffig = new Configuration({
    apiKey : process.env.AUTHTOKEN
})

const openai = new OpenAIApi(conffig)

export function runDallE (x){
    let result = null

    return new Promise((resolve, reject)=>{
        
    (async () => {
        
        const response = await openai.createImage({
            prompt: x,
            n: 1,
            size: "512x512",
        });
        
        result = response.data.data[0].url
            
        if (result){
            resolve(result)
            return;
        }
        reject("Some kind of err")

    })();
    
    })
}

