# react


## Getting started

<!-- {.-three-column} -->

## 1. React开发环境准备
> 1.安装node.js,查看node -v，npm -V验证安装。   
> 2.方案一(`推荐`)：   
> 3.npx create-react-app my-app   
> 4.cd my-app   
> 5.npm start   
> 6.方案二：   
> 7.npm install -g create-react-app     
> 8.cd dir(你项目的目录)   
> 9.create-react-app my-app     
> 10.cd my-app   
> 11.yarn start  
> 安装完成后，执行参考以下指令:
```html
Inside that directory, you can run several commands:
  yarn start
    Starts the development server.
  yarn build
    Bundles the app into static files for production.
  yarn test
    Starts the test runner.
  yarn eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:
  cd jianshu
  yarn start

Happy hacking!   

```

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

## 14. React使用Charles实现本地数据mock
> 安装Charlse中间件

## 15. React中实现CSS过渡动画
> toggle, 
> 1.先定义constructor方法，设置state的初始化值，以及初始化点击事件，例子：
```markdown
constructor(props){
    super(props);
    this.state = {
        show: true
    }
    this.handleToggle = this.handleToggle.bind(this);
}

```
> 2.再调用渲染方法render()，渲染定义的标签组件，例：
```markdown
<div classNames = {this.state.show ? 'show' : 'hide'}>hello world!</div>

```
> 3.再调用点击事件函数handleToggle()，实现toggle，例：
```markdown
handleToggle(){
    this.state = ({
        show: this.state.show ? false : true
    })
}

```

> 4.定义切换样式（动画）css文件，导入css文件
```markdown
import './style.css';

style.css:
.show{
    opacity: 1;
    transition: all 1s ease-in;
}
.hide{
    opacity: 0;
    transition: all 1s ease-in;
}

动画效果：
@keyframes show-item {
    0% {
        opacity: 1;
        color: red;
    }
    50% {
        opacity: 1;
        color: green;
    }
    100% {
        opacity: 1;
        color: blue;
    }
}

@keyframes hide-item {
    0% {
        opacity: 1;
        color: red;
    }
    50% {
        opacity: 1;
        color: green;
    }
    100% {
        opacity: 1;
        color: blue;
    }
}

修改show类样式：
.show{
    opacity: 0;
    transition: all 1s ease-in;变为 transition: show-item 2s ease-in forwards;
}

修改hide类样式：
.hide{
    opacity: 0;
    transition: all 1s ease-in;变为 transition: hide-item 2s ease-in forwards;
}

```

## 16. 使用[react transition group](https://github.com/reactjs/react-transition-group)实现动画
> [安装和使用](https://reactcommunity.org/react-transition-group/)：
> 安装react transition group，终端输入命令：`yarn add react-transition-group`   
> 导入CSStransition模块到自定义组件（例子中APP.js），`import { CSSTransition } from 'react-transition-group';`
> 加入CSStransition标签组件，包裹需要该组件的内容.
```markdown
<CSStransition 
    in={this.state.show} 
    timeout={1000}>
        <div>hello world</div>
    </CSStransition>

```
> `注意`:修改动画效果的标签，其他内容不变。
> 修改style.css,加入组件`react-transition-group`规定的样式.
```markdown
有如下样式：
进场/出厂第一帧, 进场/出厂第二帧, 进场/出厂第三帧 
fade-appear, fade-appear-active, fade-appear-done
fade-enter, fade-enter-active, fade-enter-done
fade-exit, fade-exit-active, fade-exit-done

有如下组件属性：
timeout
classNames
unmountOnExit
onEnter进场/出厂第一帧
    A <Transition> callback fired immediately after the 'enter' or 'appear' class is applied.
Note: when nodeRef prop is passed, node is not passed.
type: Function(node: HtmlElement, isAppearing: bool)

onEntering, 进场/出厂第二帧 
    A <Transition> callback fired immediately after the 'enter-active' or 'appear-active' class is applied.
Note: when nodeRef prop is passed, node is not passed.
type: Function(node: HtmlElement, isAppearing: bool)

onEntered, 进场/出厂第三帧
    A <Transition> callback fired immediately after the 'enter' or 'appear' classes are removed and the done class is added to the DOM node.
Note: when nodeRef prop is passed, node is not passed.
type: Function(node: HtmlElement, isAppearing: bool)

onExit，同上
    A <Transition> callback fired immediately after the 'exit' class is applied.
Note: when nodeRef prop is passed, node is not passed
type: Function(node: HtmlElement)

onExiting
    A <Transition> callback fired immediately after the 'exit-active' is applied.
Note: when nodeRef prop is passed, node is not passed
type: Function(node: HtmlElement)

onExited
    A <Transition> callback fired immediately after the 'exit' classes are removed and the exit-done class is added to the DOM node.
Note: when nodeRef prop is passed, node is not passed
type: Function(node: HtmlElement)

.fade-enter{
    opacity: 0;
}
.fade-enter-active{
    opacity: 1;
    transition: opacity 1s ease-in;
}
.fade-enter-done{
    opacity: 1;
    <!-- color：red； -->
}

.fade-exit{
    opacity: 1;
}
.fade-exit-active{
    opacity: 0;
    transition: opacity 1s ease-in;
}
.fade-exit-done{
    opacity: 0;
}
再修改标签组件CSStransition，classname类名
<CSStransition 
    in={this.state.show} 
    timeout={1000}
    classNames='fade'
    unmountOnExit`移除标签`
    `修改过度显示颜色`相当于前面注释掉的样式颜色修改， onEntered={(el) => {el.style.color='blue'}}    
    `增加显示时，第一帧`,appear对应相应的css类 appear={true}>


.fade-enter .fade-appear{
    opacity: 0;
}
.fade-enter-active `.fade-appear-active`{
    opacity: 1;
    transition: opacity 1s ease-in;
}
.fade-enter-done{
    opacity: 1;
    <!-- color：red； -->
}

.fade-exit{
    opacity: 1;
}
.fade-exit-active{
    opacity: 0;
    transition: opacity 1s ease-in;
}
.fade-exit-done{
    opacity: 0;
}


```

> 重新启动项目，`npm run start`。     

## 17. React中Redux概念简述
> Redux = Reducer + Flux
> Redux就是React版的全局变量
> Redux流程图：
> ![Redux流程图](/images/Redux.png "Redux流程图")  
> 注：`Action Creaters`相当于请求动作，`Reducers`相当于处理接收到的数据,`Store`相当于接收请求数据，`React Components`相当于接收/发送处理完成的数据
> 
> 创建redux中的`store`
> 首先安装Redux，yarn add Redux。
> `index.js`
```html
import { createStore } from 'redux'；
import reducer from './stroe/reducer'
const store = createStore(
    reducer，
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION() `chrome redux 拓展支持`
    );
export store;

```

> `reducer.js`, 相当于笔记本。
```html
const defaultState = {
    inputValue: '',
    list: []
}
<!-- reducer 可以接收state， 但是决不能修改state。 -->
export default (state, action) => {
    if(action.type === 'change_input_value'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === 'add_todo_item'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if(action.type === 'del_todo_item'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }

    console.log(state, action);
    return state;
};

```
> 其他组件导入store
```html
import store from './store';

console.log(store.getState());

```



## 17. [使用Antd实现TodoList页面布局](https://ant.design/)
>`TodoList.js`
```html
import React, { Component } from 'react';
class TodoList extends Component {
    render(){
        return <div>hello world</div>
    }
}

export default TodoList;

```

> 安装Antd模块，yarn add antd。
> 程式中使用Antd模块：
```html
import React, { Component } from 'react';
`import 'antd/dist/antd.css';`
import store from './store';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    render(){
        return (
            <div style={{marginTop: '10px', marginLeft: '10px'}}>
                <div>
                <input value={this.state.value} placeholder='todo info' style={{width: '300px'}} onChange={this.handleInputChange}>
                <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
                </div>
                <List
                style={{marginTop: '10px', marginLeft: '10px'}}
                bordered
                dataSource={this.state.list}
                renderItem={Item => (<List.Item>{item}</List.Item>)}
                onClick={this.handleItemDelete.bind(this, index)}/>            
            </div>
            )
    }
    handleInputChange(e){
        const action = {
            type: 'change_input_value',
            value: e.target.value
        }
        store.dispatch(action);
    }
    handleStoreChange(){
        console.log('store changed');
        this.setState(store.getState());

    }
    handleBtnClick(){
        const action = {
            type: 'add_todo_item'
        }；
        store.dispatch(action);
    }
    handleItemDelete(){
        const action = {
            type: 'del_todo_item',
            index
        }
        store.dispatch(action);
    }
}

export default TodoList;

```
> `问题`:
> 1.`Can't call setState on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application.`
> **把 store.subscribe(this.handleStoreChange); 放到componentDidMount() 里面。这个错误是因为这个方法this.handleStoreChange在还没有建立时候就被使用了**
>
> **`ActionTypes的拆分`**
> 1.`actionTypes.js`
```html
export const CHANGE_IPUT_VALUE = 'change_input_value';
export const ADD_TODO_ITEM = 'add_todo_item';
export const DEL_TODO_ITEM = 'del_todo_item';

```
> 2.组件`TodoList.js`导入actionTypes：
```html
import { CHANGE_IPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM } from './store/actionTypes';

```
> 3.`TodoList.js`中CHANGE_IPUT_VALUE等值直接替换'change_input_value'，type=CHANGE_IPUT_VALUE;
> **`使用actionCreator.js`统一创建action**
> 1.`actionCreator.js`
```html
import { CHANGE_IPUT_VALUE, ADD_TODO_ITEM } from './stroe/actionTypes';

export const getInputChangeAction = (value) => ({
    type: CHANGE_IPUT_VALUE,
    value
});

export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM,
});

export const getAddItemAction = (index) => ({
    type: DEL_TODO_ITEM,
});

```

> 2.修改`TodoList.js`中，handleInputChange方法。
```html
import { getAddItemAction, getInputChangeAction } from './store/actionCreator';
    handleInputChange(e){
        const action = {
            type: 'change_input_value',
            value: e.target.value
        }
        store.dispatch(action);
    }
    变为
        handleInputChange(e){
        const action = getInputChangeAction(e.target.value); 
        store.dispatch(action);
    }

```

> `store` 公共（public）储存空间。
>


## 18. UI组件和容器组件
> `ToollistUI.js`UI组件（傻瓜组件）
> 
```html
import React, { Component } from 'react';
import { Input, Button, List } from 'antd';

class ToollistUI extends Component {
    render(){
        return (
            <div style={{marginTop: '10px', marginLeft: '10px'}}>
                <div>
                <input value={this.props.inputValue} placeholder='todo info' style={{width: '300px'}} onChange={this.props.handleInputChange}>
                <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
                </div>
                <List
                style={{marginTop: '10px', marginLeft: '10px'}}
                bordered
                dataSource={this.props.list}
                renderItem={Item => (<List.Item>{item}</List.Item>)}
                onClick={ (index) => {this.props.handleItemDelete}(index) }/>            
            </div>
            )
    }

}

```
>
> `TodoList.js` 容器组件(聪明组件)修改成如下内容
```html
import React, { Component } from 'react';
`import 'antd/dist/antd.css';`
import store from './store';
import { CHANGE_IPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM } from './store/actionTypes';
import ToollistUI from './ToollistUI';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    render(){
        return (
            <ToollistUI 
                inputValue={this.state.inputValue}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                andleItemDelete={this.handleItemDelete}
            />
            )
    }
    handleInputChange(e){
        const action = {
            type: 'change_input_value',
            value: e.target.value
        }
        store.dispatch(action);
    }
    handleStoreChange(){
        console.log('store changed');
        this.setState(store.getState());

    }
    handleBtnClick(){
        const action = {
            type: 'add_todo_item'
        }；
        store.dispatch(action);
    }
    handleItemDelete(){
        const action = {
            type: 'del_todo_item',
            index
        }
        store.dispatch(action);
    }
}

export default TodoList;

```

## 19. 无状态组件，只有一个render函数，替换UI组件中的类TodolistUI为函数。
```html
import React, { Component } from 'react';
`import React from 'react';` 解决警告问题。
import { Input, Button, List } from 'antd';

const TodolistUI = (props) => {
        render(
            <div style={{marginTop: '10px', marginLeft: '10px'}}>
                <div>
                <input value={props.inputValue} placeholder='todo info' style={{width: '300px'}} onChange={props.handleInputChange}>
                <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
                </div>
                <List
                style={{marginTop: '10px', marginLeft: '10px'}}
                bordered
                dataSource={props.list}
                renderItem={Item => (<List.Item>{item}</List.Item>)}
                onClick={ (index) => {props.handleItemDelete}(index) }/>            
            </div>
        )
}


```
>

## 20. Redux中发送异步请求获取数据 
> 
> 参照之前的axios模块和charlse应用以及Redux各个数据处理。 
>

## 21. [使用Redux-thunk中间件实现ajax数据请求 ](https://github.com/reduxjs/redux-thunk)
> 
> Redux-thunk中间件，统一数据处理。 
> 安装Redux-thunk，指令：`npm install redux-thunk`   
> 使用Redux-thunk模块，`index.js`导入Redux-thunk模块
```html
import { createStore, applyMiddleware } from 'redux'；
import reducer from './stroe/reducer'
import thunk from 'redux-thunk';
const store = createStore(
    reducer，
    applyMiddleware([thunk, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION()])
    );
export store;

```
> 使用redux devtools的compose模块
```html
import { createStore, applyMiddleware， `compose` } from 'redux'；
import reducer from './stroe/reducer'
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION();

const enhancer = composeEnhancers(
    applyMiddleware(thunk)
);

const store = createStore(reducer，enhancer);
export store;

```

## 20. Redux的中间件指的是什么？     
> 

## 21. [Redux-saga中间件使用](https://github.com/redux-saga/redux-saga)   
> 在Redux-thunk中间件中，将AJAX异步请求放在actionCreator里面进行处理。
> 用Redux-saga替代Redux-thunk处理异步请求。
> 安装Redux-saga，`yarn add redux-saga`。
> 使用Redux-saga，导入Redux-saga包。`index.js`:
```html
import { createStore, applyMiddleware， `compose` } from 'redux'；
import reducer from './stroe/reducer'
import createSagaMiddleware from 'redux-saga'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION();

const enhancer = composeEnhancers(
    applyMiddleware(thunk)
);

const store = createStore(reducer，enhancer);
export store;

```
> 创建`sagas.js`,并导入到`index.js`。
```html
`sagas.js`:
function* mySaga() {
  yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}

export default mySaga;

`index.js`:
import { createStore, applyMiddleware， `compose` } from 'redux'；
import reducer from './stroe/reducer'
import createSagaMiddleware from 'redux-saga'
import todoSagas from './sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION();

const enhancer = composeEnhancers(
    applyMiddleware(thunk)
);

const store = createStore(reducer，enhancer);
sagaMiddleware.run(todoSagas)

export store;

```

## 22. [Styled-Components模块安装](https://www.styled-components.com/)    
> yarn add styled-components
> Styled-Components使每个css样式独立，不做任何耦合。
> 修改style.css改为style.js:
```html
injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;
`注意：` styled-components废弃injectGlobal这个API，更改为createGlobalStyle。


```

## 23. [Reset.css使用](https://styled-components.com/)    
```html
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

```
> 将以上代码放在`Styled-Components`模块，style.js中的createGlobalStyle`内容`的内容中。

> #### 24.[React使用iconfont嵌入头部图标 ](https://www.iconfont.cn/)
> 从[iconfont-阿里巴巴矢量图标库](https://www.iconfont.cn/)下载图标文件。
> 将iconfont文件夹放到statics文件夹下面。
> 重命令iconfont.css为iconfont.js，修改内容并导入。
> 使用看说明文档 demo_index.html，<i>标签引用标签。
>
```html
@font-face {
  font-family: 'iconfont';
  src: url('**./**iconfont.eot');
  src: url('**./**iconfont.eot?#iefix') format('embedded-opentype'),
      url('**./**iconfont.woff2') format('woff2'),
      url('**./**iconfont.woff') format('woff'),
      url('**./**iconfont.ttf') format('truetype'),
      url('**./**iconfont.svg#iconfont') format('svg');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

其他类可以删除。

<span class="iconfont">&#x33;</span>


```
> #### 25.搜索框动画效果实现
> 见项目源码。

> #### 26.[使用Immutable.js来管理store中的数据](https://github.com/immutable-js/immutable-js)
> 安装Immutable.js，yarn add immutable
> 使用Immutable.js,首先导入immutable模块。
```html
import { fromJS } from 'immutable';

```
> 在将defaultState对象转化成fromJS对象：
```html
`reducer.js`修改后：
const defaultState = fromJS({
    focused: false,
});

`reducer.js`原代码：
// const defaultState = {
//   focused: false,
// };

`index.js`原代码：
const mapStateToProps = (state) => {
  return {
    // focused: state.header.focused,
    focused: state.focused,
  };
};

`index.js`修改后：
const mapStateToProps = (state) => {
  return {
    // focused: state.header.focused,
    focused: state.header.get('focused'),
  };
};

`reducer.js`原代码：
export default (state = defaultState, action) => {
  if (action.type === "search_focus") {
    return {
      focused: true,
    };
  }
  if (action.type === "search_blur") {
    return {
      focused: false,
    };
  }
  return state;
};

`reducer.js`修改后：
export default (state = defaultState, action) => {
  if (action.type === "search_focus") {
      // immutable对象的set方法，会接合之前的immutable对象的值和设置的值，返回一个全新的对象。
    return state.set('focused', true);
  }
  if (action.type === "search_blur") {
    return state.set('focused', false);
  }
  return state;
};
```

> #### 27.[使用redux-immutable统一数据格式](https://immutable-js.github.io/immutable-js/) 
> 安装和使用redux-immutable组件。
> 安装：`yarn add redux-immutable`
> 导入：`import { combineReducers } from "redux-immutable";`
> 使用(将js对象转变为immutable对象)：
```html
`index.js`修改前：
const mapStateToProps = (state) => {
  return {
    // focused: state.header.focused,
    focused: state.header.get('focused'),
  };
};
`index.js`修改后：
const mapStateToProps = (state) => {
  return {
    // focused: state.header.focused,
    focused: state.get('header').get('focused'),
    等价于下面的写法，两种写法互换：
    focused: state.getIn(['header', 'focused'])


  };
};

```

> #### 27.热门搜索样式布局
> 见代码详情页面。

> #### 28.在React中使用路由功能
> 安装第三方模块，`yarn add react-router-dom`    
> 导入第三方模块到index.js中,`import { BrowserRouter, Route } from "react-router-dom";`。
> 使用第三方模块，加入如下代码到index.js中：
```html
      <Provider store={store}>
        <div>
          <Header />
          <BrowserRouter>
            <div>
              <Route path="/" exact render={() => <div>home</div>}></Route>
              <Route path="/detail" exact render={() => <div>detail</div>}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
请对照前面的index.js文件。

```
> 在SRC文件夹下面创建对应的pages文件夹，包括home,detail等文件夹。

> #### 29.在React中使用页面跳转
> 导入Link模块，`import { Link } from "react-router-dom";`
> Link替代a标签，不会加载html页面，直接跳转。
```html
<Link key={index} to='/detail'>
    content 
</Link>

```

> #### 30.异步组件及withRouter路由方法的使用    
> 每个页面分开处理各自的数据请求。
> 安装第三方模块[react-loadable](https://github.com/jamiebuilds/react-loadable)，`yarn add react-loadable`。
```html
import Loadable from 'react-loadable';
import Loading from './my-loading-component';

const LoadableComponent = Loadable({
  loader: () => import('./my-component'),
    注释：    
    my-loading-component为当前目录下的index.js组件。

  loading: Loading,
    注释：    
    loading() {
        return <div>正在加载</div>
    }

});

export default class App extends React.Component {
  render() {
    return <LoadableComponent/>;
  }
}
    注释：    
    export default () => <LoadableComponent/>

```

> #### 31.React项目上线流程
> 安装XAMPP软件管理项目，开启apache web server(start), 浏览器打开localhost:80,服务器在本机的位置/XAMPP/htdocs/, /XAMPP/htdocs/api下面可以创建各种PHP文件，通过PHP文件和后端通信，从数据库获取内容（得到json文件）。     
> 删除前端项目中的API模拟数据目录，同时在项目当前目录下的终端中输入：npm run build，当前目录下生成了一个build文件夹，下面的文件即为后端需要的前端上线代码文件。     
> 将build文件夹下面的全部文件复制到/XAMPP/htdocs/文件夹下面，通过localhost:80访问，完成前端代码上线。     
>     

