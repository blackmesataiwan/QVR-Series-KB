---
sidebar_position: 4
---

# QVR Elite Recording Folder Structure

This article will introduce the folder structure of QVR Elite's recording spaces. QVR Elite can use a specific share folder as the recording space location when creating a recording space.
After you have created the recording space, you can see the path of the recording space in the setting:

![](/assets/recording_space_path.png)

You can use "File Station" to open the recording space folder:

![](/assets/elite_record_path.png)

The following explains the functions of each layer of folders:

1. **RecSpace_82812055E538418283A97A186931D064 :** Recording space folder. If you have multiple recording spaces, multiple folders will be displayed here.

2. **CH001_A2155F240349A2155F240349A2150000 :** Channel folder. If you have multiple channels, multiple folders will be displayed here.

3. **Regular, Event :** There are two sub-folders under the channel folder, one is "Regular" and the other is "Event". "Regular" is the folder for regular(normal) recording and "Event" is the folder for event recording.

4. **2021-09-03 :** Date folder of the recording file (UTC Time)

5. **12 :** Hourly folder of the recording file (UTC Time)

6. **20210903_205500-210000_1630673700605_S1.mp4 :** Recording file (Local Time)

:::info

Note, that the date and hour folders of the recording folder name are all "UTC Time", refer to the following path structure :

`/{Share_Folder_Name}/RecSpace_{UUID}/CH{Channel_Number}_{UUID}/Regular,Event/{UTC_Date}/{UTC_Hour}/`

And the name of the recording file is "Local Time", refer to the following file name structure :

`{Local_Date}_{Local_Start_Time}-{Local_End_Time}_{Unix_Start_Time}_{Stream_Sequence}.mp4`

According to the above structure, changing the time zone will only affect the name of the recording file, not the name of the folder.

:::

![](/assets/elite_record_time.png)