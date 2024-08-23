# 保留小文本固定行数，其他删除

如果所有的小文本都是以.txt 后缀存储的，我们可以批量处理这些文件。以下是一个脚本示例，它将读取一个文件夹中的所有.txt 文件，并保留每个文件的第 12 行，然后将结果写入新的文件中。

```python
import os

def keep_only_12th_line_in_folder(input_folder, output_folder):
  # 检查输入文件夹是否存在
  if not os.path.isdir(input_folder):
    print(f"错误：文件夹 '{input_folder}' 不存在")
    return

  # 确保输出文件夹存在，如果不存在则创建
  os.makedirs(output_folder, exist_ok=True)

  # 处理文件夹中的每个.txt 文件
  for filename in os.listdir(input_folder):
    if filename.endswith(".txt"):
      input_filepath = os.path.join(input_folder, filename)
      output_filepath = os.path.join(output_folder, filename)

        # 保留第 12 行
        with open(input_filepath, 'r', encoding='utf-8') as infile:
            lines = infile.readlines()

        if len(lines) >= 12:
          output_lines = [lines[11]]

          # 写入输出文件
          with open(output_filepath, 'w', encoding='utf-8') as outfile:
              outfile.writelines(output_lines)

          print(f"已保留文件 '{input_filepath}' 的第 12 行到 '{output_filepath}'")
        else:
          print(f"警告：文件 '{input_filepath}' 不包含至少 12 行")

# 示例用法
input_folder = "your_input_folder"  # 替换为你的输入文件夹路径
output_folder = "output_folder"      # 替换为你的输出文件夹路径

keep_only_12th_line_in_folder(input_folder, output_folder)
```