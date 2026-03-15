exports.handler = async (event) => {

const TOKEN = "8707141410:AAGHrf0XkMTB7aC-2eYLJb697AfJwpBRVB4";

const data = JSON.parse(event.body);

const chat_id = data.message.chat.id;
const text = data.message.text;

if(text == "/start"){

await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`,{
method:"POST",
headers:{'Content-Type':'application/json'},
body:JSON.stringify({
chat_id:chat_id,
text:"✅ Bot Running on Netlify"
})
});

}

return {
statusCode:200,
body:"ok"
}

}
