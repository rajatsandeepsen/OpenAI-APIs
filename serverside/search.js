import * as dotenv from 'dotenv';
dotenv.config({ path: './.env' })


export function search(x){

    return new Promise((resolve, reject) => {
        fetch(process.env.APIURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': process.env.AUTHTYPE + " " + process.env.AUTHTOKEN
            },
            body: JSON.stringify({"model": "text-davinci-003", "prompt": x, "max_tokens": 1000})
        })  
        .then(res => res.json())
        .then(res => {
            let array = ""
            res.choices.forEach(element => {
                array += element.text;
            })
            resolve(array.trim())
        }
        )
        .catch(err => {reject(err)});
    })
}