// JS
var chart = JSC.chart('chartDiv',{
    debug: true,
    type: 'calendar year solid',
    title_label_text: 'Daily Steps 2017',
    data: './resources/stepData17-18.csv',
    calendar: {
      range: ['1/1/2017','12/31/2017' ],
      defaultEdgePoint: {tooltip: '',mouseTracking: false }
    },
    legend_position: 'right',
    defaultBox_boxVisible: false,
    palette: {
      colors: [
        '#f7fcfd',
        '#e0ecf4',
        '#bfd3e6',
        '#9ebcda',
        '#8c96c6',
        '#8c6bb1',
        '#88419d',
        '#810f7c',
        '#4d004b'
      ],
      colorBar_axis_scale_interval: 5000
    },
    defaultPoint_tooltip: '<b>%name</b><br> %zValue Steps',
    toolbar_visible: false
  });