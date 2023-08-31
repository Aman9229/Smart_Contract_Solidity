//SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.5.0 <0.9.19;

 //   import "hardhat/console.sol";     // debugging in smart contract using Javascript

//  1
contract HelloTesting{
function print() public pure returns(string memory){
    return "Aman patel";

}

}




// 3 

contract Token{
    string public name =" hardhat token";
    string public symbol="HHT";
    uint public totalsupply=1000;

    address public owner;

    mapping(address=>uint) balances;

    constructor(){
        balances [msg.sender]=totalsupply;
        owner=msg.sender;
    }

    function transfer(address to ,uint amount) external {
        //console.log("@@ sender balance ",balances[msg.sender]);    // debugging process 
        // console.log("@@ sender sending tokens",amount,to);
        require(balances[msg.sender]>=amount,"not enough token");
        balances[msg.sender]-=amount; 
        balances[to]+=amount;
    }
    function balanceof(address account) external view returns(uint){
        return balances[account];
    }
}




