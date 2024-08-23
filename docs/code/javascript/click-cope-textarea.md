# 点击复制功能

点击 `.copy-content` 按钮，粘贴 `#textarea` 文本框中的内容。

```jsx
$(document).ready(function () {
	$('.copy-content').click(function () {
		var content = $('#textarea').val();
		var tempTextarea = $('<textarea>');
		tempTextarea.val(content);
		$('body').append(tempTextarea);
		tempTextarea.select();
		document.execCommand('copy');
		tempTextarea.remove();
	});
});
```