/*
 * TelstraProgrammableNetworkAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */
 'use strict';

const chai = require('chai');
const assert = chai.assert;
const TestHelper = require("../TestHelper");
const APIHelper = require("../../lib/APIHelper");
const testerlib = require("../../lib");
const testConfiguration = require("../TestBootstrap");
const baseController = require("../../lib/Controllers/BaseController");

const controller = testerlib.EndpointsController;
const M100InventoryRegularendpointResponse = testerlib.M100InventoryRegularendpointResponse;
const M100InventoryRegularendpointRequest = testerlib.M100InventoryRegularendpointRequest;
const M100InventoryVnfendpointResponse = testerlib.M100InventoryVnfendpointResponse;
const M100InventoryVnfendpointRequest = testerlib.M100InventoryVnfendpointRequest;
const SuccessFragment = testerlib.SuccessFragment;
const Eis100EndpointsAssignTopologyTagRequest = testerlib.Eis100EndpointsAssignTopologyTagRequest;
const M100InventoryEndpointResponse = testerlib.M100InventoryEndpointResponse;
const M100InventoryEndpointsCustomeruuidResponse = testerlib.M100InventoryEndpointsCustomeruuidResponse;

describe("EndpointsController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Create Physical (Port) Endpoint
     */
    it("should testTestCreatePhysicalPortEndpoint1 response", function testTestCreatePhysicalPortEndpoint1Test(done) {
        // parameters for the API call
        let body = null;

        controller.create100InventoryRegularendpointPost(body, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            done();
        });
    });

    /**
     * Create VNF Endpoint
     */
    it("should testTestCreateVNFEndpoint1 response", function testTestCreateVNFEndpoint1Test(done) {
        // parameters for the API call
        let body = null;

        controller.create100InventoryVnfendpointPost(body, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            done();
        });
    });

});
