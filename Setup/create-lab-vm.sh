rnd=$RANDOM
loc=westeurope
grp=ng-dev
vmname=labvm-$rnd
user=ng-devlabadmin
pwd=Lab@dmin1233

az group create -n $grp -l $loc

az vm create -g $grp -n $vmname --admin-username $user --admin-password $pwd --image  MicrosoftWindowsDesktop:Windows-10:21h1-pro:19043.1348.2111032252 --size Standard_E2s_v3

az vm auto-shutdown -g $grp -n $vmname --time 1830