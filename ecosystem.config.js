/*
 * @Author: hao.wang
 * @Date: 2021-06-06 16:56:42
 * @LastEditors: your name
 * @LastEditTime: 2021-06-06 18:19:44
 * @FilePath: /pm2/ecosystem.config.js
 */
module.exports = {
  apps : [{
    script: 'src/main.js',
    watch: '.'
  }],

  deploy : {
    production : {
      user : 'root',
      host : '124.71.181.191',
      port: 22,
      ref  : 'origin/main',
      repo : 'https://github.com/wanghao1993/pm2-deploy.git',
      path : '/www/pm2',
      "pre-setup" : "echo 'commands or local script path to be run on the host before the setup process starts'",
      'pre-deploy-local': '',
      'post-deploy' : 'cnpm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
