# What is the log "Recording Buffer Overflow" and what to do?

When you saw the waring message in logs:

<center>

![](/assets/qvrpro/recording_bufferoverflow_log.png)

</center>

This message means that the current NAS/QVP is overloaded, and QVR Pro cannot save the video to the storage device in time, which may cause intermittent recordings. When this issue occurs, please refer to the following key point to check:

- Check if there is any other app taking up too much CPU/RAM resources, and we recommend to keep a max load less than 75~80%.
- Check if the percentage of CPU IO wait and the storage latency go too high :
  
  ![](/assets/qvrpro/io_wait.png)
  ![](/assets/qvrpro/volume_latency.png)

  The CPU IO wait and storage latency going high is caused by the reading and writing speed of the storage device not running fast enough. It may be : 
  - The disk is about to fail.
  - Insufficient disk performance to handle video recording.
  
  :::caution
  
  If there are not sufficient drives in the RAID5/6 group , the actual recording performance might be affected.

  :::

Follow the instruction below if If the **"Recording Buffer Overflow"** log happened at 03:00 AM repeatedly :
- Disable the function of checking the folder size daily. Checking the folder size function will increase the IO load.<br/>
  ![](/assets/qvrpro/disable_daily_update_folder_size.png)