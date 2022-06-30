import { LightningElement, api } from "lwc";

export default class ParentLWC extends LightningElement {
  @api message = "I am from parent";
  @api outsideMessage = "I will be update by an event";

  handleOutsideMessage(event) {
    this.outsideMessage = event.detail;
  }

  handleMessage(event) {
    this.message = event.target.value;
  }
}
