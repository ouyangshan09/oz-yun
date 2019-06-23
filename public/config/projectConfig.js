
const config = {
    name: 'oz-yun',
    title: 'oz云平台',
    short_title: '云平台',
    protocol: 'https',
    host: 'yun.ozz.com',
    api: 'yun-api.ozz.com',
    port: 80,
    deploy: '/',
};

const devConfig = {
    name: 'oz-yun',
    title: 'oz云平台',
    short_title: '云平台',
    protocol: 'https',
    host: 'yun.ozz.com',
    api: 'dev-yun-api.ozz.com',
    port: 80,
    deploy: '/',
};

module.exports = process.env.NODE_ENV === 'development' ? devConfig : config;
