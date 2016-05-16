/**
* Copyright 2016 IBM Corp.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

require.config({
	'paths': {
		'ibmmfpfanalytics': 'node_modules/ibm-mfp-web-core-sdk/lib/analytics/ibmmfpfanalytics',
		'mfp': 'node_modules/ibm-mfp-web-core-sdk/ibmmfpf'
	}
});

require(['ibmmfpfanalytics', 'mfp'], function(wlanalytics, WL) {
    var wlInitOptions = {
        mfpContextRoot : '/mfp', // "mfp" is the default context root in the MobileFirst Development Kit
        applicationId : 'com.sample.resourcerequestweb'
    };

    WL.Client.init(wlInitOptions).then (
        function() {
            console.log ("in client init");
            document.getElementById("btn_submit").addEventListener('click', submitRequest);
    });

    function submitRequest() {
        console.log ("in submitRequest");
        var first = document.getElementById("first").value;
        var middle = document.getElementById("middle").value;
        var last = document.getElementById("last").value;
        var age = document.getElementById("age").value;
        var birthdate = document.getElementById("birthdate").value;
        var height = document.getElementById("height").value;

        //JavaAdapter expects first, middle and last to be part of the POST URL path.
        var url = "/adapters/JavaAdapter/users/"+first+"/"+middle+"/"+last;
        var resourceRequest = new WL.ResourceRequest(url, WL.ResourceRequest.POST);

        //JavaAdapter expects age to be a query parameter.
        resourceRequest.setQueryParameter("age", age);

        //JavaAdapter expects birthdate to be a header parameter.
        resourceRequest.setHeader("birthdate",birthdate);

        //JavaAdapter expects height to be a form parameter.
        var formParameters = {};
        formParameters.height = height;

        resourceRequest.sendFormParameters(formParameters).then(
            function(response) {
                console.log ("in sendFormParameters success");
                WL.Logger.info("Success: " + response.responseText);
                // window.plugins.spinnerDialog.hide();

                var resultText = "Success: " + "<br>";
                resultText += "Name: ";
                resultText += response.responseJSON.first + " " + response.responseJSON.middle + " " + response.responseJSON.last + "<br>";
                resultText += "Age: " + response.responseJSON.age + "<br>";
                resultText += "Height: " + response.responseJSON.height + "<br>";
                resultText += "Birthdate: " + response.responseJSON.birthdate + "<br>";

                document.getElementById("div_result").innerHTML= resultText;
            },
            function(response) {
                console.log ("in sendFormParameters failure:" + JSON.stringify(response));
                WL.Logger.info("Failure: " + JSON.stringify(response));
                // window.plugins.spinnerDialog.hide();

                var resultText = "Failure: " + JSON.stringify(response);

                document.getElementById("div_result").innerHTML = resultText;
            }
        );
        // window.plugins.spinnerDialog.show(null,null,function(){/*no callback - force the use of SpinnerDialog.hide() */ });
    }
});
