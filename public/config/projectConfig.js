
const config = {
    name: 'oz-yun',
    title: 'oz云平台',
    short_title: '云平台',
    protocol: 'https',
    host: 'yun.ecaicn.com',
    api: 'cjyun-api.ecaicn.com',
    port: 80,
    deploy: '/',
};

const devConfig = {
    name: 'oz-yun',
    title: 'oz云平台',
    short_title: '云平台',
    protocol: 'https',
    host: 'yun.ecaicn.com',
    api: 'test-cjyun-api.ecaicn.com',
    port: 80,
    deploy: '/',
};

module.exports = process.env.NODE_ENV === 'development' ? devConfig : config;
