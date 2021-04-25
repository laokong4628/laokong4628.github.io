# linux


## Linux相关     
> `查看硬件时间`可以是用`hwclock或者clock命令`，hwclock --show 或者hwclock -r
```html     
//查看硬件时间
[root@localhost ~]# hwclock --show
2008年12月12日星期五 06时52分07秒  -0.376932 seconds

//设置硬件时间
[root@localhost ~]# hwclock --set --date="1/25/09 00:00" <== 月/日/年时:分:秒
[root@localhost ~]# hwclock
2009年01月25日星期日 00时00分06秒  -0.870868 seconds
[root@localhost ~]# hwclock  -w   根据系统时间设置硬件时间

//以系统时间为基准，修改硬件时间
[root@localhost ~]# hwclock --systohc<== sys（系统时间）to（写到）hc（Hard Clock）
[root@localhost ~]# hwclock -w

//以硬件时间为基准，修改系统时间     
[root@localhost ~]# hwclock --hctosys
[root@localhost ~]# hwclock -s

```

> Linux`系统时间的设置`     

```html
在Linux中设置系统时间，可以用`date命令`：
//查看时间
[root@localhost ~]# date
2008年 12月 12日星期五 14:44:12 CST

//修改时间
[root@localhost ~]# date -set  "2013-12-24 00:01" <== （年/月/日 时:分【:秒】）
2009年 01月 01日星期四 00:01:00 CST

//date 有几种时间格式可接受，这样也可以设置时间：
[root@localhost ~]# date 012501012009.30  <== 月日时分年.秒
2009年 01月 25日星期日 01:01:30 CST

//修正时区
mv /etc/localtime /etc/localtime.bak						#备份原文件
ln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime  #修改为Shanghai

```

> [Linux`系统时间与网络同步的问题`](https://linux265.com/news/6009.html)     
> `通过ntpdate命令从时钟服务器同步`,选用中国ntp服务器cn.pool.ntp.org来作为时钟同步的来源。     
> 终端输入指令：`ntpdate cn.pool.ntp.org`          
> 配置crontab自动执行同步：     
```html
crontab -e

#每10分钟执行一次
*/10 * * * * /usr/sbin/ntpdate cn.pool.ntp.org
或者
#每一个小时执行一次
0 * * * * /usr/sbin/ntpdate cn.pool.ntp.org

```

> `同一网络中搭建时钟服务器(NTP Server)`     
```html
//配置NTP服务
ntp配置文件的路径是/etc/ntp.conf，修改改配置文件时先进行备份。
cp  /etc/ntp.conf /etc/ntp.conf.bak   #备份
vim /etc/ntp.conf                     #vim编辑文件
配置文件中，增加如下内容：
# Hosts on local network are less restricted.
restrict 192.168.1.0 mask 255.255.255.0 nomodify notrap #这个是用来允许192.168.1.*这个网段的服务器都可以使用该ntp服务器同步时间。这里可以根据你实际情况来设定网段。
server 192.168.1.2 #同时添加指定一台内网服务器作为本地时钟服务器用于无法链接外网时，其它服务器同步时间是以该服务器为准。

```
> 整体配置后的文件，主要内容如下：
```html
# Permit all access over the loopback interface.  This could
# be tightened as well, but to do so would effect some of
# the administrative functions.
restrict 127.0.0.1
restrict -6 ::1

# Hosts on local network are less restricted.
restrict 192.168.1.0 mask 255.255.255.0 nomodify notrap

# Use public servers from the pool.ntp.org project.
# Please consider joining the pool (http://www.pool.ntp.org/join.html).
#定义上游使用的ntp服务器
server cn.pool.ntp.org prefer
#server 0.centos.pool.ntp.org iburst
#server 1.centos.pool.ntp.org iburst
#server 2.centos.pool.ntp.org iburst
#server 3.centos.pool.ntp.org iburst

#外部时间服务不可用时，以本地时间作为服务     
server 192.168.1.2
fudge  192.168.1.2 stratum 10

#broadcast 192.168.1.255 autokey        # broadcast server
#broadcastclient                        # broadcast client
#broadcast 224.0.1.1 autokey            # multicast server
#multicastclient 224.0.1.1              # multicast client
#manycastserver 239.255.254.254         # manycast server
#manycastclient 239.255.254.254 autokey # manycast client

# Enable public key cryptography.
#crypto

includefile /etc/ntp/crypto/pw
...

```
> 启动NTP服务     
> systemctl start ntpd，配置文件配置好保存后，我们可以通过systemctl命令来启动ntp服务。     
> 服务启动后可以通过ntpstat命令来验证服务是否正常:     
```html
[root@localhost ~]# ntpstat
synchronised to NTP server (162.159.200.123) at stratum 4
   time correct to within 227 ms
   polling server every 1024 s

```
> 客户端同步时间     
> ntpdate 192.168.1.2，可以将该命令作为crontab任务进行定时运行即可完成客户端机器的时间同步。     


