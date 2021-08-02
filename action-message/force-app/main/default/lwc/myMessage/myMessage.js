import { LightningElement, api } from 'lwc';

export default class MyMessage extends LightningElement {
    // isShow = false;
    message = "hello world";
    isShow = false;

    onSave(){
        this.isShow = !this.isShow;
        console.log("hello!!  777");

        // event.preventDefault();
        // const messageEvent = new CustomEvent('message', { detail: this.message });
        // this.dispatchEvent(messageEvent);
    }
}