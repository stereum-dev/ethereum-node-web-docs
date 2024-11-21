import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Server Configuration {#mandatory-configuration}

## Passwordless Sudo Setup

1. Log into your server with the credentials created during setup.
2. Run `sudo visudo` and add the following line under `includedir /etc/sudoers.d`: `<username> ALL=(ALL) NOPASSWD: ALL`. Replace `<username>` with your actual username.
3. Verify your passwordless sudo setup by running `sudo -l`. If no password is requested, it's configured correctly and you are ready to use Stereum.
