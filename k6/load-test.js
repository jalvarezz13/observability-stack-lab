import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 10 },
    { duration: '1m',  target: 50 },
    { duration: '30s', target: 100 },
    { duration: '30s', target: 0 },
  ],
};

const BASE = 'http://wordpress';

export default function () {
  const res = http.get(`${BASE}/`);
  check(res, {
    'status 200': (r) => r.status === 200,
  });
  sleep(Math.random() * 2);
}
