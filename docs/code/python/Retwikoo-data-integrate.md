# 将 twikoo 数据重新生成小文本

```py
import json

def generate_txt_from_json(json_file_path):
    with open(json_file_path, 'r', encoding='utf-8') as file:
        data = json.load(file)

    href_dict = {}
    count = 1

    for item in data:
        href = item.get('href', 'default')
        if href not in href_dict:
            href_dict[href] = []
        
        href_dict[href].append(item)

    for href, items in href_dict.items():
        txt_file_name = f"{count}.txt"
        count += 1
        with open(txt_file_name, 'w', encoding='utf-8') as txt_file:
            txt_file.write(f'href: {href}\n\n')
            for item in reversed(items):
                nick = item["nick"]
                mail = item["mail"]
                comment = item["comment"]
                
                txt_file.write(f'**{nick}({mail})**\n')
                txt_file.write(f'{comment}\n\n')

if __name__ == "__main__":
    json_file_path = "D:/1download/twikoo-comment.json"  # 请替换成你的 JSON 文件路径
    generate_txt_from_json(json_file_path)
```