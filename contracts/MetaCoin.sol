pragma solidity ^0.4.17;

import 'openzeppelin-solidity/contracts/ownership/Ownable.sol';
import 'openzeppelin-solidity/contracts/math/SafeMath.sol';

contract MetaCoin is Ownable {
  using SafeMath for uint256;

  event Sent(address indexed payee, uint256 amount, uint256 balance);
  event Received(address indexed payer, uint256 amount, uint256 balance);

  function setImage(uint8[] pixels) payable returns (bool) {
    return true;
  }

  /**
   * @dev wallet can receive funds.
   */
  function () public payable {
    emit Received(msg.sender, msg.value, address(this).balance);
  }
}
