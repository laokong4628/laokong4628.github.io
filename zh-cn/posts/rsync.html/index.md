# rsync


## Getting started

<!-- {.-three-column} -->
## rsync介绍
> [rsync](https://rsync.samba.org/) 是 Linux 系統上最常被用來複製與備份檔案的工具，它可以處理本機或遠端的檔案同步工作，藉由 rsync 指令可以讓管理者很方便的將兩地的資料同步，不管是同一台電腦或是透過網際網路連線的兩台伺服器，使用方式都類似，以下是 rsync 的使用教學以及常用的指令範例。

## 基本用法
<!--more-->
<!-- {.-prime} -->

> ### 1.参数 -r 
>
> **rsync -r source destination**  
>   使用 rsync 命令时，可以作为cp和mv命令的替代方法，将`源目录同步到目标目录`。-r表示`递归`，即`包含子目录`。注意，-r是必须的，否则 rsync 运行不会成功。source目录表示`源目录`，destination表示`目标目录`。
>
> **rsync -r source1 source2 destination**  
>   `多个文件或目录`需要同步，source1、source2都会被同步到destination目录。

> ### 2.参数 -a
>
> **rsync -a source destination**  
> -a参数可以替代-r，`除了可以递归同步以外，还可以同步元信息（比如修改时间、权限等）`。由于 rsync 默认使用文件大小和修改时间决定文件是否需要更新，所以-a比-r更有用。目标目录destination如果不存在，rsync 会`自动创建`。执行上面的命令后，源目录source被完整地复制到了目标目录destination下面，即形成了destination/source的目录结构。
>
> **rsync -a source/ destination**  
> `只想同步源目录source里面的内容`到目标目录destination，则需要在源目录后面加上斜杠。上面命令执行后，source目录里面的内容，就都被复制到了destination目录里面，并不会在destination下面创建一个source子目录。

> ### 3.参数 -n
>
> **rsync -anv source/ destination**  
> 上面命令中，`-n参数模拟命令执行的结果，并不真的执行命令。`-v参数则是将结果输出到终端，这样就可以看到哪些内容会被同步。如果不确定 rsync 执行后会产生什么结果，可以先用`-n或--dry-run参数模拟执行的结果`。

> ### 4.参数 --delete
>
> **rsync -av --delete source/ destination**  
> 上面命令中，--delete参数会使得destination成为source的一个镜像。默认情况下，rsync 只确保源目录的所有内容（明确排除的文件除外）都复制到目标目录。它不会使两个目录保持相同，并且不会删除文件。如果要使得目标目录成为源目录的镜像副本，则必须使用--delete参数，`这将删除只存在于目标目录、不存在于源目录的文件。`

> ### 5.参数 --exclude
>
> **rsync -av --exclude='*.txt' source/ destination** 或者 **rsync -av --exclude '*.txt' source/ destination**  
> 上面命令排除了所有 TXT 文件。注意，rsync 会同步以"点"开头的隐藏文件，如果要排除隐藏文件，可以这样写--exclude=".*"。我们希望同步时排除某些文件或目录，这时可以用`--exclude参数指定排除模式`。
>
> **rsync -av --exclude 'dir1/*' source/ destination**   
> 如果`要排除某个目录里面的所有文件`，但不希望排除目录本身，可以写成上面命令。
>
> **rsync -av --exclude 'file1.txt' --exclude 'dir1/*' source/ destination**   
> `多个排除模式`，可以用多个--exclude参数。
>
> **rsync -av --exclude={'file1.txt','dir1/*'} source/ destination**  
> `多个排除模式也可以利用 Bash 的大扩号的扩展功能`，只用一个--exclude参数。
>
> **rsync -av --exclude-from='exclude-file.txt' source/ destination**  
> `如果排除模式很多，可以将它们写入一个文件，每个模式一行`，然后用--exclude-from参数指定这个文件。

> ### 6.参数 --include 
>
> **rsync -av --include="*.txt" --exclude='*' source/ destination**  
> 上面命令`指定同步`时，排除所有文件，但是会包括 TXT 文件。

> ### 7.参数 SSH 协议远程同步
>
> **rsync -av source/ username@remote_host:destination**  早期 rsync：  **rsync -av -e ssh source/ user@remote_host:/destination**   
> rsync 除了支持本地两个目录之间的同步，也支持远程同步。`它可以将本地内容，同步到远程服务器`。由于早期 rsync 不使用 SSH 协议，需要用-e参数指定协议，后来才改的。
>
> **rsync -av username@remote_host:source/ destination**  
> `也可以将远程内容同步到本地。`
>
> **rsync -av -e 'ssh -p 2234' source/ user@remote_host:/destination**  
> 上面命令中，`-e参数指定 SSH 使用2234端口。`

> ### 8.参数 rsync 协议远程同步
>
> **rsync -av source/ 192.168.122.32::module/destination**   
> 除了使用 SSH，如果另一台服务器安装并运行了 rsync 守护程序，则也可以用`rsync://协议`（默认端口873）进行传输。具体写法是服务器与目标目录之间使用双冒号分隔::。注意，上面地址中的module并不是实际路径名，而是 rsync 守护程序指定的一个资源名，由管理员分配。
>
> **rsync rsync://192.168.122.32**  
> 如果想知道 rsync `守护程序分配的所有 module 列表`。
>
> **rsync -av source/ rsync://192.168.122.32/module/destination**  
> rsync 协议除了使用双冒号，也可以直接用`rsync://协议指定地址`。

> ### 9.常用参数 
>
>```markdown
-v :展示详细的同步信息
-a :归档模式，相当于 -rlptgoD
    -r :递归目录
    -l :同步软连接文件
    -p :保留权限
    -t :将源文件的"modify time"同步到目标机器
    -g :保持文件属组
    -o :保持文件属主
    -D :和--devices --specials一样，保持设备文件和特殊文件
-z :发送数据前，先压缩再传输
-H :保持硬链接
-n :进行试运行，不作任何更改
-P same as --partial --progress
    --partial :支持断点续传
    --progress :展示传输的进度
--delete :如果源文件消失，目标文件也会被删除
--delete-excluded :指定要在目的端删除的文件
--delete-after :默认情况下，rsync是先清理目的端的文件再开始数据同步；如果使用此选项，则rsync会先进行数据同步，都完成后再删除那些需要清理的文件。
--exclude=PATTERN :排除匹配PATTERN的文件
--exclude-from=FILE :如果要排除的文件很多，可以统一写在某一文件中
-e ssh :使用SSH加密隧道传输
>```


