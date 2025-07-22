// src/lib/api.ts

export const Api = {
	baseUrl: 'https://affiliateapi.dcash.africa',

	// User Authentication
	sendApplication: 'auth/signup',
	login: 'auth/login',
	resetPassword: 'auth/reset/request',
	validateToken: 'auth/validate/token',

	// Affiliate information
	getAffiliate: 'affiliate', // pass the username of the affiliate
	refreshAffiliateDetails: 'affiliate/refresh', // refresh the affiliate details
	getAffiliateProfilePicture: 'auth/profile', // get the affiliate profile picture
	affiliateStatHistory: 'stat-history', // get the affiliate stat history add /email to the end of the url to get the stat history of the affiliate
	getAffiliateTransactions: 'affiliate/transactions', // get the affiliate transactions
	affiliateWithdrawal: 'affiliate/withdrawal', // make a withdrawal request
	createPassword: 'auth/set/password',
};

export async function getApplicationByToken(headers: HeadersInit) {
	try {
		const response = await fetch(`${Api.baseUrl}/application`, {
			method: 'GET',
			credentials: 'include',
			headers: headers
		});

		if (!response.ok) {
			throw new Error('Failed to fetch application');
		}

		return await response.json();
	} catch (error) {
		console.error('Error fetching application:', error);
		throw error;
	}
}

