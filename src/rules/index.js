const goodsRules = {
  commodityName: [
    { required: true, message: '请输入商品名称', trigger: 'blur' },
    { max: 16, message: '不得超过 16 个字符', trigger: 'blur' }
  ],
  price: [
    { required: true, message: '请输入价格', trigger: 'blur' },
    { pattern: /^[+]{0,1}(\d+)$/, message: '请输入数字' }
  ],
  stock: [
    { required: true, message: '请输入价格', trigger: 'blur' },
    { pattern: /^[+]{0,1}(\d+)$/, message: '请输入数字' }
  ],
  introduction: [{ required: true, message: '请选择商品介绍', trigger: 'blur' }],
  careNote: [{ required: true, message: '请选择注意事项', trigger: 'blur' }],
  exchangeNote: [{ required: true, message: '请选择兑换流程', trigger: 'blur' }],
  type: [{ required: true, message: '请选择商品类型', trigger: 'change' }]
}
export { goodsRules }
