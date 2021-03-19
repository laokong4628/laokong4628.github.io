# kodi


## Getting started

<!-- {.-three-column} -->
### kodi 使用过程的问题和注意点
<!--more-->
<!-- {.-prime} -->

### 问题点
> **Youtube 直播插件API， id， secret key.**  
> **解决方案**  
> {{< style "color:red;" >}}https://www.youtube.com/watch?v=y6qnV4UFaDkn{{< /style >}} 
> {{< style "color:red;" >}}https://console.developers.google.com/apis/dashboard{{< /style >}} 
> 
```markdown
Go to `developers.google.com` & login to your Google account (you probably already will be but this step is added just to ensure you are)
Now go to `console.developers.google.com`
Click on `Create Project` in the top left
You will now see a box labelled `Project name`. Give it a simple name you can easily recognise and then click `Create`
Wait for the notification (top right) saying the project has been created
Now click on the `Google APIs logo` in the top left
Select `Library` from the left hand menu
Scroll down and select `YouTube Data API vX`
Select Enable on the next screen
Select `Create Credentials` on the right hand side of the screen
Click on the `Dropdown Box`
Select `YouTube Data API vX`
Now click on the `Where will you be calling the API` from `dropdown box`
In the `What data will you be accessing box` check `Public Data`
Now click on `What credentials do I need`?
You will now see your API key. `Click on Copy` on the right hand side and then click `done`
Now you have it copied `save it to a text file` as we need to now get the ID & secret
After clicking done you will be back at the screen where we clicked on `Library`. Look on the left hand side again and click on `OAuth consent screen`
Click `External` and then `Create`
Enter a `name` (just use the same name as you did at the beginning)
Scroll to the bottom and click `Save`
Now click on `Credentials` in the left hand menu
Now click Create `Credentials` in the top left
Select `OAuth Client ID`
Click on `Application Type` and select `TVS and Limited Input Devices`
You now need to give it a name. I just left it as TV Client 1
Select Create
You will now see a box with your Client ID and Secret. Copy both and add to the text file where we saved the API key before
Now open YouTube on `Kodi`
Scroll down to `Settings`
Highlight `API` in the left hand menu
Now paste your `API, Client ID and Secret` in the corresponding boxes on the right and then click `OK`
YouTube should now no longer give you API errors
```

> **Failed to find gradle Tools revision 2.3.0.**  
> **解决方案**  
> {{< highlight markdown >}}
buildscript {
    repositories {
        jcenter()
    }
    dependencies {
        classpath 'com.android.tools.build:gradle:2.3.0'
        //注意：更换成自己的AS的版本
    }
}
allprojects {
    repositories {
        jcenter()
    }
}

> {{< / highlight >}}

