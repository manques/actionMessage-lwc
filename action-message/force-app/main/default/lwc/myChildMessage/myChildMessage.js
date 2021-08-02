import { LightningElement, api } from 'lwc';

export default class MyChildMessage extends LightningElement {
    @api message;
}