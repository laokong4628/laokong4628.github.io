# linux-find-grep


## Getting started

<!-- {.-three-column} -->

## linux 使用过程中收集的要点和助手
<!--more-->
<!-- {.-prime} -->
|      描述      |         指令         |
| -------------------------- | ------------------------ |
|  `查找当前目录下面需要的文件和文件夹（包括子目录）`  |      **ls -lR \|grep -v \'^d\' \| awk \'{print $9}\' \|tr -s \'\n\'**      |
|  `查看当前目录下面的文件个数（包括子目录）`  |      **ls -lR \| grep \"^-\" \| wc -l**      |
|  `查看当前目录下面的文件个数（包括子目录）`  |      **ls -lR \|grep -v \'^d\' \| wc -l**      |
|  `查看当前目录下面的文件和文件夹个数`  |      **ls -l \| grep \"^-\" \| wc -l**      |
|  `显示当前目录下面全部文件（包括子目录）`  |      **ls -lR \|grep -v \'^d\'\|awk \'{print $9}\' \|tr -s \'\n\'**      |
|  `查找当前目录下的所有目录`  |      **ls -lR \|grep -v \'^d\'\|awk \'{print $9}\' \|tr -s \'\n\'**      |
|  `只显示文件`  |      **grep \'^d\'**      |
|  `只显示文件夹`  |      **grep \'^-\'**      |
|  `只删除当前目录下的文件不删除文件夹`  |      **grep \'^-\'**      |
|  `查看文件的前10行`  |      **head -n 10 file或者awk \'NR<6\' file**      |
|  `查看文件的最后10行`  |      **tail -n 10 file**      |
|  `显示文件某一行(line0)到另外一行(line1)的内容`  |      **cat file \| tail -n +line0 \| head -n (line1-line0)或者sed -n \'5,10p\' file**      |
|  `显示文件某一行(line0)到另外一行(line1)的内容`  |      **cat file \| head -n line1 \| tail -n +line0**      |


