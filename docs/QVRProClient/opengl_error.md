---
sidebar_position: 1
---

# OpenGL error occurs when I open QVR Pro Client

When opening QVR Pro Client <font color="red">**"OpenGL version 2.1 or higher is required. (1.1)"**</font> error message occurs:<br/>
<img src="/assets/qvrproclient/opengl_error.png" width="40%"/>

This error indicates that your graphics card is too old and does not support OpenGL 2.1. It is recommended that you replace the graphics card. If you still need to open QVR Pro Client, the following methods may help temporarily operate in this old environment:

:::note

Using software rendering mode will reduce the streaming performance of the playback, which may result in an unsmooth screen.

::::

- Right-click on the link of QVR Pro Client and click **"Properties"**
- Add **" -swrender"** at the end of **"Targe"** (a space before the minus sign), and press **"OK"** when finished<br/>
<img src="/assets/qvrproclient/edit_run_command.png" width="40%"/>
