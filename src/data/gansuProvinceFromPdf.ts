export const gansuProvinceFromPdf = {
  provinceCode: 'GS',
  name: '甘肃',
  title: '甘肃',
  kpis: [
    { label: '现货价差(均值)', value: '0.253 元/kWh' },
    { label: '调频上限', value: '15 元/MW' },
    { label: '容量电价', value: '330 元/kW·年（执行2年）' }
  ],
  accordions: [
    {
      key: 'A',
      title: '资源禀赋 & 电网背景',
      type: 'list',
      items: [
        '区位：位于西北电网中心，是西电东送的重要通道、西北电力交换枢纽',
        '结构错配：新能源基地（河西走廊）与负荷中心（河东兰州等地）错配，网架阻塞突出，形成对调频等辅助服务的刚性需求',
        '新能源资源：风能可开发量 5.6 亿 kW；太阳能可开发量 95 亿 kW（资源理论储量全国第4）',
        '规划：到 2025 年新能源装机 8000 万 kW；2030 年突破 1.6 亿 kW',
        '装机概况：截至 2025 年 9 月，全口径装机容量 11612.75 万 kW；风光装机占比约 61%',
        '新能源分布：河西走廊地区（张掖、武威、金昌）优势明显；日照时间长、强度高、戈壁大漠适合大型基地；风力强劲且稳定',
        '负荷与调峰：2024 年全社会用电量 1746.33 亿 kWh；最大用电负荷 2395 万 kW；峰谷差 400–500 万 kW；最大调峰缺口超 1000 万 kW'
      ]
    },
    {
      key: 'B',
      title: '现货电价（1-7月统计）',
      type: 'keyValue',
      items: [
        { label: '平均最低电价', value: '0.099 元/kWh' },
        { label: '平均最高电价', value: '0.352 元/kWh' },
        { label: '其他费用（系统运行费及线损）', value: '0.03 元/kWh' },
        { label: '平均电价差', value: '0.253 元/kWh' },
        { label: '河西走廊平均电价差', value: '0.27 元/kWh' }
      ]
    },
    {
      key: 'C',
      title: '调频（辅助服务）',
      type: 'sections',
      sections: [
        {
          heading: '规则',
          items: ['报价上限：15 元/MW', '最小申报单位：0.1 元/MW']
        },
        {
          heading: '收益公式',
          items: ['调频收益 = 调频里程 × K（上限2）× 中标价格（上限15元/MW）']
        },
        {
          heading: '示例项目（100MW/400MWh）',
          items: [
            '年调频里程：432000 MW',
            'K：1.85',
            '中标价格：15 元/MW',
            '调频收益：1199 万元/年'
          ]
        }
      ]
    },
    {
      key: 'D',
      title: '容量电价',
      type: 'keyValue',
      items: [
        { label: '标准', value: '330 元/kW·年' },
        { label: '执行期限', value: '2 年' },
        { label: '厂用电（用于有效容量计算）', value: '5%' },
        { label: '有效容量（示例）', value: '63.33 MW' },
        { label: '容量电价收益（示例）', value: '2090 万元/年' },
        { label: '两年后预测电价', value: '200 元/kW·年' },
        { label: '两年后预测收益', value: '1267 万元/年' }
      ]
    },
    {
      key: 'E',
      title: '收益 & 财务（100MW/400MWh）',
      type: 'finance',
      table: {
        headers: ['首年(万元)', '每年(万元)', '20年(万元)'],
        rows: [
          { label: '电能量交易', values: ['2495', '2196', '43920'] },
          { label: '调频', values: ['1199', '1075', '21500'] },
          { label: '容量电价', values: ['2090', '1350', '27000'] },
          { label: '总收益', values: ['5784', '4621', '92420'] }
        ]
      },
      metrics: [
        { label: 'IRR', value: '9.279%' },
        { label: '回收期', value: '7.095 年' }
      ]
    }
  ],
  footerNote: '数据来源：《甘肃省独立储能政策分析.pdf》'
};

export default gansuProvinceFromPdf;

if (typeof window !== 'undefined') {
  // 方便在不经过构建工具的情况下直接从浏览器侧载入默认数据
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.gansuProvinceFromPdf = gansuProvinceFromPdf;
}
