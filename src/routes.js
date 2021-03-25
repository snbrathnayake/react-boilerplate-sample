import { ROUTES } from 'constants/route-constants';
import { withPermissionUserCheck } from 'utils/Permissions';
import HomeLayout from "containers/HomeLayout/Home";
import DashboardLyaout from 'containers/DashboardLayout/Dashboard';
/* components */
import RouteNotFound from 'components/RouteNotFound'; // IMPORTANT!! {component: RouteNotFound} most be included in every sub-routes array



const routes = [
    { path: ROUTES.HOME, component: HomeLayout, exact: true },
    { path: ROUTES.LOGIN, component: HomeLayout, exact: true },
    { path: ROUTES.DASHBOADRD, component: withPermissionUserCheck(DashboardLyaout) },
    { component: RouteNotFound },

];


export default routes;