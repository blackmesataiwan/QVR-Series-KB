---
sidebar_position: 3
---

# Notes on QVR Pro migration

**If you want to migrate QVR Pro from old NAS to new one, you should pay attention to the following :**

- Make sure that the QTS version of your new QNAP NAS is the same as the original one.
- **<font color="red">Mutual migration of NAS with different CPU architecture is currently not supported.</font>**<br/>
  **<font color="red">(Ex: x86 -> ARM64, ARM64 -> x86)</font>**
- QVR Pro license cannot be transferred, you need to purchase a new license.

:::info

To check the CPU architecture, you can refer to the CPU Architecture column on the model specifications page : 
https://www.qnap.com/go/product/
![](/assets/image(2).png) ![](/assets/image(3).png)

:::

### Same CPU Architecture :

**If you are migrating to a NAS with the <mark>same CPU architecture</mark>, you can follow the steps below :**

1. Check if the source and target QNAP NAS support migration : [https://www.qnap.com/go/nas-migration](https://www.qnap.com/zh-tw/nas-migration)
2. Turn off the power of the QNAP NAS and transfer the hard drive from the old QNAP NAS to the new QNAP NAS.
3. Turn on the power of the new QNAP NAS and re-set the network and other settings as needed.
4. (Option) Activate new QVR Pro Licenses.



### Different CPU Architecture :

**If you want to migrate QVR Pro from QNAP NAS with a <mark>different CPU architecture</mark>, currently need to removed all data of QVR Pro and reinstalled it. If you want to keep the video record, you need to back up the recording file of "QVI_Format" folder before re-importing it into QVR Pro, please refer to the following key points :**

Backup :

- Export camera connection settings to csv file.
- Backup "QVI" format of recording file, path is in **"/QVRProRecording/File/QVI_Format".**

:::caution

Please note that the entire complete **"QVI_Format"** folder must be backed up.

:::

:::caution

Because x86 and ARM64 databases are different, the backup files of QVR Pro settings  cannot be restored to each other. You could only export the camera connection settings and re-import.

:::

:::danger

The **"/QVRProRecording/File"** folder will disappear when QVR Pro is removed or disabled. If you want to back up the files in this path, you must copy them to another folder or device.
For the detail of QVR Pro system folders, please refer to : https://qvrtechdoc.gitbook.io/qvr-product-technical-doc/qvr-pro-elite/what-does-qvr-pro-folders-do

:::

Remove **(Make sure you have completed the backup of the recorded files and settings)**  :

- Remove QVR Pro App from App Center.
- Remove "/QVRProAppData" share folder and all data.
- Remove "/QVRProDB" share folder and all data.
- Remove "/QVRProSpace{Volume*_*Name}" share folder and all data.

Recovery :

- Install QVR Pro App from App Center.
- Initialize QVR Pro.
- Setup recording space.
- Import camera connection settings from csv file.
- (Option) Re-setting events, schedules, and other settings.
- Import recording files from your backed up QVI files.

:::caution

When importing the recording file, please select the **QVI_Format** top-level folder, like this picture : 
![](/assets/image(4).png)

:::