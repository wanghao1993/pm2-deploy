/*
 * @Author: hao.wang
 * @Date: 2021-06-06 16:56:42
 * @LastEditors: your name
 * @LastEditTime: 2021-06-06 17:07:06
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
      "ssh_options": ["StrictHostKeyChecking=no", "PasswordAuthentication=no"],
      ref  : 'origin/master',
      repo : 'https://github.com/wanghao1993/pm2-deploy.git',
      path : '/www/pm2',
      'pre-deploy-local': '',
      'post-deploy' : 'cnpm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
