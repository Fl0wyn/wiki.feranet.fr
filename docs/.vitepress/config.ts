import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Wiki Feranet",
  titleTemplate: "Wiki Feranet | :title",

  lastUpdated: true,
  cleanUrls: true,

  head: [
    ["meta", { name: "theme-color", content: "#3c8772" }],
    ["link", { rel: "icon", type: "image/x-icon", href: "/logo.svg" }],
  ],

  themeConfig: {
    search: {
      provider: "local",
    },

    nav: [
      { text: "Wiki", link: "/" },
      { text: "Snippets", link: "/snippets/bash" },
    ],

    sidebar: {
      "/": [
        {
          text: "Linux",
          collapsed: false,
          items: [
            { text: "Archives", link: "/linux/archives" },
            { text: "Chroot SFTP", link: "/linux/chrootSFTP" },
            { text: "Conditions", link: "/linux/conditions" },
            { text: "Debian GPG Key", link: "/linux/DebianGpgKey" },
            { text: "Docker", link: "/linux/docker" },
            {
              text: "Iptables & Fail2ban",
              link: "/linux/iptables-fail2ban",
            },
            { text: "Meraki auto reboot", link: "/linux/scheduleMeraki" },
            { text: "Screen", link: "/linux/screen" },
            { text: "Share SAMBA", link: "/linux/samba" },
            { text: "SSH", link: "/linux/ssh" },
            { text: "Text manipulation", link: "/linux/textManipulation" },
            { text: "Vim", link: "/linux/vim" },
            { text: "PM2", link: "/linux/pm2" },
          ],
        },
        {
          text: "Windows",
          collapsed: false,
          items: [
            {
              text: "Bloatware & trackers",
              link: "/windows/bloatware-trackers",
            },
            { text: "Windows commands", link: "/windows/commands" },
            {
              text: "Upgrade to Windows 11",
              link: "/windows/upgrade-windows-11",
            },
            { text: "Key activation", link: "/windows/enable-key" },
          ],
        },
      ],
      "/snippets/": [
        {
          text: "Snippets",
          items: [
            { text: "Bash", link: "/snippets/bash" },
            { text: "JS - Method", link: "/snippets/javascript-method" },
            { text: "JS - Config", link: "/snippets/javascript-config" },
            { text: "Apache2 & Nginx", link: "/snippets/apache2-nginx" },
          ],
        },
      ],
    },

    editLink: {
      pattern: "https://github.com/Fl0wyn/feranet.fr/edit/master/docs/:path",
      text: "Edit this page on GitHub",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/Fl0wyn/feranet.fr" },
    ],

    footer: {
      message: "Released under the Creative Commons Zero v1.0 Universal",
      copyright: `Copyright © ${new Date().getFullYear()} — feranet.fr`,
    },
  },
});
