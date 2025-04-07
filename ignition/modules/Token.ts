import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const TokenModule = buildModule("TokenModule", (m) => {
  const token = m.contract("Floppy");

  return { token };
});

export default TokenModule;