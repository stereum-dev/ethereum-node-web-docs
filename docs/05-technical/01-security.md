# Security

## Launcher

The launcher, operating on your local machine, does not retain any secret data. Each time you log in to your node, you must always input your password. In the case of using SSH keys, the launcher only stores the path to your private key, not the key itself.

## Node

### keystore.json
If you are running a Staking-Node the keystore.json file is stored on your server. The path depends on which validator-clients you are using and may vary accordingly.

### JSON Web Token
The JWT token required for communication between the execution and the consensus client is stored on your server. The path depends on which clients you are using and may vary accordingly.