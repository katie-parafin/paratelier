/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SuccessfulPurchaseImport } from './routes/successfulPurchase'
import { Route as CheckoutImport } from './routes/checkout'
import { Route as CartImport } from './routes/cart'
import { Route as IndexImport } from './routes/index'
import { Route as ItemItemIdImport } from './routes/item.$itemId'

// Create/Update Routes

const SuccessfulPurchaseRoute = SuccessfulPurchaseImport.update({
  id: '/successfulPurchase',
  path: '/successfulPurchase',
  getParentRoute: () => rootRoute,
} as any)

const CheckoutRoute = CheckoutImport.update({
  id: '/checkout',
  path: '/checkout',
  getParentRoute: () => rootRoute,
} as any)

const CartRoute = CartImport.update({
  id: '/cart',
  path: '/cart',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ItemItemIdRoute = ItemItemIdImport.update({
  id: '/item/$itemId',
  path: '/item/$itemId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/cart': {
      id: '/cart'
      path: '/cart'
      fullPath: '/cart'
      preLoaderRoute: typeof CartImport
      parentRoute: typeof rootRoute
    }
    '/checkout': {
      id: '/checkout'
      path: '/checkout'
      fullPath: '/checkout'
      preLoaderRoute: typeof CheckoutImport
      parentRoute: typeof rootRoute
    }
    '/successfulPurchase': {
      id: '/successfulPurchase'
      path: '/successfulPurchase'
      fullPath: '/successfulPurchase'
      preLoaderRoute: typeof SuccessfulPurchaseImport
      parentRoute: typeof rootRoute
    }
    '/item/$itemId': {
      id: '/item/$itemId'
      path: '/item/$itemId'
      fullPath: '/item/$itemId'
      preLoaderRoute: typeof ItemItemIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/cart': typeof CartRoute
  '/checkout': typeof CheckoutRoute
  '/successfulPurchase': typeof SuccessfulPurchaseRoute
  '/item/$itemId': typeof ItemItemIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/cart': typeof CartRoute
  '/checkout': typeof CheckoutRoute
  '/successfulPurchase': typeof SuccessfulPurchaseRoute
  '/item/$itemId': typeof ItemItemIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/cart': typeof CartRoute
  '/checkout': typeof CheckoutRoute
  '/successfulPurchase': typeof SuccessfulPurchaseRoute
  '/item/$itemId': typeof ItemItemIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/cart'
    | '/checkout'
    | '/successfulPurchase'
    | '/item/$itemId'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/cart' | '/checkout' | '/successfulPurchase' | '/item/$itemId'
  id:
    | '__root__'
    | '/'
    | '/cart'
    | '/checkout'
    | '/successfulPurchase'
    | '/item/$itemId'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  CartRoute: typeof CartRoute
  CheckoutRoute: typeof CheckoutRoute
  SuccessfulPurchaseRoute: typeof SuccessfulPurchaseRoute
  ItemItemIdRoute: typeof ItemItemIdRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  CartRoute: CartRoute,
  CheckoutRoute: CheckoutRoute,
  SuccessfulPurchaseRoute: SuccessfulPurchaseRoute,
  ItemItemIdRoute: ItemItemIdRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/cart",
        "/checkout",
        "/successfulPurchase",
        "/item/$itemId"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/cart": {
      "filePath": "cart.tsx"
    },
    "/checkout": {
      "filePath": "checkout.tsx"
    },
    "/successfulPurchase": {
      "filePath": "successfulPurchase.tsx"
    },
    "/item/$itemId": {
      "filePath": "item.$itemId.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
