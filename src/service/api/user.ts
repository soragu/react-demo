import service from '@/service'

export function login(data: any) {
	return service({
		url: '/login',
		method: 'post',
		data,
	})
}

export function getUser(id: string) {
	return service({
		url: `/user/${id}`,
		method: 'get',
	})
}
