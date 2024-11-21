import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Lido x Obol - SDVTM Guide


## Lido SDVTM Node Operator Setup


### Part 1 - Node Installation


1. **Download Stereum**: Visit stereum.com or the Stereum GitHub repository to download Stereum’s latest release.
2. **Launch Stereum**: Open the Stereum Launcher by clicking on its icon.
3. **Log into Your Server**: Enter your credentials to log in.
4. **Select Installation Option**: Choose the "One Click Installation" option.
5. **Choose Network**: Select the "Holesky" network from the available options.
6. **Select Preset**: Click on the preset icon that represents Lido OBOL-SDVTM and proceed to the next step.
7. **Customize Configuration**: After selecting the Lido OBOL-SDVTM preset, Stereum will provide you with an optimal obligatory default configuration - however, if you want to make further customizations regarding client selection and installation path, you can do so freely.
8. **Review Configuration**: Carefully review your node's installed configuration to ensure everything is correct.
9. **Begin Installation**: Initiate the installation process.
10. **Installation Completion**: The installation is finished once all core node components, excluding Obol & the Lido related components, are active. This can be verified in the task manager, located at the bottom left of the Stereum launcher. The tasks for "Listing Validators" & "Remote Validators" are expected to fail, because Obol Charon is not connected to the Validator Client yet.
11. **Check Logs**: After installation, check the logs of the Execution, Consensus, and Validator Clients for any **persistent errors** or important messages. You can use the respective client "Log" command button in the Stereum Node Page to access the logs. A few minutes after startup, the logs should indicate that the node has begun syncing in the Consensus and/or Execution client.
12. **Wait for Node Synchronization**: The node installation typically completes in a few minutes, at which point the sync process begins. This process is fully automated and requires no further input. Depending on your hardware, syncing can take several hours or more.

### Part 2 - ENR Integration and Cluster Coordination

This part can completed without having a fully synced node. 

1. **Navigate to Header**: Click the Obol logo in the header.
2. **Generate ENR**: Generate an ENR key pair, back up the private key with the modal when prompted, you will need this later.
3. **Cluster Config URL**: You will be provided a web link to confirm your cluster config by Lido. Follow the Cluster Config URL and leave the Obol modal in Stereum open.
4. **Connect Wallet**: Connect a Metamask compatible cryptocurrency wallet to the Obol Launchpad.
5. **Sign Messages**: Sign the messages.
6. **Wait for Completion**: Wait for all participants to also sign the message.


### Part 3 - DKG Ceremony

1. **Coordinate with Participants**: All participants must have signed; coordinate the DKG ceremony to occur simultaneously.
2. **Copy Commands**: Copy the displayed command. Alternatively you can paste in the Cluster Config URL (this one also includes the cluster hash)
3. **Open Obol Modal**: Return to Stereum and open the Obol Modal again, if it was closed. Select "Start the DKG".
4. **Execute Commands**: Paste the command into the input and click "start".
5. **Monitor Logs**: Check the displayed logs of the DKG service and wait until all participants are connected.
6. **Complete DKG**: Click "DKG finished" once all participants are connected.
7. **Secure Backup**: You will be prompted to select a path to save the backup. Choose a secure location. Verify that all expected files were saved, as this **cannot be recovered**.


### Part 4 - Configuring the Lido Node Operator

1. **Activate Obol Charon Service**: Now that the DKG is completed, ensure the Obol Charon service is turned on and its status is green.
2. **Monitor Logs**: Check the Obol Charon service logs for any errors and monitor connected/non-connected peers.
3. **Access Staking Page**: Go to the staking page in Stereum.
1. **Locate Keys**: Find the keystore files like: `keystore-0.json` & their related password file like: `keystore-0.txt` in the `validator_keys` folder in your saved backup folder.
2. **Import Keys**: Drag and drop the keystore JSON as well as the to the keystore related password file into the staking page. A public key should be displayed under "Insert Validator Key".
6. **Select Lodestar**: Choose the `Lodestar` option in the interface.
7. **Import Validator**: You will be prompted to enter a password, proceed by leaving the password field empty, as you have imported it with the `.txt` file.
8. **Slashing Protection Database**: When prompted for importing a slashing protection database, select "no", then click "import".
9. **Wait for Import**: Wait for the validator to be fully imported.
10. **Check Node Status**: Ensure the status remains grey; access the node page to confirm all services are running.
11. **Configure Ejector Service**: Access the settings page of the validator ejector service.
12. **Edit Settings**: Update your `Staking Module ID` & `Operator ID`. Click "Confirm & Restart".
13. **Verify Changes**: Reopen the settings page of the validator ejector service, enter Expert Mode, and verify the edits were applied.
14. **Completion**: Congratulations, you are now a Lido x Obol Node Operator.



## Node Migration 

GUIDE COMING SOON!
