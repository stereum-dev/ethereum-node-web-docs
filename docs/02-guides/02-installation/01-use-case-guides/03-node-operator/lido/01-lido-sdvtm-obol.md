# Lido OBOL-SDVTM Guide 




## Part 1 - Node Installation

1. **Launch Stereum**: Open the Stereum Launcher by clicking on its icon.

2. **Log into Your Server**: Enter your credentials to log in.

3. **Select Installation Option**: Choose the "One Click Installation" option.

4. **Choose Network**: Select the "Holesky" network from the available options.

5. **Select Preset**: Click on the preset icon that represents Lido OBOL-SDVTM and proceed to the next step.

6. **Customize Configuration**: Make any necessary customizations to your node's configuration.

7. **Review Configuration**: Carefully review your node's installed configuration to ensure everything is correct.

8. **Begin Installation**: Initiate the installation process.

9. **Installation Completion**: The installation is finished once all node components, except Obol are active. This can be verified in the task manager, located at the bottom left of the Stereum launcher.

10. **Check Logs**: After installation, check the logs of the Execution, Consensus, and Validator Clients for any **persistent errors** or important messages. You can use the respective client "Log" command button in the Stereum Node Page to access the logs. Shortly after startup, the logs should indicate that the node has begun syncing in the Consensus and/or Execution client.

11. **Wait for Node Synchronization**: The node installation typically completes in a few minutes, at which point the sync process begins. This process is fully automated and requires no further input. Depending on your hardware, syncing can take several hours or more.






## Part 2 -  enr


NOTE: If you were invited to join the upcoming Lido x Obol Testnet, you will receive a ENR. Make sure you have this at your disposal in the following steps.

1. Make sure Node is synced (check logs / widget again)
2. Navigate to header, click obol logo
3. Import the ENR you received by Lido into the node /// Generate aENR



CLUSTER COORDINATOR 

1. Open the Obol Holesky launchpad in the browser via the button in the modal. Leave the modal in Stereum open. 
2. Connect Wallet
3. Scroll down, under "Create a Distributed Validator" select "Create a cluster with a group" and click "Get Started"
4. Read through the advisory pages, confirm risks until reaching "Configure Cluster" Page
5. Enter the node details (cluster name, size, address and ens)
6. Skip the Number of Validator selection
7. Copy the ENR from the Stereum Obol Modal into the section for "Whats is your Charon Client's ENR?"
8. For Withdrawal Configuration - click "Use my address" for both Principal Address as well as fee recipient
9. Click "Create Cluster Configuration" and proceed to the "Confirm Configuration" page
10. Double Check all details in the overview, click the checkbox under "Confirm Details" & and proceed with "Confirm & Sign"
11. Sign the signature request with the connected wallet, be careful when doing so!
12. Should see a cluster sucess message. Click Dashboards in the header to proceed. 
13. Should now see the created cluster, click it to see it current status.
14. To proceed, you will have to wait for all participants to also sign the message.


CLUSTER PARTICIPANT

1. Open the Obol Holesky launchpad in the browser via the button in the modal. Leave the modal in Stereum open. 
2. Connect your wallet
3. Click Dashboards in the header. 
4. Should the cluster, you were invited to.
5. Sign the message
6. To proceed, you will have to wait for all participants to also sign the message.



## Part 3 - DKG Ceremony

1. All participants made their signature -> process on website will continue to the DKG ceremony. Have to coordinate with other participants to do it around the same time. Make sure to be in contact withthem
2. Copy the displayed commands
3. Return to Stereum, open the Obol Modal again, if you should have closed it. You should see as a third option "Start the DKG", click the "Start" button
4. Past the command into the input, click "start"
5. Check the displayed logs of the DKG service and wait till all participants are connected
6. As soon as all participants are connected, you can click DKG finished 
7. You will be prompted to select a path to save the backup. Make sure to pick something secure and keep this safe. THIS CAN NOT BE RECOVERED. So check if the files actually were saved, you will need them in a step following shortly.




## Part 4 - Configuring the Lido Node Operator

1. Turn on the Obol Charon service. The status of the service should turn green.
2. Check the Obol Charon service logs for any error. Here you should also be able to monitor connected / non-connected peers. 
3. Access Staking page in Stereum.
4. Locate `keystore-0.json` & `keystore-0.txt` files, located in `validator_keys` folder in the saved backup folder
5. Drag `keystore-0.json` & `keystore-0.txt`   file into staking page. A public should be display under "Insert Validator Key" 
6. Click the `Lodestar` option in the interface
7. You should be prompted to enter a password, proceed by leaving the password field empty. You already imported it with the .txt file. 
8. When prompted for importing a slashing protection database, select "no", click "import" button
9. wait for the validator to be imported
10. Status should stay grey, access the node page
10. Make sure that all services are running. 
11. Access the settings page of the validator ejector service
12. Edit your `Staking Module ID` & `Operator ID`. Click "Confirm & Restart" after. 
13. Open settings page of the validator ejector service again & open the Expert Mode. Locate the line for `Staking Module ID` & `Operator ID`, and make sure the edits were applied. 
14. This is it. You are now a Lido X Obol Node Operator








