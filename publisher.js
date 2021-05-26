const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://broker.hivemq.com");
var interval = setInterval(function () {
  sendData();
}, 2000);
client.on("message", () => {
  console.log("message");
});

function sendData() {
  console.log("publishing");
  // COMPLETE COM O CÓDIGO NECESSÁRIO PARA PUBLICAR O DADO
  // ALEATORIO UTILIZANDO O TOPICO sensores/voltagem

  x = randomInt(0,200)
  client.publish("aldenis/sensors/voltagem", 'Bença')


  console.log("published");
}

function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}
