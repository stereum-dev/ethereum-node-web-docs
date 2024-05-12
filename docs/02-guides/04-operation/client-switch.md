# Client Switch 

## Stereum Client Switch Guide

1. **Access the Node Page**: Navigate to the "Node" page via the header on the Stereum interface.
2. **Navigate to Edit Node**: Find the "Edit Node" section by clicking the button on the left side of the page.
3. **Choose a Client to Switch**: Select either the Execution, Consensus, or Validator Client that you intend to switch. Note that switching validator clients will delete the validator keys from the machine, necessitating a re-import into the new client. A menu with various options will appear, from which you should select "Switch Client".
4. **Select a New Client**: A modal will appear, allowing you to choose the new client you want to switch to.
5. **Sync Options (if available)**: Choose your preferred method for syncing the new client.
6. **Confirm the Configuration**: Confirm your configuration choices by pressing "Confirm" within the modal.
7. **Final Confirmation**: Press "Confirm Changes" on the right to initiate the client switch process.
8. **Monitor the Switch**: The switching process will begin, and you will not be able to navigate within the application during this time. Monitor the progress in the task manager located at the bottom left of the application. The process is complete when the newly switched-to client restarts, after which it will take a few minutes for the client to commence operations.
9. **Complete the Client Switch**: Confirm that the new client is operational and check for any initial errors in the logs. Your node should now be successfully switched to the new client configuration. Congratulations on successfully switching the client in your Stereum setup!
