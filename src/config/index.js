// BASE URL
const BASE_URL = process.env.REACT_APP_BASE_URL

// release version
const RELEASE_VERSION = process.env.REACT_APP_RELEASE_VERSION

// AUTH API CONFIG
const AUTH = {
	SIGN_IN: BASE_URL + '/api/auth/signin',
	TOKEN_VERIFY: BASE_URL + '/api/auth/check-token',
}