export const rules = {
  account: [
    { required: true, message: '账号不能为空', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '请输入5到10个数字或者字母',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{5,}$/,
      message: '请输入5个以上数字或者字母',
      trigger: 'blur'
    }
  ]
}

export const phoneLoginFormRules = {
  phoneNumber: [{ required: true, message: '手机号号不能数为空', trigger: 'blur' }],
  verificationCode: [{ required: true, message: '验证码不能为空', trigger: 'blur' }]
}
