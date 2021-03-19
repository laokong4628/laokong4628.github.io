# android-studio


## Getting started

<!-- {.-three-column} -->
### Android Studio 使用过程的问题和注意点
<!--more-->
<!-- {.-prime} -->

### 问题点
> **Failed to find Build Tools revision 23.0.**  
> **解决方案**  
> {{< style "color:red;" >}}Open anroid/app/build.gradle and change buildToolsVersion "23.0.3 or other available SDK revision"{{< /style >}} 

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

