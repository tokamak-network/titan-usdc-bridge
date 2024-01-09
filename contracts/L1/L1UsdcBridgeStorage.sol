// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract L1UsdcBridgeStorage  {
    uint32 internal constant RECEIVE_DEFAULT_GAS_LIMIT = 200_000;
    address public messenger;
    address public otherBridge;
    address public l1Usdc;
    address public l2Usdc;

    /**
     * @notice Mapping that stores deposits for a given pair of local and remote tokens.
     */
    mapping(address => mapping(address => uint256)) public deposits;

}
