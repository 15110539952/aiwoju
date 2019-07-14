<template>
  <div class="map">
    <v-header title="定位"></v-header>
    <div class="map-type">
      <div class="map-item one" @click="car">
        <img v-if="mapType===0" src="~assets/img/jiache-yes.png">
        <img v-else src="~assets/img/jiache-no.png">
<!--        <p :class="mapType===0?'active':''">3分钟</p>-->
      </div>
      <div class="map-item two" @click="ride">
        <img v-if="mapType===1" src="~assets/img/qiche-yes.png">
        <img v-else src="~assets/img/qiche-no.png">
<!--        <p :class="mapType===1?'active':''">3分钟</p>-->
      </div>
      <div class="map-item three" @click="walk">
        <img v-if="mapType===2" src="~assets/img/buxing-yes.png">
        <img v-else src="~assets/img/buxing-no.png">
<!--        <p :class="mapType===2?'active':''">3分钟</p>-->
      </div>
    </div>
    <div class="main">
      <div id="container"></div>
    </div>
    <van-button class="map-btn" @click="toMap">前往导航</van-button>
  </div>
</template>

<script>
  import header from "@/components/Header/header";
  import wx from 'weixin-jsapi'
  import { Toast } from 'vant'
  import {commonUrl,isten,countDown}  from '@/commonJs/index.js'
  import {getSign} from '@/api/index'

  wx.error(res=>{
    console.log(res);
  });

  export default {
    data(){
      return {
        mapType:0,
        map:null,
        lng:'',
        lat:'',
        hotel_lng:'',
        hotel_lat:'',
        hotel_name:'',
        hotel_address:'',
      }
    },
    created(){
      getSign().then(res=>{
        let data = res.data;
        this.wxSign = data;
        wx.config({
          debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: data.appId, // 必填，公众号的唯一标识
          timestamp: data.timestamp, // 必填，生成签名的时间戳
          nonceStr: data.nonceStr, // 必填，生成签名的随机串
          signature: data.signature,// 必填，签名，见附录1
          jsApiList: ['getLocation','openLocation']
        });
      });
    },
    computed:{
    },
    mounted(){
      this.hotel_lng = this.$route.query.lng || 116.404;
      this.hotel_lat = this.$route.query.lat || 39.915;
      this.hotel_name = this.$route.query.name || '';
      this.hotel_address = this.$route.query.address || '';
      console.log(this.hotel_name,this.hotel_address)

      wx.ready(()=>{
        wx.getLocation({
          type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
          success: (res) => {
            console.log(res);
            this.lat = parseFloat(res.latitude); // 纬度，浮点数，范围为90 ~ -90
            this.lng = parseFloat(res.longitude); // 经度，浮点数，范围为180 ~ -180。
            // let speed = res.speed; // 速度，以米/每秒计
            // let accuracy = res.accuracy; // 位置精度
            this.car();
          },
          fail:(res)=>{
            alert(res.errMsg);
            // console.log(res);
            Toast('定位失败，请重试！');
          },
          complete:()=>{
            alert(this.hotel_lng+','+this.hotel_lat+','+this.lng+','+this.lat);
          }
        });
      });
      this.init();
    },
    components: {
      "v-header": header,
    },
    methods:{
      init() {
        // let map = new qq.maps.Map(document.getElementById("container"), {
        //   // 地图的中心地理坐标。
        //   center: new qq.maps.LatLng(39.916527,116.397128)
        // });

        this.map = new BMap.Map("container");
        this.map.centerAndZoom(new BMap.Point(this.hotel_lng, this.hotel_lat), 16);

        let pt = new BMap.Point(this.hotel_lng, this.hotel_lat);
        let dianIcon = new BMap.Icon(require('assets/img/map-end-icon.png'), new BMap.Size(64,94));
        let marker2 = new BMap.Marker(pt,{icon:dianIcon});  // 创建标注
        this.map.addOverlay(marker2);

        // let geolocation = new BMap.Geolocation();
        // geolocation.getCurrentPosition((r)=>{
        //   if(this.getStatus() == BMAP_STATUS_SUCCESS){
        //     let mk = new BMap.Marker(r.point);
        //     map.addOverlay(mk);
        //     map.panTo(r.point);
        //     this.lng = r.point.lng;
        //     this.lat = r.point.lat;
        //   }
        //   else {
        //     alert('failed')
        //     console.log('failed'+this.getStatus());
        //   }
        // },{enableHighAccuracy: true});
      },
      car(){
        Toast.loading({
          duration: 2000,
          message: '加载中...'
        });
        this.mapType = 0;
        // let map = new BMap.Map("container");
        // map.centerAndZoom(new BMap.Point(this.hotel_lng, this.hotel_lat), 14);

        // let start = "天安门";
        // let end = "百度大厦";
        // this.map.clearOverlays();

        let driving = new BMap.DrivingRoute(this.map,
          {
            renderOptions: {
              map: this.map,
              // panel : "results",
              autoViewport: true
            },
          }
        );

        // driving.search("中关村", "天安门");

        // console.log(this.hotel_lng,this.hotel_lat,this.lng,this.lat);

        let start = new BMap.Point(this.lng, this.lat);
        let end = new BMap.Point(this.hotel_lng, this.hotel_lat);
        driving.search(start, end);

        let startIcon=new BMap.Icon(require('assets/img/map-start-icon.png'), new BMap.Size(64,94));
        let endIcon = new BMap.Icon(require('assets/img/map-end-icon.png'), new BMap.Size(64,94));
        driving.setMarkersSetCallback(function(result){
          result[0].marker.setIcon(startIcon);
          result[1].marker.setIcon(endIcon);
        })
      },
      ride(){
        Toast.loading({
          duration: 2000,
          message: '加载中...'
        });
        this.mapType = 1;
        // let map = new BMap.Map("container");
        // map.centerAndZoom(new BMap.Point(this.hotel_lng, this.hotel_lat), 16);
        let riding = new BMap.RidingRoute(this.map, {
          renderOptions: {
            map: this.map,
            autoViewport: true
          }
        })
        let start = new BMap.Point(this.lng, this.lat);
        let end = new BMap.Point(this.hotel_lng, this.hotel_lat);
        riding.search(start, end);

        let startIcon=new BMap.Icon(require('assets/img/map-start-icon.png'), new BMap.Size(64,94));
        let endIcon = new BMap.Icon(require('assets/img/map-end-icon.png'), new BMap.Size(64,94));
        riding.setMarkersSetCallback(function(result){
          result[0].marker.setIcon(startIcon);
          result[1].marker.setIcon(endIcon);
        })
      },
      walk(){
        Toast.loading({
          duration: 2000,
          message: '加载中...'
        });
        this.mapType = 2;
        // let map = new BMap.Map("container");
        // map.centerAndZoom(new BMap.Point(this.hotel_lng, this.hotel_lat), 16);
        let walking = new BMap.WalkingRoute(this.map, {
          renderOptions: {
            map: this.map,
            autoViewport: true
          }
        });
        let start = new BMap.Point(this.lng, this.lat);
        let end = new BMap.Point(this.hotel_lng, this.hotel_lat);
        walking.search(start, end);

        let startIcon=new BMap.Icon(require('assets/img/map-start-icon.png'), new BMap.Size(64,94));
        let endIcon = new BMap.Icon(require('assets/img/map-end-icon.png'), new BMap.Size(64,94));
        walking.setMarkersSetCallback(function(result){
          result[0].marker.setIcon(startIcon);
          result[1].marker.setIcon(endIcon);
        })
      },
      toMap(){
        wx.ready(()=>{
          wx.openLocation({
            latitude: this.hotel_lat || 0, // 纬度，浮点数，范围为90 ~ -90
            longitude: this.hotel_lng || 0, // 经度，浮点数，范围为180 ~ -180。
            name: this.hotel_name, // 位置名
            address: this.hotel_address, // 地址详情说明
            scale: 20, // 地图缩放级别,整形值,范围从1~28。默认为最大
            infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
          });
        });
        // window.location.href = 'http://api.map.baidu.com/geocoder?address=太原市茂业天地&output=html&src=webapp.baidu.openAPIdemo';
        // window.location.href = 'http://api.map.baidu.com/marker?location=40.047669,116.313082&title=我的位置&content=百度奎科大厦&output=html&src=webapp.baidu.openAPIdemo';
        // window.location.href = 'http://api.map.baidu.com/geocoder?location=39.990912172420714,116.32715863448607&coord_type=gcj02&output=html&src=webapp.baidu.openAPIdemo';
        // 最后这个可用
        // window.location.href = `http://api.map.baidu.com/direction?origin=latlng:${this.lng},${this.lat}|name:中南锦苑&destination=新街口&mode=driving&region=南京&output=html&src=webapp.baidu.openAPIdemo`;
      }
    }
  }
</script>

<style scoped lang="less">
  @import "index";
  .child-view{
    padding-top: 100px;
  }

</style>
