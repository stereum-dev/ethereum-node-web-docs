User sets up the node via a desktop (Linux, MacOS, Windows) and receives optionally alerts on a smartphone (iOS, Android).

<img href="https://user-images.githubusercontent.com/54934211/178484451-ea7835cc-823a-4e72-a0a2-e6373bb3a9ea.png"></img><img src="https://user-images.githubusercontent.com/54934211/178484451-ea7835cc-823a-4e72-a0a2-e6373bb3a9ea.png" alt="Interaction Overview Diagram" width="300" height="auto"></img><br/>
[Interaction Overview Diagram](https://user-images.githubusercontent.com/54934211/178484451-ea7835cc-823a-4e72-a0a2-e6373bb3a9ea.png)

<br/>

## Launcher
The Stereum Launcher GUI is developed using [Vue.js](https://vuejs.org/) for the frontend, which is a JavaScript framework.

Source of `Launcher` is maintained in `./launcher` directory: https://github.com/stereum-dev/ethereum-node/tree/main/launcher

To package and deploy our Stereum Launcher as a standalone Desktop-App we use the [Electron Builder](https://www.electronjs.org/).
see also: 
- `./launcher/package.json`
- [Release Management](Release-Management)
- get the builds here: https://github.com/stereum-dev/ethereum-node/releases


#### SSH/login: 
The Launcher connects via SSH to a remote host, see how it works here: [SSH](SSH)

Using ssh protocol the Launcher will login into your remote host with the credentials you provided in the login-screen. Then being logged in, it runs commands only users would run, e. g.:
- Setup of a node: Write service configuration files according to user input ([more info](Stereum-Ansible-Roles#setup))
- Open SSH ports: Make Grafana, etc. easily accessible to the user


#### automated-setup:
when logged-in and connected via ssh to your remote-host, stereum-launcher, configures your remote-System based on the choices you made in the installer-menu of the launcher-gui.
In Order to do that fully automated, the launcher uses [ansible](https://www.ansible.com/) playbooks: 
- `./controls/roles/setup`
- [default setup tasks](Stereum-Ansible-Roles#setup)
- [setup ufw firewall](Stereum-Ansible_Roles#configure-firewall)
    - ufw firewall settings are made automatic based on your current node arrangements. look it up using this command on your remote-host: `sudo ufw status`
- You can find launcher logs here: 
    - on Linux: ~/.config/stereum-launcher/logs/main.log
    - on macOS: ~/Library/Logs/stereum-launcher/main.log
    - on Windows: %USERPROFILE%\AppData\Roaming\stereum-launcher\logs\main.log

<br/>

## Services (Docker container)
Stereum uses [Docker](https://www.docker.com/) for managing the different services needed in order to run an Ethereum full node and more. Each of these services managed by Stereum got a configuration file in `/etc/stereum/services/` with all parameters needed to run this specific. This enables Stereum to stop and start services for [unattended updates](https://github.com/stereum-dev/ethereum-node/wiki/Unattended-Updates) & maintenance without the help of Launcher.

### Service configuration
Configurations of services are stored in [yaml format](https://en.wikipedia.org/wiki/YAML) as files in `/etc/stereum/services` Different services require different configuration methods and the configuration format supports passing configuration via:
- Environment variables
- Command arguments
- Shell scripts

Configuration files usually get built by Stereum Launcher, but also Ansible roles modify them in case of updates.

### Ports
Some docker containers use p2p technology to connect to networks or protocols. In order to give the service the best environment possible to work as expected sometimes ports need to be bound to the host for optimal connectivity. This happens fully automatically until Launcher supports customization of these rules for each service individually.

### Volumes
Services need to persist data in order to preserve the state of their workings. There is also a need to share secrets across services, e. g. JWT for bi-directional communication between execution & consensus client, read more on this ["The Merge: bi-directional communication for el & cl"](https://github.com/stereum-dev/ethereum-node/issues/488).
