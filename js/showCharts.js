$(function(){
      option = {
                    color: ['#3398DB'],
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'直接访问',
                            type:'bar',
                            barWidth: '60%',
                            data:[10, 52, 200, 334, 390, 330, 220]
                        }
    ]
};
option2 = {
                title : {
                    text: '某站点用户访问来源',
                    subtext: '纯属虚构',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                },
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[
                            {value:335, name:'直接访问'},
                            {value:310, name:'邮件营销'},
                            {value:234, name:'联盟广告'},
                            {value:135, name:'视频广告'},
                            {value:1548, name:'搜索引擎'}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
};

option3 = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                },
                series: [
                    {
                        name:'访问来源',
                        type:'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:335, name:'直接访问'},
                            {value:310, name:'邮件营销'},
                            {value:234, name:'联盟广告'},
                            {value:135, name:'视频广告'},
                            {value:1548, name:'搜索引擎'}
                        ]
                    }
                ]
};
 var option4 = {
                       tooltip: {
                           trigger: 'axis',
                           axisPointer: {
                               type: 'cross',
                               crossStyle: {
                                   color: '#999'
                               }
                           }
                       },
                       toolbox: {
                           feature: {
                               dataView: {show: true, readOnly: false},
                               magicType: {show: true, type: ['line', 'bar']},
                               restore: {show: true},
                               saveAsImage: {show: true}
                           }
                       },
                       legend: {
                           data:["表格名称"]
                       },
                       grid: {
                           // y2: 140
                       },
                       xAxis: [
                           {
                               type: 'category',
                               data:['10', '52', '200', '334', '390', '330',' 220'],
                               axisPointer: {
                                   type: 'shadow'
                               },
                               axisLabel:{
                                   interval:0,//横轴信息全部显示
                                   rotate:-30,//-30度角倾斜显示
                               }
                           }
                       ],
                       yAxis: [
                           {
                               type: 'value',
                               name: "单位",
                               min: 0,
                               max: 400,
                               // interval:50,
                               axisLabel: {
                                   formatter: '{value} '
                               }
                           }
                       ],
                       series: [
                           {
                               name:"表格名称",
                               type:'bar',
                               data:[10, 52, 200, 334, 390, 330, 220]
                           }
                       ]
       };


    var myChart = echarts.init(document.getElementById('chart1'));
    myChart.setOption(option);
     var myChart2 = echarts.init(document.getElementById('chart2'));
    myChart2.setOption(option2);    
    var myChart3 = echarts.init(document.getElementById('chart3'));
    myChart3.setOption(option3);
     var myChart4 = echarts.init(document.getElementById('chart4'));
    myChart4.setOption(option4);          
})