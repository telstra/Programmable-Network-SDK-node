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

const controller = testerlib.TopologiesController;
const Topology = testerlib.Topology;
const Ttms100TopologyTagRequest = testerlib.Ttms100TopologyTagRequest;
const Ttms100TopologyTagObjectsResponse = testerlib.Ttms100TopologyTagObjectsResponse;

describe("TopologiesController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Create a named topology tag
     */
    it("should testTestCreateANamedTopologyTag1 response", function testTestCreateANamedTopologyTag1Test(done) {
        // parameters for the API call
        let body = null;

        controller.createTtms100TopologyTagPost(body, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            done();
        });
    });

    /**
     * List all topology tags
     */
    it("should testTestListAllTopologyTags1 response", function testTestListAllTopologyTags1Test(done) {
        controller.getTtms100TopologyTagGet(function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            done();
        });
    });

});
