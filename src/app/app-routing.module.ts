import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    },
    {
        path: 'list',
        children: [
            {
                path: '',
                loadChildren: () => import('./admin/list/list.module').then(m => m.ListPageModule)
            },
            {
                path: ':id',
                loadChildren: () => import('./admin/detail/detail.module').then(m => m.DetailPageModule)
            }
        ]
    },
    {
        path: 'charityList',
        children: [
            {
                path: '',
                loadChildren: () => import('./donner/charity-list/charity-list.module').then(m => m.CharityListPageModule)
            },
            {
                path: ':id',
                loadChildren: () => import('./donner/donate-fund/donate-fund.module').then(m => m.DonateFundPageModule)
            }
        ]
    },
    {
        path: 'addUser',
        loadChildren: () => import('./admin/addUser/addUser.module').then(m => m.AddUserPageModule)
    },
    {
        path: 'setting',
        loadChildren: () => import('./setting/setting.module').then(m => m.SettingPageModule)
    },
    {
        path: 'update',
        children: [
            {
                path: '',
                loadChildren: './admin/update/update.module#UpdatePageModule'
            },
            {
                path: ':id',
                loadChildren: './admin/update/update.module#UpdatePageModule'
            }
        ]
    },
    {
        path: 'charity-list',
        loadChildren: './donner/charity-list/charity-list.module#CharityListPageModule'
    },
    {
        path: 'donate-fund',
        loadChildren: './donner/donate-fund/donate-fund.module#DonateFundPageModule'
    },
    {
        path: 'donate-food',
        loadChildren: './donner/donate-food/donate-food.module#DonateFoodPageModule'
    },
    {
        path: 'login',
        loadChildren: './authentication/login/login.module#LoginPageModule'
    },
    {
        path: 'register',
        loadChildren: './authentication/register/register.module#RegisterPageModule'
    },
    // tslint:disable-next-line:max-line-length
    {
        path: 'register-charity-house',
        children: [
            {
                path: '',
                loadChildren: './authentication/register-charity-house/register-charity-house.module#RegisterCharityHousePageModule'
            },
            {
                path: ':id',
                loadChildren: './authentication/address/address.module#AddressPageModule'
            }
        ]
    },
    {
        path: 'register-donner',
        loadChildren: './authentication/register-donner/register-donner.module#RegisterDonnerPageModule'
    },
    {
        path: 'address',
        loadChildren: './authentication/address/address.module#AddressPageModule'
    },
    {
        path: 'donner-list',
        loadChildren: './charityHouse/donner-list/donner-list.module#DonnerListPageModule'
    },
    {
        path: 'feedback',
        loadChildren: './charityHouse/feedback/feedback.module#FeedbackPageModule'
    },  { path: 'chat', loadChildren: './chat/chat.module#ChatPageModule' }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
