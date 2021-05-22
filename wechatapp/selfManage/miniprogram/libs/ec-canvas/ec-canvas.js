import  * as echarts from './echarts'
import WxCanvas from './wx-canvas'
let ctx;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //父级页面给数据
      canvasId:{
        type:String,
        value:'ec-canvas',
      },
      ec:{
        type:Object,
      },
  },
  data:{

  },
  ready:function(){
    if(!this.data.ec){
        return
    }
    if(!this.data.ec.lazyLoad){
    this.init()
  }
  },


  /**
   * 组件的方法列表
   */
  methods: {
        init:function(){
          const version = wx.version.version.split('.').map(n => parseInt(n, 10));
      const isValid = version[0] > 1 || (version[0] === 1 && version[1] > 9)
        || (version[0] === 1 && version[1] === 9 && version[2] >= 91);
      if (!isValid) {
        console.error('微信基础库版本过低，需大于等于 1.9.91。'
          + '参见：https://github.com/ecomfe/echarts-for-weixin'
          + '#%E5%BE%AE%E4%BF%A1%E7%89%88%E6%9C%AC%E8%A6%81%E6%B1%82');
        return;
      }

      ctx = wx.createCanvasContext(this.data.canvasId, this);

      const canvas = new WxCanvas(ctx, this.data.canvasId);

      echarts.setCanvasCreator(() => {
        return canvas;
      });

      var query = wx.createSelectorQuery().in(this);
      query.select('.ec-canvas').boundingClientRect(res => {
        if (typeof callback === 'function') {
          this.chart = callback(canvas, res.width, res.height);
        }
        else if (this.data.ec && typeof this.data.ec.onInit === 'function') {
          this.chart = this.data.ec.onInit(canvas, res.width, res.height);
        }
        else {
          this.triggerEvent('init', {
            canvas: canvas,
            width: res.width,
            height: res.height
          });
        }
      }).exec();
        }
  }
})
