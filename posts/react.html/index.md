# react


## Getting started

<!-- {.-three-column} -->

## 1. React开发环境准备
> 1.安装node.js,查看node -v，npm -V验证安装。   
> 2.方案一：   
> 3.npx create-react-app my-app   
> 4.cd my-app   
> 5.npm start   
> 6.方案二：   
> 7.npm install -g create-react-app     
> 8.cd dir(你项目的目录)   
> 9.create-react-app my-app     
> 10.cd my-app   
> 11.yarn start   

## 2. React工程目录文件结构介绍
> 1.cd my-app。  
> 2.`npm run start`  。  
> 3.文件介绍：  
> 4.readme.md 项目介绍。  
> 5.package.json node包文件，`脚手架`自动生成文件。  
> 6.node_modules 第三方模块包。  
> 7.mainfest.json app的`快捷方式`。  
> 8.src 项目`所有源代码文件夹`，index.js`整个程序运行的入口引用文件`，app.test.js`自动化测试文件`。  

## 3. React中的组件
> 1.导入组件 `import React, { Component } form 'react';`。  
> 2.导出组件 `export default App;` App子类`继承`组件（Component）。  
> 3.挂载App组件到父节点下，`ReactDOM.render(<App />, document.getElementById('root'));`。  

## 4. React中最基础的JSX语法
> 1.标签变成组件，渲染。  
> 2.自定义组件（组件自定义名称`大写字母`开头），渲染。  
> 3.JSX`语法注释` ,`{/\*content\*/}`。  
> 4.引用`CSS文件`，`import './style.css',<input className = "input" />`。  
> 5.`标签转义`，`dangerouslySetInnerHTML={{__html: item}}`。  
> 6.`<lable htmlFor="insertArea">输入内容</lable>, **<input id = "insertArea" />**`。  

## 5. React编写TodoList功能
> 1.`TodoList`替代`App组件`。  
> 2.创建`TodoList组件`。  
> 3.render return 返回`元素`必须包含在`一个标签`中。通过`Fragment组件`，`Fragment占位符`隐藏标签，内容放在<Fragment></Fragment>之间。    

## 5. React中的响应式设计思想和事件绑定
> 1.首先`定义数据函数`:`（constructor(props){super(props);this.state={inputvalue:'可以设置预定值',list:[]}}）`。  
> 2.`数据`与`对应的组件标签``响应`，`<input value={this.state.inputvalue}/>`。  
> 3.`事件绑定`。  
```html 
<input value={this.state.inputvalue} onChange={this.handleInputChange.`bind`(this)}/>,
`控制台console`显示事件`变化`：handleInputChange(e){
    this.`setState`({inputvalue:e.target.value}) 
    console.log(e.`target`.value)
    }
```

## 6. React实现TodoList列表新增删除功能
> 1.首先`定义提交按钮`:`<button onClick={this.handleBtnClick.bind(this)}>提交</button>`。   
> 2.定义`handleBtnClick`函数，`handleBtnClick(){}`。   
> 3.定义列表和对应的组件标签，`list:[] 和 <ul>`。   
```html  
<ul>{
    this.state.list.map(
    (item, index) => {return <li key={index}`(忽略警告)`>{item}</li>}
    )
    }
    </ul>
```
> 4.`事件绑定`，**点击提交，数据追加到list数组列表**。     
```html   
handleBtnClick(){
    this.setState(){
        list:[...this.state.list, this.state.inputvalue], inputvalue:''(`清空输入框`)
        }
        }
```
> 5.`事件绑定`，点击数据，数据从list数组列表中删除。   
```html
<ul>{this.state.list.map(
    (item, index) => {return <li key={index} onClick={this.handleItemDelete.bind(this, index)}>{item}</li>})}</ul>，
    handleItemDelete(index){
    const list = [...`展开运算符`this.state.list]; 
    list.splice(index, 1); 
    this.setState({
    list:list
    })
    }
```

## 7. React组件与组件之间的传值，组件拆分
> 1.创建拆分组件，组件引用拆分组件，return (<拆分组件 />),组件为树形结构。   
> 2.组件间参数传值。
```html
`父组件`：return (<拆分组件 content={value}/>), 
`子组件`：return (<div>{this.props.content}</div>)
```   
> 3.`子组件事件绑定`，点击标签，对应相应事件处理。   
```html
return (
    <div onClick={this.handleClick}>{this.props.content}</div>
    ),
    handleClick(){
        alert(1);
        }
```
> 4.`子组件事件绑定`，点击标签，对应相应事件处理，删除item。
```html
return (
    <div onClick={this.handleClick}>{this.props.content}</div>
    ),
    `父组件`：return (<拆分组件 content={value} index={index} deleteItem={this.handleItemDelete.bind(this)}/>)，
    return (<div onClick={this.handleClick}>{this.props.content}</div>),handleClick(){
        alert(this.props.index);
        },
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this)
        },
    handleClick(){
        this.props.deleteItem(this.props.index)
        }
```   
## 8. React的特点
> 1.声明式开发。   
> 2.可以和其他框架并存。   
> 3.组件化。   
> 4.单向数据流。   
> 5.视图层框架。   
> 6.函数式开发。   

## 10. React Developer Tools的安装及使用
> 1.chrome Extensions： `React Developer Tools`

## 9. [PropTypes与DefaultProps的应用](https://reactjs.org/docs/typechecking-with-proptypes.html)
> 1.导入`PropTypes包`。   
> 2.组件.propTypes={test: PropTypes.string.isRequired`必须值`, var: PropTypes.string, method: PropTypes.func, index: PropTypes.number}，定义组件`值的属性（类型）`。   
> 3.DefaultProps默认值，.组件.DefaultProps={test: 'hello world'}。      

## 11. React中的虚拟DOM
> 1.定义state数据。   
> 2.JSX模板。   
> 3.数据 + 模板 结合生成真实的DOM， 来显示。   
> 4.state 发生变化。   
> 5.数据 + 模板 结合生成真实的DOM， 替换原始的DOM。   
>
> **缺陷**
> 生成两次DOM片段，替换过程非常耗性能。
>
> **优化**。   
> 1.定义state数据。   
> 2.JSX模板。   
> 3.数据 + 模板 结合生成真实的DOM， 来显示。   
> 4.state 发生变化。   
> 5.数据 + 模板 结合生成真实的DOM， 并不直接替换原始的DOM。   
> 6.新的DOM（DocumentFragment）和原始的DOM作对比，找出差异。   
> 7.找出发生变化的组件元素。   
> 8.只用新的DOM中的组件元素替换老的DOM中的input元素。   
>
> **缺陷**
> 性能提升并不明显
>
> **优化**   
> 1.定义state数据。   
> 2.JSX模板。   
> 3.数据 + 模板 结合生成真实的DOM， 来显示。   
> 4.生成虚拟DOM(虚拟DOM就是一个JS对象，用来描述真正的DOM)（`创建对象有性能损耗`），用虚拟DOM的结构生成真实的DOM,来显示。   
> 5.state 发生变化。   
> 6.生成新的虚拟DOM。   
> 7.比较虚拟BOM与新的虚拟DOM的区别。   
> 8.直接操作DOM改变其中内容。   

## 12. React中ref的使用
> 1.setState是`异步函数`，处理时最好将语句放在`回调函数`后面。   
> 2.ref 即`reference`，引用指向`当前标签`。  
> 3.<input&nbsp;&nbsp;&nbsp;&nbsp;ref={&nbsp;&nbsp;&nbsp;&nbsp;(input)&nbsp;&nbsp;&nbsp;&nbsp;=>&nbsp;&nbsp;&nbsp;&nbsp;{this.input&nbsp;&nbsp;=&nbsp;&nbsp;input}}/>。  
> 4.函数调用时，直接var&nbsp;&nbsp;&nbsp;&nbsp;value = this.input.value。  
>  

## 13. React的生命周期函数
> 1.生命周期函数是指在某一时刻组件会自动调用执行的函数。  
> 2.`constructor`函数在组件创建的时候调用，`render`在数据发生变化的时候调用，都是生命周期函数。`componentWillMount`在组件即将被挂载到页面上的时刻被自动调用,`componentDidMount`在组件被挂载到页面之后被自动调用,`shouldComponentUpdate`在组件被更新之前自动执行，返回`布尔值`（bool），。`true执行`，`false不执行`。`componentWillUpdate`在`shouldComponentUpdate`之后执行，`shouldComponentUpdate`返回`true`才执行，组件被更新之前自动执行。`componentDidUpdate组`件更新完成后自动执行。`componentWillRecieveprops`存在子组件中，当一个组件从父组件接受参数，只要父组件的render函数被重新执行了，子组件的这个生命周期函数就会被执行，第一次存在于父组件中不会执行，已经存在父组件中才会执行。`componentWillUnmount`这个组件即将从页面中剔除时，才会执行。  
> 3.**使用场景**   
> 4.`render`生命周期函数`必须存在`，其他生命周期函数`可有可无`。   
> 5.`shouldComponentUpdate`接受两个参数:`nextProps`,`nextState`。  
> 6.`componentDidMount`处理AJAX异步请求，`安装AJAX模块`，**yarn add axios**.`导入AJAX模块`，`import axios from 'axios'`,`调用axios，axios.get('/api/组件')`。


