module.exports = {
  addrules: require('./commands/AddRules.js'),
  addsynonyms: require('./commands/AddSynonyms.js'),
  deleteindicespattern: require('./commands/DeleteIndicesPattern.js'),
  export: require('./commands/Export.js'),
  exportrules: require('./commands/ExportRules.js'),
  exportsynonyms: require('./commands/ExportSynonyms.js'),
  getsettings: require('./commands/GetSettings.js'),
  import: require('./commands/Import.js'),
  interactive: require('./commands/Interactive.js'),
  search: require('./commands/Search.js'),
  setsettings: require('./commands/SetSettings.js'),
  transferindex: require('./commands/TransferIndex.js'),
  transferindexconfig: require('./commands/TransferIndexConfig.js'),
  transformlines: require('./commands/TransformLines.js'),
};
