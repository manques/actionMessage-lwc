import { LightningElement, api, track } from 'lwc';

export default class MyMessage extends LightningElement {
    // isShow = false;
    message = "successfully save";
    isShow = false;
    @track isModalOpen = false; 
    openModal() {
        this.isModalOpen = true;
    }

    closeModal() {
        this.isModalOpen = false;
    }

    submitDetails() {
        this.isModalOpen = false;
        // this.isShow = true;
    }
    get onIsSave (){
        return !this.isModalOpen && !this.isShow;
    }
    onSave(){
        this.openModal();
        // this.isShow = !this.isShow;
        // console.log("hello!!  777");

        // event.preventDefault();
        // const messageEvent = new CustomEvent('message', { detail: this.message });
        // this.dispatchEvent(messageEvent);
    }
}