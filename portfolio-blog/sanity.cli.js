import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  project: {
    basePath: '/studio'
  },
  api: {
    projectId: 's02ox3zo',
    dataset: 'production'
  }
})
