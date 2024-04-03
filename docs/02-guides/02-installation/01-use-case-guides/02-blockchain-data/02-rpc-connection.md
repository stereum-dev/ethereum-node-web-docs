# RPC Connection

Setting up an RPC (Remote Procedure Call) connection allows you to interact with a network through your own node. This can be essential for ensuring privacy, reducing reliance on third-party services, and gaining full control over network interactions. 

## How to get the RPC Endpoint of your Node

Before you can use your RPC connection, you need to retrieve the RPC URL from your node. Here’s how you can find it using Stereum:

1. Open Stereum & visit the "Control" page
2. Check if your node is synced
3. Click on the "OFF" button to open your port
4. Click on, for example, "GETH" (or your Execution Client) button to copy the RPC URL

## Configuring MetaMask

MetaMask is a popular Ethereum wallet and gateway to blockchain apps. Follow these steps to configure MetaMask to use your node's RPC endpoint:

1. Login to MetaMask, and navigate to the Network menu by clicking on the Network button.
2. Within the Network menu, click on "Add Network".
3. Fill in the network details:
   - **Network Name**: Type a name for your network (e.g., "MyNode" or "Goerli (Node)").
   - **New RPC URL**: Paste the URL you copied from the Stereum "Control" page.
   - **Chain ID**: Enter the CHAIN-ID that your node runs on (for GoerliTestnet, this is "5").
   - **Currency Symbol**: Type "GoETH" or "ETH".
   - **Block Explorer URL** (Optional): You may paste in a Block Explorer URL if you wish.
4. Click “SAVE” to finalize the new network configuration.
5. Check your wallet balance to confirm that the RPC endpoint is functioning properly; you should see your balance if you own any currency.
6. You are now ready to send transactions through your own node via MetaMask. Remember to turn your port "ON" after you finish to close it for security.
