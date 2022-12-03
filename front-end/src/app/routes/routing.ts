import { ProEliteComponent } from "../components/pro-elite/pro-elite.component"
import {
    RouterModule,Routes
} from '@angular/router'

const app_routes:Routes=[
    {path:'administrador', component:ProEliteComponent},
    {path:'**',pathMatch:'full', redirectTo:''},

]

export const AppRouting=RouterModule.forRoot(app_routes);