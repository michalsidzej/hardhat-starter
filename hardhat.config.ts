import '@nomicfoundation/hardhat-toolbox'

import * as dotenv from 'dotenv'
import { HardhatUserConfig } from 'hardhat/config'

dotenv.config()

const config: HardhatUserConfig = {
  solidity: '0.8.17',
}

export default config
