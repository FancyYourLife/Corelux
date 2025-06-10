https://www.corelux.com.sg/

1. Install IIS service in your PC
Control Panel> Search "Turn Windows features on or off" > Turn on "Inernet Information Services"

2. Open IIS serve
File Explorer> Right Click on "This PC" > Click "Manage" > Click "Services and Applications" > Click "Inernet Information Service"

> On Right Side, in "Connections" Panel, click "DESKTOP-xxxx" > Click "Sites" >  Click "Default Web Site"> On the Right Side, in "Actions" Panel, click "Browser *.80(http)"

3. In file explorer, open "C:\inetpub\wwwroot", unzip your website content here.

4. In browser, url "http://localhost/" to view your website.

Note:
1. In IIS add MIME type ".webp" for "text/html", else the images with ".webp" cannot display properly.
2. Do not put any ' or " in JSON file, it will cause the webpage not loading properly.




Reference Website:
https://www.weiken.com/