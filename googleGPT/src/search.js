import * as dotenv from 'dotenv';
dotenv.config({ path: './.env' })


export async function search(x){
    await fetch(process.env.APIURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': process.env.AUTHTYPE + " " + process.env.AUTHTOKEN
        },
        body: JSON.stringify({"model": "text-davinci-003", "prompt": x, "max_tokens": 1000})
    })
    .then(res => res.json())
    .then(res => {
        return res.choices.forEach(element => {
            console.log(element.text);
        })
    }
    )
    .catch(err => {return err});
}