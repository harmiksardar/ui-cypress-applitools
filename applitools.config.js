module.exports = {
  APPLITOOLS_API_KEY: 'KVv3Gr4ouANlvtmBVB7101N3rPGSaF01114zgIYO2l8KdU8110',
  appName: 'My app',
  showLogs: true,
  batchName: 'My batch',
  browser: [
        // Add browsers with different viewports
        {width: 800, height: 600, name: 'chrome'},
        {width: 700, height: 500, name: 'firefox'},
        {width: 1600, height: 1200, name: 'ie11'},
        {width: 1024, height: 768, name: 'edgechromium'},
        {width: 800, height: 600, name: 'safari'},
        // Add mobile emulation devices in Portrait mode
        {deviceName: 'iPhone X', screenOrientation: 'portrait'},
        {deviceName: 'Pixel 2', screenOrientation: 'portrait'}
    ]
  ...
  // all other configuration variables apply
}
