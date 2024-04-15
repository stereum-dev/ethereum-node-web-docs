import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Lido OBOL-SDVTM Guide


## Lido SDVTM Node Operator Setup

### Part 1 - Node Installation

1. **Launch Stereum**: Open the Stereum Launcher by clicking on its icon.
2. **Log into Your Server**: Enter your credentials to log in.
3. **Select Installation Option**: Choose the "One Click Installation" option.
4. **Choose Network**: Select the "Holesky" network from the available options.
5. **Select Preset**: Click on the preset icon that represents Lido OBOL-SDVTM and proceed to the next step.
6. **Customize Configuration**: Make any necessary customizations to your node's configuration.
7. **Review Configuration**: Carefully review your node's installed configuration to ensure everything is correct.
8. **Begin Installation**: Initiate the installation process.
9. **Installation Completion**: The installation is finished once all node components, except Obol, are active. This can be verified in the task manager, located at the bottom left of the Stereum launcher.
10. **Check Logs**: After installation, check the logs of the Execution, Consensus, and Validator Clients for any **persistent errors** or important messages. You can use the respective client "Log" command button in the Stereum Node Page to access the logs. Shortly after startup, the logs should indicate that the node has begun syncing in the Consensus and/or Execution client.
11. **Wait for Node Synchronization**: The node installation typically completes in a few minutes, at which point the sync process begins. This process is fully automated and requires no further input. Depending on your hardware, syncing can take several hours or more.

### Part 2 - ENR Integration and Cluster Coordination

**Note**: If you were invited to join the upcoming Lido x Obol Testnet, you will receive an ENR. Ensure you have this for the following steps.

<Tabs
  defaultValue="participant"
  values={[
    {label: 'Cluster Leader', value: 'clusterLeader'},
    {label: 'Participant', value: 'participant'},
  ]}>

<TabItem value="participant">

1. **Verify Node Sync**: Ensure the node is fully synced by checking logs or the synchronization widget.
2. **Navigate to Header**: Click the Obol logo in the header.
3. **Import ENR**: Import the ENR you received from Lido into the node.
4. **Open Launchpad**: Open the Obol Holesky launchpad in the browser via the button in the modal. Leave the modal open.
5. **Connect Wallet**: Connect your cryptocurrency wallet.
6. **View Dashboard**: Click "Dashboards" in the header.
7. **Find Cluster**: Locate the cluster you were invited to.
8. **Sign Message**: Sign the message.
9. **Wait for Completion**: Wait for all participants to also sign the message.

</TabItem>

<TabItem value="clusterLeader">

1. **Verify Node Sync**: Ensure the node is fully synced by checking logs or the synchronization widget.
2. **Navigate to Header**: Click the Obol logo in the header.
3. **Import ENR**: Import the ENR you received from Lido into the node.    
4. **Open Launchpad**: Access the Obol Holesky launchpad via the button in the modal. Keep the modal open in Stereum.
5. **Connect Wallet**: Connect your cryptocurrency wallet.
6. **Initiate Cluster Creation**: Scroll down, under "Create a Distributed Validator" select "Create a cluster with a group" and click "Get Started".
7. **Confirm Risks**: Read through the advisory pages and confirm risks until you reach the "Configure Cluster" page.    
8. **Enter Node Details**: Provide details such as cluster name, size, address, and ENS.
9. **Skip Validator Selection**: Skip the number of validator selection.
10. **Input ENR**: Paste the ENR from the Stereum Obol Modal into the "What is your Charon Client's ENR?" section.
11. **Configure Withdrawals**: For withdrawal configuration, click "Use my address" for both principal address and fee recipient.
12. **Create Configuration**: Click "Create Cluster Configuration" and proceed to the "Confirm Configuration" page.
13. **Confirm Details**: Double-check all details, click the checkbox under "Confirm Details" and proceed with "Confirm & Sign".
14. **Sign Request**: Sign the signature request with your connected wallet.
15. **Success Confirmation**: You should see a cluster success message. Click "Dashboards" in the header to proceed.
16. **View Cluster**: See the created cluster by clicking it to view its current status.
17. **Wait for Signatures**: Wait for all participants to also sign the message.

</TabItem>

</Tabs>


### Part 3 - DKG Ceremony

1. **Coordinate with Participants**: All participants must have signed; coordinate the DKG ceremony to occur simultaneously.
2. **Copy Commands**: Copy the displayed commands.
3. **Open Obol Modal**: Return to Stereum and open the Obol Modal again, if it was closed. Select "Start the DKG".
4. **Execute Commands**: Paste the command into the input and click "start".
5. **Monitor Logs**: Check the displayed logs of the DKG service and wait until all participants are connected.
6. **Complete DKG**: Click "DKG finished" once all participants are connected.
7. **Secure Backup**: You will be prompted to select a path to save the backup. Choose a secure location. Verify that the files were saved as this cannot be recovered.

### Part 4 - Configuring the Lido Node Operator

1. **Activate Obol Charon Service**: Ensure the Obol Charon service is turned on and its status is green.
2. **Monitor Logs**: Check the Obol Charon service logs for any errors and monitor connected/non-connected peers.
3. **Access Staking Page**: Go to the staking page in Stereum.
4. **Locate Keys**: Find `keystore-0.json` & `keystore-0.txt` in the `validator_keys` folder in your saved backup folder.
5. **Import Keys**: Drag and drop `keystore-0.json` & `keystore-0.txt` into the staking page. A public key should be displayed under "Insert Validator Key".
6. **Select Lodestar**: Choose the `Lodestar` option in the interface.
7. **Import Validator**: You will be prompted to enter a password, proceed by leaving the password field empty, as you have imported it with the `.txt` file.
8. **Slashing Protection**: When prompted for importing a slashing protection database, select "no", then click "import".
9. **Wait for Import**: Wait for the validator to be fully imported.
10. **Check Node Status**: Ensure the status remains grey; access the node page to confirm all services are running.
11. **Configure Ejector Service**: Access the settings page of the validator ejector service.
12. **Edit Settings**: Update your `Staking Module ID` & `Operator ID`. Click "Confirm & Restart".
13. **Verify Changes**: Reopen the settings page of the validator ejector service, enter Expert Mode, and verify the edits were applied.
14. **Completion**: Congratulations, you are now a Lido x Obol Node Operator.


## Node Migration 

GUIDE COMING SOON!
