const rules = {
  taskModelName: [{ required: true, message: '请输入模版名称', trigger: 'blur' },
    { min: 0, max: 50, message: '长度在 1 到 50 个字符', trigger: 'blur' }]

  //   nodeName: [{ type: 'array', required: true, message: '请至少选择一个作业节点', trigger: 'change' }],

  //   craftIds: [{ type: 'array', required: true, message: '请至少选择一个工种', trigger: 'change' }],

  //   nodeModelLabel: [{ type: 'array', required: true, message: '请至少选择一个标签', trigger: 'change' }],

  //   workManualIds: [{ type: 'array', required: true, message: '请至少选择一个标签', trigger: 'change' }],

  //   workHour: [{ required: true, message: '请输入额定工时', trigger: 'blur' }],

  //   price: [{ required: true, message: '请输入单价', trigger: 'blur' }]

}

export {
  rules
}

