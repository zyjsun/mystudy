<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li
            class="menu-item"
            v-for="(items, index) in goods"
            :key="index"
            :class="{ current: currentIndex === index }"
            @click="select(index)"
          >
            <!-- 动态添加类名是否相等 -->
            <span class="text">
              <icon :size="1" v-if="items.type > -1" :type="items.type"></icon
              >{{ items.name }}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper" ref="foodWrapper">
        <!-- 取Dom结构 -->
        <ul>
          <li
            class="food-list"
            v-for="(item, index) in goods"
            :key="index"
            ref="foodList"
          >
            <h1 class="title">{{ item.name }}</h1>
            <ul>
              <li
                class="food-item"
                v-for="(food, index2) in item.foods"
                :key="index2"
              >
                <div class="icon">
                  <img :src="food.image" alt="" />
                </div>
                <div class="content">
                  <h2 class="name">{{ food.name }}</h2>
                  <p class="desc" v-if="food.description">
                    {{ food.description }}
                  </p>
                  <div class="extra">
                    <span class="count">月售{{ food.sellCount }}份</span>
                    <span>好评{{ food.rating }}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{ food.price }}</span>
                    <span class="old" v-if="food.oldprice"
                      >￥{{ food.oldprice }}</span
                    >
                  </div>
                  <!-- ！+ -->
                  <div class="cartcontrol-wrapper">
                    <add :food="food"></add>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <!-- 购物车 -->
    <car :car="selectFoods"
    :deliveryPrice="seller.deliveryPrice"
    :minPrice="seller.minPrice"
    ></car>
  </div>
</template>

<script>
import icon from "@/components/support-ico/support-ico";
import { getGoods } from "@/api";
import BScroll from "better-scroll";
import add from "@/components/cart-control/cart-control";
import car from "@/components/shop-cart/shop-cart";
export default {
  data() {
    return {
      goods: [],
      // currentIndex: 0 ,
      listHeight: [],
      scrollY: 0,
    };
  },
  components: {
    icon,
    add,
    car,
  },
  created() {
    getGoods().then((res) => {
      console.log(res);
      this.goods = res;
      this.$nextTick(() => {
        //这个函数一定会在页面渲染完成后才执行
        this._initScroll();
        this._initMenuScroll();
        //计算每个菜单的dom高度
        this._calculateHeight();
      });
    });
  },
  computed: {
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        if (
          this.scrollY >= this.listHeight[i] &&
          this.scrollY < this.listHeight[i + 1]
        ) {
          return i;
        }
      }
      return 0; //没有执行for循环
    },
    selectFoods() {
      //查看选中的商品
      let foods = [];
      for (let good of this.goods) {
        for (let food of good.foods)
          if (food.count) {
            foods.push(food);
          }
      }
      // console.log(foods);
      return foods;
    },
  },
  methods: {
    select(e) {
      // this.currentIndex=e
      let foodList = this.$refs.foodList;
      this.foodsScorll.scrollToElement(foodList[e], 300); //内容加时间
    },
    _initScroll() {
      //获取Dom结构
      this.foodsScorll = new BScroll(this.$refs.foodWrapper, {
        click: true,
        probeType: 3,
      });
      this.foodsScorll.on("scroll", (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y));
      });
    },
    _initMenuScroll() {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true,
        probeType: 3,
      });
    },
    _calculateHeight() {
      let foodList = this.$refs.foodList;
      let height = 0;
      this.listHeight.push(height);
      for (let i = 0; i < foodList.length; i++) {
        let item = foodList[i];
        height += item.clientHeight;
        this.listHeight.push(height);
      }
      console.log(this.listHeight);
    },
  },
  props: {
      seller: {
        type: Object,
        default(){
          return {}
        }
      }
  }
};
</script >

<style lang="less">
.goods {
  display: flex;
  position: absolute;
  top: 177px;
  bottom: 46px;
  width: 100%;
  overflow: hidden;
  .menu-wrapper {
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7;
    .menu-item {
      display: flex;
      width: 60px;
      height: 54px;
      padding: 0 10px;
      text-align: center;
      align-items: center;
      line-height: 14px;
      font-size: 12px;
    }
    .menu-item.current {
      background: #fff;
      font-weight: 700;
    }
  }
  .foods-wrapper {
    flex: 1;
    .title {
      padding-left: 14px;
      height: 26px;
      line-height: 26px;
      border-left: 2px solid #d9dde1;
      font-size: 12px;
      color: rgb(147, 153, 159);
      background: #f3f5f7;
    }
    .food-item {
      display: flex;
      margin: 18px;
      padding-bottom: 18px;
      position: relative;
      .icon {
        flex: 0 0 57px;
        margin-right: 10px;
        img {
          width: 100%;
        }
      }
      .content {
        flex: 1;
        .name {
          margin: 2px 0 8px 0;
          height: 14px;
          line-height: 14px;
          font-size: 14px;
          color: rgb(7, 17, 27);
        }
        .desc,
        .extra {
          line-height: 10px;
          font-size: 10px;
          color: rgb(147, 153, 159);
        }
        .desc {
          line-height: 12px;
          margin-bottom: 8px;
        }
        .extra {
          .count {
            margin-right: 12px;
          }
        }
        .price {
          font-weight: 700;
          line-height: 24px;
          .now {
            margin-right: 8px;
            font-size: 14px;
            color: rgb(240, 20, 20);
          }
          .old {
            text-decoration: line-through;
            font-size: 10px;
            color: rgb(147, 153, 159);
          }
        }
        .cartcontrol-wrapper {
          position: absolute;
          right: 0;
          border-top: 12px;
        }
      }
    }
    .food-item:last-child {
      margin-bottom: 0;
    }
  }
}
</style>