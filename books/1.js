const param = {
  g_unKown: {
    Attributes: {
      alarmnum: 10,
      analysis: false,
      color: '#ff6600',
      id: 8000
    }
  },
  主要缺陷: {
    Attributes: {
      color: '#aa0000',
      enable: true,
      algorithm_id: 1913,
      id: 1300,
      show: '大型缺陷'
    },
    Level_0: {
      Attributes: {
        color: '#bb0000',
        enable: true,
        algorithm_id: 1913,
        id: 1301,
        show: '可见'
      },
      Level_0_1: {
        Attributes: {
          color: '#bb0000',
          enable: true,
          algorithm_id: 1913,
          id: 1301,
          show: '什么'
        }
      }
    },
    Level_1: {
      Attributes: {
        color: '#aa0010',
        enable: true,
        algorithm_id: 1413,
        id: 1302,
        show: '不可见'
      }
    },
    min: {
      show: '最小像素数',
      unit: '个',
      value: 25
    }
  },
  颜色缺陷: {
    Attributes: {
      color: '#aa0010',
      enable: true,
      algorithm_id: 913,
      id: 1200,
      show: '白点'
    },
    Level_0: {
      Attributes: {
        color: '#aa0010',
        enable: true,
        algorithm_id: 1413,
        id: 1201,
        show: '微小白点'
      }
    },
    Level_1: {
      Attributes: {
        color: '#aa0010',
        enable: true,
        algorithm_id: 1413,
        id: 1202,
        show: '小白点'
      }
    },
    Level_2: {
      Attributes: {
        color: '#aa0010',
        enable: true,
        algorithm_id: 1413,
        id: 1203,
        show: '中白点'
      }
    },
    Level_3: {
      Attributes: {
        color: '#aa0010',
        enable: true,
        algorithm_id: 63,
        id: 1204,
        show: '大白点'
      }
    },
    Level_4: {
      Attributes: {
        color: '#aa0010',
        enable: true,
        algorithm_id: 213,
        id: 1205,
        show: '超大白点'
      }
    }
  },
  纹路: {
    Attributes: {
      color: '#aa0010',
      enable: true,
      algorithm_id: 1413,
      id: 1700,
      show: '划痕/划伤'
    },
    Level_0: {
      Attributes: {
        color: '#aa0010',
        enable: true,
        algorithm_id: 23,
        id: 1701,
        show: '条纹'
      },
      Attributfasdfes: {
        Attributes: {
          color: '#aa0010',
          enable: true,
          algorithm_id: 23,
          id: 1703,
          show: '条纹11'
        }
      }
    },
    ashow: {
      max: 50,
      show: '横条纹灵敏度',
      unit: '等级',
      value: 10
    },
    minLineHeight: {
      max: 50,
      show: '最小条纹长度',
      unit: '等级',
      value: 10
    },
    verLineFliterGradient: {
      max: 50,
      show: '竖条纹灵敏度',
      unit: '等级',
      value: 0
    }
  },
  webconfig: {
    Attributes: {
      host: '192.168.1.1',
      port: '8008'
    }
  }
}

let res = []
function format (param, show) {
  if (param['Attributes'] && param['Attributes']['id'] && param['Attributes']['id'] < 8000) {
    res.push({
      name: `flaw_type_${param['Attributes']['id']}`,
      nickName: show ? `${show}_${param['Attributes'].show}` : param['Attributes'].show
    })
  }
  let temp = Object.keys(param)
  console.log(temp);
  if (param['Attributes']) {
    let index = temp.indexOf('1')
    // console.log(index);
    temp.splice(index, 1)
  }
  temp.forEach(item => {
    Object.prototype.toString.call(param[item]) === '[object Object]' &&
      format(param[item], param['Attributes'] ? (param['Attributes'].show ?
        param['Attributes'].show : '') : '')
  })
}

format(param, '')
console.log(res)
