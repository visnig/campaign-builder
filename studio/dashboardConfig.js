export default {
  widgets: [
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
                  buildHookId: '6051f9d4cae192870dc39e3b',
                  title: 'Sanity Studio',
                  name: 'campaign-builder-studio-yc65tt2m',
                  apiId: '88983b89-bc75-45fd-89a5-ec2cf1098dcc'
                },
                {
                  buildHookId: '6051f9d46bff098705cf4a7c',
                  title: 'Blog Website',
                  name: 'campaign-builder-web',
                  apiId: 'b3837e83-4130-4691-90f2-8409d035cc3a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/visnig/campaign-builder',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://campaign-builder-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
