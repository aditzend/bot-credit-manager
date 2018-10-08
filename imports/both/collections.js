import {
    Mongo
} from 'meteor/mongo';

export const Chat = new Mongo.Collection('chat');
export const Client = new Mongo.Collection('client');
export const Reservations = new Mongo.Collection('reservations');