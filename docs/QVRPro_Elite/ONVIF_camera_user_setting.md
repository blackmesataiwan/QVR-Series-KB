# Why show authentication error when setting up the connection  of the ONVIF camera in QVR Pro/Elite?

When you saw the error icon shown: 

![](/assets/qvrpro/camera_test_error.png)

This error will show when the mouse hover on the <em><img src="/assets/qvrpro/waring_icon_of_test.png" class="inline-icons"/></em> icon.

If the camera account password you entered is correct, but it is still show error when testing the camera in the QVR Pro camera settings, it may be necessary to set an other ONVIF account in the camera.<br/>
Because the management account of some cameras is different from the ONVIF account, please refer to the camera's guides to add an ONVIF account for QVR Pro to use.

For an example of AXIS Camera, to create ONVIF user:
  1. Open the camera web setting page. 
  2. Navigate to System > ONVIF. 
  3. Click +(Add) to create a new user in the Users List.

  :::info

  If a user already exists, you can click "Modify" to reconfigure the user credentials and privileges so that the account will enable ONVIF access again.

  :::

  4. Enter the appropriate user information. 
  5. Use the new ONVIF user credentials in QVR Pro camera settings.

  :::info

  This user is only used for ONVIF access, which is different from the user settings under System > Users. 

  :::

  ![](/assets/qvrpro/axis_onvif_setting.png)

  :::info

  Except Axis, it is currently known that Hikvision, Dahua, and Panasonic brands need to add additional ONVIF accounts. Please refer to your camera user manual if you need to add an ONVIF account.

  :::