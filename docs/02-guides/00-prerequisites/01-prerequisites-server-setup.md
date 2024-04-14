import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Node Server Setup

## Ubuntu Setup

### Part 1: Create a Bootable USB Stick {#create-bootable-usb}

<Tabs
  defaultValue="windows"
  values={[
    {label: 'macOS', value: 'mac'},
    {label: 'Windows', value: 'windows'},
    {label: 'Linux', value: 'linux'},
  ]}>

  <TabItem value="windows">

  1. Visit the Ubuntu Server download page: [Ubuntu Server](https://ubuntu.com/download/server). Click on the version labeled 'Ubuntu Server 22.04 LTS' to download it.
  2. Download Rufus to create a bootable USB drive from this page: [Rufus](https://rufus.ie/).
  3. Open Rufus once it has downloaded.
  4. Insert your USB stick (minimum 4 GB) into the computer. Rufus should detect your USB stick automatically. If it doesn't appear, select it manually from the 'Device' dropdown menu in Rufus.
  5. In Rufus, next to 'Boot selection', click on the 'SELECT' button. Navigate to where you saved your Ubuntu Server download (the ISO file) and select it.
  6. Leave all other settings in Rufus at their default values. Press 'START' to begin creating your bootable USB.
  7. A warning may pop up about Rufus changing the ISO image mode. Confirm that you want to continue in 'ISO Image mode' by clicking 'OK'.
  8. The creation of the bootable USB will begin. This process may take around 10 minutes, depending on your computer's capabilities.
  9. Once Rufus confirms that the process is complete, you can close Rufus and remove your USB stick.
  10. Your Ubuntu Server bootable USB stick is now ready. Move on to the server setup by following the guide in Part 2 below.

  </TabItem>

  <TabItem value="mac">

  1. Go to the Ubuntu Server download page: [Ubuntu Server](https://ubuntu.com/download/server) and download the version labeled 'Ubuntu Server 22.04 LTS'.
  2. Insert the USB stick into your Mac. Check that it has at least 2 GB of space available.
  3. Open the 'Disk Utility' application found in the 'Utilities' folder within your 'Applications' folder.
  4. In 'Disk Utility', select your USB stick from the devices listed on the left, then click on the 'Erase' button at the top of the window.
  5. Name your USB stick something memorable, select 'Mac OS Extended (Journaled)' as the format, and then click 'Erase' to start the process.
  6. Once the erasure is complete, close 'Disk Utility'.
  7. Open the 'Terminal' application, also found in the 'Utilities' folder.
  8. Convert your downloaded ISO file to an IMG format by typing the following command in Terminal:
     ```
     hdiutil convert -format UDRW -o /path/to/your_new.img /path/to/downloaded.iso
     ```
     Replace '/path/to/your_new.img' and '/path/to/downloaded.iso' with the actual paths to where you want the new IMG file saved and where your downloaded ISO file is located.
  9. Find the device identifier for your USB stick by typing `diskutil list` in Terminal.
  10. Unmount your USB device with:
     ```
     diskutil unmountDisk /dev/diskN
     ```
     Replace 'diskN' with the identifier from step 9.
  11. Write the IMG file to your USB stick with the following command:
     ```
     sudo dd if=/path/to/your_new.img of=/dev/rdiskN bs=1m
     ```
     Again, replace '/path/to/your_new.img' and '/dev/rdiskN' with the appropriate paths and identifiers.
  12. When the process is complete, you can remove your USB stick.
  13. Your bootable USB stick with Ubuntu Server is ready. Proceed to the next setup phase in Part 2 below.

  </TabItem>

  <TabItem value="linux">
    ToDo: Detailed instructions for creating a bootable USB stick on Linux will be added here.
  </TabItem>

</Tabs>


### Part 2: Booting from USB and Installing Ubuntu {#booting-and-installing}

1. With the machine off, insert your bootable USB.
2. Turn on the machine and immediately press the F11/F12 or Delete key to open the boot menu.
3. Choose your USB as the primary boot option and save your changes.
4. At the Ubuntu boot screen, select 'Try to install Ubuntu Server'.
5. Follow the on-screen instructions to set your language, keyboard layout, and network settings.
6. Accept all defaults for proxy and mirror settings.
7. Verify that the displayed storage matches your server's specs before continuing with the installation.
8. Complete the forms for server name, username, and password. Skip Ubuntu Pro upgrade and additional snaps installation.
9. After installation, select 'Reboot Now'. Once rebooted, use `hostname -i` to note your server's IP address.

### Part 3: Mandatory Configuration {#mandatory-configuration}

1. Log into your server with the credentials created during setup.
2. Run `sudo visudo` and add the following line under `includedir /etc/sudoers.d`: 
  `<username> ALL=(ALL) NOPASSWD: ALL`
Replace `<username>` with your actual username.
3. Verify your passwordless sudo setup by running `sudo -l`. If no password is requested, it's configured correctly and you are ready to use Stereum.
