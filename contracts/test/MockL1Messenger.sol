// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "hardhat/console.sol";
interface L2CrossDomainMessengerI {
    function relayMessage(
        address _target,
        address _sender,
        bytes memory _message,
        uint256 _messageNonce
    ) external;
}

contract MockL1Messenger  {

    mapping(bytes32 => bool) public successfulMessages;

    uint256 public messageNonce;
    address internal xDomainMsgSender;
    address public l2messenger;

    event SentMessage(
        address indexed target,
        address sender,
        bytes message,
        uint256 messageNonce,
        uint256 gasLimit
    );

    event RelayedMessage(
        address indexed target,
        address sender,
        bytes message,
        uint256 messageNonce
    );

    event FailedRelayedMessage(
        address indexed target,
        address sender,
        bytes message,
        uint256 messageNonce
    );

    constructor() {
    }

    function xDomainMessageSender() public view returns (address) {
        require(
            xDomainMsgSender != address(0),
            "xDomainMessageSender is not set"
        );
        return xDomainMsgSender;
    }


    function setL2messenger(address _l2messagenger) external {
        require(l2messenger == address(0), 'already set');
        l2messenger = _l2messagenger;
    }

    function setSuccessfulMessages(bytes32 _hashMessages, bool _bool) external {
        successfulMessages[_hashMessages] = _bool;
    }

    function sendMessage(
        address _target,
        bytes memory _message,
        uint32 _gasLimit
    ) public {

        // console.log("MockL1Messenger sendMessage _target %s", _target);

        emit SentMessage(_target, msg.sender, _message, ++messageNonce, _gasLimit);

        L2CrossDomainMessengerI(l2messenger).relayMessage(
            _target,
            msg.sender,
            _message,
            messageNonce
        );

        // console.log("MockL1Messenger sendMessage end  ");
    }

    function relayMessage(
        address _target,
        address _sender,
        bytes memory _message,
        uint256 _messageNonce
    ) public {
        // console.log("MockL1Messenger relayMessage _target %s", _target);

        xDomainMsgSender = _sender;
        // slither-disable-next-line reentrancy-no-eth, reentrancy-events, reentrancy-benign
        (bool success, ) = _target.call(_message);
        // slither-disable-next-line reentrancy-benign
        console.logBool(success);

        xDomainMsgSender = address(0);
        if(success) {
            emit RelayedMessage(_target, _sender, _message, _messageNonce);
        } else {
            emit FailedRelayedMessage(_target, _sender, _message, _messageNonce);
        }
        // console.log("MockL1Messenger relayMessage end ");

    }

}
