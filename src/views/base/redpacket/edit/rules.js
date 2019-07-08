const rules = {
  ruleName: [{ required: true, message: '请输入红包名称', trigger: 'blur' }],
  ruleTypeId: [{ required: true, message: '请选择红包类型', trigger: 'change' }],
  amount: [{ required: true, message: '请输入金额', trigger: 'blur' }]
}

export {
  rules
}
