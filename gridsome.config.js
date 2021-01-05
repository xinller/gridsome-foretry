// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'NWA',
    plugins: [{
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'ProjectsPost',
                path: './projects/**/*.md',
            }
        },

        {
            use: '@gridsome/source-strapi',
            options: {
                apiURL: process.env.GRIDSOME_API_URL,
                queryLimit: 1000, // Defaults to 100
                contentTypes: ['project', 'categories', 'Journal'],
                //   singleTypes: ['impressum'],
                // Possibility to login with a Strapi user,
                // when content types are not publicly available (optional).
                //   loginData: {
                //     identifier: '',
                //     password: ''
                //   }
            }
        }
    ],
    templates: {
        StrapiProject: [{
            path: '/project/:id',
            component: './src/templates/ProjectPost.vue'
        }],
        StrapiJournal: [{
            path: '/journalDetail/:id',
            component: './src/templates/JournalPost.vue'
        }]
    }
}