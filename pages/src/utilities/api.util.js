import request from 'request';
import Account from '../testData/account.data';
const _account = new Account();
let callbackComplete = false;

/**
 * api class handles api requests and responses
 */
export default class API {

    /**
     * Makes an HTTP request with a set of options. Waits for a callback to be completed before returning.
     * @param {JSON} options must contain at least a method and uri.  See https://github.com/request/request for
     * examples.
     * @param {function} callback - A function that execute after a response is returned from a request.  MUST
     * contain 3 parameters to represent error, response, & body
     * @returns {boolean} returns true if the callback was completed after the request was made
     */
    _callApi(options, callback) {
        callbackComplete = false;
        request(options, callback);
        browser.waitUntil(() => {
            return callbackComplete;
        }, 5000, 'Expected Response in 5 seconds');

        /** If we get through all this ^^ return true because the package is valid **/
        return true;
    }

    /**
     * Makes a POST request to the feature control API to update an account package
     * @param {string} emmaPackage - The intended account package
     * @returns {boolean} If true, the package was successfully updated
     */
    setAccountPackage(emmaPackage) {

        _account.setPackage(emmaPackage);
        const accountId = _account.accountId;
        const options = {
            method: 'POST',
            uri: `http://featurecontrol.int.e2.ma/package/${accountId}`,
            form: {
                package_id: _account.packageId,
            },
        };

        const callback = (error, response, body) => {
            if (response.statusCode !== 201) {
                throw new Error(`Expected response status, ${response.statusCode}, to be 201`);
            }
            callbackComplete = true;
        };
        return this._callApi(options, callback);
    }

    /**
     * Makes a GET request to the feature control API to validate an account package
     * @param {string} emmaPackage - The intended account package
     * @returns {boolean} If true, the package returned by the api matches the intended package
     */
    validateAccountPackage(emmaPackage) {

        _account.setPackage(emmaPackage);
        const accountId = _account.accountId;
        const options = {
            method: 'GET',
            uri: `http://featurecontrol.int.e2.ma/package/${accountId}`,
        };
        const callback = (error, response, body) => {
            const currentPackageId = JSON.parse(body).package_id;
            if (response.statusCode !== 200) {
                throw new Error(`Expected response status, ${response.statusCode}, to be 200`);
            }
            if (currentPackageId !== _account.packageId) {
                throw new Error(`Expected package id, ${currentPackageId}, to be ${_account.packageId}`);
            }
            callbackComplete = true;
        };

        return this._callApi(options, callback);
    }

}
