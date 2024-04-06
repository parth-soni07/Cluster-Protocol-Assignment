//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {ERC404} from "./lib/ERC404.sol";
import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";

contract MyERC404 is ERC404 {
    using Strings for uint256;

    string public baseTokenURI;
    address public _owner = msg.sender;

    constructor() ERC404("MyERC404", "ME404", 18, 10000, _owner) {
        balanceOf[_owner] = 10000 * 10 ** 18;
    }

    function setBaseTokenURI(string memory _baseTokenURI) public onlyOwner {
        baseTokenURI = _baseTokenURI;
    }

    function setNameSymbol(
        string memory _name,
        string memory _symbol
    ) public onlyOwner {
        _setNameSymbol(_name, _symbol);
    }

    function tokenURI(uint256 id) public view override returns (string memory) {
        if (bytes(baseTokenURI).length > 0) {
            return string.concat(id.toString(), baseTokenURI);
        }
        return "";
    }
}