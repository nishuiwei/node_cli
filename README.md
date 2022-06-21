# 说明文档
## `whj`: 一个帮助你快速搭建和开发前端项目的CLI

如何安装？

```shell
npm install whj -g
```

## 创建项目

目前支持Vue，后期会支持React，Angular考虑中~

vue项目模块已经帮你配置：

* 常用的目录结构（你可以在此基础上修改）

创建项目

```shell
whj create your_project_name
```

自动拉取项目模板、安装项目依赖、打开浏览器 `http://localhost:3000/`、自动启动项目


## 项目开发

项目开发目前提供两个功能：

* 创建Vue组件
* 创建Vue页面，并配置路由



### 创建Vue组件：

````shell
whj addcpn YourComponentName # 例如whj add NavBar，默认会存放到src/components文件夹中
whj addcpn YourComponentName -d src/pages/home # 也可以指定存放的具体文件夹
````



### 创建Vue页面，并配置路由

```shell
whj addpage YourPageName # 例如whj addpage Home，默认会放到src/pages/home/Home.vue中，并且会创建src/page/home/router.js
whj addpage YourPageName -d src/views # 也可以指定文件夹，但需要手动集成路由
```

为什么会创建router.js文件：

* `router.js`文件是路由的其中一个配置；
* 创建该文件中 `src/router/index.js`中会自动加载到路由的 `routes`配置中，不需要手动配置了（如果是自己配置的文件夹需要手动配置）

`src/router/index.js`中已经完成如下操作：


### 创建Vuex子模块

```shell
whj addstore YourVuexChildModuleName # 例如whj addstore home，默认会放到src/store/modules/home/index.js和types.js
whj addstore YourVuexChildModuleName -d src/vuex/modules # 也可以指定文件夹
```

创建完成后，不需要手动配置，已经动态将所有子模块集成进去：


# Documentation

## `whj`: A CLI to help you quickly build and develop front-end projects

> Can't think of other names, so just use whj~

How to install？

```shell
npm install whj -g
```

## Create project

Currently Vue is supported, React will be supported later, Angular is under consideration~

Create project

```shell
whj create your_project_name
```

Automatically pull project templates, install project dependencies, open browsers, `http://localhost:8080/`and automatically start projects

## Project Development

Project development currently provides two functions:

- Create Vue components
- Create a Vue page and configure routing

### Create Vue components:

```shell
addcpn YourComponentName whj # example whj add NavBar, the default will be stored in src / components folder 
whj addcpn YourComponentName -d src / Pages and the / Home # specific file can also specify the destination folder
```

### Create a Vue page and configure routing

```shell
addPage YourPageName whj # example whj addpage Home, the default will put src / pages / home / Home.vue, and will create a src / Page / Home / router.js 
whj addPage YourPageName -d src / views # You can also specify a folder , But need to integrate routing manually
```

Why is the router.js file created:

- `router.js`The file is one of the routing configurations;
- Create the file `src/router/index.js`will be automatically loaded into the routing `routes`configuration, do not need to manually configured (if it is to configure their own folder requires manual configuration)

`src/router/index.js`The following operations have been completed in:

### Create Vuex submodule

```shell
addstore YourVuexChildModuleName whj # example whj addstore home, the default will put src / store / modules / home / index.js and types.js 
whj addstore YourVuexChildModuleName -d src / vuex / modules # You can also specify a folder
```

After the creation is completed, no manual configuration is required, and all sub-modules have been dynamically integrated: