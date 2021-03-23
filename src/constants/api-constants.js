export const ApiConstants = {
	BASE_URL: process.env.REACT_APP_API_URL,
	ENVIRONMENT: process.env.REACT_APP_ENVIRONMENT,
}

/*
const ApiConstants = {
	agentReleasesURL: '/app-releases/latest',

	billingAccountURL: (orgId: string) => {
		return `/orgs/${orgId}/billing/account`;
	},

	billingCatalogURL: '/billing/catalog',

	billingChangePlanURL: (orgId: string) => {
		return `/orgs/${orgId}/billing/change-plan`;
	},
};
export default ApiConstants;

*/
