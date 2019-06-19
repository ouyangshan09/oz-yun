## 前端项目git提交信息规范

#### 格式要求：

> <类型>(<范围>): <主题>
>
><空一行>
>
><内容>
>
><空一行>
>
><页脚>

**注意：每行字符数不要超过100**

#### 定义说明：

- **类型** 包括：

    ```
    feat：新功能（feature）
    fix：修补bug
    docs：文档（documentation）
    style：格式（不影响代码运行的变动）
    refactor：重构，即不是新增功能，也不是修改bug
    impr：业务或功能的改进与优化（improve），还包括非测试发现的问题等
    perf：改进性能的代码变动
    test：增加测试
    chore：构建过程或辅助工具的变动
    ```

- **范围** 是可选项，而非必须项，用于说明commit影响的范围，比如控制器、视图层等等，视情况而定。

    **如果类型是fix，则范围必须写，内容是bug编号，比如，fix(#1234):修正了xxxx**

	
- **主题** 是commit目的的简短描述，建议不超过50个字符


- **内容** 是可选项，对本次commit的详细描述，可以分成多行。

    **对于fix类型的提交，必须包括以下信息，而且要写在独立一行：**

    ```
    提交者：xxx|类别：前端/后台|模块：m|类：c|方法：f
    ```

- **页脚** 用于两种情况，是可选项：

    1）不兼容的变动：必须以BREAKING CHANGE开头

    2）关闭 Issue

- **示例：**

```
fix(#1234): 修正上传数据api入库出错

增加uuid字段标识记录批次
提交者：帅哥|类别：后台|模块：api|类：handsome|方法：HandsomeBoyIsMe

Closes #4321,#6789
BREAKING CHANGE: api接口调用方式变更，需要相关系统同步调整调用代码
```

**提示：**
命令行里提交多行，可使用单引号，参考如下
```
git commit -m '帅
到
爆'
```