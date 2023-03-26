const contrato = artifacts.require("Owner");

module.exports = function(deployer) {
    // deployment steps
    deployer.deploy(contrato);
  };