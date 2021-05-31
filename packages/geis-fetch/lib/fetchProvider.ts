import { createProtocol } from '@geislabs/protocol'
import { header, body } from './config'
import { FetchFn } from './fetchConfig'
import { FetchProtocolFn } from './fetchTypes'
import { createJson } from './json/jsonFacade'
import { nodeFetch } from './node/nodeFacade'

/**
 * Create fetch API
 * @param adapter
 * @returns
 */
export const config = (adapter: FetchFn = nodeFetch): FetchProtocolFn =>
    Object.assign(
        createProtocol({
            json: createJson(adapter),
        }),
        {
            header,
            body,
        }
    )

/**
 * Fetch resources
 */
export const fetch: FetchProtocolFn = config(nodeFetch)
