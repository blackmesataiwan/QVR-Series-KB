---
sidebar_position: 5
---

# What does QVR Pro folders do?

This FAQ will provide you with an understanding of the functions of all folders in QVR Pro, refer to the following table : 

| Default Shared Folder Name    | Folder Location                           | Number             | Description                                                                                                                                   |
| ----------------------------- | ----------------------------------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| \\\QVRProAppData              | App Installed Volume                      | Only One           | Save Log & Config automatically.                                                                                                              |
| \\\QVRProAutoSnap             | App Installed Volume                      | Only One           | Save the camera’s automatic snapshot picture.                                                                                                 |
| \\\QVRProDB                   | App Installed Volume                      | Only One           | System Database.<br/><font color="red">**Caution: DON’T DELETE or EDIT, delete or edit files might let QVR Pro system broken.**</font>         |
| \\\QVRProRecording            | App Installed Volume                      | Only One           | Let user to get recording file, it will not take up NAS space. <br/><font color="red">**Caution: Read only , can’t EDITING or WRITING.**</font> |
| \\\QVRProSpace_[$Volume Name] | Created by User’s Recording Space Setting | Single or Multiple | System recording file.<br/><font color="red">**Caution: DON’T DELETE or EDIT, delete or edit files might let recording file broken.**</font>   |

### 

Detailed description:

- **QVRProAppData** is the place to store QVR Pro System logs and automatically config save.

- **QVRProAutoSnap** is the folder where automatic snapshots are stored.

- **QVRProDB** is the path to save the QVR Pro database. <font color="red">Please do not delete or edit the internal data.</font>

- **QVRProRecording** is to **"view"** and **"download"** recording files. 
  That recording files are <font color="red">read-only</font>. QVR Pro does not support manual remove of recording files. Only after reaching the overwrite rule can the old recording file be automatically deleted. This path is created for the convenience of users to download record file. 
  Because this path uses **"FUSE"** (Filesystem in Userspace, is a virtual file system interface), the files under this path <font color="red"> will not take up space(QVI and Standard)</font>. <br/>
  The space occupied by the actual file is under the path **"QVRProSpace_[$Volume Name]"**

:::caution

The **"/QVRProRecording/File"** folder will disappear when QVR Pro is disabled, it will appear after starting QVR Pro.

:::

- **QVRProSpace_[$Volume Name]** is the path to save the record. <font color="red">Do not delete or edit the files in this folder.</font>