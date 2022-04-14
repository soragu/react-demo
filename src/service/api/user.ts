// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@/service' or its correspondin... Remove this comment to see the full error message
import service from '@/service'

export function login(data: any) {
	return service({
		url: '/login',
		method: 'post',
		data,
	})
}

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'id' implicitly has an 'any' type.
export function getUser(id) {
	return service({
		url: `/user/${id}`,
		method: 'get',
	})
}
