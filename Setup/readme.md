# Lab VM Setup Guide

## Create VM

We are using this image and vm size because it supports nested virtualization used for Hyper-V and WSL2 Support

Script `create-lab-vm.azcli`:

```bash
rnd=$RANDOM
loc=westeurope
grp=ng-dev
vmname=labvm-$rnd
user=ng-devlabadmin
pwd=Lab@dmin1233

az group create -n $grp -l $loc

az vm create -g $grp -n $vmname --admin-username $user --admin-password $pwd --image MicrosoftWindowsDesktop:Windows-10:20h2-pro:19042.746.2101092352 --size Stan
```

> Note: You could also execute `create-lab-vm.sh` or run the following remote script in Cloud Shell

```bash
curl https://raw.githubusercontent.com/arambazamba/ng-dev/main/Setup/create-lab-vm.sh | bash
```

![create-labvm](_images/create-lab-vm.jpg)

> Note: In order for Docker to work on a Windows 10 host you need to install Hyper-V or use Windows Subsystem for Linux 2 (WSL2). A detailed Setup Guide can be found [here](https://github.com/ARambazamba/ClassSetup)

## Connect to VM

Go to Ressource Group `ng-dev` and connect to VM using RDP and the credentials that you have used in the script:

Download RDP File:

![download-rdp](_images/download-rdp.jpg)

Optional - Disable Login:

![disable-login](_images/disable-login.jpg)

Sign In & Remember:

![connect-rdp](_images/trust-vm.jpg)

Credentials:

```
user=ng-devlabadmin
pwd=Lab@dmin1233
```

![sign-in.jpg](_images/sign-in.jpg)

Accept Settings:

![accept-settings](_images/accept-settings.jpg)

## Install Software

To install Software run the script `setup-angular-dev.ps1` from an elevated PowerShell prompt:

![run-as](_images/run-as.jpg)

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force;
Invoke-Expression ((New-Object System.Net.WebClient).DownloadString('https://raw.githubusercontent.com/arambazamba/ng-dev/main/Setup/setup-angular-dev.ps1'))
```

> Note: This script will run for approx 20 min. No need to wait! In the meantime you can continue to fork and clone my repo as described in the next section.

Congratulations you have completed the base setup of a labs vm!

---

## Fork & Clone Class Repo and set Github requirements

Set User and E-Mail in order to be able to commit to git:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@yourdomain.com"
```

Go to `https://github.com/ARambazamba/az-204` and fork the repo

![forking-wf](_images/fork.jpg)

The forking-workflow allows you to commit your changes to your fork of the repo and still get updates on the repo

![forking-wf](_images/forking-workflow.jpg)

Clone Class Repo:

```bash
git clone https://github.com/Student01/ng-dev
```

> Note: If you have forked the class repo clone your own fork, otherwise use https://github.com/ARambazamba/ng-dev
