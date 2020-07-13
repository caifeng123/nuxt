/*
 * @Author: cc123nice
 * @Date: 2020-07-09 17:04:02
 * @LastEditTime: 2020-07-10 11:42:26
 * @Description: my progamme description
 * @FilePath: \nuxt\assets\js\common.js
 */
import echarts from 'echarts'
import "echarts/map/js/china.js";


export const chinaMap = (ref) => {
  var dataList = [
    { name: "南海诸岛", value: 0 },
    { name: '北京', value: randomValue() },
    { name: '天津', value: randomValue() },
    { name: '上海', value: randomValue() },
    { name: '重庆', value: randomValue() },
    { name: '河北', value: randomValue() },
    { name: '河南', value: randomValue() },
    { name: '云南', value: randomValue() },
    { name: '辽宁', value: randomValue() },
    { name: '黑龙江', value: randomValue() },
    { name: '湖南', value: randomValue() },
    { name: '安徽', value: randomValue() },
    { name: '山东', value: randomValue() },
    { name: '新疆', value: randomValue() },
    { name: '江苏', value: randomValue() },
    { name: '浙江', value: randomValue() },
    { name: '江西', value: randomValue() },
    { name: '湖北', value: randomValue() },
    { name: '广西', value: randomValue() },
    { name: '甘肃', value: randomValue() },
    { name: '山西', value: randomValue() },
    { name: '内蒙古', value: randomValue() },
    { name: '陕西', value: randomValue() },
    { name: '吉林', value: randomValue() },
    { name: '福建', value: randomValue() },
    { name: '贵州', value: randomValue() },
    { name: '广东', value: randomValue() },
    { name: '青海', value: randomValue() },
    { name: '西藏', value: randomValue() },
    { name: '四川', value: randomValue() },
    { name: '宁夏', value: randomValue() },
    { name: '海南', value: randomValue() },
    { name: '台湾', value: randomValue() },
    { name: '香港', value: randomValue() },
    { name: '澳门', value: randomValue() }
  ]
  var myChart = echarts.init(ref);
  myChart.on('click', function (params) {
    var city = params.name;
    alert(city);
  });
  function randomValue() {
    return Math.round(Math.random() * 1000);
  }
  var option = {
    tooltip: {
      formatter: function (params, ticket, callback) {
        return params.seriesName + '<br />' + params.name + '：' + params.value
      }//数据格式化
    },
    geo: {
      map: 'china',
      roam: false,//不开启缩放和平移
      zoom: 1.23,//视角缩放比例
      label: {
        normal: {
          show: true,
          fontSize: '10',
          color: 'rgba(0,0,0,0.7)'
        }
      },
      itemStyle: {
        normal: {
          borderColor: '#fff',
        },
        emphasis: {
          // areaColor: 'linear-gradient(-45deg,rgba(86,204,242,1) 0%,rgba(47,128,237,1) 100%);',//鼠标选择区域颜色
          areaColor: new echarts.graphic.LinearGradient(
            0, 0, 0, 1, [{ offset: 0, color: '#56CCF2' },{ offset: 1, color: '#2F80ED' },]
          ),
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowBlur: 20,
          borderWidth: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    },
    series: [
      {
        name: '信息量',
        type: 'map',
        geoIndex: 0,
        data: dataList,
      }
    ]
  };
  myChart.setOption(option);
  myChart.on('click', function (params) {
    console.log(params.name);
  });
}