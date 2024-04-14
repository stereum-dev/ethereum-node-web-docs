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


## Choosing the Installation Type

- Once the network is selected, you can choose your use case by selecting from a variety of presented options, each tailored for different operational roles such as staking, archive nodes, or specific network services.

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


