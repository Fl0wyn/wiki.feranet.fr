//require('dotenv').config();

module.exports = {
    apps: [
        {
            name: 'wiki-feranet',
            //port: process.env.PORT,
            script: './node_modules/nuxt/bin/nuxt.js',
            exec_mode: 'cluster_mode',
            args: 'start'
        }
    ],
    deploy: {
        production: {
            "host": "s_feranet",
            "path": "/var/www/test",
            "ref": "origin/master",
            "repo": "https://github.com/Fl0wyn/wiki.feranet.fr.git",
            "post-deploy": "npm install && npm run build && pm2 startOrRestart ecosystem.config.js --env production"
        }
    }
}