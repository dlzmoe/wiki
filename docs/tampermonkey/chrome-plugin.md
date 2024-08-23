# chrome 浏览器扩展相关说明

获取 extensionID 然后可以进入 chrome-extension 页面。

```
const extensionID = chrome.runtime.id; 
console.log(extensionID); 
window.open("chrome-extension://" + extensionID + "/options.html", "_blank");
```

```jsx
{
    "manifest_version": 3,              // 插件版本
    "name": "Extension",                // 插件名称
    "version": "1.0.0",                 // 插件版本号
    "description": "Chrome Extension",  // 插件描述信息
    "icons": {                          // 插件在不同位置显示的图标 
      "16": "icon16.png",               // `16x16`像素的图标
      "32": "icon32.png",               // `32x32`像素的图标
      "48": "icon48.png",               // `48x48`像素的图标
      "128": "icon128.png"              // `128x128`像素的图标
    },
    "action": {                         // 单击浏览器工具栏按钮时的行为
      "default_popup": "popup.html",    // 单击按钮时打开的默认弹出窗口
      "default_icon": {                 // 弹出窗口按钮图标 // 可以直接配置为`string`
        "16": "icon16.png",             // `16x16`像素的图标
        "32": "icon32.png",             // `32x32`像素的图标
        "48": "icon48.png",             // `48x48`像素的图标
        "128": "icon128.png"            // `128x128`像素的图标
      }
    },
    "background": {                     // 定义后台页面的文件和工作方式
      "service_worker": "background.js" // 注册`Service Worker`文件
    },
    "permissions": [                    // 定义插件需要访问的`API`权限
      "storage",                        // 存储访问权限
      "activeTab",                      // 当前选项卡访问权限
      "scripting"                       // 脚本访问权限
    ]
}
```