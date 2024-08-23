# 计算时间差

```jsx
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="viewport"
    content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no">
  <title>DATE</title>
<style>
*{padding:0;margin:0;box-sizing:border-box}
body{height:100vh;position:relative;background:red;color:#fff}
.box{position:absolute;left:50%;top:40%;transform:translate(-50%,-50%);font-size:20px;width:100%;text-align:center}
p{padding-bottom:10px}
#days{font-size:30px}
</style>
</head>

<body>
  <div class="box">
    <p>持续</p>
    <span id="days"></span>
  </div>
  <script>
    var BootDate = new Date("2019/12/01 12:00:00");
    function ShowRunTime(id) {
      var NowDate = new Date();
      var RunDateM = parseInt(NowDate - BootDate);
      var RunDays = Math.floor(RunDateM / (24 * 3600 * 1000));
      var RunHours = Math.floor(RunDateM % (24 * 3600 * 1000) / (3600 * 1000));
      var RunMinutes = Math.floor(RunDateM % (24 * 3600 * 1000) % (3600 * 1000) / (60 * 1000));
      var RunSeconds = Math.round(RunDateM % (24 * 3600 * 1000) % (3600 * 1000) % (60 * 1000) / 1000);
      var days = RunDays + "天" + RunHours + "时" + RunMinutes + "分" + RunSeconds + "秒";
      document.getElementById(id).innerHTML = days;
    }
    ShowRunTime('days')
    setInterval("ShowRunTime('days')", 1000);
  </script>
  <script>
    document.oncontextmenu = function (e) { e = e || window.event; e.returnValue = false; }
    document.onselectstart = new Function('event.returnValue=false;');
    document.addEventListener('gesturestart', function (event) {
      event.preventDefault()
    })</script>

</body>

</html>
```