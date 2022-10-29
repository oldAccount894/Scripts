const express = require("express");
const WebSocket = require("ws");
const SocketServer = require("ws").Server;

const server = express().listen(3000);

const wss = new SocketServer({server});

wss.on('connection',(ws)=>{
   console.log('Connection found.')
   ws.on('close',()=>{
       console.log('Connection has been closed.')
   });
   ws.on('message',(message)=>{
       console.log('Message recieved. (%s)', message);

       wss.clients.forEach(function each(client){
           if(client!==ws&&client.readyState===WebSocket.OPEN){
               client.send(message);
           }
       });
   });
});