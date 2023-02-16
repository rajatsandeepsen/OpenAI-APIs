import qrcode from 'qrcode-terminal';
import pkg from 'whatsapp-web.js';
const { Client, MessageMedia } = pkg;
import { runDallE } from './dalle.js';
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
      let mess = message.body
      console.log(mess)
      if ("img:" === mess.slice(0,4) || "Img:" === mess.slice(0,4) || "IMG:" === mess.slice(0,4)){
        runDallE(mess.slice(4))
        .then(async (data) => {
          
          (async () => {
            const media = await MessageMedia.fromUrl(data);
            media.mimetype = "image/png";
            media.filename = "CustomImageName.png";
            message.reply(media); 
          })()
          
          console.log(data)

        })
        .catch(err => {
          message.reply("Some kind of err")
          // console.log(err)
        })

      }

      else {   
        search(mess)
        .then(data => {
            message.reply(data)
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
      }
    }

    else {
        console.log("error")
    }
  });