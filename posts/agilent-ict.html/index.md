# agilent-ict


## Getting started

<!--more-->
<!-- {.-three-column} -->

> ## [基本硬件构造](http://www.kingtest.cn/wp-content/uploads/2020/02/Agilent3070-%E7%9A%84%E5%9F%BA%E6%9C%AC%E6%9E%84%E9%80%A0.pdf)            
> ###  一.概述       
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HP3070 主要用于在线测试，来测定 PCB 板上的模拟和数字元件的好坏，硬件方面主要包括 `Testhead` ,`Controlleer`, `Support bay`,`Vacuum control` 等等。       
> ![结构入下图：](/images/ICT3070结构.png "图，HP3070结构图")

> #### 一. `测 试 头(Test head)`: `完 成 模 拟` ,`数 字 测 试`       
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;整 个 Test head 可 划 分 为 `2 个 Bank`,`4 个 Module`. 目前配置: 1 个 Bank,即 Bank2, Module2,3      

> #### 二. `每 个 Module` 满 配 置 有 `11 块 板 卡 `:`SLOT1: ASRU card` ; `SLOT6: Control card` ; `Others: Pin card`，如下图所示：
> ![测 试 头(Test head)](/images/ICT3070Testhead.png "图，测 试 头(Test head)")      
> ![测 试 模 块(Test head module)](/images/ICT3070TestheadModule.png "图，测 试 模 块(Test head module)")      
> `ASRU card`(Analog Stimulate Response Unit): 模拟激励响应单元      
> 提 供 模 拟 测 试 时 所 需的 激 励 源 ,向量检测器,运算放大器等 电 路 测 量 仪 表. ASRU 卡必须在每个 Moudule 的`第一槽`.       
> `Control card`: 在测板时,程序和数据从系统控制器中下载到卡上,据 程 序 控 制继电器的正确闭合与释放。       
> Mother Card:是每个 M 的底板,提供直流源给各卡,在卡间传送信号和地址解码.        
> Pin card : 提供测试时的复用系统， 每块双密度的 Pin card 提供用于测试的针数为 144。                
> 一个 Module 的测试能力为 144*9=1296 点。2592 5184            
> Control 卡必须在每个 Moudule 的第六槽.       

> #### 三 电 源 柜(Support Bay)
> 可 编 程 直 流 电 源(HP6624 或 其 它), 目 前 配 置 HP6624 两个.       
> 每 个 HP6624 均 有 四 个 输 出, 因 此 目 前 可 提 供 8 组 电 源(PS1~PS8).       
> 电 源 输 出 通 过 电 缆 连 至 Test head 中 的 ASRU 卡 上, ASRU 卡 上 有 针 通 过 夹 具 供 给 PCB 板.       


> #### 四.真空箱(Vacumm Box)       
> (SeriesⅢ 已 集 成 在 Test head 中)       
> 提 供 两 组 独 立 控 制 的 真 空.       
> 提 供 可 控 的 压 缩 空 气.        

> #### 五.测试夹具(Fixture); 包括两种夹具技术:长线夹具和短线夹具.
> 1.5.1 长线夹具是一种真空夹具,它使用双绞线,一根是测针间相连的信号线,另一根是接电源
 地的屏蔽线,用以防止信号间干扰.目前我们 GenRad 上都使用该夹具.如下图所示
> 1.5.2 短线夹具有两种类型:真空夹具和弹夹夹具,它的夹具内信号连线非常短,使得线路损耗
 和信号干扰更小,提高了测试精度.目前我们 HP3070 上都使用该夹具.如下图所示

> #### 六.其他          
> [Keysight Medalist i3070 Series 5 ](https://www.keysight.com/us/en/assets/7018-02227/data-sheets/5990-4344.pdf)         
> [Testing An Electrolytic Capacitor Using Keysight i3070 In-Circuit System Polarity Test Solution](https://www.keysight.com/gb/en/assets/7018-06491/application-notes/5992-3651.pdf?success=true)         

> #### 七.[详细注意内容](https://doc.xdevs.com/doc/HP_Agilent_Keysight/inlineSystemInstallation%20Medalist%20i3070%20Series%205i%20Inline%20System%20Installation%20Guide%20c20131212%20%5B46%5D.pdf)         
> ### Power Requirements         
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• 1.Medalist i3070 Series 5i Main Power         
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• 2.Medalist i3070 Series 5i PDU         
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• 3.Mains Disconnect         
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• 4.Power Cord                   
>            
> The system power and PDU must be factory configured to match the power at the customer site. This is done prior to delivery and installation at the customer site. The power cannot be reconfigured on- site.          
>           
> The power configuration for the system is shown on a label at the rear of the system (bottom right). The voltage of the PDU is indicated on the front panel of the PDU.This is the main 3- phase AC power input connected from the customer site.          
> **CAUTION** : After connecting power to the system, do not power up the system. An Agilent service representative will verify the power and complete the system installation and verification.          

> ### 1.**Medalist i3070 Series 5i Main Power**: `This is the main 3- phase AC power input connected from the customer site`.         
> **Table 4** `Main Power Options`         
| Power Option | Frequency | Voltage line-to-neutral/line-to-line |
| ------------ | ----------|------------------------------------- |
| `200–240V 3-Phase Delta(3PD)`| **50/60 Hz** |**200,220,230,240**|
| `208–220V 3-Phase Wye(3PY)`| **50/60 Hz** |**208,220**|
| `200–240V 3-Phase Delta(3PD)`| **50/60 Hz** |**200,220,230,240**|
| `200–240V 3-Phase Delta(3PN)`| **50/60 Hz** |**220 / 380,230 / 400,240 / 415**|

> ### 2.**Medalist i3070 Series 5i PDU**:          
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`The PDU (Power Distribution Unit)` is the device in the system to which AC power is connected. The PDU is wired differently for different power configurations and will be configured to match the system power configuration. The voltage of the PDU is marked on the front panel of the PDU.         
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The `E1135` PDU is connected via a `3- phase AC terminal block` wired out from `the system main power`.         
> ![PDU](/images/PDU.png "图，PDU结构图")

> ### 3.**Mains Disconnect**:          
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The system must be equipped with a mains disconnect that provides over- current and short- circuit protection. It may be a fused disconnect or a circuit breaker.         
> If a fused disconnect is used, it must:                 
```html
• Be rated for 30 amps in each phase.
• Open all line conductors and neutral conductors where local code
applies, but not the protective earth conductor.
• Be marked “System Mains Disconnect” or the equivalent in your local
language.
• Be marked with a “ON” for the On position or “OFF” for the Off
position.
• Be capable of being locked in the Off position, but not in the On
position.
• Be installed within 3 m (10 ft) of the system, where it can be easily
reached by the system operator without requiring the system to be
moved to access the disconnect.

```
>         
> If a circuit breaker is used, it must meet all of the above requirements plus:              
```html
• Be rated for a minimum of 10,000 Amperes Interrupting Capacity (AIC)
if used on a 200–240 volt circuit, or 14,000 AIC if used on a higher
voltage circuit.

```

### Compressed Air Requirements
### 1.**Compressed Air Supply**:  
> ![Compressed Air Supply](/images/Compressed.png "图，Compressed Air Supply位置图")                  

> ### 其他内部图：          
> ![main disconnect switch](/images/PDU2.png "图，main disconnect switch位置图")                 
> ![PDU on/off switch](/images/PDU3.png "图，PDU on/off switch位置图")              
> Connect the LAN cable from the RJ45 coupler at the rear of the controller pod to the site network. ![RJ45 coupler](/images/RJ45.png "图，RJ45 coupler位置图")                



> ### **Boot the Testhead**              
```html
1 Turn the Main Power Switch to ON.
2 Turn ON the PDU on/off switch that enables power to the testhead.
3 Turn on the controller and monitor.
4 Log on as calibrate (the default password is Agilent1).
5 Start DGN (Diagnostics) if it does not start automatically.
    a Select Start > All Programs > Agilent ICT > `KornShell`.
    b At the KornShell prompt, type `dgn`.
6 In the DGN window, boot the testhead using the `Testhead Functs` and `Testhead Power On` function keys.

```

> ### **Run AutoAdjust All**             
```html 
1 Select AutoAdjust on the Service Package - Level 1 menu, and click f1, Enter.
2 On the AutoAdjust - Level 2 menu, click f6, AutoAdj All.
3 Verify that there are no errors.
If there are errors, isolate the cause by running Full Diagnostics.

```

> ### **Run Full Diagnostics**            
> NOTE:`Compressed air must be attached` to the system to run full Diagnostics.                     
  ```html 
1 Place a pin verification fixture on the testhead and lock it down.
2 Change Manual Intervention to Yes (press Next Value).
  Do not press Save Config as that will make the Manual Intervention selection permanent.
3 Run Full Diagnostics.
4 Verify that there are no errors.

```

> 点击[产品登录查看详细配置文件](https://service.keysight.com/infoline/public/details.aspx?i=DOC)            
> 点击[产品登录查看详细说明文件](https://doc.xdevs.com/doc/HP_Agilent_Keysight/Medalisti3070_S5i_help_V1%20Medalist%20i3070%20Series%205i%20inline%20ICT%20system%20help%20c20131126%20%5B90%5D.pdf)           
> 点击[DUT Power Supply Installation Manual(重点电源安装设置指导)](https://www.keysight.com/gb/en/assets/9018-06947/installation-guides/9018-06947.pdf)           
> 点击[PDF文件档案](https://www.keysight.com/gb/en/support/key-34623/medalist-i3070-systems.html)           

> 点击[PCB Manufacture and PCB Assembly inside PCB Factory China](https://www.youtube.com/watch?v=o8NOK1JJbgw)         

