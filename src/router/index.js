import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import FleetGps from '@/components/Map'

// sap
import SapInterfaces from '@/components/sap/Interfaces'
import SapInterfacesDiagram from '@/components/sap/Diagram'

// kpi
import Kpi from '@/components/kpi/Kpi'

// kpi operation
import KpiOperation from '@/components/kpi/operation/KpiOperation'
import KpiOperationVolume from '@/components/kpi/operation/KpiOperationVolume'

// kpi sales
import KpiSales from '@/components/kpi/sales/KpiSales'
import KpiSalesVolume from '@/components/kpi/sales/KpiSalesVolume'

// kpi stock
import KpiStock from '@/components/kpi/stock/KpiStock'
import KpiStockDiagram from '@/components/kpi/stock/Diagram'
import KpiStockMap from '@/components/kpi/stock/Map'

// pr
import Pr from '@/components/pr/PrOperation'
import PrThroughput from '@/components/pr/PrThroughput'
import PrDiagram from '@/components/pr/PrDiagram'

// po
import Po from '@/components/po/PoOperation'
import PoThroughput from '@/components/po/PoThroughput'
import PoDiagram from '@/components/po/PoDiagram'


// po
import So from '@/components/so/SoOperation'
import SoThroughput from '@/components/so/SoThroughput'
import SoDiagram from '@/components/so/SoDiagram'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    { 
      path: '/fleet-gps',
      name: 'fleet-gps',
      component: FleetGps
    },
    { 
      path: '/sap-interfaces',
      name: 'sap-interfaces',
      component: SapInterfaces
    },
    { 
      path: '/sap-interfaces/diagram',
      name: 'sap-interfaces-diagram',
      component: SapInterfacesDiagram
    },

    // kpi
    {
      path: '/kpi',
      name: 'kpi',
      component: Kpi
    },
    {
      path: '/kpi/operation',
      name: 'kpi-operation',
      component: KpiOperation
    },
    {
      path: '/kpi/operation/volume',
      name: 'kpi-operation-volume',
      component: KpiOperationVolume
    },
    {
      path: '/kpi/sales',
      name: 'kpi-sales',
      component: KpiSales
    },
    {
      path: '/kpi/sales/volume',
      name: 'kpi-sales-volume',
      component: KpiSalesVolume
    },
    {
      path: '/kpi/stock',
      name: 'kpi-stock',
      component: KpiStock
    },
    {
      path: '/kpi/stock/diagram',
      name: 'kpi-stock-diagram',
      component: KpiStockDiagram
    },
    {
      path: '/kpi/stock/map',
      name: 'kpi-stock-map',
      component: KpiStockMap
    },

    // pr
    {
      path: '/pr',
      name: 'pr-operation',
      component: Pr
    },
    {
      path: '/pr/:id',
      name: 'pr-operation-content',
      component: PrThroughput
    },
    {
      path: '/pr/:id/diagram',
      name: 'pr-operation-diagram',
      component: PrDiagram
    },

    // po
    {
      path: '/po',
      name: 'po-operation',
      component: Po
    },
    {
      path: '/po/:id',
      name: 'po-operation',
      component: PoThroughput
    },
    {
      path: '/po/:id/diagram',
      name: 'po-operation',
      component: PoDiagram
    },


    // so
    {
      path: '/so',
      name: 'so-operation',
      component: So
    },
    {
      path: '/so/:id',
      name: 'so-operation',
      component: SoThroughput
    },
    {
      path: '/so/:id/diagram',
      name: 'so-operation',
      component: SoDiagram
    },


  ],
  // mode: 'history'
})
