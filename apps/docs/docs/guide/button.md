---
layout: doc
---
# Button 按钮
按钮用于开始一个即时操作。

### 何时使用
标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

### 形态
::: demo 目前只支持`outline`一种形态
```vue
<template>
  <p-button type="primary" >common</p-button>
  <p-button type="primary" outline>outline</p-button>
</template>
```
:::

### 状态色
::: demo 通过`type`设置按钮状态色，目前支持`primary`、`common`、`success`、`danger`、 `warning`三种状态色
```vue
<template>
  <p-button type="primary">primary</p-button>
  <p-button type="common">common</p-button>
  <p-button type="success">success</p-button>
  <p-button type="danger">danger</p-button>
  <p-button type="warning">warning</p-button>
</template>
```
:::

### 尺寸

### 禁用状态

### 加载中状态

### 图标按钮

#### button 参数
| 参数名      | 类型        | 默认        | 说明        |
| :---------- | :---------- | :---------- | :---------- |
|type         | IType       | `primary`   |             |
|icon         |`string`     |--           |             |
|circle       |`boolean`    |false        |             |
|outline      |`boolean`    |false        |             |

#### button 类型定义

##### IType
```js
  type IType = "primary" | "common" | "success" | "danger" | "warning";
```