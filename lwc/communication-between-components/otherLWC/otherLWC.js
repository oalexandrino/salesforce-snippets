import { LightningElement, api, wire } from "lwc";
import { subscribe, MessageContext } from "lightning/messageService";
import MY_CHANNEL from "@salesforce/messageChannel/MyMessageChannel__c";

export default class OtherLWC extends LightningElement {
  @api message;
  @wire(MessageContext)
  messageContext;

  connectedCallback() {
    this.subscribeToMessageChannel();
  }

  subscribeToMessageChannel() {
    this.subscription = subscribe(this.messageContext, MY_CHANNEL, (message) =>
      this.handleMessage(message)
    );
  }

  handleMessage(payload) {
    this.message = payload.message;
  }
}
