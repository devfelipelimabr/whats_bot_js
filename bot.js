// Chamada do gerador de QRCode
const qrcode = require('qrcode-terminal');
// Chamada de lib que vai permitir criar chatbot
const { Client } = require('whatsapp-web.js');

const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
    
});

client.initialize();

//Respondendo mensagens
client.on('message', message => {
    let texto = message.body.toLowerCase();

    if (texto !== null && texto !== '1' && texto !== 'um' && texto !== 'cardápio' && texto !== 'cardapio' && texto !== '2' && texto !== 'dois' && texto !== 'pedido') {
        client.sendMessage(message.from, '👋Olá! Eu sou o Cadu, 🤖atendente virtual do restaurante Di Raízes 🪸 Estamos felizes em recebê-lo(a) aqui pelo nosso chat.' + '\n' + '\n' + '1. Para ver nosso cardápio, digite "Cardápio".' + '\n' + '2.Para fazer um pedido, digite "Pedido".' + '\n' + '\n' + 'Estamos à disposição para ajudá-lo(a) no que precisar. 🫶Obrigado pela preferência!!! Para mais novidades, nos segue no ✅instagram: @DiRaizesRestaurante');

    }
    if (texto === '1' || texto === 'um' || texto === 'cardápio' || texto === 'cadapio') {
        client.sendMessage(message.from, 'https://lh3.googleusercontent.com/pw/AJFCJaUJOBBy_1he6l0fSqXUq2PF26f_zgd8eqwFG06EQ9w21ZToGJ-p-oBirLuK07Y4mNJa4LIyqCd2_FjHdCstIBFLjQgq8tC0W3Lw7IK0VH1I7-oIlFNYpdo1mutpl8xH_wnKoAgpsc9fRTSEmx8fVJiofQ=w679-h961-s-no?authuser=0');
    } else if (texto === '2' || texto === 'dois' || texto === 'pedido') {
        client.sendMessage(message.from, '🪸Entendi!! Só mais um instante e já iremos lhe atender!🍽️');
    }
});
