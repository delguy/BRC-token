greeter.sol
// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

contract Greeter {

    string greeting;

    constructor() {
        greeting = "hello humans";
    }  
    function get () public view returns (string memory){
        return greeting;
    }
    function set (string memory _greeting) public {
        greeting =_greeting;
    }
} 