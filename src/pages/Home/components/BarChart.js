// 柱状图组件
import * as echarts from "echarts";
import { useEffect, useRef } from "react";

const BarChart = ({ title }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    // 保证dom可用，才进行图表的渲染
    // 1. 获取渲染图表的dom节点
    const chartDom = chartRef.current;

    // 2. 图表初始化生成图表实例对象
    const myChart = echarts.init(chartDom);

    // 3. 准备图表参数
    const option = {
      title: {
        text: title,
      },
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar",
        },
      ],
    };

    // 4. 使用图表参数完成图表的渲染
    option && myChart.setOption(option);
  }, []);
  return <div ref={chartRef} style={{ width: "500px", height: "400px" }}></div>;
};

export default BarChart;
