# Stereum Server Management Guide

The Stereum Server Management interface is your central hub for managing and connecting to Stereum Node servers.

## Overview

When you launch Stereum, the main window is split into two panels:
- Left panel: Displays saved server connections with a list of servers you've configured.
- Right panel: Hosts various tabs for server options, accessible by clicking the corresponding icons at the top.

## Server Login {#server-login}

- `Server Name`: Enter the name you wish to identify the server by.
- `IP or Hostname`: Provide the server's IP address or hostname.
- `Port`: The port to connect to, typically port 22 for SSH.
- `Username`: The username for the server login.
- `Password`: Enter the password associated with the username.
- `Use SSH Key`: Toggle this to use an SSH key for login instead of a password.
- Click `Login` to establish a connection.

## Server Information {#server-info}

- `Server Name`: Shows the name given to the server.
- `Machine Name`: Displays the name of the machine as recognized on the network.
- `IP or Hostname`: The IP address or hostname of the server.
- `Port`: The port number used for connections, typically 22.
- `Username`: The current username used for connections.
- `Change Avatar`: Allows you to change the avatar image for the server.
- `Change / Reset Password`: Option to change or reset the current password.


## SSH Key Management {#ssh-key-management}

- `Create a New Key`: Start the process of creating a new SSH key pair.
- `Add an Existing Key`: Import an existing SSH key pair.


### SSH Key Generation Screen {#key-generation}

- `Key Type`: Select the type of SSH key to generate (e.g., RSA, ECDSA, ED25519).
- `Save Path`: Define where to save the new SSH key on your local machine.
- `SSH Password`: Set a password for the SSH key for added security (optional).
- `Unlock Expert Options`: Provides additional options for customizing the SSH key, such as cipher type and bit amount.


## Operating System Updates {#os-updates}

- `Operating System Version`: Displays the current version of the OS installed on the server.
- `Available Server OS Updates`: Lists any updates that are available for the server's operating system.
- `Update All`: Button to initiate the update of all listed updates.
- `Auto Update`: Display the status of the toggle switch to enable or disable automatic updates in the (Node Update Settings Screen)

## Server Settings

### Node & Server Settings {#node-settings}

- `Automated Node Updates`: A toggle to turn automated updates for the node on or off, allowing for completly automated updates if preferred.


## Welcome Screen & Installation Options

When you start Stereum for the first time or to set up a new node, you'll encounter the Welcome Screen, which presents you with three primary installation options:

### [One Click Installation](docs/02-guides/02-installation/00-installation-options/01-one-click-installation.md)

- This option is designed for users who want a quick and hassle-free node setup.
- It will install a preset of the Stereum server with default settings, which are suitable for most users.
- To proceed with this installation, simply click the `One Click Installation` button, and follow the prompts to select your desired options and configurations.

### [Custom Installation](docs/02-guides/02-installation/00-installation-options/02-custom-installation.md)

- For users with specific requirements or those who wish to configure advanced settings.
- Custom Installation allows you to select different components, configure network settings, and set up monitoring tools according to your preferences.
- To start, click on `Custom Installation`. After installation, you can customize the node settings via the "Edit Node" page.

### [Config Import](docs/02-guides/02-installation/00-installation-options/03-config-import.md)

- If you have a pre-existing configuration file from another Stereum setup, you can import it to replicate the same settings.
- This is ideal when moving to a new machine or restoring a setup.
- Click on `Config Import`, follow the prompots to select your configuration file and import the settings.

## Additional Tips

- Ensure that your server meets the minimum requirements before installation.
- Always double-check network settings, such as IP addresses and port numbers, to avoid conflicts.
- Consider setting up SSH keys during installation for a more secure connection to your server.