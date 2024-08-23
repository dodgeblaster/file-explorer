import { invokeConversation } from './back_bedrock.mjs'
import s from './back_server.mjs'

import {listFiles, openTextFileInDefaultEditor} from './back_list.mjs'

const server = s()

server.front('./static/')

server.api('/list', async (event) => {
   const result = await listFiles(event.path)
   return {
      statusCode: 200,
      body: JSON.stringify({
         result: result
      })
   }
})

server.api('/open', async (event) => {
   const result = await openTextFileInDefaultEditor(event.path)
   return {
      statusCode: 200,
      body: JSON.stringify({
         result: result
      })
   }
})

server.start()