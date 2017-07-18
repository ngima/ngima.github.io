<html>
<head>
<script type="text/javascript">
function finish(){
JSInterface.finish("Test");
}

function sayHello(){

JSInterface.sayHello(document.getElementsByName('txtJob')[0].value)
}
</script>
</head>

<body>
<form>
<input type="text" name="txtName" placeholder="Enter your name"/>
<input type="button" value="!" onclick="finish()" />
<input type="button" value="Finish!" onclick="sayHello()" />
</form>
</body>
</html>
