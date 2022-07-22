// Vue.js requires this (simulates dotenv)
globalThis.process = { env: { NODE_ENV: 'development' } }
// Vue.js requires this (silents console warnings)
globalThis.__VUE_OPTIONS_API__ = false
globalThis.__VUE_PROD_DEVTOOLS__ = false

async function sleep(ms, msg = `[HOST] System initialization in progress - waiting ${ms / 1000} seconds...`) {
  if (msg) console.log(msg)
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function main() {
  await sleep(5000, '[HOST] System initialization started - waiting 5 seconds...')

  console.log('[HOST] Dynamically importing vue exports...')
  const { createApp } = await import('vue')
  console.log('[HOST] Libraries loaded:')
  console.log('[HOST] > createApp =', createApp)
  console.log('')

  await sleep(1000)

  console.log('[HOST] Dynamically importing library1 exports...')
  const { App } = await import('library1')
  console.log('[HOST] Exports loaded:')
  console.log('[HOST] > App =', App)
  console.log('')

  await sleep(1000)

  console.log('[HOST] Creating Vue.js app with App component')
  const app = createApp(App, { name: 'Jane Smith' }).mount('#app')
  console.log('[HOST] app =', app)
  console.log('')

  console.log('[HOST] System initialized.')
}

main()
