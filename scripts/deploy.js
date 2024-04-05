async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
    
    const myerc404 = await ethers.getContractFactory("MyERC404");
    const MYERC404 = await myerc404.deploy();
    console.log("MYERC404 address:", MYERC404.target);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
