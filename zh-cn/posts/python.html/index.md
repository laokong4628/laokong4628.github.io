# python


## Getting started

<!-- {.-three-column} -->

## python基本用法
<!--more-->
<!-- {.-prime} -->

## python问题点
> issues: `If this fails your Python may not be configured for Tk`
> resolution:

## conda问题点
<!-- {.-prime} -->
|      描述      |         指令         |
| -------------------------- | ------------------------ |
|  `查看安装了哪些包`  |      **conda list**      |
|  `查看当前存在哪些虚拟环境`  |      **conda env list**或者**conda info -e**    |
|  `检查更新当前conda`  |      **conda update conda**      |
|  `Python创建虚拟环境`  |      **conda create -n your_env_name python=x.x**或者**conda create -n virtualenv python=3.9**      |
|  `激活或者切换虚拟环境`  |      **source activate your_env_nam(Linux)**和**activate your_env_name(Windows)**      |
|  `对虚拟环境中安装额外的包`  |      **conda install -n your_env_name [package]**      |
|  `关闭虚拟环境(即从当前环境退出返回使用PATH环境中的默认python版本)`  |      **deactivate env_name(Windows)** 或者 **`activate root`切回root环境** 和 **source deactivate(Linux)**    |
|  `删除虚拟环境`  |      **conda remove -n your_env_name --all**      |
|  `删除环境钟的某个包`  |      **conda remove --name your_env_name  package_name**      |
|  `设置国内镜像`  |      **conda config --add channels https://mirrors.tuna.tsinghua.edu.cn**      |
|  `设置搜索时显示通道地址`  |      **conda config --set show_channel_urls yes**      |
|  `恢复默认镜像`  |      **conda config --remove-key channels**      |
|  `更新包`  |      **conda update package_name**      |
|  `一次性更新所有包`  |      **conda update --all**      |
|  `查找包`  |      **conda search keyword**      |
|  `删除包`  |      **conda remove package_name**      |
|  `生成.condarc（windows：C:\\users\\username\\，linux：/home/username/）文件`  |      **conda config --set show_channel_urls yes**      |
|  `To get all keys and their values:`  |      **conda config --get**      |
|  `To get the value of a specific key, such as channels:`  |      **conda config --get channels**      |
|  `设置国内镜像`  |      **conda config --add channels https://mirrors.ustc.edu.cn/anaconda/pkgs/main**      |
|  `To remove an existing value, such as http://conda.anaconda.org/mutirri from a specific key, such as channels:`  |      **conda config --remove channels https://mirrors.ustc.edu.cn/anaconda/pkgs/main**      |
|  `To remove a key, such as channels, and all of its values:`  |      **conda config --remove-key channels**      |
|  `Display all identified configuration sources:`  |      **conda config --show-sources**      |
|  `Describe all available configuration options:`  |      **conda config --describe**      |
|  `Set the output verbosity to level 3 (highest) for the current activate environment:`  |      **conda config --set verbosity 3 --env**      |
|  `查看conda版本`  |      **conda --version**      |
|  `Install an earlier version of Python in Anaconda`  |      **conda install -c anaconda python=3.7**      |
|  `关闭虚拟环境`  |      **conda deactivate**      |
|  `删除虚拟环境`  |      **conda remove --name virtualenv --all**      |
|  `激活conda`  |      **source /opt/anaconda/bin/activate root**      |

<!-- {.-shortcuts} -->

> ## 共享虚拟环境
<!-- {.-prime} -->
> **conda env export --file python36_env.yml**  
> **conda env create -f /home/chb/code/python36_env.yml**  
> **conda remove -n python36 --all**或者**conda env remove -n python36**  


> ## [清华大学开源软件镜像站（推荐）](https://mirrors.tuna.tsinghua.edu.cn/help/anaconda/)
```markdown
channels:
  - defaults
show_channel_urls: true
channel_alias: https://mirrors.tuna.tsinghua.edu.cn/anaconda
default_channels:
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/pro
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/msys2
custom_channels:
  conda-forge: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  msys2: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  bioconda: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  menpo: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  pytorch: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  simpleitk: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud

```
> ## [上海交通大学开源镜像站](https://mirrors.ustc.edu.cn/)
```markdown
default_channels:
  - https://anaconda.mirrors.sjtug.sjtu.edu.cn/pkgs/r
  - https://anaconda.mirrors.sjtug.sjtu.edu.cn/pkgs/main
custom_channels:
  conda-forge: https://anaconda.mirrors.sjtug.sjtu.edu.cn/cloud/
  pytorch: https://anaconda.mirrors.sjtug.sjtu.edu.cn/cloud/
channels:
  - defaults

```

> ## [中国科学技术大学 USTC Mirror](https://mirrors.sjtug.sjtu.edu.cn/#/)
```markdown
--add channels 'https://mirrors.ustc.edu.cn/anaconda/cloud/conda-forge/'   # lowest priority
--add channels 'https://mirrors.ustc.edu.cn/anaconda/pkgs/free/'
--add channels 'https://mirrors.ustc.edu.cn/anaconda/pkgs/main/'
--add channels 'https://mirrors.ustc.edu.cn/anaconda/cloud/msys2/'
--add channels 'https://mirrors.ustc.edu.cn/anaconda/cloud/bioconda/'
--add channels 'https://mirrors.ustc.edu.cn/anaconda/cloud/menpo/'   # highest priority
--set show_channel_urls True
--set ssl_verify True                                                            

```

> ## 问题与解决方案

> **`scrapy` module install**
> {{< style "color:red;" >}} UnsatisfiableError: The following specifications were found to be incompatible with the existing python installation in your environment: Specifications:- `scrapy`{{< /style >}}  
> ***conda create -n virtualenv3.6 python=3.6***
> ***conda activate virtualenv3.6***
> ***conda install -n virtualenv3.6 -c conda-forge scrapy***

> **`pil` module install**  
> 
> ***conda install -n virtualenv PIL***  
> {{< style "color:red;" >}} UnsatisfiableError: The following specifications were found to be incompatible with the existing python installation in your environment: Specifications:-  `pil`{{< /style >}}  
> ***conda install -n virtualenv `pillow`***

> **`crypto.cipher` module install**  
> 
> ***conda install -n virtualenv crypto.cipher***  
> {{< style "color:red;" >}} PackagesNotFoundError: The following packages are not available from current channels: {{< /style >}}  
> ***conda install -n virtualenv `pillow`***

> **`mysql.connector` module install**  
> 
> ***conda install -n virtualenv crypto.cipher***  
> {{< style "color:red;" >}} PackagesNotFoundError: The following packages are not available from current channels: {{< /style >}}  
> ***conda install -n virtualenv3.6 `mysql-connector`***

> ## python代码相关

<!-- {.-three-column} -->
### 方法的使用
<!--more-->
<!-- {.-prime} -->
|      描述      |         指令         |
| -------------------------- | ------------------------ |
|  `划分字符串为数组`  |      **split('\n') \n可以为任何其中字符**      |
|  `字符串的截取`  |      **str[0:1] 输出str位置0开始到位置1以前的字符, str为任意字符串**      |
|  `字符串的截取`  |      **str[1:6] 输出str位置1开始到位置6以前的字符, str为任意字符串**      |
|  `字符串的截取`  |      **str[-5:] 输出字符串右5位, str为任意字符串**      |
|  `字符串的合并`  |      **str = '0000' + str(num)**      |
|  `字符串的替换`  |      **str = str.replace('k',' 8') 将字符串里的k全部替换为8**      |
|  `字符串的查找`  |      **变量.find("要查找的内容"[，开始位置，结束位置])，开始位置和结束位置，表示要查找的范围，为空则表示查找所有。查找到后会返回位置，位置从0开始算，如果没找到则返回-1。**      |
|  `字符串的分割`  |      **Python 分割字符串使用 变量.split("分割标示符号"[分割次数])，分割次数表示分割最大次数，为空则分割所有。**      |
|  `Python 字典(Dictionary) keys() 函数以列表返回一个字典所有的键。`  |      **dict.keys()**      |
|  `Python判断列表中是否存在某元素`  |      **in	如果在指定的序列中找到值返回 True，否则返回 False//not in	如果在指定的序列中没有找到值返回 True，否则返回 False**      |
|  `Python判断列表中是否存在某元素`  |      **in	如果在指定的序列中找到值返回 True，否则返回 False//not in	如果在指定的序列中没有找到值返回 True，否则返回 False**      |

> ## 代码问题

> **TypeError: 'str' object does not support item assignment**  
> **解决方案**  
> {{< style "color:red;" >}}将其他类型转换成字串形式{{< /style >}} 

> **多个循环嵌套不支持**  
> **解决方案**  
> {{< style "color:red;" >}}自定义方法解决，再调用方法{{< /style >}} 

> **TypeError: 'Response' object has no attribute '__getitem__'**  
> **解决方案**  
> {{< style "color:red;" >}}自定义方法解决，再调用方法{{< /style >}} 

> **在循环Python中将字典追加到列表出现卡死**  
> **解决方案**  
> {{< style "color:red;" >}}yourlist.append(yourdict.copy()){{< /style >}} 

