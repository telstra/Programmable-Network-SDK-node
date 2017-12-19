/**
 * TelstraProgrammableNetworkAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of User
 */
class User extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.useruuid = this.constructor.getValue(obj.useruuid);
        this.status = this.constructor.getValue(obj.status);
        this.title = this.constructor.getValue(obj.title);
        this.usercountry = this.constructor.getValue(obj.usercountry);
        this.emailaddress = this.constructor.getValue(obj.emailaddress);
        this.jobtitle = this.constructor.getValue(obj.jobtitle);
        this.firstname = this.constructor.getValue(obj.firstname);
        this.middlename = this.constructor.getValue(obj.middlename);
        this.lastname = this.constructor.getValue(obj.lastname);
        this.phonenumber = this.constructor.getValue(obj.phonenumber);
        this.phoneext = this.constructor.getValue(obj.phoneext);
        this.phonetype = this.constructor.getValue(obj.phonetype);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'useruuid', realName: 'useruuid' },
            { name: 'status', realName: 'status' },
            { name: 'title', realName: 'title' },
            { name: 'usercountry', realName: 'usercountry' },
            { name: 'emailaddress', realName: 'emailaddress' },
            { name: 'jobtitle', realName: 'jobtitle' },
            { name: 'firstname', realName: 'firstname' },
            { name: 'middlename', realName: 'middlename' },
            { name: 'lastname', realName: 'lastname' },
            { name: 'phonenumber', realName: 'phonenumber' },
            { name: 'phoneext', realName: 'phoneext' },
            { name: 'phonetype', realName: 'phonetype' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = User;