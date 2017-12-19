/**
 * TelstraProgrammableNetworkAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Flavor
 */
class Flavor extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.currency = this.constructor.getValue(obj.currency);
        this.description = this.constructor.getValue(obj.description);
        this.disk = this.constructor.getValue(obj.disk);
        this.ephemeral = this.constructor.getValue(obj.ephemeral);
        this.id = this.constructor.getValue(obj.id);
        this.name = this.constructor.getValue(obj.name);
        this.price = this.constructor.getValue(obj.price);
        this.ram = this.constructor.getValue(obj.ram);
        this.specificCustomer =
          this.constructor.getValue(obj.specificCustomer
     || obj.specific_customer);
        this.swap = this.constructor.getValue(obj.swap);
        this.vcpus = this.constructor.getValue(obj.vcpus);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'currency', realName: 'currency' },
            { name: 'description', realName: 'description' },
            { name: 'disk', realName: 'disk' },
            { name: 'ephemeral', realName: 'ephemeral' },
            { name: 'id', realName: 'id' },
            { name: 'name', realName: 'name' },
            { name: 'price', realName: 'price' },
            { name: 'ram', realName: 'ram' },
            { name: 'specificCustomer', realName: 'specific_customer' },
            { name: 'swap', realName: 'swap' },
            { name: 'vcpus', realName: 'vcpus' },
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

module.exports = Flavor;