# Hardware Requirements for Stereum Ethereum Node Setup

This guide outlines the necessary hardware requirements for setting up a Stereum Ethereum staking node. The requirements are categorized into two sections: Node Server Hardware and Launcher Machine Hardware.

## Node Server Hardware Requirements {#node-server-hardware}

The hardware requirements will change over time as network upgrades are implemented and will heavily rely on the configuration of the node.

### Operating Systems Supported {#operating-systems-supported}:
- Ubuntu 22.04

### CPU {#cpu}
- **Minimum**: 8 cores
- **Recommended**: 16 cores

A higher core count improves the node's ability to handle multiple threads and processes simultaneously, which is crucial for maintaining network connections and processing transactions efficiently.

### Storage {#storage}
- **Minimum**: 1 TB SSD for a staking full node
- **Recommended**: 2 TB or more SSD

Fast storage is critical for blockchain data, which grows continuously. **SSDs are mandatory** for their quicker data access speeds, which enhance the overall sync performance of the node. For those planning to run an archive node, which retains all historical state changes, it is important to note that this will require multiple terabytes of SSD storage, potentially exceeding 12 TB as the blockchain history grows.

### Memory {#memory}
- **Minimum**: 16 GB RAM
- **Recommended**: 32 GB RAM

More RAM allows for better handling of the state and ledger, reducing the time spent swapping data between RAM and storage, which is vital for maintaining peak node performance.

### Network {#network}
- **Minimum**: Broadband Connection, 10 Mbit/s
- **Recommended**: Broadband Connection, 25 Mbit/s or higher

A faster internet connection ensures that the node stays consistently synced with the blockchain network, minimizing the latency in block propagation and reception.

## Launcher Machine Hardware Requirements {#launcher-machine-hardware}

The launcher is used to connect, install, and manage the node. It is less demanding in terms of hardware and can be operated on standard consumer hardware.

### Operating Systems Supported {#launcher-operating-systems-supported}:
- Windows
- MacOS
- Linux

### Minimum Hardware {#minimum-launcher-hardware}:
- CPU: 2 cores
- RAM: 4 GB
- Storage: 100 GB (HDD or SSD)
- Network: Broadband internet connection with at least 5 Mbit/s

While the launcher machine does not require high-performance hardware, ensuring it has a reliable internet connection and sufficient resources to run smoothly will facilitate easier management of the node setup.
