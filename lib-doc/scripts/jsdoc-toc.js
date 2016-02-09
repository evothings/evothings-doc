(function($) {
    // TODO: make the node ID configurable
    var treeNode = $('#jsdoc-toc-nav');

    // initialize the tree
    treeNode.tree({
        autoEscape: false,
        closedIcon: '&#x21e2;',
        data: [{"label":"<a href=\"global.html\">Globals</a>","id":"global","children":[]},{"label":"<a href=\"evothings.html\">evothings</a>","id":"evothings","children":[{"label":"<a href=\"evothings.arduinoble.html\">arduinoble</a>","id":"evothings.arduinoble","children":[{"label":"<a href=\"evothings.arduinoble.ArduinoBLEDevice.html\">ArduinoBLEDevice</a>","id":"evothings.arduinoble.ArduinoBLEDevice","children":[]}]},{"label":"<a href=\"evothings.arduinotcp.html\">arduinotcp</a>","id":"evothings.arduinotcp","children":[]},{"label":"<a href=\"evothings.easyble.html\">easyble</a>","id":"evothings.easyble","children":[{"label":"<a href=\"evothings.easyble.EasyBLEDevice.html\">EasyBLEDevice</a>","id":"evothings.easyble.EasyBLEDevice","children":[]},{"label":"<a href=\"evothings.easyble.error.html\">error</a>","id":"evothings.easyble.error","children":[]}]},{"label":"<a href=\"evothings.nRF51_ble.html\">nRF51_ble</a>","id":"evothings.nRF51_ble","children":[]},{"label":"<a href=\"evothings.nordicble.html\">nordicble</a>","id":"evothings.nordicble","children":[{"label":"<a href=\"evothings.nordicble.NordicBLEDevice.html\">NordicBLEDevice</a>","id":"evothings.nordicble.NordicBLEDevice","children":[]}]},{"label":"<a href=\"evothings.os.html\">os</a>","id":"evothings.os","children":[]},{"label":"<a href=\"evothings.rfduinoble.html\">rfduinoble</a>","id":"evothings.rfduinoble","children":[{"label":"<a href=\"evothings.rfduinoble.RFduinoBLEDevice.html\">RFduinoBLEDevice</a>","id":"evothings.rfduinoble.RFduinoBLEDevice","children":[]}]},{"label":"<a href=\"evothings.tisensortag.html\">tisensortag</a>","id":"evothings.tisensortag","children":[{"label":"<a href=\"evothings.tisensortag.SensorTagInstance.html\">SensorTagInstance</a>","id":"evothings.tisensortag.SensorTagInstance","children":[]},{"label":"<a href=\"evothings.tisensortag.SensorTagInstanceBLE.html\">SensorTagInstanceBLE</a>","id":"evothings.tisensortag.SensorTagInstanceBLE","children":[]},{"label":"<a href=\"evothings.tisensortag.SensorTagInstanceBLE_CC2541.html\">SensorTagInstanceBLE_CC2541</a>","id":"evothings.tisensortag.SensorTagInstanceBLE_CC2541","children":[]},{"label":"<a href=\"evothings.tisensortag.SensorTagInstanceBLE_CC2650.html\">SensorTagInstanceBLE_CC2650</a>","id":"evothings.tisensortag.SensorTagInstanceBLE_CC2650","children":[]},{"label":"<a href=\"evothings.tisensortag.ble.html\">ble</a>","id":"evothings.tisensortag.ble","children":[{"label":"<a href=\"evothings.tisensortag.ble.CC2541.html\">CC2541</a>","id":"evothings.tisensortag.ble.CC2541","children":[]},{"label":"<a href=\"evothings.tisensortag.ble.CC2650.html\">CC2650</a>","id":"evothings.tisensortag.ble.CC2650","children":[]},{"label":"<a href=\"evothings.tisensortag.ble.error.html\">error</a>","id":"evothings.tisensortag.ble.error","children":[]},{"label":"<a href=\"evothings.tisensortag.ble.status.html\">status</a>","id":"evothings.tisensortag.ble.status","children":[]}]}]},{"label":"<a href=\"evothings.util.html\">util</a>","id":"evothings.util","children":[]}]}],
        openedIcon: ' &#x21e3;',
        saveState: true,
        useContextMenu: false
    });

    // add event handlers
    // TODO
})(jQuery);
