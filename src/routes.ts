import {Express} from 'express'
const { ExpressAdapter } = require('ask-sdk-express-adapter');
const Alexa = require('ask-sdk-core');
const skillBuilder = Alexa.SkillBuilders.custom();

const LaunchRequestHandler = {
  canHandle(handlerInput: { requestEnvelope: { request: { type: string; }; }; }) {
      return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput: { responseBuilder: { speak: (arg0: string) => { (): any; new(): any; reprompt: { (arg0: string): { (): any; new(): any; withSimpleCard: { (arg0: string, arg1: string): { (): any; new(): any; getResponse: { (): any; new(): any; }; }; new(): any; }; }; new(): any; }; }; }; }) {
      const speechText = 'Hello World - Your skill has launched';

      return handlerInput.responseBuilder
          .speak(speechText)
          .reprompt(speechText)
          .withSimpleCard('Hello World', speechText)
          .getResponse();
  }
};

skillBuilder.addRequestHandlers(
  LaunchRequestHandler
)

const skill = skillBuilder.create();

const adapter = new ExpressAdapter(skill, false, false);


function routes(app:Express){

    app.get('/',(req,res)=>{
      res.sendStatus(200);
  });
  app.post('/', adapter.getRequestHandlers());

}

export default routes