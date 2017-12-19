/**
  * @module TelstraProgrammableNetworkAPILib
  *
  * Telstra Programmable Network is a self-provisioning platform that allows its users to create on-
  * demand connectivity services between multiple end-points and add various network functions to
  * those services. Programmable Network enables to connectivity to a global ecosystem of networking
  * services as well as public and private cloud services. Once you are connected to the platform on
  * one or more POPs (points of presence), you can start creating those services based on the use
  * case that you want to accomplish. The Programmable Network API is available to all customers who
  * have registered to use the Programmable Network. To register, please contact your account
  * representative.
  */

'use strict';

const Configuration = require('./configuration');
const AuthenticationController = require('./Controllers/AuthenticationController');
const TopologiesController = require('./Controllers/TopologiesController');
const VnfsController = require('./Controllers/VnfsController');
const VportsController = require('./Controllers/VportsController');
const LinksController = require('./Controllers/LinksController');
const EndpointsController = require('./Controllers/EndpointsController');
const CustomersController = require('./Controllers/CustomersController');
const ContractsController = require('./Controllers/ContractsController');
const DatacentresController = require('./Controllers/DatacentresController');
const Role = require('./Models/Role');
const Billing = require('./Models/Billing');
const Link66 = require('./Models/Link66');
const Endpoint = require('./Models/Endpoint');
const Ttms100TopologyTagRequest = require('./Models/Ttms100TopologyTagRequest');
const M100InventoryLinksContractResponse = require('./Models/M100InventoryLinksContractResponse');
const VnfTag = require('./Models/VnfTag');
const Classification = require('./Models/Classification');
const M100MarketplaceImageResponse = require('./Models/M100MarketplaceImageResponse');
const M100InventoryRegularvportRequest = require('./Models/M100InventoryRegularvportRequest');
const M100InventoryVnfVportResponse = require('./Models/M100InventoryVnfVportResponse');
const M100InventoryVnfVportRequest = require('./Models/M100InventoryVnfVportRequest');
const M100InventoryLinksContractRequest = require('./Models/M100InventoryLinksContractRequest');
const SuccessFragment = require('./Models/SuccessFragment');
const M100InventoryRegularendpointRequest = require('./Models/M100InventoryRegularendpointRequest');
const Vlan = require('./Models/Vlan');
const Datacenter = require('./Models/Datacenter');
const Endpointlist = require('./Models/Endpointlist');
const Eis100EndpointsAssignTopologyTagRequest =
  require('./Models/Eis100EndpointsAssignTopologyTagRequest');
const Vportvalue = require('./Models/Vportvalue');
const M100InventoryEndpointResponse = require('./Models/M100InventoryEndpointResponse');
const M100InventoryEndpointsCustomeruuidResponse =
  require('./Models/M100InventoryEndpointsCustomeruuidResponse');
const Object52 = require('./Models/Object52');
const M100AuthValidatetokenResponse = require('./Models/M100AuthValidatetokenResponse');
const User = require('./Models/User');
const M100AuthGeneratetokenResponse = require('./Models/M100AuthGeneratetokenResponse');
const Ttms100TopologyTagObjectsResponse = require('./Models/Ttms100TopologyTagObjectsResponse');
const GlanceImage = require('./Models/GlanceImage');
const Meta = require('./Models/Meta');
const M100AccountResponse = require('./Models/M100AccountResponse');
const M100InventoryRegularvportResponse = require('./Models/M100InventoryRegularvportResponse');
const Params39 = require('./Models/Params39');
const M100InventoryLinksContractResponse38 =
  require('./Models/M100InventoryLinksContractResponse38');
const M100InventoryLinksContractRequest37 = require('./Models/M100InventoryLinksContractRequest37');
const Params34 = require('./Models/Params34');
const Topology = require('./Models/Topology');
const M100InventoryLinksContractResponse33 =
  require('./Models/M100InventoryLinksContractResponse33');
const Flavor = require('./Models/Flavor');
const M100InventoryLinksResponse = require('./Models/M100InventoryLinksResponse');
const M100InventoryLinksHistoryResponse = require('./Models/M100InventoryLinksHistoryResponse');
const Contract = require('./Models/Contract');
const M100InventoryLinkResponse = require('./Models/M100InventoryLinkResponse');
const Link = require('./Models/Link');
const M100InventoryRegularendpointResponse =
  require('./Models/M100InventoryRegularendpointResponse');
const M100InventoryVnfendpointResponse = require('./Models/M100InventoryVnfendpointResponse');
const M100InventoryVnfendpointRequest = require('./Models/M100InventoryVnfendpointRequest');
const Params = require('./Models/Params');
const M100InventoryLinkRequest = require('./Models/M100InventoryLinkRequest');
const Vport = require('./Models/Vport');
const Product = require('./Models/Product');
const EndpointPort = require('./Models/EndpointPort');
const M100InventoryDatacentersResponse = require('./Models/M100InventoryDatacentersResponse');
const Params31 = require('./Models/Params31');
const M100InventoryDatacenters401ErrorException =
  require('./Exceptions/M100InventoryDatacenters401ErrorException');
const ErrorException = require('./Exceptions/ErrorException');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of TelstraProgrammableNetworkAPILib
    Configuration,
    // controllers of TelstraProgrammableNetworkAPILib
    AuthenticationController,
    TopologiesController,
    VnfsController,
    VportsController,
    LinksController,
    EndpointsController,
    CustomersController,
    ContractsController,
    DatacentresController,
    // models of TelstraProgrammableNetworkAPILib
    Role,
    Billing,
    Link66,
    Endpoint,
    Ttms100TopologyTagRequest,
    M100InventoryLinksContractResponse,
    VnfTag,
    Classification,
    M100MarketplaceImageResponse,
    M100InventoryRegularvportRequest,
    M100InventoryVnfVportResponse,
    M100InventoryVnfVportRequest,
    M100InventoryLinksContractRequest,
    SuccessFragment,
    M100InventoryRegularendpointRequest,
    Vlan,
    Datacenter,
    Endpointlist,
    Eis100EndpointsAssignTopologyTagRequest,
    Vportvalue,
    M100InventoryEndpointResponse,
    M100InventoryEndpointsCustomeruuidResponse,
    Object52,
    M100AuthValidatetokenResponse,
    User,
    M100AuthGeneratetokenResponse,
    Ttms100TopologyTagObjectsResponse,
    GlanceImage,
    Meta,
    M100AccountResponse,
    M100InventoryRegularvportResponse,
    Params39,
    M100InventoryLinksContractResponse38,
    M100InventoryLinksContractRequest37,
    Params34,
    Topology,
    M100InventoryLinksContractResponse33,
    Flavor,
    M100InventoryLinksResponse,
    M100InventoryLinksHistoryResponse,
    Contract,
    M100InventoryLinkResponse,
    Link,
    M100InventoryRegularendpointResponse,
    M100InventoryVnfendpointResponse,
    M100InventoryVnfendpointRequest,
    Params,
    M100InventoryLinkRequest,
    Vport,
    Product,
    EndpointPort,
    M100InventoryDatacentersResponse,
    Params31,
    // exceptions of TelstraProgrammableNetworkAPILib
    M100InventoryDatacenters401ErrorException,
    ErrorException,
    APIException,
};

module.exports = initializer;
