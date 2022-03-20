/**
 * class PhysicalBrowserWifiChecker
 */
const PhysicalBrowserWifiChecker = {

    androidInterface: null,
    networkDataHandler: null,

    initialize: function (androidInterface) {
        if (androidInterface == null) {
            throw "PhysicalBrowserWifiChecker.initialize: androidInterface is null";
        }
        console.info("PhysicalBrowserWifiChecker.initialize: androidInterface is not null")
        this.androidInterface = androidInterface;
    },

    isPhysicalBrowser: function () {
        return this.androidInterface != null;
    },

    startScanForAvailableWiFis: function (networkDataHandler) {
        if (!this.androidInterface) {
            throw "PhysicalBrowserWifiChecker.startScanForAvailableWiFis: androidInterface is not defined";
        }
        this.networkDataHandler = networkDataHandler;
        this.androidInterface.startScanForAvailableWiFis();
        console.info("PhysicalBrowserWifiChecker.startScanForAvailableWiFis: started");
    },

    networksAreScanned: function (networkData) {
        console.info("PhysicalBrowserWifiChecker.networksAreScanned: networks = " + networkData);
        let parsedNetworkData = JSON.parse(networkData);
        this.networkDataHandler.networksAreScanned(parsedNetworkData);
    }

};

/**
 *   PhysicalBrowserWifiChecker Initialisation
 */
{
    console.info("Start process physical-browser-wifi-checker.js");
    try {
        if (typeof androidInterface != "undefined") {
            PhysicalBrowserWifiChecker.initialize(androidInterface);
        } else {
            console.info("Object androidInterface is not defined");
        }
    } catch (e) {
        console.error("PhysicalBrowserWifiChecker initialisation ERROR: " + e.toString());
    }
    console.info("End process physical-browser-wifi-checker.js");
}