import url from 'url';
import projectConfig from '../../public/config/projectConfig';

export const getApi = (path, query = {}) => {
    return url.format({
        protocol: projectConfig.protocol,
        hostname: projectConfig.api,
        port: projectConfig.port,
        query: query
    });
}

export const getHost = () => {
    return url.format({
        protocol: projectConfig.protocol,
        hostname: projectConfig.host,
        port: projectConfig.port,
    });
}

export const getSiteURL = () => {
    return getHost() + projectConfig.deploy;
}
