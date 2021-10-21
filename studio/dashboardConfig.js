export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61716a6903ded311dbbd697c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-nsbtvzep',
                  apiId: 'aa12c647-a313-4de2-879b-22dcbe5fa77a'
                },
                {
                  buildHookId: '61716a6a68283d16928e8556',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-eq1wbrn9',
                  apiId: '1125d08e-ee63-4b66-879b-9e96742acc54'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/crickschmelz/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-eq1wbrn9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
