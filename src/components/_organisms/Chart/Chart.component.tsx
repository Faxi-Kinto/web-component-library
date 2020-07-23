import React from 'react';
import ReactApexChart from 'react-apexcharts';
import moment from 'moment';

export type ChartSeries = {
  name: string;
  data: (number | any)[];
};

export type TitleStyle = {
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
  color?: string;
};

export type ChartProps = {
  series: ChartSeries[];
  chartHeight: number | string;
  colors: string[]; // line colors
  gradientToColors: string[];
  title: string;
  chartType: 'line'; // limit types here if more types available
  strokeWidths: number[];
  xAxisCssClass?: string;
  yAxisCssClass?: string;
  titleStyle?: TitleStyle;
  xAxisTickCount?: number;
  xAxisMinMiliseconds: number;
  xAxisMaxMiliseconds: number;
  markerStrokeColors: string[];
};

const Chart: React.FC<ChartProps> = (props: ChartProps): JSX.Element => {
  const {
    title,
    chartHeight,
    chartType,
    series,
    colors,
    strokeWidths,
    gradientToColors,
    xAxisCssClass = '',
    yAxisCssClass = '',
    titleStyle = {},
    xAxisTickCount = 2,
    xAxisMinMiliseconds,
    xAxisMaxMiliseconds,
    markerStrokeColors,
  } = props;

  const state = {
    options: {
      title: {
        text: title,
        align: 'left',
        style: titleStyle,
      },
      chart: {
        height: chartHeight,
        type: chartType,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      colors,
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          gradientToColors,
          stops: [20, 100, 100, 100],
        },
      },
      grid: {
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
        borderColor: '#C6CDCF',
        strokeDashArray: 1,
      },
      markers: {
        size: 3,
        colors: ['white'],
        strokeColors: markerStrokeColors,
        strokeWidth: 2,
        hover: {
          size: 4,
        },
      },
      series,
      stroke: {
        width: strokeWidths,
        curve: 'smooth',
      },
      yaxis: {
        labels: {
          offsetX: 0,
          formatter: (num: number) => {
            return num.toFixed(0);
          },
          style: {
            cssClass: yAxisCssClass,
          },
        },
        axisBorder: {
          show: true,
          color: '#C6CDCF',
          width: 1,
        },
      },
      xaxis: {
        type: 'datetime',
        tickAmount: xAxisTickCount,
        min: xAxisMinMiliseconds,
        max: xAxisMaxMiliseconds,
        labels: {
          rotateAlways: true,
          formatter: (_: any, timestamp: string | number | Date) => {
            return moment(new Date(timestamp)).format('DD MMM');
          },
          style: {
            cssClass: xAxisCssClass,
          },
        },
        axisBorder: {
          show: true,
          color: '#C6CDCF',
          height: 1,
        },
        tooltip: {
          enabled: false,
        },
      },
      legend: {
        show: true,
        markers: {
          width: 35,
          height: 2,
          radius: 10,
        },
      },
    },
  };

  return (
    <ReactApexChart options={state.options} series={state.options.series} />
  );
};

export default Chart;
