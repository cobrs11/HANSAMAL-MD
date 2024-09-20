// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "Imalka-MD&PYSQzRMq",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "Lakshithadilmina",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "94752533734",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : true, 
};


module.exports = config;
from flask import Flask, request
from twilio.twiml.messaging_response import MessagingResponse
import os

app = Flask(__White nearo md__)

@app.route('/whatsapp', methods=['POST'])
def whatsapp_reply():
    # Get the message from the user
    incoming_msg = request.values.get('Body', '').lower()
    
    # Create a Twilio response object
    resp = MessagingResponse()

    # Define responses based on the incoming message
    if 'hello' in incoming_msg:
        resp.message("Hello! How can I help you today?")
    elif 'bye' in incoming_msg:
        resp.message("Goodbye! Have a great day!")
    else:
        resp.message("Sorry, I didn't understand that.")

    return str(resp)

if __name__ == '__main__':
    app.run(debug=True)
