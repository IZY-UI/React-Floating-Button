
# IZY Floating Button

Floating action button for React.js



## Table of content

 - [Install npm](#)
 - [Install dependancis](#)
 - [Demo](#)


## Install npm

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```

## Install dependancis

```bash
  "boxicons": "^2.1.4",
  "sass": "^1.56.1",
```

## Demo

Create ```index.js``` and Add below code segment
And given files add to your component folder 

```bash
import IzyFloat from './components/IzyFloat';

function App() {
  const path=[
    {key: 1, title: 'Home', page: '/home', icon:'home'},
    {key: 2, title: 'Contact', page: '/contact', icon:'headphone'},
    {key: 3, title: 'Info', page: '/info', icon:'info-circle'}
  ];
  const onClick =(e)=>{
    console.log(e);
  }
  return (
    <div className="App">
      <IzyFloat 
      direction='bottom-left'
      locations={path}
      basecolor="primary"
      onClick={onClick}
       />      
    </div>
  );
}

export default App;

```
## Environment Variables

To run this project, you will need to use following variables as a props

| Parameter | Type     | Description                |Default    |
| :-------- | :------- | :------------------------- |:-------|
| `direction` | top-left , top-right , bottom-left, bottom-right | Button placement area |bottom-right|
| `basecolor` | primary , secondary , success, danger, warning, info, dark | Button colors |dark|

Also need to specify the button like bellow
| Property | Value(Example)     | Description                |
| :-------- | :------- | :------------------------- |
| `key` | Any number ( 1 )| Identify the button |
| `title` | text data( Home )| Name of the button |
| `page` | link ( /home )| Add the link |
| `Icon` | name of the icon ( info-circle )| Name of the icon on ```boxicons``` library <box-icon name=```'info-circle'```></box-icon> |

Follow the bellow example for more details


## Used By

This library is used by companies:

- [Synapsys LTD](https://synapsys.lk/)


## License
Everything under the IZY component Library

[MIT]()

## BOXIcon Library License
Copyright (c) 2015-2021 Aniket Suvarna

[MIT]()




## Authors

- [Dhanushka Dewinuwara](https://www.linkedin.com/in/didewinuwara/)  ```didewinuwara@outlook.com```

## Appreciation
- [Amitha Mirihella](https://www.linkedin.com/in/amitha-mirihella/)
