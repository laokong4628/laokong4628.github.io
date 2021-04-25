# TypeScript


## Getting started

<!-- {.-three-column} -->

## 1. TypeScript简介       
> `TypeScript `是`微软`开发的 `JavaScript 的超集（superset）`，TypeScript `兼容` JavaScript，可以载入 JavaScript 代码然后运行。TypeScript 与JavaScript 相比进步的地方 包括：加入注释，让编译器理解所支持的对象和函数，编译器会移除注释，不会增加开销；增加一个完整的类结构，使之更新是传统的面向对象语言。       
>           
```html
`为什么会有 TypeScript?`
JavaScript 只是一个脚本语言，并非设计用于开发大型 Web 应用，JavaScript 没有提供类和模块的概念，而 TypeScript 扩展了 JavaScript 实现了这些特性。TypeScript 主要特点包括：
TypeScript 是微软推出的开源语言，使用 Apache 授权协议
TypeScript 是 JavaScript 的超集.
TypeScript 增加了可选类型、类和模块
TypeScript 可编译成可读的、标准的 JavaScript
TypeScript 支持开发大规模 JavaScript 应用
TypeScript 设计用于开发大型应用，并保证编译后的 JavaScript 代码兼容性
TypeScript 扩展了 JavaScript 的语法，因此已有的 JavaScript 代码可直接与 TypeScript 一起运行无需更改
TypeScript 文件扩展名是 ts，而 TypeScript 编译器会编译成 js 文件
TypeScript 语法与 JScript .NET 相同
TypeScript 易学易于理解

`语法特性:`
类 Classes
接口 Interfaces
模块 Modules
类型注解 Type annotations
编译时类型检查 Compile time type checking
Arrow 函数 (类似 C# 的 Lambda 表达式)

`JavaScript 和 TypeScript 的区别`
TypeScript 是 JavaScript 的超集，扩展了 JavaScript 的语法，因此现有的 JavaScript 代码可与 TypeScript 一起工作无需任何修改，TypeScript 通过类型注解提供编译时的静态类型检查。TypeScript 可处理已有的 JavaScript 代码，并只对其中的 TypeScript 代码进行编译

```
>        

## 2. TypeScript与VsCode 编辑器       
> 安装Visual Studio的TypeScript插件                       
> Prettier-Code formatter代码格式化插件                
> VsCode TypeScript ts代码编写需要的设置，打开setting，查找tab-size，修改为2。查找quote，修改TypeScript quote为single。查找save，选中Format On Save选项框。               

## 3. 什么是TypeScript, 与javascript的区别？                
> TypeScript is a `typed superset of JavaScript` that `compiles to plain JavaScipt`.                
> 一.`typed`:           
> TypeScript ts 静态类型。 let b: number = 123; 类型不变，不可修改类型，可修改值。b= 456。       
> javascript js 动态类型。 let a = 123; 类型可以修改，可修改类型，可修改值。a = 'abc'。              
> 二.`compiles`示例：              
```html
以下为ts代码：
interface Person {
    name: String
}

const teather: Person = {
    name: 'Dell Lee'
}
ts代码无法在浏览器中直接运行，需要编译成js代码才能在浏览器中运行。

以下为编译后的js代码：
"use strict";
const teather = {
    name: 'Dell Lee'
};
js代码可以在浏览器中直接运行。

```

## 4. TypeScript带来了什么优势     
> 1.ts代码可以直接发现错误在哪（有提示），js没有提示，需要在浏览器（控制台）中运行才能发现错误。开发过程中发现潜在的问题。ts的静态类型，可以快速发现错误。     
> 示例：     
```html
js代码参数data未定义时，没有任何提示，需要在浏览器（控制台）中运行才能发现错误：
function jsDemo(data) {
    return Math.sqrt(data.x ** 2 + data.y ** 2);
}
jsDemo();

ts代码参数data未定义时，有错误提示，tsDemo()调用时报错：
function tsDemo(data: { x: number, y: number }) {
    return Math.sqrt(data.x ** 2 + data.y ** 2);
}
tsDemo(); //报错
发现错误修改为
tsDemo({ x: 1, y: 123 });


```
> 2.ts代码，编辑器（VS code）的编写代码时提示（自动完成）更加友好。     
> 3.ts代码，代码语义更加清晰易懂，便于阅读，例子中,`data: { x: number, y: number }`。     
> 优化后代码：     
```html
type Point = { x: number, y: number }

function tsDemo(data: Point) {
    return Math.sqrt(data.x ** 2 + data.y ** 2);
}

tsDemo({ x: 1, y: 123 });

```

## 5. TypeScript基础环境搭建     
> 1.安装node.js。
> 2.验证已经安装node.js,npm。指令：`node -v` , `npm -v`查看安装的版本号。
> 3.验证已经安装node.js,npm。指令：`node -v` , `npm -v`。
> 4.打开VS code终端，输入以下指令：`npm install typescript -g`。
> 5.调试运行代码，终端输入以下指令：`tsc demo.ts`TypeScript compile编译ts文件，会生成一个js文件demo.js，指令：`node demo.js`运行程序。     
> 6.简化以上流程，安装ts-node，输入以下指令：`npm install -g ts-node`或者`npm install -g ts-node@加想安装的对应版本号`。    
> 7.安装ts-node后，调试运行代码，只需要输入`ts-node demo.ts`。    

## 5. 静态类型的深度理解                
> 1.`const count: number = 2019`，这种类型为TS静态类型中的`基本类型`。           
> 2.编辑器count.会提示所有number类型可以调用的方法。           
> 3.TS静态类型中的`自定义类型`：           
```html
自定义Point类型：
interface Point {
    x: number,
    y: number
}

const point: Point = {
    x: 3,
    y: 4
}
//point变量上具备Point类型的所有属性和方法。使用point.x。

```
> 4.静态类型的属性和方法不可以更改。           

## 5. 基础类型和对象类型                
> 1.基础类型（null, undefined, symbol, boolean, void, string, number）:               
```html
const count: number = 123;
const teatherName: string = `dell`;

```
> 2.对象类型（对象{}, 数组[], 类Class, 函数function, Date， 自定义对象{}）:               
```html
const teather: {
    name: string,    
    age: number,    
} = {
    name: 'dell',
    age: 18        
};

const numbers: number[] = [1, 2, 3];

class Person {}
const dell: Person = new Person();

const getTotal: () => number = () => {
    return 123;
}

const date = new Date();

interface Person {
    name: string,
}
const rawData = '{"name": "dell"}';
const newData: Person = JSON.parse(rawData);

```

## 6. 类型注解和类型推断           
> `类型注解` //type annotation 类型注解，我们来告诉变量是什么类型。           
> 语句 `const count: number = 123;` 中的 `: number`即为`类型注解`。           
> `类型推断` //type inference 类型推断，TS会自动的去尝试分析变量的类型。           
> 语句 `const countInfere = 123;` 中的 `变量`即TS会自动的去尝试分析该变量的类型。           
> `注意`：如果 TS 能够自动分析变量的类型，我们就什么也不需要做了。           
> `注意`：如果 TS 无法分析变量的类型的话，我们需要使用类型注解。           
> 在`VS code`中如果提示类型为any就需要加类型注解，如果提示类型为当前需要的类型就不需要加类型注解了。           
> 例子：           
```html
// 不需要类型注解
const firstNumber = 1;
const secondNumber = 2;
const total = firstNumber + secondNumber;

const teather: {
    name: 'dell',
    age: 18    
}

// 需要类型注解
function getTotal(firstNumber: number, secondNumber: number) {
    return firstNumber + secondNumber;
}
const total = getTotal(1, 2);

```

## 7. 函数相关类型           
> TS中和JS中函数定义完全一致，大致方法如下：
> 1.function() {}   2.const hello1 = function() {}   3.const hello2 = () => {}
> 如下代码中`函数类型的注解`方法：
> `add(): number {}` //返回值为数字类型。
> `add(): void {}` //空值，函数没有返回值。
> `add(): never {}` //函数无法全部执行里面的代码块。
```html
function add(first: number, second: number): number {
    return first + second;
}
const total = add(1, 2);

add(): number{}

function sayHello(): void {
    console.log('hello');
}

add(): void {}，没得 return值

function errorEmitter(): never {
    while(true) {

    }
    console.log(123);   //wile循环的语句将无法结束，后面的语句无法执行
    或者
    throw new Error();
    console.log(123); //这段语句将不会执行
}

add(): never {}

function add({ first, second }: { first: number, second: number }): number {
    return first + second;
}
const total = add({ first: 1, second: 2 });

多个参数值解构

```

## 7. 数组和元组                
> 数组的对象类型的写法实例：                
```html
const arr: (number | string)[] = [1, 2, 3, 'a']; // 数组中的元素既可以是数字也可是字符                 
const stringArr: string[] = ['a', 'b', 'c'];                
const undefinedArr: undefined[] = [undefined];                

const objectArr: {name: string, age: number}[] = [{
    name: 'dell',
    age: 18
}];

// 通过 type alias 类型别名转化后的写法
type User = { name: string, age: number };
const objectArr: User[] = [{
    name: 'dell',
    age: 18
}];

class Teather {
    name: string,
    age: number    
}
const objectArr: Teather[] = [{
    new Teather(),
    name: 'dell',
    age: 18
}];

```
> 元组(tuple)的对象类型的写法实例：                
```html
const teatherInfo: (number, string)[] = ['1', 2, 3];     //只有满足数组的形式就行数字和字符的顺序随意，只要满足要求就行，`位置，个数,类型，长度不固定`。
const teatherInfo: [string, string, number] = ['1', '2', 3];     //元组的写法，对应的数字和字符的`位置，个数,类型，长度固定`。

//处理CSV等文件(格式固定)时使用元组：
const teatherList: [string, string, number][] = [
    ['dell', 'male', 19],
    ['sun', 'female', 30],
    ['jeny', 'female', 26]
]

```

## 8. Interface接口                

```html
const getPersonName = (person: { name: string}) => {
    console.log(person.name);
}

const setPersonName = (person: { name: string}, name: string) => {
    person.name = name;
}

将具有通用性的类型集合修改为通用的类型（interface）
interface Person {
    name: string;
    // 如果name变量只能读取，不能写值的时候，可以写为：
    readonly name: string;
    age: number;
    // 如果age变量可有可无的话，可以写为：
    age?: number;
    [propName: string]: any; // 这种写法，可以增加任意的自定义变量类型，变量名称为任意字符串。
    say(): string; //接口里面还可以定义方法。
}
// interface和type的区别：最好用interface，不行的话用type（替代方案），type还可以代表类型。
type Person1 {
    name: string;
}

const getPersonName = (person: Person) => {
    console.log(person.name);
}

const setPersonName = (person: Person, name: string) => {
    person.name = name;
}

const person = {
    name = 'dell',
    age = 18，
    sex = 'male' //未定义的自变量这种写法不会报错，以下写法就会报错，通过函数的方式传值。
    say() {
        return 'say hello'; // 方法必须有返回值，否则会报错。
    }
};

getPersonName(person);
getPersonName({
    name = 'dell',
    age = 18，
    sex = 'male' //这种写法就会报错，可以修改interface，增加一个其他任意类型的自定义变量，就不会报错。[propName: string]: any;。
});
setPersonName(person, 'lee');

// 类通过implements可以实现接口
class User implements Person {
    name = 'dell',
    say() {
        return 'say hello'; // 方法必须有返回值，否则会报错。
    }    
}

// 可以继承接口，继承其属性和方法，还可以自定义方法。
interface Teather extends Person {
    teach(): string; // P
}

// interface 还可以定义函数
interface sayHi {
    (word: string): string;
}

```

## 9. 类的定义与继承                 
> super子类调用父类的方法。                

## 10. 类中的访问类型和构造器                 
> 三个访问类型：private, protected, public                
> 实例：                
```html
class Person {
    name: string;
    private name1: string;
    protected name2: string;
    sayHi() {
        this.name1;
        this.name2;
        console.log('hi');
    }
}
class Teather extends Person {
    public sayBye() {
        this.name2;
    }
}
const person = new Person();
person.name = 'dell';
console.log(person.name);
person.sayHi();

// 默认为public访问类型，name: string; （public name: string;） public被隐藏了。
// public 允许在类内外被调用。
// private 允许在类内被使用。
// protected 允许在类内及继承的子类中使用。

```
> 构造器是新建一个类实例的时候调用。                
```html
// constructor
class Person {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    //简化
    constructor(public name: string) {}
}
const person = new Person();
console.log(person.name)

class Teather extends Person {
    constructor(public age: number)
    super('dell'); // 注意子类有构造器时，父类的属性和方法为空时，子类继承父类也需要调用super()。
}
const teather = new Teather(28);
console.log(teather.name)
console.log(teather.age)

```

## 11. 静态属性static，Setter和Getter                
```html
class Person {
    constructor(private _name: string) {}
    get getName() {
        return this._name;
    }
    set setName() {
        name = this._name;
    }
}
const person = new Person('dell');
person.getName; // 通过getter，就可以使用私有类的属性。

```

## 12. 抽象类                
> 抽象类定义其他类都具备的方法，其他类可以调用。                
> 关键字`abstract`， abstract class name { 相同method(){} }，如果方法没有具体实现，可以定义抽象的方法为：abstract class name { abstract 相同method() }。                
> 抽象类只能继承，不能实例化。                
> 其他类继承抽象类，调用抽象类调用的方法和属性。                


## 13. 使用 TypeScript 编写爬虫工具                 
> 需要secretKey。                
> 先爬取整个html页面。                
> 需要配置爬虫项目，在项目文件夹下面输入指令：`npm init -y`，会在当前目录下面生成一个package.json文件。输入指令：`tsc --init`，会在当前目录下面生成一个tsconfig.json文件。                
> 卸载全局安装包：ts-node，`npm uninstall ts-node -g`。                
> 安装环境包：ts-node/typescript/superagent到package.json工程当中，`npm install -D ts-node`,`npm install typescript -D`，`npm install superagent --save`。                
> 修改package.json：         
```html
"scripts": {
    "dev": "ts-node ./src/crawler.ts"
}

```
> `npm run dev`，运行当前项目。 
> `npm run dev`，运行当前项目。         
> [使用`cheerio`进行数据提取](https://github.com/cheeriojs/cheerio)，安装`cheerio`：`npm install cheerio --save`。           
> [查看superagent包的js内容](https://www.npmjs.com/)，打开网站输入对应包名，输入格式：`@types/superagent`，编写爬虫类，修改`crawler.ts`文件：         
```html
crawler.ts
// superagent库是js编写的文件，ts代码无法识别，只有通过翻译文件去帮助ts识别js文件。
// ts -> .d.ts 翻译文件 @types/package -> js，安装superagent对应的js翻译文件：`npm install @types/superagent -D`
import superagent from 'superagent';  // `npm install @types/superagent -D`
import cheerio from 'cheerio';     // `npm install @types/cheerio -D`
import fs from 'fs';
import path from 'path';

interface Course {
    title: string;
    count: number;
}
interface CourseResult {
    title: string;
    data: Course[];
}
interface Content {
    [propName: number]: Course[];
}


class Crawler {
    private secretKey = 'secretKey';
    private url = 'http://www.dell-lee.com/typescript/demo.html?secret=${this.secretKey}';
    // private rawHtml = '';
    private filePath =  path.resolve(__dirname, '../data/course.json');
    const courseInfos: Course[] = [];
    getJasonInfo(html: string) {
        const $ = cheerio.load(html);
        const courseItems = $('.course-item');
        courseItems.map((index, element) => {
            const descs = $(element).find('.course-desc');
            const title = descs.eq(0).text;
            const count = parseInt(descs.eq(1).text.split(': ')[1], 10);
            courseInfos.push({
                title, count
            });
        });
        const result = {
            time: (new Date()).getTime(),
            data: courseInfos
        };
        return result;
    }
    async getRawHtml() {
        const result = await superagent.get(this.url);
        return result.text;
        // console.log(result.text); 得到整个html页面文件内容。
        // this.rawHtml = result.text;
        // this.getJasonInfo(result.text);
    }
    generateJsonContent(courseInfo: CourseResult) {
        // const filePath =  path.resolve(__dirname, '../data/course.json');
        let fileContent: Content = {};
        if (fs.existsSync(this.filePath)) {
            fileContent = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));
        }
        fileContent[courseInfo.time] = courseInfo.data;
        return fileContent;
    }    
    writeFile(content: string) {
        fs.writeFileSync(this.filePath, content);
    }
    async initSpiderProcess() {
        // const filePath =  path.resolve(__dirname, '../data/course.json');
        const html = await this.getRawHtml();
        courseInfo = this.getJasonInfo(html);
        fileContent = this.generateJsonContent(courseInfo);
        this.writeFile(JSON.stringify(fileContent));
        // fs.writeFileSync(this.filePath, JSON.stringify(fileContent));
    }
    constructor() {
        // this.getRawHtml();
        this.initSpiderProcess();
    }
}
const crawler = new Crawler();

```
> 使用`组合设计模式`优化代码，拆分以上代码为两个部分，一个需要设置爬取的网址，一个获取爬取的内容，新建一个名为dellAnalyzer.ts文件，剪切crawler.ts中的部分内容到dellAnalyzer.ts中，包括getJasonInfo方法，generateJsonContent方法，以及其方法调用的代码也要剪切到自定义的方法中。         
```html
dellAnalyzer.ts文件内容如下:

import cheerio from 'cheerio';     // `npm install @types/cheerio -D`
import fs from 'fs';
import { Analyzer } from './crawler';

interface Course {
    title: string;
    count: number;
}
interface CourseResult {
    title: string;
    data: Course[];
}
interface Content {
    [propName: number]: Course[];
}

export default class DellAnalyzer implements Analyzer {
    private getJasonInfo(html: string) {
        const $ = cheerio.load(html);
        const courseItems = $('.course-item');
        const courseInfos: Course[] = [];
        courseItems.map((index, element) => {
            const descs = $(element).find('.course-desc');
            const title = descs.eq(0).text;
            const count = parseInt(descs.eq(1).text.split(': ')[1], 10);
            courseInfos.push({
                title, count
            });
        });
        const result = {
            time: (new Date()).getTime(),
            data: courseInfos
        };
        return result;
    }
    private generateJsonContent(courseInfo: CourseResult, filePath: string) {
        let fileContent: Content = {};
        if (fs.existsSync(filePath)) {
            fileContent = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        }
        fileContent[courseInfo.time] = courseInfo.data;
        return fileContent;
    }    

    public analyze(html: string, filePath: string) {
        const courseInfo = this.getJasonInfo(html);
        fileContent = this.generateJsonContent(courseInfo, filePath);
        return JSON.stringify(fileContent);
    }
}

```
> 引入dellAnalyzer.ts中的DellAnalyzer类到crawler.ts文件中，
```html
import superagent from 'superagent';  // `npm install @types/superagent -D`
import fs from 'fs';
import path from 'path';
import DellAnalyzer from './dellAnalyzer';

export interface Analyzer {
    analyze: (html: string, filePath: string) => string;
}

class Crawler {
    private filePath =  path.resolve(__dirname, '../data/course.json');
    async getRawHtml() {
        const result = await superagent.get(this.url);
        return result.text;
    }
    writeFile(content: string) {
        fs.writeFileSync(this.filePath, content);
    }
    async initSpiderProcess() {
        const html = await this.getRawHtml();
        const fileContent = this.analyzer.analyze(html, this.filePath);
        this.writeFile(fileContent);
    }
    constructor(private url: string, private analyzer: Analyzer) {
        this.initSpiderProcess();
    }
}
const secretKey = 'secretKey';
const url = 'http://www.dell-lee.com/typescript/demo.html?secret=${this.secretKey}';
const analyzer = new DellAnalyzer();
const crawler = new Crawler(url, analyzer);

```
> `单例模式`：修改crawler.ts和dellAnalyzer.ts，将DellAnalyzer变为单例模式。            
> 1.不能被外部实例化。创建私有的(private) constructor方法在dellAnalyzer.ts中。        
> 2.创建私有的(private) 实例DellAnalyzer在dellAnalyzer.ts中。        
> ###########################        
> ############crawler.ts###############        
> ############crawler.ts###############        
> ############crawler.ts###############        
> ###########################        
```html
import superagent from 'superagent'; 
import fs from 'fs';
import path from 'path';
import DellAnalyzer from './dellAnalyzer';

export interface Analyzer {
    analyze: (html: string, filePath: string) => string;
}

class Crawler {
    private filePath =  path.resolve(__dirname, '../data/course.json');
    async getRawHtml() {
        const result = await superagent.get(this.url);
        return result.text;
    }
    writeFile(content: string) {
        fs.writeFileSync(this.filePath, content);
    }
    async initSpiderProcess() {
        const html = await this.getRawHtml();
        const fileContent = this.analyzer.analyze(html, this.filePath);
        this.writeFile(fileContent);
    }
    constructor(private url: string, private analyzer: Analyzer) {
        this.initSpiderProcess();
    }
}
const secretKey = 'secretKey';
const url = 'http://www.dell-lee.com/typescript/demo.html?secret=${this.secretKey}';
const analyzer = DellAnalyzer.getInstance();
// 此时的crawler，允许crawler中的方法被外部调用。
// crawler.writeFile();
// 不想crawler中的方法被调用，都加上private，私有的访问权限。
// private writeFile(){...};
const crawler = new Crawler(url, analyzer);

```        
> ###########################        
> ############dellAnalyzer.ts###############        
> ############dellAnalyzer.ts###############        
> ############dellAnalyzer.ts###############        
> ###########################        
```html
dellAnalyzer.ts文件内容如下:

import cheerio from 'cheerio'; 
import fs from 'fs';
import { Analyzer } from './crawler';

interface Course {
    title: string;
    count: number;
}
interface CourseResult {
    title: string;
    data: Course[];
}
interface Content {
    [propName: number]: Course[];
}

export default class DellAnalyzer implements Analyzer {
    private static instance: DellAnalyzer;
    static getInstance() {
        if (!DellAnalyzer.instance) {
            DellAnalyzer.instance = new DellAnalyzer();
        }
        return DellAnalyzer.instance;
    }
    private getJasonInfo(html: string) {
        const $ = cheerio.load(html);
        const courseItems = $('.course-item');
        const courseInfos: Course[] = [];
        courseItems.map((index, element) => {
            const descs = $(element).find('.course-desc');
            const title = descs.eq(0).text;
            const count = parseInt(descs.eq(1).text.split(': ')[1], 10);
            courseInfos.push({
                title, count
            });
        });
        const result = {
            time: (new Date()).getTime(),
            data: courseInfos
        };
        return result;
    }
    private generateJsonContent(courseInfo: CourseResult, filePath: string) {
        let fileContent: Content = {};
        if (fs.existsSync(filePath)) {
            fileContent = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        }
        fileContent[courseInfo.time] = courseInfo.data;
        return fileContent;
    }    

    public analyze(html: string, filePath: string) {
        const courseInfo = this.getJasonInfo(html);
        fileContent = this.generateJsonContent(courseInfo, filePath);
        return JSON.stringify(fileContent);
    }
    private constructor() {

    }
}

```

## 14. TypeScript的编译            
> 通过npm`配置文件package.json`生成编译后的文件，提供给前端使用。                   
> 注意：[`nodemon`第三方库](https://github.com/remy/nodemon):            
> `package.json`:            
```html
// 运行`npm run build`生成编译后的js文件位于/src文件夹下面。
"scripts": {
    "dev": "ts-node ./src/crawler.ts",
    "build": "tsc"
}

// 自定义需要编译ts文件，只编译crawler.ts文件。
"scripts": {
    "dev": "ts-node ./src/crawler.ts",
    "build": "tsc crawler.ts"
}

// 通过tsconfig.json文件自定义编译生成js文件的存放位置。取消注释和修改outDir这一行。
"outDir": "./build" 

// build文件夹下面生成的文件就可以提供给他人直接使用了。

// 修改代码后自动编译ts文件。
"scripts": {
    "build": "tsc -w"
}

// 安装监控文件变化的第三方库，npm install nodemon -D。
使用：
"scripts": {
    "build": "tsc -w",
    "start": "nodemon node ./build/crawler.js"
}
// 控制台输入 npm run start即可。

// nodemon的配置
"scripts": {
    "build": "tsc -w",
    "start": "nodemon node ./build/crawler.js"
},
"nodemonConfig": {
    "ignore": ["data/*"],       // 忽略data文件夹下面的文件发生改变
}

// 安装的第三方库，npm install concurrently -D。
// 在开发的环境中，编译和执行代码。控制台就输入：npm run dev:start等指令。
"scripts": {
    "dev:build": "tsc -w",
    "dev:start": "nodemon node ./build/crawler.js"，
    "dev": "concurrently npm run dev:build & npm run dev:start"，// 或者
    "dev": "concurrently npm:dev:*"，
}
// 在控制台输入npm run dev就会并发执行指令。

```

## 15. [TypeScript的配置文件](https://www.typescriptlang.org/tsconfig)            
> 控制台输入：tsc --init， 生成 ts 的配置文件tsconfig.json。             
> 修改tsconfig.json，运行 tsc demo.ts， 生成的 demo.js 的文件，并不会按照配置文件修改的内容发生变化。             
> 只有运行控制台输入 tsc 指令， 自动编译生成的 demo.js 的文件，才会按照配置文件修改的内容发生变化。             
```html
{
    "include": ["./demo.ts"],           // 只编译指定的文件，这里是demo.ts。
    "exclude": ["./demo.ts"],           // 不编译指定的文件，编译其他文件，这里是demo.ts。
    "files": ["./demo.ts"],           // 指定编译文件,这里是demo.ts，还可以是其他，追加到后面即可。
    "compileOptions": {
        "removeComments": true,          // 编译时移除注释
        "strict": true,          // 表示strict区间内的选项都为true
        "noImplicitAny": true,            // ts代码中的类型必须为显式(指定类型)，不能为隐式，反过来false即可。
        "strictNullChecks": true,          // 强制null类型检测。变量的值为null，undefined时，就会报错。
        "rootDir": "./src",          // 指定ts文件所在的目录
        "outDir": "./build",          // 指定js文件所在的目录
        "incremental": true,          // 渐进式编译项，编译过的内容不会再编译，只编译添加的代码。
        "allowJs": true,          // 将js文件的代码编译为"target": es5或者6...的语言格式。
        "checkJs": true,          // 检查js文件中代码的语法错误。
        "noUnusedLocals": true,     // 检查是否存在未被使用的变量。
    },
}

```
> 注意使用`ts-node demo.ts`会使用tsconfig.json配置文件生成js文件并运行。             

## 16. 联合类型和类型保护             
> `联合类型`，两个类型都可以拥有，写法：`类型3: 类型1 | 类型2`。             
> `类型保护`，类型3的`属性`不能确定时属于 类型1和类型2 中的哪一个？所以需要使用`类型断言`：`类型3 as 类型1或者类型2`， 来确定`类型3的属性`在哪个类型之中。             
```html
interface Dog {
    fly: boolean;
    bark: () => {};
}
interface Bird {
    fly: boolean;
    sing: () => {};
}

//  方法一：类型断言的方式进行类型保护
function trainAnial(animal: Bird | Dog) {
    if (animal.fly) {
        (animal as Bird).sing();
    }else{
        (animal as Dog).bark();
    }
}

// 方法二：in语法来做类型保护
function trainAnial(animal: Bird | Dog) {
    if ('sing' in animal) {
        animal.sing();
    }else{
        animal.bark();
    }
}

// 方法三：if 判断变量类型（typeof语法）是否等于定义的类型来做类型保护
function add(first: number | string, second: number | string) {
    if (typeof first === 'string' || typeof second === 'string') {
        return `${first}${second}`;     //字符串的拼接
    }
    return first + second;
}

// 方法四：if 判断变量类型（instanceof语法）是否在定义的类型对象中来做类型保护
class NumberObject {    // 注意：只能使用class, 不能使用interface
    count: number;
}

function addSecond(first: object | NumberObject, second: object | NumberObject) {
    if (first instanceof NumberObject && second instanceof NumberObject) {
        return first.count + second.count;
    }
    return 0;
}

```
> 调用类型1或者类型2中的方法或者属性：`(类型3 as 类型1或者类型2).method()`。             

## 17. Enum 枚举类型             
> 自定义枚举类型的变量，`enum name = {value1, value2, value3}`。             
```html
enum Status {
    OFFLINE,
    ONLINE, // 同理，如果ONLINE=4,则返回的值为0，4，5。
    DELETED
}
// 枚举类型属性值获取正反向都可以使用，Status.OFFLINE等同于Status[0]。

// 等价于以下代码
const Status {
    OFFLINE: 0,
    ONLINE: 1,
    DELETED: 2
}

```

## 18. 函数泛型                       
> 函数的泛型：`泛指的类型（generic）`            
```html
function join(first: string | number, second: string | number) {
    return `${first}${second}`;
}
join('1', 1); // 数字和字符都行

function join(first: string, second: string) {
    return `${first}${second}`;
}
join('1', '1'); // 只能为字符

// 函数的泛型：泛指的类型（generic）
// 定义如下：
function join<ABC>(first: ABC, second: ABC) {
function join<ABC>(first: ABC, second: ABC): ABC {      //返回值也为ABC类型。
    return `${first}${second}`;
}
join<string>('1', '1'); // 只能为字符,等同于上面的代码。    
join<string, number>('1', 1); // 数字和字符都行,等同于上面的代码。    
join<number>>(1, 1); // 只能为数字。 

function map<ABC>(params: ABC) {    //如果ABC改为ABC的数组：params: ABC[]或者params: Arry<ABC>，下面代码也需要更改。
    return params;
}
map<string>('123');     // 改为：map<string>(['123', '456']); 

```

## 18. 类中的泛型以及泛型类型            
```html
interface Item {
    name: string;
}

class DataManager<T> {
class DataManager<T extends Item> {   // interface
    constructor(private data: T[]) {

    }
    getItem(index: number): T {
    getItem(index: number): string {    // interface
        return this.data[index];
    }
}

// const data = new DataManager<string>(['1']);
// data.getItem(0);

const data = new DataManager([{
    name: "dell";
}]);    // interface


```

## 19. 命名空间 namespace            
> `项目环境配置搭建：`            
> 1.先初始化工程目录，`npm init -y` 生成`package.json`，`tsc -init` 生成`tsconfig.json`。           
> 2.在工程（项目）目录下创建`src`,`dist`文件夹，在`src`下新建`page.ts`文件。            
> 3.修改`tsconfig.json`文件，`"rootDir": "./src",`;`"outDir": "./dist",`。
> 4.在工程（项目）目录下新建`index.html`文件，内容如下：                       
> 5.修改`page.ts`如下，控制台输入：`tsc -w`，让其自动监听编译。             
> 6.`page.ts`自定义一个Home的命名空间，将所有的类放在里面。将需要使用的类导出（export），在浏览器控制台输入`Home.导出的类名`就会有输出。             
> 7.在`src`下新建`components.ts`文件，用于命名空间管理。内容如下：            

```html
// index.html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Document</title>
        <script src="./dist/page.js"></script>  // 引入编译生成的js文件
    </head>
    <body>
    <script>
        new Home.Page();  // 对应ts文件中的export的类。
    </script>
    </body>
</html>

// page.ts
namespace Home{
    class Header {
        constructor() {
            const elem = document.body.createElement('div');
            elem.innerText = 'This is a Header';
            document.body.appendChild(elem);
        } 
    }

    class Content {
        constructor() {
            const elem = document.body.createElement('div');
            elem.innerText = 'This is a Content';
            document.body.appendChild(elem);
        } 
    }

    class Footer {
        constructor() {
            const elem = document.body.createElement('div');
            elem.innerText = 'This is a Footer';
            document.body.appendChild(elem);
        } 
    }

    export class page {
        constructor() {
            new Header();
            new Content();
            new Footer();
        }
    }

}

```
> 加入components.ts文件后，需要修改的内容如下：            
```html
// index.html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Document</title>
        <script src="./dist/page.js"></script>  // 引入编译生成的page.js文件，如果觉得引入的js文件过多，可以修改`tsconfig.json`文件中的："outFile": "./build/page.js","module": "amd",；将page.js引入，就会包涵components.js中的内容。
        //<script src="./dist/components.js"></script>  // 引入编译生成的components.js文件，可以通过上面的方式注释掉。
    </head>
    <body>
    <script>
        new Home.Page();  // 对应ts文件中的export的类。
    </script>
    </body>
</html>

// page.ts
// 引用components.ts文件，注意：///这种引用格式必须。

/// <reference path='./components.ts' />
namespace Home{
    export class page {
        user: Component.User = {
            name: 'dell',
        };
        constructor() {
            new Components.Header();
            new Components.Content();
            new Components.Footer();
        }
    }
}

// components.ts
namespace Components {
    export namespace SubComponents {
        export class Test {

        }
    }

    export interface User {
        name: string;
    }    

    export class Header {
        constructor() {
            const elem = document.body.createElement('div');
            elem.innerText = 'This is a Header';
            document.body.appendChild(elem);
        } 
    }

    export class Content {
        constructor() {
            const elem = document.body.createElement('div');
            elem.innerText = 'This is a Content';
            document.body.appendChild(elem);
        } 
    }

    export class Footer {
        constructor() {
            const elem = document.body.createElement('div');
            elem.innerText = 'This is a Footer';
            document.body.appendChild(elem);
        } 
    }
}

```

## 20. import对应的模块化-缺代码，代替/// <reference path='./components.ts' />语句            
```html
// index.html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Document</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.js"></script> // 兼容ts配置项中：module为amd。
        <script src="./dist/page.js"></script>
    </head>
    <body>
    <script>
        require(['page'], function(page) {
            new page.default();
        }) 
    </script>
    </body>
</html>

// page.ts
import { Header, Content, Footer } from './components';
export default class page {
    constructor() {
        new Components.Header();
        new Components.Content();
        new Components.Footer();
    }
}

// components.ts
export class Header {
    constructor() {
        const elem = document.body.createElement('div');
        elem.innerText = 'This is a Header';
        document.body.appendChild(elem);
    } 
}

export class Content {
    constructor() {
        const elem = document.body.createElement('div');
        elem.innerText = 'This is a Content';
        document.body.appendChild(elem);
    } 
}

export class Footer {
    constructor() {
        const elem = document.body.createElement('div');
        elem.innerText = 'This is a Footer';
        document.body.appendChild(elem);
    } 
}

```

## 21. [使用 Parcel 打包 TS 代码](https://github.com/parcel-bundler/parcel)             
> 1.进入工程目录，初始化，输入：npm init -y;tsc --init。            
> 2.修改tsconfig.json文件："outdir"："./dist"; "rootDir":"./src"，工程目录下创建dist，src文件夹。            
> 3.在src文件夹下面创建index.html,page.ts文件。内容参照上面的代码。            
> 4.安装parcel第三方库，npm install parcel@next -D。            
> 5.修改package.json文件中的scripts代码块："scripts": {"test": "parcel ./src/index.html"}             
> 6.运行指令：npm run test，`parcel工具会自动将ts文件编译后的代码以本地服务器的方式返回呈现给我们`。             

## 22. 描述文件中的全局类型            
> 1.代码参照上面几节，src下面的index.html中引用Jquery.js文件。             
> 2.在src下面创建jquery.d.ts文件，让ts理解Jquery。            
> 3.通过模块化的方式引入Jquery，安装第三方库，npm install jquery --save。代替步骤一中的引用Jquery。            
> 4.这种方式实现如下。            
```html
// index.html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Document</title>
        <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>
        <script src="./page.ts"></script>
    </head>
    <body>
    </body>
</html>

// page.ts
// 方式一：
$(function() {
    $('body').html('<div>123</div>');
    // new $.fn.init();
});

// 方式二：
import $ from 'jquery';

$(function() {
    $('body').html('<div>123</div>');
    // new $.fn.init();
});

// jquery.d.ts 类型定义文件。帮助ts文件理解引入的js文件或者类库。
// 方式一：
declare var $: (param: () => void) => void;      // 声明全局变量：$函数
// 函数重载
declare function $(readyFunc: () => void): void;      // 声明全局函数：$函数
declare function $(selector: string): JqueryInstance;      // 声明全局函数：$函数
declare function $(param: string): {
    html: (html: string) => {};
};
interface JqueryInstance {
    html: (html: string) => JqueryInstance;
}

// 使用了interface的语法实现函数的重载
interface Jquery {
    (readyFunc: () => void): void;
    $(selector: string): JqueryInstance;
}
declare var $: Jquery;

// 实现$函数的子属性和方法调用。例如：new $.fn.init();
// 如何对对象，类进行类型定义，以及命名空间的嵌套。
declare namespace $ {
    namespace fn {
        class init {}
    }

}

// 方式二：
declare module 'jquery' {
    interface Jquery {
        $(selector: string): JqueryInstance;
    }
    // 混合类型
    function $(readyFunc: () => void): void;
    function $(selector: string): JqueryInstance;

    namespace $ {
        namespace fn {
            class init {}
        }
    }
    export = $; // 导出$,再引入$。
}

```

## 23. keyof语法的使用         
>  泛型类型保护，`npm start`语句搭建环境。         
>  新建src的page.ts文件，代码如下：         
```html
interface Person {
    name: string;
    age: number;
    gender: string;
}

type T = 'name';
key: 'name';
Person['name'];

class Teather {
    constructor(private info: Person) {

    } 
    getInfo<T extends keyof Person>(key: T): Person[T] {
        return this.info[key];
    } 
}

```

## 24. Express 基础项目结构搭建，使用 Express 框架开发数据爬取及展示接口。          
> 代码见爬虫的最后一节。         
> 安装npm相关的依赖，指令：`npm install`。         
> 解决控制台首次输入`npm run dev`，index.js文件不存在，不同步会报错的问题：修改package.json文件为"dev": "tsc && concurrently npm:dev:*" 。         
> 安装express模块，`npm install express --save`，安装express模块的类型注解文件帮助ts文件理解库中js文件，`npm install @types/express -D`。         
> 修改index.js文件如下：         
> 安装[第三方库body-parser](https://github.com/expressjs/body-parser)解决Express库中body类型未定义的情况： `npm install body-parser --save`         
> 安装[第三方库cookie-session](https://github.com/expressjs/cookie-session)开发登陆功能： `npm install cookie-session --save`，安装类型注解文件，`npm install @types/cookie-session -D`   


```html
import bodyParser from 'body-parser';
import express from 'express';
// 导入路由
import router from './router';

const app = express();

//问题一： express库的类型定义文件.d.ts文件类型描述不准确
//问题二： 当我们使用中间件的时候，对req或者res做了修改之后，实际上类型并不能改变
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

// 建立路由
# app.get('/', (req, res) => {
#    res.send('hello world');
# });

app.listen(7001, () => {
    console.log('sever is running.');
});

// 使用路由，创建router.ts文件建立路由，再去index.js文件导入路由。
import { Router, Request, Response } from 'express';
// 引入Crawler中的代码
import Crawler from './crawler';

const router = Router();
router.get('/', (req: Request, res: Response) => {
    new Crawler();
    res.send('hello world');
});

export default router;

```

## 25. 类的装饰器                      
> 类的装饰器，本身就是一个函数，                     
> 装饰器通过 @ 符号来使用，只对类作出修改，调用一次，装饰器和类可以写在一行。                     
> 装饰器接受的参数是构造函数。                     
> 装饰器从下到上，从右到左顺序依次执行。                     

```html
// 简单装饰器的定义
function testDecorator(flag: boolean) {
    if (flag) {
        return function(constuctor: any) {
            constructor.prototype.getName = () => {
                console.log('dell');
            };
        };
    }else {
        return function(constuctor: any) {};
    }
}
@testDecorator(true);

class Test {
    
}
const test = new Test();
(test as any).getName(); 

// 复杂装饰器的定义
function testDecorator() {
    return function<T extends new (...args: any[]) => any>(constuctor: T) {
        return class extends constructor{
            name = 'lee';
            getName() {
                return this.name;
            }
        };
    };
}

const Test = testDecorator()(class {
    name: string;
    constructor(name:string) {
        this.name = name;
    }
})

const test = new Test('dell');
console.log(test.getName());

// 类中的方法加装饰器
// 普通方法，target 对应的是类的 prototype（原型）。
// 静态方法，target 对应的是类的 构造函数（constructor）。
function getNameDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
    console.log(target， key);
    descriptor.writable = false; //  getName方法就不能修改
}

class Test {
    name: string;
    constructor(name:string) {
        this.name = name;
    }
    @getNameDecorator
    getName() {
    static getName() {  // 静态方法
        this.name;
    }
}

const test = new Test('dell');
console.log(test.getName());

// 属性的装饰器
function nameDecorator(target: any, key: string): any {
    现象一：
    const descriptor: PropertyDescriptor = {
        writable: false     // 属性不可以修改
    };
    return descriptor;
    现象二：
    target[key] = 'lee';    // 修改的并不是实例上的name，而是原型上的name。
}

// name放在实例上
class Test {
    @nameDecorator
    name: 'dell';
}

const test = new Test('dell');
test.name = 'dell lee'; // 属性可以修改
console.log(test.name); // 输出实例上的name
console.log((test as any).__proto__name); // 输出原型上的name

// 参数装饰器，原型，方法名，参数所在的位置
function paramDecorator(target: any, method: string, paramIndex: number) {

}

class Test {
    getInfo(name: string, @paramDecorator age: number) {
        console.log(name, age)
    }
    name: 'dell';
}

const test = new Test();
test.getInfo('dell', 30)

```

## 25. [初始化 React 项目](https://create-react-app.dev/docs/adding-typescript/)                 
> 先卸载原有的create-react-app，避免对新的项目产生影响，指令：`npm unistall create-react-app -g`。                 
> 再重新安装create-react-app，指令：`npx create-react-app my-app --template typescript --use-npm`。npx远程下载最新的create-react-app，--use-npm使用npm安装，避免使用默认yarn方式安装。                 
> 加入(add)web前，后端项目目录,优化和简化typescript代码。


> **问题1：Error: EACCES: permission denied, access '/usr/lib/node_modules'**    
> 解决：sudo chown -R $USER /usr/lib/node_modules

> **问题2：network request to https://registry.npmjs.org/typescript failed, reason: getaddrinfo ENOTFOUND registry.npmjs.org npm ERR! network This is a problem related to network connectivity. npm ERR! network In most cases you are behind a proxy or have bad network settings.**    
> 解决：查找registry.npmjs.org的DNS解析ip地址，添加到hosts文件中。

> **问题3：Error: EACCES: permission denied, symlink '../lib/node_modules/typescript/bin/tsserver' -> '/usr/bin/tsserver'**    
> 解决：
```html
It's not recommended to use sudo with npm install, follow the steps from npmjs official docs instead :)
Make a directory for global installations:
mkdir ~/.npm-global

Configure npm to use the new directory path:
npm config set prefix '~/.npm-global'

Open or create a ~/.profile file and add this line:
export PATH=~/.npm-global/bin:$PATH

Back on the command line, update your system variables:
source ~/.profile

Test: Download a package globally without using sudo.
npm install -g typescript

Source: https://docs.npmjs.com/getting-started/fixing-npm-permissions

```


