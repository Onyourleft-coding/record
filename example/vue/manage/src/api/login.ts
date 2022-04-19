import request from '@/request';
import { stringify } from 'qs';

export function manageLogin(data) {
  return request({
    url: '/users',
    method: 'post',
    headers: { 'Content-type': 'application/x-www-form-urlencoded' },
    data: stringify(data),
  });
}
