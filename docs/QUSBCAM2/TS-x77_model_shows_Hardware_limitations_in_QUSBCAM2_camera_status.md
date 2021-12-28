---
sidebar_position: 1
---

# When TS-877/TS-1277 model shows "Hardware limitations" in QUSBCAM2 camera status

When you insert multiple USB cameras into TS-877/TS-1277, the status shows "Hardware limitations sometimes prevent multiple USB cameras from working properly.", as shown in the screenshot below:

!["Hardware limitations sometimes prevent multiple USB cameras from working properly." message](/assets/QUSBCAM2.png)

This is because the USB Port use of the same PCI-E Bridge can only connect to one USB Camera at the same time, if more than two USB Cameras are connected, they will conflict.

If this issue occurs, please check whether the USB Camera is connected to the same PCI-E group, you can refer to the information below : 

![TS-1277 USB Port](/assets/QUSBCAM2_TS-x77.png)

| PCI-E Group | Group 1    |
| :---------: | :--------: |
| Group 1     | 1, 2, 4, 5 |
| Group 2     | 3, 6, 7, 8 |
