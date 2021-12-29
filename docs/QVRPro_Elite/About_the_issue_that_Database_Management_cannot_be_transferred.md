---
sidebar_position: 2
---

# About the issue that Database Management cannot be transferred

If there is a issue that the QVR Pro database cannot be migrated (like the edit button in the image below is grayed out) :

![](/assets/qvr_pro_database_edit.png)

It may be that the currently logged-in account does not have the read and write permissions for the "QVRProDB" shared folder. Please refer to the following instructions:

- NAS : Please check whether the permissions of the shared folder "QVRProDB" have open user or user group read and write permissions :

![GetImage (3).png](/assets/user_premission.png)

- QVP : Only the "admin" account can be migrate database.

:::caution

If you migrate the QVR Pro database to a encrypted volume, you must decrypt it before starting QVR Pro App, otherwise it will not be record the camera video.

:::