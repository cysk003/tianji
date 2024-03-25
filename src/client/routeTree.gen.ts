/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as WebsiteImport } from './routes/website'
import { Route as TelemetryImport } from './routes/telemetry'
import { Route as RegisterImport } from './routes/register'
import { Route as MonitorImport } from './routes/monitor'
import { Route as LoginImport } from './routes/login'
import { Route as DashboardImport } from './routes/dashboard'
import { Route as IndexImport } from './routes/index'
import { Route as WebsiteAddImport } from './routes/website/add'
import { Route as WebsiteWebsiteIdImport } from './routes/website/$websiteId'
import { Route as TelemetryAddImport } from './routes/telemetry/add'
import { Route as TelemetryTelemetryIdImport } from './routes/telemetry/$telemetryId'
import { Route as MonitorAddImport } from './routes/monitor/add'
import { Route as MonitorMonitorIdImport } from './routes/monitor/$monitorId'

// Create/Update Routes

const WebsiteRoute = WebsiteImport.update({
  path: '/website',
  getParentRoute: () => rootRoute,
} as any)

const TelemetryRoute = TelemetryImport.update({
  path: '/telemetry',
  getParentRoute: () => rootRoute,
} as any)

const RegisterRoute = RegisterImport.update({
  path: '/register',
  getParentRoute: () => rootRoute,
} as any)

const MonitorRoute = MonitorImport.update({
  path: '/monitor',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const DashboardRoute = DashboardImport.update({
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const WebsiteAddRoute = WebsiteAddImport.update({
  path: '/add',
  getParentRoute: () => WebsiteRoute,
} as any)

const WebsiteWebsiteIdRoute = WebsiteWebsiteIdImport.update({
  path: '/$websiteId',
  getParentRoute: () => WebsiteRoute,
} as any)

const TelemetryAddRoute = TelemetryAddImport.update({
  path: '/add',
  getParentRoute: () => TelemetryRoute,
} as any)

const TelemetryTelemetryIdRoute = TelemetryTelemetryIdImport.update({
  path: '/$telemetryId',
  getParentRoute: () => TelemetryRoute,
} as any)

const MonitorAddRoute = MonitorAddImport.update({
  path: '/add',
  getParentRoute: () => MonitorRoute,
} as any)

const MonitorMonitorIdRoute = MonitorMonitorIdImport.update({
  path: '/$monitorId',
  getParentRoute: () => MonitorRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/dashboard': {
      preLoaderRoute: typeof DashboardImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/monitor': {
      preLoaderRoute: typeof MonitorImport
      parentRoute: typeof rootRoute
    }
    '/register': {
      preLoaderRoute: typeof RegisterImport
      parentRoute: typeof rootRoute
    }
    '/telemetry': {
      preLoaderRoute: typeof TelemetryImport
      parentRoute: typeof rootRoute
    }
    '/website': {
      preLoaderRoute: typeof WebsiteImport
      parentRoute: typeof rootRoute
    }
    '/monitor/$monitorId': {
      preLoaderRoute: typeof MonitorMonitorIdImport
      parentRoute: typeof MonitorImport
    }
    '/monitor/add': {
      preLoaderRoute: typeof MonitorAddImport
      parentRoute: typeof MonitorImport
    }
    '/telemetry/$telemetryId': {
      preLoaderRoute: typeof TelemetryTelemetryIdImport
      parentRoute: typeof TelemetryImport
    }
    '/telemetry/add': {
      preLoaderRoute: typeof TelemetryAddImport
      parentRoute: typeof TelemetryImport
    }
    '/website/$websiteId': {
      preLoaderRoute: typeof WebsiteWebsiteIdImport
      parentRoute: typeof WebsiteImport
    }
    '/website/add': {
      preLoaderRoute: typeof WebsiteAddImport
      parentRoute: typeof WebsiteImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  DashboardRoute,
  LoginRoute,
  MonitorRoute.addChildren([MonitorMonitorIdRoute, MonitorAddRoute]),
  RegisterRoute,
  TelemetryRoute.addChildren([TelemetryTelemetryIdRoute, TelemetryAddRoute]),
  WebsiteRoute.addChildren([WebsiteWebsiteIdRoute, WebsiteAddRoute]),
])

/* prettier-ignore-end */
