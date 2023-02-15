import qrcode from 'qrcode-terminal';
import { Client } from "whatsapp-web.js"
import { search } from './search.js';

const client = new Client();
client.initialize();

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("message", (message) => {
    if (message.body) {
        search(message.body)
        .then(data => {
            message.reply(data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    else {
        console.log("error")
    }
  });