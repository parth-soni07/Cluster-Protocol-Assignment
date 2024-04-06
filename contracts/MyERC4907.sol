// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./lib/ERC4907.sol";

contract MyERC4907 is ERC4907 {

    constructor(string memory name, string memory symbol)
     ERC4907(name,symbol)
     {         
     }

    function mint(uint256 tokenId, address to) public {
        _mint(to, tokenId);
    }

}