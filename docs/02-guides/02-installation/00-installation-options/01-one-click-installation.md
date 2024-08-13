# One Click Installation Guide

The One Click Installation process for Stereum is designed to facilitate a seamless setup of your node is recommended for beginners as it simplifies the node setup process. Here’s a short overview reflecting a typical node configuration process with Stereum:

## Network Selection

- The first step in the One Click Installation is selecting your preferred network.
- Click on the dropdown menu to reveal all available networks:
  - Ethereum Mainnet
  - Goerli Testnet
  - Sepolia Testnet
  - Gnosis Mainnet
  - Holesky Testnet
- Choose the network that aligns with your intended use case. The choice of network will determine the available presets and configuration settings for your node setup.

## One-Click Installation Options

During the One-Click Installation process, you will choose your use case based on the available options:

- **Staking (Ethereum)**: Set up a node designed for Ethereum staking purposes.
  - [Ethereum Solo Staking Guide](../01-use-case-guides/01-staking/00-ethereum/01-ethereum-solo-staking.md)

- **Staking (Gnosis)**: Set up a node designed for Gnosis staking purposes. 
  - [Gnosis Staking Guide](../01-use-case-guides/01-staking/01-gnosis/01-gnosis-staking.md)

- **MEV-Boosted Staking (Ethereum)**: Configure a Ethereum node optimized for maximizing MEV (Miner Extractable Value) opportunities.
  - [MEV-Boosted Guide](../01-use-case-guides/01-staking/00-ethereum/03-ethereum-solo-staking-with-mev-boost.md)

- **SSV Network**: Deploy an SSV (Secret Shared Validators) network node. 
  - [SSV Network Guide](../01-use-case-guides/03-node-operator/ssv-network/01-ssv-network-node-operator.md)

- **Archive**: Create an archive node that maintains the complete history of the Ethereum blockchain - **Guide is currently work in progress**
  - [Archive Node Guide](../01-use-case-guides/02-blockchain-data/01-installation-archive-node.md)

- **Obol**: Install a node to participate in the Obol Network, designed for distributed validator technology - **Guide is currently work in progress**
  - [Obol Network Guide](../01-use-case-guides/01-staking/00-ethereum/04-obol-clustered-ethereum-solo-staking.md)

- **ARM**: Specialized installation for ARM architecture hardware, typically used for lower-power devices - **Guide is currently work in progress**
  - [ARM Architecture Guide](../01-use-case-guides/01-staking/00-ethereum/02-ethereum-solo-staking-on-ARM.md)

- **Lido x Obol SDVTM (Testnet)**: Take part in the testnet & install a node that combines Lido and Obol technologies to decentralize the Staking Pool's Node Operator set. 
  - [Lido x Obol SDVTM Guide](../01-use-case-guides/03-node-operator/lido/01-lido-sdvtm-obol.md)


After selecting your use case and pressing `Start`, a random client selection will be taken to serve your use case.


## Installation Customization

- Customize your installation settings:
  - **Installed Services**: Choose the Ethereum clients and services you wish to run.
  - **Additional Options**: Set the installation path and whether to start the client automatically after installation.

## Synchronization Settings

Choose how your node clients will synchronize their blockchain data. You have the following options:

- **Genesis Sync**: Synchronizes the node from the very first block, processing the entire blockchain history.

- **Recommended Checkpoint Sync**: Synchronizes the node from a stable and trusted checkpoint provided by Stereum. You can select from a list of recommended checkpoints.

- **Custom Checkpoint Sync**: Allows you to input a custom checkpoint URL to synchronize your node from a specific point in the blockchain. This is suitable if you have a particular source for checkpoints or wish to use a third-party service.

Decide on a synchronization method based on your needs and the desired speed of setup. The Recommended Checkpoint Sync is generally the quickest and easiest for most users.

## Installed Services List and Installation

- Review a summary of the selected services and configurations.
- Verify the services, categories, and installation paths chosen for your node.
- Click `Next` to begin the installation process.

Once the installation is underway, the system will typically display a progress screen. The intial node installation usually completes in a few minutes, after which the (outstanding) sync process starts. 

### Important Notes

- Verify that your server meets the necessary specifications for the services you wish to run.
- Check that the installation paths have sufficient storage and are accessible to the Stereum Launcher.
- Faster synchronization methods like `Checkpoint Sync` may be available and can expedite the node synchronization process.

After completing these steps, the installation will proceed, resulting in a fully functional node set up according to your preferences. Depending on the chosen options and hardware performance, the syncing process can take several hours or even more.


