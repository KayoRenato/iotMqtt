const mqtt = require('mqtt') 
const client = mqtt.connect('mqtt://broker.hivemq.com')
client.subscribe("aldenis/sensors/voltagem")

client.on('connect', () => {
 
 console.log('connected')
})
client.on('message', (topic, message) => {
 console.log('received message %s %s', topic, message)
}) 