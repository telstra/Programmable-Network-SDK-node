# Getting started

Telstra Programmable Network is a self-provisioning platform that allows its users to create on-demand connectivity services between multiple end-points and add various network functions to those services. Programmable Network enables to connectivity to a global ecosystem of networking services as well as public and private cloud services. Once you are connected to the platform on one or more POPs (points of presence), you can start creating those services based on the use case that you want to accomplish. The Programmable Network API is available to all customers who have registered to use the Programmable Network.
To register, please contact your account representative.

## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:

* `node --version`
* `npm -version`

![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=Telstra%20Programmable%20Network%20API-Node)

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):

```bash
npm install
```

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=Telstra%20Programmable%20Network%20API-Node)

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder.

Once dependencies are resolved, you will need to move the folder `TelstraProgrammableNetworkAPILib ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

Click on `File` and select `Open Folder`.

![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=Telstra%20Programmable%20Network%20API-Node)

### 2. Creating a Test File

Now right click on the folder name and select the `New File` option to create a new test file. Save it as `index.js` Now import the generated NodeJS library using the following lines of code:

```js
var lib = require('lib');
```

Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=Telstra%20Programmable%20Network%20API-Node)

![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=Telstra%20Programmable%20Network%20API-Node)

### 3. Running The Test File

To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

```
node index.js
```

![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=Telstra%20Programmable%20Network%20API-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2 (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3 (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  Telstra Programmable Network APIController`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=Telstra%20Programmable%20Network%20APIController)

## Initialization

### 

API client can be initialized as following:

```JavaScript
const lib = require('lib');


```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [AuthenticationController](#authentication_controller)
* [TopologiesController](#topologies_controller)
* [VnfsController](#vnfs_controller)
* [VportsController](#vports_controller)
* [LinksController](#links_controller)
* [EndpointsController](#endpoints_controller)
* [CustomersController](#customers_controller)
* [ContractsController](#contracts_controller)
* [DatacentresController](#datacentres_controller)

## <a name="authentication_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AuthenticationController") AuthenticationController

### Get singleton instance

The singleton instance of the ``` AuthenticationController ``` class can be accessed from the API Client.

```javascript
var controller = lib.AuthenticationController;
```

### <a name="get100_auth_validatetoken_get"></a>![Method: ](https://apidocs.io/img/method.png ".AuthenticationController.get100AuthValidatetokenGet") get100AuthValidatetokenGet

> *Tags:*  ``` Skips Authentication ``` 

> Validate the authentication token and get information about the user (roles, permissions, etc.)


```javascript
function get100AuthValidatetokenGet(callback)
```

#### Example Usage

```javascript


    controller.get100AuthValidatetokenGet(function(error, response, context) {

    
    });
```



### <a name="create100_auth_generatetoken_post"></a>![Method: ](https://apidocs.io/img/method.png ".AuthenticationController.create100AuthGeneratetokenPost") create100AuthGeneratetokenPost

> *Tags:*  ``` Skips Authentication ``` 

> Create an authentication token


```javascript
function create100AuthGeneratetokenPost(grantType, username, password, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| grantType |  ``` Required ```  | TODO: Add a parameter description |
| username |  ``` Required ```  | TODO: Add a parameter description |
| password |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var grantType = 'password';
    var username = 'username';
    var password = 'password';

    controller.create100AuthGeneratetokenPost(grantType, username, password, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 412 | Provided authorization grant is invalid |




[Back to List of Controllers](#list_of_controllers)

## <a name="topologies_controller"></a>![Class: ](https://apidocs.io/img/class.png ".TopologiesController") TopologiesController

### Get singleton instance

The singleton instance of the ``` TopologiesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.TopologiesController;
```

### <a name="delete_ttms100_topology_tag_by_topotaguuid_delete"></a>![Method: ](https://apidocs.io/img/method.png ".TopologiesController.deleteTtms100TopologyTagByTopotaguuidDelete") deleteTtms100TopologyTagByTopotaguuidDelete

> *Tags:*  ``` Skips Authentication ``` 

> Delete a topology tag


```javascript
function deleteTtms100TopologyTagByTopotaguuidDelete(topotaguuid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| topotaguuid |  ``` Required ```  | Unique identifier representing a specific topology tag |



#### Example Usage

```javascript

    var topotaguuid = 'topotaguuid';

    controller.deleteTtms100TopologyTagByTopotaguuidDelete(topotaguuid, function(error, response, context) {

    
    });
```



### <a name="get_ttms100_topology_tag_by_topotaguuid_get"></a>![Method: ](https://apidocs.io/img/method.png ".TopologiesController.getTtms100TopologyTagByTopotaguuidGet") getTtms100TopologyTagByTopotaguuidGet

> *Tags:*  ``` Skips Authentication ``` 

> Get information about the specified topology tag


```javascript
function getTtms100TopologyTagByTopotaguuidGet(topotaguuid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| topotaguuid |  ``` Required ```  | Unique identifier representing a specific topology tag |



#### Example Usage

```javascript

    var topotaguuid = 'topotaguuid';

    controller.getTtms100TopologyTagByTopotaguuidGet(topotaguuid, function(error, response, context) {

    
    });
```



### <a name="create_ttms100_topology_tag_post"></a>![Method: ](https://apidocs.io/img/method.png ".TopologiesController.createTtms100TopologyTagPost") createTtms100TopologyTagPost

> *Tags:*  ``` Skips Authentication ``` 

> Create a named topology tag


```javascript
function createTtms100TopologyTagPost(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var body = new Ttms100TopologyTagRequest({"key":"value"});

    controller.createTtms100TopologyTagPost(body, function(error, response, context) {

    
    });
```



### <a name="get_ttms100_topology_tag_get"></a>![Method: ](https://apidocs.io/img/method.png ".TopologiesController.getTtms100TopologyTagGet") getTtms100TopologyTagGet

> *Tags:*  ``` Skips Authentication ``` 

> List all topology tags


```javascript
function getTtms100TopologyTagGet(callback)
```

#### Example Usage

```javascript


    controller.getTtms100TopologyTagGet(function(error, response, context) {

    
    });
```



### <a name="get_ttms100_topology_tag_objects_by_topotaguuid_get"></a>![Method: ](https://apidocs.io/img/method.png ".TopologiesController.getTtms100TopologyTagObjectsByTopotaguuidGet") getTtms100TopologyTagObjectsByTopotaguuidGet

> *Tags:*  ``` Skips Authentication ``` 

> List all objects (Endpoints, Links, VPorts, etc.) associated with the topology tag.


```javascript
function getTtms100TopologyTagObjectsByTopotaguuidGet(topotaguuid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| topotaguuid |  ``` Required ```  | Unique identifier representing a specific topology tag |



#### Example Usage

```javascript

    var topotaguuid = 'topotaguuid';

    controller.getTtms100TopologyTagObjectsByTopotaguuidGet(topotaguuid, function(error, response, context) {

    
    });
```



### <a name="update_ttms100_topology_tag_by_topotaguuid_put"></a>![Method: ](https://apidocs.io/img/method.png ".TopologiesController.updateTtms100TopologyTagByTopotaguuidPut") updateTtms100TopologyTagByTopotaguuidPut

> *Tags:*  ``` Skips Authentication ``` 

> Update a topology tag's name and/or description


```javascript
function updateTtms100TopologyTagByTopotaguuidPut(topotaguuid, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| topotaguuid |  ``` Required ```  | Unique identifier representing a specific topology tag |
| body |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var topotaguuid = 'topotaguuid';
    var body = new Ttms100TopologyTagRequest({"key":"value"});

    controller.updateTtms100TopologyTagByTopotaguuidPut(topotaguuid, body, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="vnfs_controller"></a>![Class: ](https://apidocs.io/img/class.png ".VnfsController") VnfsController

### Get singleton instance

The singleton instance of the ``` VnfsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.VnfsController;
```

### <a name="get100_marketplace_image_get"></a>![Method: ](https://apidocs.io/img/method.png ".VnfsController.get100MarketplaceImageGet") get100MarketplaceImageGet

> *Tags:*  ``` Skips Authentication ``` 

> List images in the Marketplace


```javascript
function get100MarketplaceImageGet(callback)
```

#### Example Usage

```javascript


    controller.get100MarketplaceImageGet(function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="vports_controller"></a>![Class: ](https://apidocs.io/img/class.png ".VportsController") VportsController

### Get singleton instance

The singleton instance of the ``` VportsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.VportsController;
```

### <a name="get100_inventory_vport_by_vportuuid_get"></a>![Method: ](https://apidocs.io/img/method.png ".VportsController.get100InventoryVportByVportuuidGet") get100InventoryVportByVportuuidGet

> *Tags:*  ``` Skips Authentication ``` 

> Get information about the specified VPort


```javascript
function get100InventoryVportByVportuuidGet(vportuuid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| vportuuid |  ``` Required ```  | Unique identifier representing a specific virtual port |



#### Example Usage

```javascript

    var vportuuid = 'vportuuid';

    controller.get100InventoryVportByVportuuidGet(vportuuid, function(error, response, context) {

    
    });
```



### <a name="create100_inventory_regularvport_post"></a>![Method: ](https://apidocs.io/img/method.png ".VportsController.create100InventoryRegularvportPost") create100InventoryRegularvportPost

> *Tags:*  ``` Skips Authentication ``` 

> Create VPort representing a VLAN on a Physical Ethernet Port


```javascript
function create100InventoryRegularvportPost(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var body = new M100InventoryRegularvportRequest({"key":"value"});

    controller.create100InventoryRegularvportPost(body, function(error, response, context) {

    
    });
```



### <a name="create100_inventory_vnf_vport_post"></a>![Method: ](https://apidocs.io/img/method.png ".VportsController.create100InventoryVnfVportPost") create100InventoryVnfVportPost

> *Tags:*  ``` Skips Authentication ``` 

> Create VNF VPort


```javascript
function create100InventoryVnfVportPost(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var body = new M100InventoryVnfVportRequest({"key":"value"});

    controller.create100InventoryVnfVportPost(body, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="links_controller"></a>![Class: ](https://apidocs.io/img/class.png ".LinksController") LinksController

### Get singleton instance

The singleton instance of the ``` LinksController ``` class can be accessed from the API Client.

```javascript
var controller = lib.LinksController;
```

### <a name="get100_inventory_links_by_linkid_get"></a>![Method: ](https://apidocs.io/img/method.png ".LinksController.get100InventoryLinksByLinkidGet") get100InventoryLinksByLinkidGet

> *Tags:*  ``` Skips Authentication ``` 

> Get details of specified link


```javascript
function get100InventoryLinksByLinkidGet(linkid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| linkid |  ``` Required ```  | Unique identifier representing a specific link |



#### Example Usage

```javascript

    var linkid = 'linkid';

    controller.get100InventoryLinksByLinkidGet(linkid, function(error, response, context) {

    
    });
```



### <a name="get100_inventory_links_history_by_linkid_get"></a>![Method: ](https://apidocs.io/img/method.png ".LinksController.get100InventoryLinksHistoryByLinkidGet") get100InventoryLinksHistoryByLinkidGet

> *Tags:*  ``` Skips Authentication ``` 

> Get Link history


```javascript
function get100InventoryLinksHistoryByLinkidGet(linkid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| linkid |  ``` Required ```  | Unique identifier representing a specific link |



#### Example Usage

```javascript

    var linkid = 'linkid';

    controller.get100InventoryLinksHistoryByLinkidGet(linkid, function(error, response, context) {

    
    });
```



### <a name="get100_inventory_links_customer_by_customeruuid_get"></a>![Method: ](https://apidocs.io/img/method.png ".LinksController.get100InventoryLinksCustomerByCustomeruuidGet") get100InventoryLinksCustomerByCustomeruuidGet

> *Tags:*  ``` Skips Authentication ``` 

> Get active Links


```javascript
function get100InventoryLinksCustomerByCustomeruuidGet(customeruuid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| customeruuid |  ``` Required ```  | Unique identifier representing a specific customer |



#### Example Usage

```javascript

    var customeruuid = 'customeruuid';

    controller.get100InventoryLinksCustomerByCustomeruuidGet(customeruuid, function(error, response, context) {

    
    });
```



### <a name="create100_inventory_link_post"></a>![Method: ](https://apidocs.io/img/method.png ".LinksController.create100InventoryLinkPost") create100InventoryLinkPost

> *Tags:*  ``` Skips Authentication ``` 

> Create Link and initial Contract


```javascript
function create100InventoryLinkPost(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var body = new M100InventoryLinkRequest({"key":"value"});

    controller.create100InventoryLinkPost(body, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="endpoints_controller"></a>![Class: ](https://apidocs.io/img/class.png ".EndpointsController") EndpointsController

### Get singleton instance

The singleton instance of the ``` EndpointsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.EndpointsController;
```

### <a name="create100_inventory_regularendpoint_post"></a>![Method: ](https://apidocs.io/img/method.png ".EndpointsController.create100InventoryRegularendpointPost") create100InventoryRegularendpointPost

> *Tags:*  ``` Skips Authentication ``` 

> Create Physical (Port) Endpoint


```javascript
function create100InventoryRegularendpointPost(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var body = new M100InventoryRegularendpointRequest({"key":"value"});

    controller.create100InventoryRegularendpointPost(body, function(error, response, context) {

    
    });
```



### <a name="create100_inventory_vnfendpoint_post"></a>![Method: ](https://apidocs.io/img/method.png ".EndpointsController.create100InventoryVnfendpointPost") create100InventoryVnfendpointPost

> *Tags:*  ``` Skips Authentication ``` 

> Create VNF Endpoint


```javascript
function create100InventoryVnfendpointPost(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var body = new M100InventoryVnfendpointRequest({"key":"value"});

    controller.create100InventoryVnfendpointPost(body, function(error, response, context) {

    
    });
```



### <a name="create_eis100_endpoints_assign_topology_tag_by_endpointuuid_post"></a>![Method: ](https://apidocs.io/img/method.png ".EndpointsController.createEis100EndpointsAssignTopologyTagByEndpointuuidPost") createEis100EndpointsAssignTopologyTagByEndpointuuidPost

> *Tags:*  ``` Skips Authentication ``` 

> Assign a Topology Tag to an Endpoint


```javascript
function createEis100EndpointsAssignTopologyTagByEndpointuuidPost(endpointuuid, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| endpointuuid |  ``` Required ```  | Unique identifier representing a specific endpoint |
| body |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var endpointuuid = 'endpointuuid';
    var body = new Eis100EndpointsAssignTopologyTagRequest({"key":"value"});

    controller.createEis100EndpointsAssignTopologyTagByEndpointuuidPost(endpointuuid, body, function(error, response, context) {

    
    });
```



### <a name="get100_inventory_endpoint_by_endpointuuid_get"></a>![Method: ](https://apidocs.io/img/method.png ".EndpointsController.get100InventoryEndpointByEndpointuuidGet") get100InventoryEndpointByEndpointuuidGet

> *Tags:*  ``` Skips Authentication ``` 

> Get information about the specified endpoint


```javascript
function get100InventoryEndpointByEndpointuuidGet(endpointuuid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| endpointuuid |  ``` Required ```  | Unique identifier representing a specific endpoint |



#### Example Usage

```javascript

    var endpointuuid = 'endpointuuid';

    controller.get100InventoryEndpointByEndpointuuidGet(endpointuuid, function(error, response, context) {

    
    });
```



### <a name="get100_inventory_endpoints_customeruuid_by_customeruuid_get"></a>![Method: ](https://apidocs.io/img/method.png ".EndpointsController.get100InventoryEndpointsCustomeruuidByCustomeruuidGet") get100InventoryEndpointsCustomeruuidByCustomeruuidGet

> *Tags:*  ``` Skips Authentication ``` 

> Get list of endpoints for a customer


```javascript
function get100InventoryEndpointsCustomeruuidByCustomeruuidGet(customeruuid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| customeruuid |  ``` Required ```  | Unique identifier representing a specific customer |



#### Example Usage

```javascript

    var customeruuid = 'customeruuid';

    controller.get100InventoryEndpointsCustomeruuidByCustomeruuidGet(customeruuid, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="customers_controller"></a>![Class: ](https://apidocs.io/img/class.png ".CustomersController") CustomersController

### Get singleton instance

The singleton instance of the ``` CustomersController ``` class can be accessed from the API Client.

```javascript
var controller = lib.CustomersController;
```

### <a name="get100_account_by_customeruuid_get"></a>![Method: ](https://apidocs.io/img/method.png ".CustomersController.get100AccountByCustomeruuidGet") get100AccountByCustomeruuidGet

> *Tags:*  ``` Skips Authentication ``` 

> Get the account information for the specified customer


```javascript
function get100AccountByCustomeruuidGet(customeruuid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| customeruuid |  ``` Required ```  | Unique identifier representing a specific customer |



#### Example Usage

```javascript

    var customeruuid = 'customeruuid';

    controller.get100AccountByCustomeruuidGet(customeruuid, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Authorization Failed |




### <a name="get100_account_user_by_customeruuid_get"></a>![Method: ](https://apidocs.io/img/method.png ".CustomersController.get100AccountUserByCustomeruuidGet") get100AccountUserByCustomeruuidGet

> *Tags:*  ``` Skips Authentication ``` 

> List all users associated with the specified customer


```javascript
function get100AccountUserByCustomeruuidGet(customeruuid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| customeruuid |  ``` Required ```  | Unique identifier representing a specific customer |



#### Example Usage

```javascript

    var customeruuid = 'customeruuid';

    controller.get100AccountUserByCustomeruuidGet(customeruuid, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="contracts_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ContractsController") ContractsController

### Get singleton instance

The singleton instance of the ``` ContractsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.ContractsController;
```

### <a name="create100_inventory_links_contract_by_linkid_post"></a>![Method: ](https://apidocs.io/img/method.png ".ContractsController.create100InventoryLinksContractByLinkidPost") create100InventoryLinksContractByLinkidPost

> *Tags:*  ``` Skips Authentication ``` 

> Create new Contract on specified link


```javascript
function create100InventoryLinksContractByLinkidPost(linkid, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| linkid |  ``` Required ```  | Unique identifier representing a specific link |
| body |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var linkid = 'linkid';
    var body = new M100InventoryLinksContractRequest37({"key":"value"});

    controller.create100InventoryLinksContractByLinkidPost(linkid, body, function(error, response, context) {

    
    });
```



### <a name="update100_inventory_links_contract_by_linkid_and_contractid_put"></a>![Method: ](https://apidocs.io/img/method.png ".ContractsController.update100InventoryLinksContractByLinkidAndContractidPut") update100InventoryLinksContractByLinkidAndContractidPut

> *Tags:*  ``` Skips Authentication ``` 

> Update active Contract by ContractID


```javascript
function update100InventoryLinksContractByLinkidAndContractidPut(linkid, contractid, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| linkid |  ``` Required ```  | Unique identifier representing a specific link |
| contractid |  ``` Required ```  | Unique identifier representing a specific contract |
| body |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var linkid = 'linkid';
    var contractid = 'contractid';
    var body = new M100InventoryLinksContractRequest({"key":"value"});

    controller.update100InventoryLinksContractByLinkidAndContractidPut(linkid, contractid, body, function(error, response, context) {

    
    });
```



### <a name="get100_inventory_links_contract_by_linkid_and_contractid_get"></a>![Method: ](https://apidocs.io/img/method.png ".ContractsController.get100InventoryLinksContractByLinkidAndContractidGet") get100InventoryLinksContractByLinkidAndContractidGet

> *Tags:*  ``` Skips Authentication ``` 

> Get active Contract by ContractID


```javascript
function get100InventoryLinksContractByLinkidAndContractidGet(linkid, contractid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| linkid |  ``` Required ```  | Unique identifier representing a specific link |
| contractid |  ``` Required ```  | Unique identifier representing a specific contract |



#### Example Usage

```javascript

    var linkid = 'linkid';
    var contractid = 'contractid';

    controller.get100InventoryLinksContractByLinkidAndContractidGet(linkid, contractid, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="datacentres_controller"></a>![Class: ](https://apidocs.io/img/class.png ".DatacentresController") DatacentresController

### Get singleton instance

The singleton instance of the ``` DatacentresController ``` class can be accessed from the API Client.

```javascript
var controller = lib.DatacentresController;
```

### <a name="get100_inventory_datacenters_get"></a>![Method: ](https://apidocs.io/img/method.png ".DatacentresController.get100InventoryDatacentersGet") get100InventoryDatacentersGet

> *Tags:*  ``` Skips Authentication ``` 

> Get list of all the data centers


```javascript
function get100InventoryDatacentersGet(callback)
```

#### Example Usage

```javascript


    controller.get100InventoryDatacentersGet(function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Request is not correctly formatted |
| 401 | Missing Token |
| 403 | Authorization Failed |
| 404 | Specified object cannot be found |
| 405 | Method Not Allowed |
| 409 | Status onflict |
| 422 | Request is invalid |
| 0 | Backend Error |




[Back to List of Controllers](#list_of_controllers)



