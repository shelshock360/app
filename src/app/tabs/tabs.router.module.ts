import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { IntroPageModule } from '../intro/intro.module';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: '../tab2/tab2.module#Tab2PageModule'
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: '../tab3/tab3.module#Tab3PageModule'
          }
        ]
      },

      {
        path: 'tab4',
        children: [
          {
            path: '',
            loadChildren: '../tab4/tab4.module#Tab4PageModule'
          }
        ]
      },


      {
        path: 'intro',
        children: [
          {
            path: '',
            loadChildren: '../intro/intro.module#IntroPageModule'
          }
        ]
      },

    
      {
        path: '',
        redirectTo: '/intro/intro',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/intro/intro',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),IntroPageModule
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
