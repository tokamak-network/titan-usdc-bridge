// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { ERC1967Proxy } from "@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol";
import { ERC1967Utils } from "@openzeppelin/contracts/proxy/ERC1967/ERC1967Utils.sol";

// import "hardhat/console.sol";

contract L2UsdcBridgeProxy is ERC1967Proxy {

    modifier onlyProxyOwner() {
        require(msg.sender == owner(), "you are not owner.");
        _;
    }

    constructor(address _logic, address initialOwner, bytes memory _data)
        payable  ERC1967Proxy(_logic, _data)
    {
            ERC1967Utils.changeAdmin(initialOwner);
    }

    receive() external payable {
        revert("cannot receive TON");
    }

    function owner() public view returns (address) {
        return ERC1967Utils.getAdmin();
    }

    function implementation() external view returns (address) {
        return _implementation();
    }

    function proxyChangeOwner(address newAdmin) external onlyProxyOwner {
        ERC1967Utils.changeAdmin(newAdmin);
    }

    function upgradeTo(address newImplementation) external onlyProxyOwner {
        ERC1967Utils.upgradeToAndCall(newImplementation, bytes(''));
    }

    function upgradeToAndCall(address newImplementation, bytes memory data) external onlyProxyOwner {
        ERC1967Utils.upgradeToAndCall(newImplementation, data);
    }
}
