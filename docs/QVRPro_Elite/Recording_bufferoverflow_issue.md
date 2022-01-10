# Why there is a "Recording Buffer Overflow" log?

When you saw the waring message in logs:

<center>

![](/assets/qvrpro/recording_bufferoverflow_log.png)

</center>

This message means that the current NAS/QVP is overloaded, and QVR Pro cannot save the video to the storage device in time, which may cause intermittent recordings. When this issue occurs, please refer to the following key point to check:

- Check if other apps use too much CPU/RAM resources, we recommend a safe load of about 75~80%
- Check whether the numbers of CPU IO wait and storage latency are too high :
  
  ![](/assets/qvrpro/io_wait.png)
  ![](/assets/qvrpro/volume_latency.png)

  If the numbers are too high, it means that the reading and writing speed of the storage device is not fast enough. It may be : 
  - The disk is about to fail.
  - Insufficient disk performance to handle video recording.
  
  :::info
  
  If the number of drives in the RAID5/6 group is too little, it will also affect the actual recording performance.

  :::

If the **"Recording Buffer Overflow"** log happened at 03:00 AM repeatly :
- Disable the function of checking the folder size daily. Checking the folder size function will increase the IO load.<br/>
  ![](/assets/qvrpro/disable_daily_update_folder_size.png)