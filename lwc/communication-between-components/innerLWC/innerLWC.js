import { LightningElement, api, wire } from "lwc";
import { publish, MessageContext } from "lightning/messageService";
import MY_CHANNEL from "@salesforce/messageChannel/MyMessageChannel__c";

export default class InnerLWC extends LightningElement {
  @api message = "Inner message!";
  @wire(MessageContext) messageContext;

  handleMessage(event) {
    this.message = event.target.value;
    this.sendToParent();
  }

  sendToParent() {
    const sendEvent = new CustomEvent("sendtooutside", {
      detail: this.message
    });

    this.dispatchEvent(sendEvent);
  }

  sendToOther(event) {
    console.log("Starting publishing...");
    const payload = {
      message: this.message
    };
    publish(this.messageContext, MY_CHANNEL, payload);
    console.log("published!");
  }
}
