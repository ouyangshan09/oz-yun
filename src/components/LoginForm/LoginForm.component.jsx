import './LoginForm.scss';
import React from 'react';
import {
    Form,
    Input,
    Button,
    Checkbox,
    Icon,
} from 'antd';

/**
 * @param {object} props
 * @param {object} props.history
 * @param {object} props.location
 * @param {object} props.match
 * @param {object} props.form
*/
export const LoginFrom = props => {
    const { getFieldDecorator, validateFields } = props.form;

    const handleSubmit = e => {
        e.preventDefault();
        validateFields((err, values) => {
            console.log('登录表单提交:', values);
            // TODO 1. 登录请求 2.保存用户信息 3.跳转
        });
    }

    return (
        <div styleName='LoginFrom' className='LoginFrom'>
            <Form onSubmit={handleSubmit} className='login-form'>
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [
                            { required: true, message: '请输入用户名' },
                        ],
                        initialValue: undefined
                    })(
                        <Input
                          prefix={<Icon type='user' style={{ color: 'rgba(0, 0, 0, 0.25)' }} />}
                          placeholder='Username'
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('passowrd', {
                        rules: [
                            { required: true, message: '请输入密码' },
                        ],
                        initialValue: undefined,
                    })(
                        <Input
                          prefix={<Icon type='lock' style={{ color: 'rgba(0, 0, 0, 0.25)' }} />}
                          type='password'
                          placeholder='Password'
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true
                    })(
                        <Checkbox>记住我</Checkbox>
                    )}
                    <span className='login-form-password'>忘记密码</span>
                    <Button 
                      type='primary'
                      htmlType='sumbit'
                      className='login-form-button'
                    >
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}



export default Form.create()(LoginFrom);
