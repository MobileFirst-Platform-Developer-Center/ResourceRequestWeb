IBM MobileFirst Platform Foundation
===
## ResourceRequestWeb
A sample application demonstrating the use to the WLResourceRequest API in JavaScript.

### Tutorials
https://mobilefirstplatform.ibmcloud.com/tutorials/en/foundation/8.0/using-the-mfpf-sdk/resource-request/javascript

### Usage
1. Use either Maven or MobileFirst Developer CLI to build and deploy the `JavaAdapter` adapter.

  The `JavaAdapter` adapter can be found in https://github.com/MobileFirst-Platform-Developer-Center/Adapters/tree/release80.

2. From a command-line window, navigate to the project's root folder and run the command: `mfpdev app register web com.sample.resourcerequestweb`.

2. You can either set-up a [Web development environment](https://mobilefirstplatform.ibmcloud.com/tutorials/en/foundation/8.0/setting-up-your-development-environment/web-development-environment) that fits your needs, or use the provided Node.js-based reverse proxy.

#### WebSphere Liberty or Node.js
Follow the [Setting up the Web development environment](https://mobilefirstplatform.ibmcloud.com/tutorials/en/foundation/8.0/setting-up-your-development-environment/web-development-environment) tutorial.

#### Using the provided Node.js-based reverse proxy
1. Make sure you have Node.js installed.
2. Navigate to the sample's root folder and run the command: `npm install` followed by: `npm start`.
3. In a browser, load the URL [http://localhost:9081/sampleapp](http://localhost:9081/sampleapp).

### Supported Levels
IBM MobileFirst Platform Foundation 8.0

### License
Copyright 2016 IBM Corp.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
