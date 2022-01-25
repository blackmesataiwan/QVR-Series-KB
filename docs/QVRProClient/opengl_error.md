---
sidebar_position: 1
---

# How do I fix the “OpenGL version 2.1 or higher is required.” error?

When attempting to open QVR Pro Client, the <font color="red">**"OpenGL version 2.1 or higher is required."**</font> error message appears:<br/>
<img src="/assets/qvrproclient/opengl_error.png"/>

#### Causes

If this is your first time using QVR Pro Client, then either your graphics driver is out of date or your graphics device does not support OpenGL 2.1. You should check what version of OpenGL your graphics device supports.

If you are attempting to use QVR Pro Client on a remote desktop or virtual machine, then your remote desktop client or virtualization application may not support OpenGL.

If you have previously been using QVR Pro Client with no error and this error message suddenly appears, then you should try reinstalling your graphics card driver.

#### Workaround

QVR Pro Client can be used in software rendering mode, which ensures compatibility but at the cost of lower performance. To enable software rendering:

1. Right-click on the shortcut of QVR Pro Client and click **"Properties"**.
2. At the end of **"Target"** add **" -swrender"**.
3. Click **"OK"**.<br/>
   <img src="/assets/qvrproclient/edit_run_command.png" width="50%"/>

When you open QVR Pro Client using this shortcut, the top-left corner will display "SW Render".

![](/assets/qvrproclient/sw_render.png)

:::note

Using software rendering mode will reduce streaming performance, which may result in unsmooth playback.

::::
