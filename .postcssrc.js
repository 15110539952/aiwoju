// https://github.com/michael-ciniawsky/postcss-load-config


module.exports = ({ file }) => {
  let isVant = file && file.dirname && file.dirname.indexOf("vant") > -1;
  let rootValue = isVant ? 37.5 : 75; // 判断条件 请自行调整

  return {
    "plugins": {
      "postcss-import": {},
      "postcss-url": {},
      // to edit target browsers: use "browserslist" field in package.json
      "autoprefixer": {},
      "postcss-pxtorem": {
        rootValue: rootValue,
        propList: ['*']
      }
    }
  }
}


// module.exports = {
//   "plugins": {
//     // to edit target browsers: use "browserslist" field in package.json
//     "postcss-import": {},
//     "autoprefixer": {},
//     "postcss-px2rem-exclude": {  // 添加的代码
//       remUnit: 75,
//       exclude: /node_modules|folder_name/i // 忽略node_modules目录下的文件
//     }
//   }
// }
