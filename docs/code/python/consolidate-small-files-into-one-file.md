# 将小文件整合到一个文件中

## 需求

帮我写一个 python 脚本，我有一个文件夹，里面有很多 Md 文件，现在帮我整合到一个 txt 文本中，格式如下

```markdown
## 文件一的名称

文件一的内容

---

## 文件二的名称

文件二的内容
```

## 输出

```python
import os

def merge_md_files_reverse_order(folder_path, output_file):
    with open(output_file, 'w', encoding='utf-8') as output:
        md_files = [f for f in os.listdir(folder_path) if f.endswith('.md')]
        for md_file in reversed(md_files):
            file_path = os.path.join(folder_path, md_file)
            with open(file_path, 'r', encoding='utf-8') as input_file:
                content = input_file.read()
                output.write(f"\n## {md_file[:-3]}\n\n{content}\n\n---\n")

if __name__ == "__main__":
    input_folder = "替换为你的文件夹路径"  # 替换为你的文件夹路径
    output_file = "output.txt"  # 替换为你想要生成的输出文件名

    merge_md_files_reverse_order(input_folder, output_file)
    print(f"合并完成，结果保存在 {output_file}")
```