// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract InfoContract {
    string private info;

    constructor() {
        info = "Hello from the Blockchain!";
    }

    function getInfo() public view returns (string memory) {
        return info;
    }

    function setInfo(string memory newInfo) public {
        info = newInfo;
    }
}
