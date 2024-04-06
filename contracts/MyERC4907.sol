// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./lib/ERC4907.sol";


contract MyERC4907 is ERC4907 {

    uint256 private _totalSupply;
    constructor(string memory name, string memory symbol)
     ERC4907(name,symbol)
     {         
     }

    function mint(address to) public {
        _totalSupply++;
        uint256 _tokenId = _totalSupply;
        _mint(to, _tokenId);
    }

}