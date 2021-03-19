# 网页浏览器


## Getting started

<!-- {.-three-column} -->
### 火狐浏览器开启DNS-over-HTTPS（DoH）解决DNS污染
<!--more-->
<!-- {.-prime} -->
```markdown
更新火狐浏览器至62以上版本（仅安卓、PC和Mac支持DoH功能），在浏览器地址栏输入about:config，点击“我了解此风险”
在新打开的页面顶部搜索框， 搜索network.trr
双击network.trr.mode，将值改为2（默认是 0；2 表示尝试使用 DoH，如果不行就退回到传统方式；5 表示任何情况下都不用 DoH 功能）
双击network.trr.uri，将值改为支持DoH的未污染服务器地址，可以输入一些公共的，如https://mozilla.cloudflare-dns.com/dns-query，也可以自己搭建。
通过以上步骤，你已经成功开启了火狐浏览器隐藏功能DoH，可以避免自己的DNS查询记录被监控收集和恶意篡改，不再受困于DNS污染而无法正常访问某些网站。
此外，你还可以在地址栏输入about:networking选择DNS选项，查看DNS查询状态。
```

### chrome浏览器开启DNS-over-HTTPS（DoH）解决DNS污染
<!--more-->
<!-- {.-prime} -->
```markdown
Open Settings: In your address bar, type the following and hit Enter chrome://flags/#dns-over-https. It takes you to Secure DNS lookups
Enable DNS over HTTPS: Click on Secure DNS lookups radio button to enable DoH.
Configure Cloudflare DNS: Your browser infers the DNS over HTTPS provider you want based on your system DNS. To benefit from Cloudflare DoH, make sure your system is properly configured.
```

### chromium浏览器开启DNS-over-HTTPS（DoH）解决DNS污染
<!--more-->
<!-- {.-prime} -->
```markdown
/usr/bin/chromium %U –host-resolver-rules=“MAP * ~NOTFOUND , EXCLUDE 127.0.0.1” --enable-features="dns-over-https<DoHTrial" --force-fieldtrials="DoHTrial/Group1" --force-fieldtrial-params="DoHTrial.Group1:server/https%3A%2F%2Fcloudflare-dns%2Ecom%2Fdns-query/method/POST

my chrominum conf:
/usr/bin/chromium %U  --enable-features="dns-over-https<DoHTrial" --force-fieldtrials="DoHTrial/Group1" --force-fieldtrial-params="DoHTrial.Group1:server/https%3A%2F%2Fcloudflare-dns%2Ecom%2Fdns-query/method/POST" --proxy-server="socks5://127.0.0.1:7891" --host-resolver-rules="MAP * ~NOTFOUND , EXCLUDE 127.0.0.1"
```

### 浏览器插件：
<!--more-->
<!-- {.-prime} -->
> https-everywhere， swithyproxyomega, noscript, CanvasBlocker, Cookie-AutoDelete， adblockplus， WebRTC Leak Shield，Privacy Badger, Selenium IDE, WebRTC Network Limiter


