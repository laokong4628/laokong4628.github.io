# 面试相关问题


## Getting started

<!-- {.-three-column} -->
### 一. 面试相关问题和试题
<!--more-->
<!-- {.-prime} -->
> #### **A.试题**  
>
> 1.`>与>>的区别`  
> &nbsp;&nbsp;&nbsp;&nbsp;\>&nbsp;&nbsp;&nbsp;&nbsp;定向符[输出]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;将字符写入到文本，并覆写原来的字符  
> &nbsp;&nbsp;&nbsp;&nbsp;\>>&nbsp;&nbsp;&nbsp;&nbsp;定向符[输出]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;将字符写入到文本，并追加到字符末尾  
> &nbsp;&nbsp;&nbsp;&nbsp;\<&nbsp;&nbsp;&nbsp;&nbsp;定向符[输入]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;配合set /p 使用时，从指定的文件中获取字符串 赋值给变量   
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**示例** [将1.txt中第1行内容赋值给变量 wind]   
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`set /p wind=<1.txt` 
>
>
> 2. `获取 1.txt 中的字符`  
```markdown
for /f "skip=1 tokens=2,3* delims=," %%i in (1.txt) do echo %%i
```
>
>
> 3.`“IP地址/ 数字” 是什么意思？`   
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`数字是子网掩码位（数）`，例如 192.168.5.12/21 ，说明`子网掩码`由21个1组成，即 `子网掩码`是：11111111&nbsp;&nbsp;&nbsp;&nbsp;11111111&nbsp;&nbsp;&nbsp;&nbsp;11111000&nbsp;&nbsp;&nbsp;&nbsp;00000000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;，也就是255.255.248.0.   
>  
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    `在一个网段中能够支持多少个主机使用呢？`   
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    192.168.5.12/21  
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    8*4-21=11  
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    2^11-2  
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    主机数为：2n  
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    可用主机数为 : 2n-2  
>   
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    例如192.168.1.0/24能够支持多少个主机？  
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    2^8-2=254  
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    所以能支持254个IP地址  
>   
> 4.`pushd 和 popd `  
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**切换当前目录**
|      指令      |         详解         |
| -------------------------- | ------------------------ |
|  `c: & cd/ & md mp3`  |      **在 C:/ 建立 mp3 文件夹**      |
|  `md d:/mp4`  |      **在 D:/ 建立 mp4 文件夹**      |
|  `cd /d d:/mp4`  |      **更改当前目录为 d:/mp4**      |
|  `pushd c:/mp3`  |      **保存当前目录，并切换当前目录为 c:/mp3**      |
|  `popd`  |      **恢复当前目录为刚才保存的 d:/mp4**      |
<!-- {.-shortcuts} -->
>     
>     
> 5.`对当前目录里所有的txt文件执行 find 命令`  
```markdown
for /r . %%i in (*.txt) do find "abc" %%i
```
>     
>     
> 6.`DHCP：Dynamic Host Configuration Protocol 动态主机配置协议`  
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   主要作用是集中的管理、分配IP地址，使网络环境中的主机动态的获得IP地址、Gateway地址、DNS服务器地址等信息，并能够提升地址的使用率。
>   
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SQL Server是微软的一套数据库，可用于建立数据库逻辑,并将数据进行物理存放。该数据库包含所有管理、配置和报告数据。包含应用程序使用的所有表定义、索引、约束和数据库存储过程。  
>     
>       
> 7.`call start`  
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    1.调用结果不同:call多个进程变量互通。start只能把参数或变量传给被调用的批处理。  
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    2.调用方式不同:start批处理中调用外部程序的命令，该外部程序在新窗口中运行，批处理程序继续往下执行，不理会外部程序的运行状况  
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; CALL命令可以在批处理执行过程中调用另一个批处理，当另一个批处理执行完后，再继续执行原来的批处理    
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    3.调用范围不同:CALL主要用来进行批处理的内部调用，start批处理中调用外部程序的命令。
    
> 8.`网段`  
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    1.网络地址=IP地址&子网掩码  
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    2.广播地址=IP地址|（！子网掩码）  
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    3.网段：网络地址相同的IP地址属于同一网段，即同一子网。  
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    4.网关：同一网段（子网）间终端可直接通信，如终端A和终端B；不在同一网段（子网）的终端不能直接通信，需要通过网关才能通信，如终端A和终端C。  
> **IP地址、子网掩码、网络地址、广播地址、网段、网关的关系**  
|  `类别`  |  `终端A`  |  `终端B`  |  `终端C`  |
| ----- | ------ | ------- | ------- |
| `IP地址` | **192.168.1.10** | **192.168.1.23** | **192.168.1.40** |
| `子网掩码` | **255.255.255.224** | **255.255.255.224** | **255.255.255.224** |
| `网络地址` | **192.168.1.0** | **192.168.1.0** | **192.168.1.32** |
| `广播地址` | **192.168.1.31** | **192.168.1.31** | **192.168.1.63** |
| `网段` | **192.168.1.0~192.168.1.31** | **192.168.1.0~192.168.1.31** | **192.168.1.31~192.168.1.63** |
| `网关` | **192.168.1.1** | **192.168.1.1** | **192.168.1.32** | 
> 
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`IP地址类别`
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![IP地址类别](/images/ip.jpg "IP地址类别") 
>

> 9.`进制转换`  
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`二、八、十、十六进制之间关系的结构图`：
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![二、八、十、十六进制之间关系的结构图](/images/Figure.png "二、八、十、十六进制之间关系的结构图")  
> `注意`：在数字后面加上不同的字母来表示不同的进位制。B（Binary)表示二进制，O（Octal）表示八进制，D（Decimal）或不加表示十进制，H（Hexadecimal）表示十六进制。例如：(101011)B=(53)O=(43)D=(2B)H  
>  
> (一) `（二、八、十六进制） → （十进制）`  
>  
> &nbsp;&nbsp;&nbsp;&nbsp;A.**二进制 → 十进制**  
 > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;方法：二进制数从低位到高位（即从右往左）计算，第0位的权值是2的0次方，第1位的权值是2的1次方，第2位的权值是2的2次方，依次递增下去，把最后的结果相加的值就是十进制的值了。  
>   
> 例：将二进制的(101011)B转换为十进制的步骤如下：
```markdown 
1. 第0位 1 x 2^0 = 1；
2. 第1位 1 x 2^1 = 2；
3. 第2位 0 x 2^2 = 0；
4. 第3位 1 x 2^3 = 8；
5. 第4位 0 x 2^4 = 0；
6. 第5位 1 x 2^5 = 32；
7. 读数，把结果值相加，1+2+0+8+0+32=43，即(101011)B=(43)D。

```
>  
> &nbsp;&nbsp;&nbsp;&nbsp;B.**八进制 → 十进制**  
 > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;方法：八进制数从低位到高位（即从右往左）计算，第0位的权值是8的0次方，第1位的权值是8的1次方，第2位的权值是8的2次方，依次递增下去，把最后的结果相加的值就是十进制的值了。`八进制就是逢8进1，八进制数采用 0～7这八数来表达一个数。`  
>   
> 例：将八进制的(53)O转换为十进制的步骤如下：
```markdown 
1. 第0位 3 x 8^0 = 3；
2. 第1位 5 x 8^1 = 40；
3. 读数，把结果值相加，3+40=43，即(53)O=(43)D。

```
>  
> &nbsp;&nbsp;&nbsp;&nbsp;B.**十六进制 → 十进制**  
 > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;方法：十六进制数从低位到高位（即从右往左）计算，第0位的权值是16的0次方，第1位的权值是16的1次方，第2位的权值是16的2次方，依次递增下去，把最后的结果相加的值就是十进制的值了。`十六进制就是逢16进1，十六进制的16个数为0123456789ABCDEF。`  
>   
> 例：将十六进制的(2B)H转换为十进制的步骤如下：
```markdown 
1. 第0位 B x 16^0 = 11；
2. 第1位 2 x 16^1 = 32；
3. 读数，把结果值相加，11+32=43，即(2B)H=(43)D

```
>  
> (二) `（十进制） → （二、八、十六进制）`  
>  
> &nbsp;&nbsp;&nbsp;&nbsp;A.**十进制 → 二进制**  
 > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;方法：除2取余法，即每次将整数部分除以2，余数为该位权上的数，而商继续除以2，余数又为上一个位权上的数，这个步骤一直持续下去，直到商为0为止，最后读数时候，从最后一个余数读起，一直到最前面的一个余数。  
>   
> 例：将十进制的(43)D转换为二进制的步骤如下：
```markdown 
1. 将商43除以2，商21余数为1；
2. 将商21除以2，商10余数为1；
3. 将商10除以2，商5余数为0；
4. 将商5除以2，商2余数为1；
5. 将商2除以2，商1余数为0； 
6. 将商1除以2，商0余数为1； 
7. 读数，因为最后一位是经过多次除以2才得到的，因此它是最高位，读数字从最后的余数向前读，101011，即(43)D=(101011)B。

```
>  
> &nbsp;&nbsp;&nbsp;&nbsp;B.**十进制 → 八进制**  
 > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`方法1`：除8取余法，即每次将整数部分除以8，余数为该位权上的数，而商继续除以8，余数又为上一个位权上的数，这个步骤一直持续下去，直到商为0为止，最后读数时候，从最后一个余数起，一直到最前面的一个余数。`方法2`：使用间接法，先将十进制转换成二进制，然后将二进制又转换成八进制；  
>   
> 例：将十进制的(796)D转换为八进制的步骤如下：
```markdown 
1. 将商796除以8，商99余数为4；
2. 将商99除以8，商12余数为3；
3. 将商12除以8，商1余数为4；
4. 将商1除以8，商0余数为1；
5. 读数，因为最后一位是经过多次除以8才得到的，因此它是最高位，读数字从最后的余数向前读，1434，即(796)D=(1434)O。

```
>  
> &nbsp;&nbsp;&nbsp;&nbsp;C.**十进制 → 十六进制**  
 > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`方法1`：除16取余法，即每次将整数部分除以16，余数为该位权上的数，而商继续除以16，余数又为上一个位权上的数，这个步骤一直持续下去，直到商为0为止，最后读数时候，从最后一个余数起，一直到最前面的一个余数。`方法2`：使用间接法，先将十进制转换成二进制，然后将二进制又转换成十六进制；  
>   
> 将十进制的(796)D转换为十六进制的步骤如下：
```markdown 
1. 将商796除以16，商49余数为12，对应十六进制的C；
2. 将商49除以16，商3余数为1；
3. 将商3除以16，商0余数为3；
4. 读数，因为最后一位是经过多次除以16才得到的，因此它是最高位，读数字从最后的余数向前读，31C，即(796)D=(31C)H。

```
>  
> (三) `（二进制） ↔ （八、十六进制）`  
>  
> &nbsp;&nbsp;&nbsp;&nbsp;A.**二进制 → 八进制**  
 > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;方法：取三合一法，即从二进制的小数点为分界点，向左（向右）每三位取成一位，接着将这三位二进制按权相加，然后，按顺序进行排列，小数点的位置不变，得到的数字就是我们所求的八进制数。如果向左（向右）取三位后，取到最高（最低）位时候，如果无法凑足三位，可以在小数点最左边（最右边），即整数的最高位（最低位）添0，凑足三位。  
>   
> 例：将二进制的(11010111.0100111)B转换为八进制的步骤如下：
```markdown 
1. 小数点前111 = 7；
2. 010 = 2；
3. 11补全为011，011 = 3；
4. 小数点后010 = 2；
5. 011 = 3；
6. 1补全为100，100 = 4；
7. 读数，读数从高位到低位，即(11010111.0100111)B=(327.234)O。

```
> **二进制与八进制编码对应表**：
|      二进制      |         八进制         |
| -------------------------- | ------------------------ |
|  `000`  |      **0**      |
|  `001`  |      **1**      |
|  `010`  |      **2**      |
|  `011`  |      **3**      |
|  `100`  |      **4**      |
|  `101`  |      **5**      |
|  `110`  |      **6**      |
|  `111`  |      **7**      |
>  
> &nbsp;&nbsp;&nbsp;&nbsp;B.**八进制 → 二进制**  
 > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;方法：取一分三法，即将一位八进制数分解成三位二进制数，用三位二进制按权相加去凑这位八进制数，小数点位置照旧。
>   
> 例：将八进制的(327)O转换为二进制的步骤如下：
```markdown 
1. 3 = 011；
2. 2 = 010；
3. 7 = 111；
4. 读数，读数从高位到低位，011010111，即(327)O=(11010111)B。

```
>  
> &nbsp;&nbsp;&nbsp;&nbsp;C.**二进制 → 十六进制**  
 > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;方法：取四合一法，即从二进制的小数点为分界点，向左（向右）每四位取成一位，接着将这四位二进制按权相加，然后，按顺序进行排列，小数点的位置不变，得到的数字就是我们所求的十六进制数。如果向左（向右）取四位后，取到最高（最低）位时候，如果无法凑足四位，可以在小数点最左边（最右边），即整数的最高位（最低位）添0，凑足四位。
>   
> 例：将二进制的(11010111)B转换为十六进制的步骤如下：
```markdown 
1. 0111 = 7；
2. 1101 = D；
3. 读数，读数从高位到低位，即(11010111)B=(D7)H。

```
>  
> &nbsp;&nbsp;&nbsp;&nbsp;D.**十六进制 → 二进制**  
 > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;方法：取一分四法，即将一位十六进制数分解成四位二进制数，用四位二进制按权相加去凑这位十六进制数，小数点位置照旧。
>   
> 例：将十六进制的(D7)H转换为二进制的步骤如下：
```markdown 
1. D = 1101；
2. 7 = 0111；
3. 读数，读数从高位到低位，即(D7)H=(11010111)B。

```
>  
> (四) `（八进制） ↔ （十六进制）`  
>  
> &nbsp;&nbsp;&nbsp;&nbsp;A.**八进制 → 十六进制**  
 > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;方法：将八进制转换为二进制，然后再将二进制转换为十六进制，小数点位置不变。  
>   
> 例：将八进制的(327)O转换为十六进制的步骤如下：
```markdown 
1. 3 = 011；
2. 2 = 010；
3. 7 = 111；
4. 0111 = 7；
5. 1101 = D；
6. 读数，读数从高位到低位，D7，即(327)O=(D7)H。

```
>  
> (五) `扩展阅读`
> 1. 包含小数的进制换算：
> 
> (ABC.8C)H=10x16^2+11x16^1+12x16^0+8x16^-1+12x16^-2=2560+176+12+0.5+0.046875=(2748.546875)D  
> 
> 2. 负次幂的计算：
> 
> 2^-5=2^(0-5)=2^0/2^5=1/2^5
> 
> `同底数幂相除，底数不变，指数相减，反过来`
> 
> 3. 我们需要了解一个数学关系，即23=8，24=16，而八进制和十六进制是用这关系衍生而来的，即用三位二进制表示一位八进制，用四位二进制表示一位十六进制数。接着，记住4个数字8、4、2、1（23=8、22=4、21=2、20=1）。
>
> 9.`chmod`  
> `chmod 644`
> ![chmod 644](/images/chmod1.png "chmod 644") 
> `Chmod 777` MAX  
> 
> `Others Rights (o)` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`Read (4)`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`Write (2)`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`Execute (1)`  
> `Group Rights (g)`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`Read (40)`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`Write (20)`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`Execute (10)`  
> `Owner Rights (u)`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`Read (400)`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`Write (200)`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`Execute (100)`  
>
> 9.`tar中的参数 cvf,xvf,cvzf,zxvf的区别`  
> tar cvf etcbak.tar etc/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;打包一个tar  
> tar xvf etcbak.tar&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;解开一个tar  
> tar cvzf etcbak.tar.gz etc/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;打包压缩一个 tar  
> tar zxvf etcbak.tar.gz&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;解压一个tar  
> **注意：**  
> `c：是压缩，建立压缩档案`  
> `x：解压缩，解压`  
> `t：查看内容`  
> `r：向压缩归档文件末尾追加文件`  
> `u：更新原压缩包中的文件`  
> `v：在压缩或解压缩过程中显示正在处理的文件名`  
> `f：后面必须跟上要处理的文件名，参数-f是必须的`  
> `z：通过gzip支持压缩或解压缩，有gzip属性的`  
> `j：表示通过bzip2支持压缩或解压缩，有bz2属性的`  
> `Z：有compress属性的`  
> `O：将文件解开到标准输出`  
> `tar -tf aaa.tar.gz ：在不解压的情况下查看压缩包的内容` 
> 
> **总结:**
```markdown
1、*.tar 用 tar –xvf 解压
2、*.gz 用 gzip -d或者gunzip 解压
3、*.tar.gz和*.tgz 用 tar –xzf 解压
4、*.bz2 用 bzip2 -d或者用bunzip2 解压
5、*.tar.bz2用tar –xjf 解压
6、*.Z 用 uncompress 解压
7、*.tar.Z 用tar –xZf 解压

```

